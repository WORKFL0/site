# Workflo Copy & Marketing Strategy 2.0 – Probleem-First & Simplicity Focus

> *Doel*: verschuif de aandacht van **Wat we doen** naar **Welk probleem lossen we op** en het *ontspannende gevoel* dat ondernemers krijgen wanneer ze IT uit handen geven aan Workflo.
>
> *Extra eis*: behoud technische diepgang voor ‘nerds’, maar verberg deze laag dankzij **progressive disclosure**. Voeg herkenbare praktijkvoorbeelden uit de eigen blog toe als bewijs.

---

## 1. Kernboodschap‐piramide (Problem-First)

| Niveau | Inhoud | Waar zichtbaar? |
|--------|--------|-----------------|
| 1. Emotie (Hero) | “Even ademhalen – wij fixen je IT-stress.” | Homepage-header, SEA-teksten |
| 2. Belofte | ";99,9 % uptime, 0 weekendstress" | USP-balk & social-ads |
| 3. Bewijs | Case ‘Meraki-migratie lost wifi-storingen op binnen 24 u’ | Blog/Case-study, nieuwsbrief |
| 4. Product | Managed IT, Cloud, Security | Diepe servicenavigatie |
| 5. Specs | SLA-tabellen, netwerkdiagram | Verborgen ‘Techniek’ tabs |

>  **Waarom**: klanten beslissen emotioneel[25][41]; details volgen pas als ze verder klikken (progressive disclosure[43][55]).

---

## 2. Copy-richtlijnen

1. **Probleem → Opluchting**
   * Schrijf steeds eerst de pijn (downtime, hacks) en direct daarna de opluchting (rust, focus).  
2. **Simpel taalgebruik**
   * Vermijd termen als *multi-tenant RMM*; vervang door *we bewaken al je computers tegelijk*.  
3. **Gecontroleerde nerd-diepte**
   * Voeg een ‘Voor de tech-liefhebber’-uitklapper toe na elke sectie voor configuratie-details.  
4. **Storytelling & voorbeelden**
   * Haal live voorbeelden uit eigen nieuws/blog (Cisco Meraki partner[6], Microsoft-prijsstijging workaround[14], 16 mrd gestolen wachtwoorden[18]) als mini-stories.

---

## 3. Voorbeeld Homepage-flow met Progressive Disclosure

```mermaid
flowchart TD
    A[Hero: IT-stress?] --> B(USP-balk: 99,9 % uptime) --> C[CTA: Gratis IT-scan]
    C -->|scroll| D[Voorbeeld story: Meraki lost wifi-storingen op]
    D --> E{Nerd-klap}\nklik voor config
    E -->|open| F[MX-config YAML + SLA]
```

* UX-tip: gebruik accordions of ‘lees meer’-links, zodat 80 % van de bezoekers nooit in specs verdwaalt[47][50].

---

## 4. Blog-& Case-studies

| Probleem | Blogtitel (bestaand) | CTA | Paginalaag |
|-----------|--------------------|-----|------------|
| Wifi valt telkens uit | “Wij zijn nu officiële Cisco Meraki-partner”[6] | *Check mijn wifi* | Story/nerd-tabs |
| Onverwachte licentiekosten | “Zo ontloop je de prijsstijgingen van Microsoft Office”[14] | *Bespaar licentiekosten* | Story |
| Angst voor datalekken | “16 miljard gestolen wachtwoorden”[18] | *Doe de Security-QuickScan* | Story |

* Maak van ieder blogartikel een **mini-case** met: probleem → aanpak → resultaat → emotie.
* Verwijs intern vanuit service-pagina’s naar relevante voorbeelden (SEO + bewijs[71][75]).

---

## 5. SEO-aanpassingen (Probleem-zoekwoorden)

1. **Hoofdzoekwoord = pijn**  
   * “computer crasht vaak amsterdam”, “altijd wifi problemen kantoor”, “microsoft office wordt duurder”
2. **Titel-formule**  
   * *Probleem in 6 min oplossen? Zo doet Workflo het*  
3. **Structured data**: FAQ-schema met *“Hoe snel lost Workflo storingen op?”*  
4. **Interne links**: Hero-CTA → verhaal → diepere nerd-tab. Google volgt mee.

---

## 6. SEA-campagnes met Creatieve Knipoog

| Campagne | Kopregel | Probleemfocus | Landingpage |
|----------|---------|---------------|-------------|
| Search – “wifi kapot” | “Wifi-stress? Wij fixen het vóór je koffie koud is.” | Ja | /wifi-fix |
| Display remarketing | Banner met gescheurde sticky-note “Wachtwoord gelekt?” | Ja | /security-scan |
| YouTube bumper | 6 sec: *“Hé ondernemer, nog steeds print-paniek?”* | Ja | /printer-hulp |

*Ad-copy bevat altijd **probleem + opluchting + humor** (knipoog) zoals bewezen effectief bij MSP’s[30][78].*

---

## 7. Content-architectuur (Progressive Layers)

1. **Laag 1 – Emotie & Simpliciteit**  
   * Hero, USP’s, CTA’s.
2. **Laag 2 – Praktijkvoorbeelden**  
   * Blog-stories met meetbaar resultaat.
3. **Laag 3 – Services**  
   * Beschrijving in Jip-&-Janneke.
4. **Laag 4 – Nerd-details**  
   * Uitklappers met configs, SLA-PDF’s.
5. **Laag 5 – Documentatie**  
   * Downloadbare whitepapers.

---

## 8. Next Steps

1. **Homepage herschrijven** volgens piramide (1 week).  
2. **Blogartikelen** omvormen naar case-stories (2/wk).  
3. **Progressive disclosure** implementeren via accordion-component in CMS.  
4. **SEA A/B-tests**: probleem-kop vs. product-kop (1 maand).  
5. **Review & optimaliseer** op basis van conversiedata.

> *Met deze probleem-first aanpak laat Workflo zien dat het niet om servers of firewalls draait, maar om ondernemers die weer rustig kunnen ademhalen.*
