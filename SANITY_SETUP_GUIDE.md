# Sanity Studio Setup Guide

## 1. Toegang tot Sanity Studio

Na deployment kun je Sanity Studio bereiken via:
- Lokaal: http://localhost:3000/studio
- Live: https://nextsite.workflo.it/studio

## 2. Eerste keer inloggen

1. Ga naar `/studio`
2. Log in met je Sanity account
3. Als je nog geen project hebt, maak er een aan op https://sanity.io

## 3. Environment Variables

Zorg dat deze environment variables zijn ingesteld:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=jouw-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 4. Content Types (Schemas)

### Website Instellingen (Site Settings)
- **Enkelvoudig document** voor algemene website configuratie
- Bevat: Footer tekst, contact info, social links, statistieken, CTA sectie

### Partners
- Logo's en namen van partner bedrijven
- Volgorde instelbaar
- Featured optie voor homepage

### Klanten (Clients)
- Bedrijven waarvoor je hebt gewerkt
- Per branche categoriseerbaar
- Featured optie voor homepage weergave

### Testimonials
- Reviews van klanten
- Met rating, naam, functie, bedrijf
- Featured optie voor homepage

### Services
- IT diensten die je aanbiedt
- Met beschrijving, icoon, features

## 5. Content Invullen

### Stap 1: Website Instellingen
1. Ga naar "Website Instellingen" in Sanity Studio
2. Vul in:
   - Footer tekst (Nederlandse versie)
   - Contact informatie
   - Social media links
   - Statistieken (bijv. "35% kostenbesparing")
   - CTA sectie content

### Stap 2: Partners toevoegen
1. Klik op "Partners" → "Create new"
2. Voeg toe: Microsoft, Apple, Dell, HP, Office365, Cisco, Sophos, Ubiquiti, SentinelOne, Fortinet
3. Upload logo's indien beschikbaar
4. Stel volgorde in met "Order" veld

### Stap 3: Testimonials
1. Klik op "Testimonials" → "Create new"
2. Voeg de 3 reviews toe:
   - Esther van der Plas - Doctor Feelgood
   - Thijs Muller - Havas Media  
   - Patrick Beijl - Winix
3. Zet "Featured" aan voor homepage weergave

### Stap 4: Klanten
1. Klik op "Klanten" → "Create new"
2. Voeg klanten toe uit "worked for" lijst
3. Upload logo's indien beschikbaar

## 6. Website Updaten voor Sanity Data

Om de website Sanity data te laten gebruiken:

1. **Optie A: Server Components gebruiken (aanbevolen)**
   - Vervang client components met server components die data fetchen
   - Zie `TestimonialsSectionServer.tsx` als voorbeeld

2. **Optie B: API Routes maken**
   - Maak API endpoints die Sanity data ophalen
   - Fetch deze in client components

## 7. Deployment Checklist

- [ ] Environment variables zijn ingesteld op Vercel
- [ ] Sanity project is aangemaakt
- [ ] CORS is geconfigureerd in Sanity voor je domein
- [ ] Content is ingevoerd in Sanity Studio
- [ ] Components zijn geüpdatet om Sanity data te gebruiken

## 8. Handige GROQ Queries

Test queries in Vision plugin (http://localhost:3000/studio/vision):

```groq
// Alle testimonials
*[_type == "testimonial"]

// Alleen featured partners
*[_type == "partner" && featured == true]

// Website instellingen
*[_type == "siteSettings"][0]
```

## Troubleshooting

**"Project not found" error:**
- Check NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
- Zorg dat het project bestaat op sanity.io

**Geen data zichtbaar:**
- Check of content is gepubliceerd (niet alleen draft)
- Verify CORS settings in Sanity dashboard
- Check browser console voor errors