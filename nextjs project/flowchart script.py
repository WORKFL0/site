# Let's create a structured version of the flowchart content from the PDF
# This will help us understand the flow and create a proper data structure

flowchart_content = """
Flowchart Questions and Paths:

1. "Zijn jullie tevreden met de technische ondersteuning die jullie ontvangen?"
   - Ja, dat zijn wij → Continue
   - Nee, dat zijn we niet → Contact opnemen

2. "Reageert de ICT-dienstverlener binnen de afgesproken tijd op uw verzoeken?"
   - Ja, dat doen ze → Continue
   - Niet altijd → Contact opnemen

3. "Worden jullie problemen binnen de afgesproken termijn opgelost?"
   - Meestal wel → Continue
   - Niet altijd → Contact opnemen

4. "Communiceert de ICT-dienstverlener duidelijk over de status van jullie verzoeken?"
   - Ja, dat doen ze → Continue
   - Nee → Contact opnemen

5. "Zijn de oplossingen van de ICT-dienstverlener effectief?"
   - Ja, over het algemeen wel → Continue
   - Soms niet echt → Contact opnemen

6. "Voldoen de technici van de ICT-dienstverlener aan uw verwachtingen qua kennis en vaardigheden?"
   - Jazeker → Continue
   - Nee, soms niet → Contact opnemen

7. "Worden jullie ICT-problemen meestal in één keer opgelost?"
   - Absoluut → Continue
   - Niet altijd of tegen iedereen → Contact opnemen

8. "Vinden jullie de ICT-dienstverlener klantgericht?"
   - Wij vinden van wel → Continue
   - Ze schieten de pan uit → Contact opnemen

9. "Zijn de kosten van de diensten van de ICT-dienstverlener redelijk?"
   - Ja hoor → Continue
   - Ze snappen er soms niks van → Contact opnemen

10. "Begrijpt de ICT-dienstverlener jullie bedrijfsbehoeften?"
    - Nee, eigenlijk niet → Contact opnemen
    - Ze snappen er soms niks van → Contact opnemen

11. "Ervaren jullie vaak herhalende problemen met jullie ICT-systemen?"
    - Regelmatig → Contact opnemen
    - Wel eens → Continue

12. "Biedt de ICT-dienstverlener proactieve aanbevelingen voor systeemverbeteringen?"
    - Nee, dat doen ze niet → Contact opnemen
    - Wij krijgen ze nooit te pakken → Contact opnemen

13. "Is de ICT-dienstverlener beschikbaar buiten normale werktijden als dat nodig is?"
    - Altijd → Continue
    - Wij krijgen ze nooit te pakken → Contact opnemen

14. "Voelen jullie dat jullie gegevens veilig zijn bij de ICT-dienstverlener?"
    - Ja, heel veilig → Continue
    - Daar twijvelen we weleens aan → Contact opnemen

15. "Hebben jullie vertrouwen in de ICT-dienstverlener om kritieke problemen aan te pakken?"
    - Soms twijvelen we daaraan → Contact opnemen
    - Volle vertrouwen → Continue

16. "Zijn de facturen van de ICT-dienstverlener duidelijk en transparant?"
    - We klagen niet → Continue
    - We snappen er soms niks van → Contact opnemen

17. "Past de ICT-dienstverlener zich goed aan veranderende eisen aan?"
    - Helemaal niet → Contact opnemen
    - Heel goed zelfs → Continue

18. "Zouden jullie de ICT-dienstverlener aanbevelen aan andere bedrijven?"
    - We kunnen niemand anders → Contact opnemen
    - 100% Zeker → Continue

19. "Krijgen jullie regelmatig updates over lopende werkzaamheden?"
    - We krijgen nooit updates → Contact opnemen
    - Meer dan genoeg → Continue

20. "Is de ICT-dienstverlener in staat om complexe problemen op te lossen?"
    - Ze snappen het soms zelf ook niet → Contact opnemen
    - Ze zijn de beste → Continue

21. "Is de documentatie die de ICT-dienstverlener levert duidelijk en bruikbaar?"
    - Heel duidelijk → Continue
    - Documentatie? → Contact opnemen

22. "Is de ICT-dienstverlener proactief in het identificeren van potentiële problemen?"
    - Nee, altijd achteraf → Contact opnemen
    - Ja, dat doen ze heel goed → Continue

23. "Krijgen jullie regelmatig rapporten over de prestaties van jullie ICT-systemen?"
    - Valt dat te meten? → Contact opnemen
    - Ja, hele goede → Continue

24. "Is de ICT-dienstverlener transparant over de kosten van extra diensten?"
    - Heel transparant → Continue
    - Nee. Het zit allemaal ik pakketen → Contact opnemen

25. "Voelen jullie je gewaardeerd als klant door de ICT-dienstverlener?"
    - Ja. Heel erg! → Continue
    - Feedback? → Contact opnemen

26. "Voelen jullie dat de ICT-dienstverlener jullie feedback serieus neemt?"
    - Jazeker, dat doen ze heel goed → "Helemaal goed geregeld!"
    - Feedback? → Contact opnemen

Final outcomes:
- "Helemaal goed geregeld!" (Satisfied customer)
- "Neem dan contact met ons op via:" (Contact us)
"""

print("Flowchart structure analyzed and documented.")
print("\nKey insights:")
print("- This is a customer satisfaction assessment flowchart")
print("- It has multiple decision points leading to either 'satisfied' or 'contact us'")
print("- The flow is designed to identify dissatisfied customers")
print("- Most 'negative' answers lead to contact recommendation")
print("- Only a complete positive path leads to 'satisfied' outcome")

# Let's also create a simple data structure for this
questions = [
    {
        "id": 1,
        "question": "Zijn jullie tevreden met de technische ondersteuning die jullie ontvangen?",
        "options": ["Ja, dat zijn wij", "Nee, dat zijn we niet"],
        "next": [2, "contact"]
    },
    {
        "id": 2,
        "question": "Reageert de ICT-dienstverlener binnen de afgesproken tijd op uw verzoeken?",
        "options": ["Ja, dat doen ze", "Niet altijd"],
        "next": [3, "contact"]
    },
    # ... more questions would follow this pattern
]

print("\nData structure example created for implementation")