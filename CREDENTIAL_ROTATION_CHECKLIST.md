# CREDENTIAL ROTATION CHECKLIST
**Date:** May 31, 2025  
**Status:** 🚨 IMMEDIATE ACTION REQUIRED

## EXPOSED CREDENTIALS REQUIRING ROTATION

### 🔑 API KEYS & TOKENS

#### Google Services
- [ ] **Google API Key**: `google_api_key` 
- [ ] **Google Client ID**: `google_client_id`
- [ ] **Google Client Secret**: `google_client_secret`
- **Action**: Go to [Google Cloud Console](https://console.cloud.google.com) → Credentials → Delete old keys → Create new

#### Dropbox
- [ ] **Dropbox Access Token**: `dropbox_access_token`
- **Action**: Go to [Dropbox App Console](https://www.dropbox.com/developers/apps) → Regenerate token

#### Spotify
- [ ] **Client ID**: `spotify_client_id`
- [ ] **Client Secret**: `spotify_client_secret`  
- **Action**: Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) → Reset secrets

### 🗄️ DATABASE CREDENTIALS

#### MariaDB/MySQL
- [ ] **Database Password**: `mariadb_password`
- [ ] **Database User**: Check if default 'root' or custom user
- **Action**: 
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'NEW_SECURE_PASSWORD';
FLUSH PRIVILEGES;
```

### 🌐 NETWORK CREDENTIALS

#### WiFi Networks
- [ ] **WiFi Password**: `wifi_password`
- **Action**: Change router admin password and WiFi network password

#### FTP Server
- [ ] **FTP Password**: `ftp_password`
- [ ] **FTP Username**: Verify username
- **Action**: Change FTP server user passwords

### 📹 IoT DEVICE CREDENTIALS

#### IP Cameras
- [ ] **Camera Password**: `camera_password`
- [ ] **Camera Username**: Check for default usernames
- **Action**: Access camera web interface → Change admin password

### 🏠 HOME ASSISTANT SPECIFIC

#### MQTT (if used)
- [ ] **MQTT Password**: Check for MQTT broker credentials
- **Action**: Update MQTT broker user passwords

#### Integration Tokens
- [ ] Review all integration tokens in Home Assistant
- **Action**: Regenerate tokens where possible

---

## 🛠️ ROTATION PROCEDURE

### Step 1: Document Current State
```bash
# Create backup of current secrets (for reference only)
cp secrets.yaml secrets_backup_$(date +%Y%m%d).yaml
```

### Step 2: Generate New Credentials
Use strong password generator for all new credentials:
- Minimum 16 characters
- Mix of uppercase, lowercase, numbers, symbols
- Unique for each service

### Step 3: Update Services
For each service above:
1. Log into service admin panel
2. Revoke/delete old credentials  
3. Generate new credentials
4. Test new credentials before updating configs

### Step 4: Update Configuration Files
```yaml
# Example updated secrets.yaml structure
# Use environment variables or encrypted vault instead of plaintext

# Database
mariadb_password: !env_var MARIADB_PASSWORD

# APIs  
google_api_key: !env_var GOOGLE_API_KEY
dropbox_access_token: !env_var DROPBOX_TOKEN
spotify_client_secret: !env_var SPOTIFY_SECRET

# Network
wifi_password: !env_var WIFI_PASSWORD
ftp_password: !env_var FTP_PASSWORD

# IoT
camera_password: !env_var CAMERA_PASSWORD
```

### Step 5: Implement Secure Storage
Instead of plaintext secrets.yaml:

1. **Use Home Assistant's built-in secrets management**
2. **Environment variables**
3. **HashiCorp Vault integration**
4. **Encrypted configuration files**

---

## ⚠️ CRITICAL REMINDERS

### Before Rotation
- [ ] Document all services using each credential
- [ ] Ensure you have alternative access methods
- [ ] Notify team members of planned changes

### During Rotation  
- [ ] Test each new credential before deploying
- [ ] Update all applications using the credential
- [ ] Monitor for authentication failures

### After Rotation
- [ ] Verify all services are working
- [ ] Monitor logs for authentication issues
- [ ] Document new credential storage locations
- [ ] Schedule next rotation cycle

---

## 🔒 SECURE CREDENTIAL MANAGEMENT GOING FORWARD

### Best Practices
1. **Never store credentials in plaintext**
2. **Use environment variables or secure vaults**
3. **Rotate credentials regularly (90 days)**
4. **Use unique credentials for each service**
5. **Enable 2FA where possible**
6. **Monitor for credential exposure**

### Tools for Secure Storage
- **Home Assistant Secrets**: Built-in secrets management
- **Docker Secrets**: For containerized deployments  
- **HashiCorp Vault**: Enterprise secret management
- **AWS Secrets Manager**: Cloud-based secret storage
- **Azure Key Vault**: Microsoft's secret management

### Environment Variable Setup
```bash
# Add to .bashrc or .profile
export MARIADB_PASSWORD="your_new_secure_password"
export GOOGLE_API_KEY="your_new_api_key"
export DROPBOX_TOKEN="your_new_token"
# etc...
```

---

## 📊 ROTATION STATUS TRACKING

| Service | Status | New Credential | Date Updated | Next Rotation |
|---------|--------|---------------|--------------|---------------|
| Google API | ❌ Pending | | | 90 days |
| Dropbox | ❌ Pending | | | 90 days |
| Spotify | ❌ Pending | | | 90 days |
| MariaDB | ❌ Pending | | | 60 days |
| WiFi | ❌ Pending | | | 180 days |
| FTP | ❌ Pending | | | 60 days |
| Cameras | ❌ Pending | | | 90 days |

---

## 🚨 POST-ROTATION VERIFICATION

### Test Checklist
- [ ] Home Assistant starts without errors
- [ ] All integrations connect successfully
- [ ] Database connections working
- [ ] API calls succeed
- [ ] IoT devices respond
- [ ] No authentication errors in logs

### Monitoring Setup
- [ ] Enable failed login monitoring
- [ ] Set up alerts for authentication failures
- [ ] Monitor credential usage patterns
- [ ] Regular security audits scheduled

---

**REMEMBER**: This credential exposure is part of an active security breach. Assume all exposed credentials have been compromised and used by attackers. Change them ALL immediately.
