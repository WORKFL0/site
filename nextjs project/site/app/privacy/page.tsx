import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacybeleid
            </h1>
            <p className="text-xl text-gray-600">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Introductie</h2>
            <p>
              Workflo B.V. ("wij", "ons" of "onze"), gevestigd aan Koivistokade 3, 1013AC Amsterdam, 
              hecht groot belang aan de bescherming van uw persoonsgegevens. Dit privacybeleid beschrijft 
              hoe wij omgaan met persoonsgegevens die wij verzamelen via onze website en diensten.
            </p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>Wij kunnen de volgende categorieën persoonsgegevens verzamelen:</p>
            <ul>
              <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, bedrijfsnaam</li>
              <li><strong>Technische gegevens:</strong> IP-adres, browsertype, apparaatinformatie</li>
              <li><strong>Gebruiksgegevens:</strong> hoe u onze website gebruikt, welke pagina's u bezoekt</li>
              <li><strong>Communicatiegegevens:</strong> inhoud van e-mails en andere communicatie met ons</li>
            </ul>

            <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
            <p>Wij gebruiken uw persoonsgegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Het leveren van onze IT-diensten en support</li>
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het verbeteren van onze website en diensten</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
              <li>Het versturen van relevante informatie over onze diensten (met uw toestemming)</li>
            </ul>

            <h2>4. Rechtsgrondslag</h2>
            <p>
              Wij verwerken uw persoonsgegevens op basis van één of meer van de volgende rechtsgronden:
            </p>
            <ul>
              <li>Uw toestemming</li>
              <li>De uitvoering van een overeenkomst</li>
              <li>Wettelijke verplichtingen</li>
              <li>Onze gerechtvaardigde belangen</li>
            </ul>

            <h2>5. Delen van gegevens</h2>
            <p>
              Wij delen uw persoonsgegevens alleen met derden als dit noodzakelijk is voor onze dienstverlening, 
              zoals:
            </p>
            <ul>
              <li>IT-serviceproviders (Microsoft, Apple, etc.)</li>
              <li>Hostingproviders</li>
              <li>Analytische diensten</li>
              <li>Wettelijke autoriteiten (indien vereist)</li>
            </ul>

            <h2>6. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te 
              beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Deze maatregelen omvatten:
            </p>
            <ul>
              <li>Encryptie van gegevensoverdracht</li>
              <li>Beveiligde servers</li>
              <li>Toegangscontroles</li>
              <li>Regelmatige beveiligingsaudits</li>
            </ul>

            <h2>7. Bewaartermijnen</h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor 
              zij zijn verzameld, tenzij een langere bewaartermijn wettelijk is vereist.
            </p>

            <h2>8. Uw rechten</h2>
            <p>
              Onder de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul>
              <li><strong>Inzage:</strong> U heeft het recht om te weten welke gegevens wij van u verwerken</li>
              <li><strong>Rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
              <li><strong>Verwijdering:</strong> U kunt verzoeken om verwijdering van uw gegevens</li>
              <li><strong>Beperking:</strong> U kunt de verwerking van uw gegevens laten beperken</li>
              <li><strong>Overdraagbaarheid:</strong> U kunt uw gegevens in een gestructureerd formaat ontvangen</li>
              <li><strong>Bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              Onze website maakt gebruik van cookies. Voor meer informatie verwijzen wij u naar ons 
              <Link href="/cookies" className="text-primary-600 hover:text-primary-700"> cookiebeleid</Link>.
            </p>

            <h2>10. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. Belangrijke wijzigingen zullen 
              wij via onze website communiceren.
            </p>

            <h2>11. Contact</h2>
            <p>
              Voor vragen over dit privacybeleid of het uitoefenen van uw rechten kunt u contact met 
              ons opnemen:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="mb-2"><strong>Workflo B.V.</strong></p>
              <p className="mb-2">Koivistokade 3<br />1013AC Amsterdam</p>
              <p className="mb-2">E-mail: <a href="mailto:privacy@workflo.nl" className="text-primary-600 hover:text-primary-700">privacy@workflo.nl</a></p>
              <p>Telefoon: <a href="tel:0203080465" className="text-primary-600 hover:text-primary-700">020-30 80 465</a></p>
            </div>

            <h2>12. Klachten</h2>
            <p>
              Als u niet tevreden bent met hoe wij omgaan met uw persoonsgegevens, heeft u het recht 
              om een klacht in te dienen bij de Autoriteit Persoonsgegevens:
            </p>
            <p>
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" 
                 className="text-primary-600 hover:text-primary-700">
                www.autoriteitpersoonsgegevens.nl
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}