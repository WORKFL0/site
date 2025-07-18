export interface Question {
  id: number;
  question: string;
  options: string[];
  next: (number | string)[];
  type: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Zijn jullie tevreden met de technische ondersteuning die jullie ontvangen?",
    options: ["Ja, dat zijn wij", "Nee, dat zijn we niet"],
    next: [2, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 2,
    question: "Reageert de ICT-dienstverlener binnen de afgesproken tijd op uw verzoeken?",
    options: ["Ja, dat doen ze", "Niet altijd"],
    next: [3, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 3,
    question: "Worden jullie problemen binnen de afgesproken termijn opgelost?",
    options: ["Meestal wel", "Niet altijd"],
    next: [4, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 4,
    question: "Communiceert de ICT-dienstverlener duidelijk over de status van jullie verzoeken?",
    options: ["Ja, over het algemeen wel", "Soms niet echt"],
    next: [5, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 5,
    question: "Zijn de oplossingen van de ICT-dienstverlener effectief?",
    options: ["Jazeker", "Nee, soms niet"],
    next: [6, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 6,
    question: "Voldoen de technici van de ICT-dienstverlener aan uw verwachtingen qua kennis en vaardigheden?",
    options: ["Over het algemeen wel", "Nee, soms niet"],
    next: [7, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 7,
    question: "Worden jullie ICT-problemen meestal in één keer opgelost?",
    options: ["Absoluut", "Niet altijd"],
    next: [8, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 8,
    question: "Vinden jullie de ICT-dienstverlener klantgericht?",
    options: ["Wij vinden van wel", "Niet altijd of tegen iedereen"],
    next: [9, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 9,
    question: "Zijn de kosten van de diensten van de ICT-dienstverlener redelijk?",
    options: ["Ja hoor", "Ze schieten de pan uit"],
    next: [10, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 10,
    question: "Begrijpt de ICT-dienstverlener jullie bedrijfsbehoeften?",
    options: ["Ze snappen er soms niks van", "Wij vinden van wel"],
    next: ["contact", 11],
    type: ["negative", "positive"]
  },
  {
    id: 11,
    question: "Ervaren jullie vaak herhalende problemen met jullie ICT-systemen?",
    options: ["Regelmatig", "Wel eens"],
    next: ["contact", 12],
    type: ["negative", "positive"]
  },
  {
    id: 12,
    question: "Biedt de ICT-dienstverlener proactieve aanbevelingen voor systeemverbeteringen?",
    options: ["Nee, dat doen ze niet", "Ja, dat doen ze"],
    next: ["contact", 13],
    type: ["negative", "positive"]
  },
  {
    id: 13,
    question: "Is de ICT-dienstverlener beschikbaar buiten normale werktijden als dat nodig is?",
    options: ["Wij krijgen ze nooit te pakken", "Altijd"],
    next: ["contact", 14],
    type: ["negative", "positive"]
  },
  {
    id: 14,
    question: "Voelen jullie dat jullie gegevens veilig zijn bij de ICT-dienstverlener?",
    options: ["Ja, heel veilig", "Daar twijvelen we weleens aan"],
    next: [15, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 15,
    question: "Hebben jullie vertrouwen in de ICT-dienstverlener om kritieke problemen aan te pakken?",
    options: ["Volle vertrouwen", "Soms twijvelen we daaraan"],
    next: [16, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 16,
    question: "Zijn de facturen van de ICT-dienstverlener duidelijk en transparant?",
    options: ["We klagen niet", "We snappen er soms niks van"],
    next: [17, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 17,
    question: "Past de ICT-dienstverlener zich goed aan veranderende eisen aan?",
    options: ["Heel goed zelfs", "Helemaal niet"],
    next: [18, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 18,
    question: "Zouden jullie de ICT-dienstverlener aanbevelen aan andere bedrijven?",
    options: ["100% Zeker", "We kunnen niemand anders"],
    next: [19, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 19,
    question: "Krijgen jullie regelmatig updates over lopende werkzaamheden?",
    options: ["Meer dan genoeg", "We krijgen nooit updates"],
    next: [20, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 20,
    question: "Is de ICT-dienstverlener in staat om complexe problemen op te lossen?",
    options: ["Ze zijn de beste", "Ze snappen het soms zelf ook niet"],
    next: [21, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 21,
    question: "Is de documentatie die de ICT-dienstverlener levert duidelijk en bruikbaar?",
    options: ["Heel duidelijk", "Documentatie?"],
    next: [22, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 22,
    question: "Is de ICT-dienstverlener proactief in het identificeren van potentiële problemen?",
    options: ["Ja, dat doen ze heel goed", "Nee, altijd achteraf"],
    next: [23, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 23,
    question: "Krijgen jullie regelmatig rapporten over de prestaties van jullie ICT-systemen?",
    options: ["Ja, hele goede", "Valt dat te meten?"],
    next: [24, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 24,
    question: "Is de ICT-dienstverlener transparant over de kosten van extra diensten?",
    options: ["Heel transparant", "Nee. Het zit allemaal in pakketten"],
    next: [25, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 25,
    question: "Voelen jullie je gewaardeerd als klant door de ICT-dienstverlener?",
    options: ["Ja. Heel erg!", "Feedback?"],
    next: [26, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 26,
    question: "Voelen jullie dat de ICT-dienstverlener jullie feedback serieus neemt?",
    options: ["Jazeker, dat doen ze heel goed", "Feedback?"],
    next: ["satisfied", "contact"],
    type: ["positive", "negative"]
  }
];