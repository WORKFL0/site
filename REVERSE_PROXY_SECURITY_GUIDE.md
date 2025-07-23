# 🌐 REVERSE PROXY SECURITY CONFIGURATION
**For Home Assistant behind Reverse Proxy**

## 📋 CURRENT SETUP ANALYSIS
- ✅ Home Assistant runs on server with secrets management
- ✅ Reverse proxy handles SSL/HTTPS termination
- ✅ Local development copy without sensitive data

## 🔧 REVERSE PROXY RECOMMENDATIONS

### 1. Nginx Configuration (Example)
```nginx
server {
    listen 443 ssl http2;
    server_name homeassistant.yourdomain.com;
    
    # SSL Configuration
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' wss:";
    
    # Rate Limiting
    limit_req_zone $binary_remote_addr zone=homeassistant:10m rate=10r/m;
    limit_req zone=homeassistant burst=5 nodelay;
    
    # Geolocation blocking (optional)
    # Only allow your country/region
    
    location / {
        proxy_pass http://192.168.178.2:8123;  # Your HA server IP
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Block sensitive paths
    location ~ ^/(api/hassio|api/supervisor) {
        deny all;
        return 403;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name homeassistant.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

### 2. Traefik Configuration (Alternative)
```yaml
# docker-compose.yml or traefik config
http:
  routers:
    homeassistant:
      rule: "Host(`homeassistant.yourdomain.com`)"
      entryPoints:
        - websecure
      service: homeassistant
      tls:
        certResolver: letsencrypt
      middlewares:
        - security-headers
        - rate-limit

  services:
    homeassistant:
      loadBalancer:
        servers:
          - url: "http://192.168.178.2:8123"

  middlewares:
    security-headers:
      headers:
        frameDeny: true
        contentTypeNosniff: true
        browserXssFilter: true
        forceSTSHeader: true
        stsIncludeSubdomains: true
        stsPreload: true
        stsSeconds: 31536000
        
    rate-limit:
      rateLimit:
        burst: 5
        average: 10
```

### 3. Apache Configuration (Alternative)
```apache
<VirtualHost *:443>
    ServerName homeassistant.yourdomain.com
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/fullchain.pem
    SSLCertificateKeyFile /path/to/privkey.pem
    
    # Security Headers
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    
    # Proxy Configuration
    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass / http://192.168.178.2:8123/
    ProxyPassReverse / http://192.168.178.2:8123/
    
    # WebSocket support
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteCond %{HTTP:Connection} upgrade [NC]
    RewriteRule ^/?(.*) "ws://192.168.178.2:8123/$1" [P,L]
</VirtualHost>
```

## 🛡️ HOME ASSISTANT SERVER CONFIGURATION

### Update configuration.yaml (on server)
```yaml
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 127.0.0.1
    - ::1
    - 192.168.178.0/24      # Local network
    - [REVERSE_PROXY_IP]    # Replace with actual proxy IP
  
  # Security settings
  login_attempts_threshold: 5
  ip_ban_enabled: true
  
  # CORS (if needed for external integrations)
  cors_allowed_origins:
    - https://yourdomain.com
    - https://homeassistant.yourdomain.com
```

## 🔒 ADDITIONAL SECURITY MEASURES

### 1. Fail2Ban on Reverse Proxy
```bash
# /etc/fail2ban/jail.local
[homeassistant]
enabled = true
port = 80,443
protocol = tcp
filter = homeassistant
logpath = /var/log/nginx/access.log
maxretry = 3
bantime = 3600
findtime = 600
```

### 2. Cloudflare Integration (Optional)
If using Cloudflare as additional proxy:
```yaml
# In Home Assistant trusted_proxies, add Cloudflare IPs:
trusted_proxies:
  - 127.0.0.1
  - ::1
  - 192.168.178.0/24
  # Cloudflare IPv4 ranges
  - 173.245.48.0/20
  - 103.21.244.0/22
  - 103.22.200.0/22
  - 103.31.4.0/22
  - 141.101.64.0/18
  - 108.162.192.0/18
  - 190.93.240.0/20
  - 188.114.96.0/20
  - 197.234.240.0/22
  - 198.41.128.0/17
  - 162.158.0.0/15
  - 104.16.0.0/13
  - 104.24.0.0/14
  - 172.64.0.0/13
  - 131.0.72.0/22
```

### 3. Network Segmentation
```bash
# Isolate Home Assistant on dedicated VLAN/subnet
# Example iptables rules on router/firewall:

# Allow reverse proxy to Home Assistant
iptables -A FORWARD -s [PROXY_IP] -d [HA_IP] -p tcp --dport 8123 -j ACCEPT

# Allow local network to Home Assistant  
iptables -A FORWARD -s 192.168.178.0/24 -d [HA_IP] -p tcp --dport 8123 -j ACCEPT

# Block direct external access to Home Assistant
iptables -A FORWARD -d [HA_IP] -p tcp --dport 8123 -j DROP
```

## 🎯 MONITORING & ALERTING

### 1. Reverse Proxy Monitoring
- Monitor SSL certificate expiration
- Track failed authentication attempts
- Monitor response times and availability
- Set up alerts for unusual traffic patterns

### 2. Home Assistant Logs
```yaml
# Enhanced logging for security monitoring
logger:
  default: warning
  logs:
    homeassistant.components.http.ban: info
    homeassistant.components.auth: info
    homeassistant.components.http: warning
```

### 3. External Monitoring
```yaml
# Add external uptime monitoring automation
automation:
  - alias: "HA External Access Check"
    trigger:
      platform: time_pattern
      minutes: "/5"
    action:
      - service: shell_command.check_external_access
        # Custom script to verify external accessibility
```

## 📋 DEPLOYMENT CHECKLIST

### Reverse Proxy Security
- [ ] SSL/TLS certificate installed and auto-renewal configured
- [ ] Security headers properly configured
- [ ] Rate limiting enabled
- [ ] Geolocation blocking configured (if desired)
- [ ] Fail2Ban rules active
- [ ] Log monitoring in place

### Home Assistant Server
- [ ] trusted_proxies updated with proxy IP
- [ ] Firewall rules block direct external access
- [ ] Authentication and IP banning enabled
- [ ] Regular security updates scheduled
- [ ] Backup strategy implemented

### Network Security
- [ ] Network segmentation in place
- [ ] Router/firewall rules configured
- [ ] Regular security scans performed
- [ ] Monitoring and alerting active

---

**Remember**: Security is layered. The reverse proxy is your first line of defense, but Home Assistant should still be properly secured as if it were directly exposed.
