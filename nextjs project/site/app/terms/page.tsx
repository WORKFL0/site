export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Algemene Voorwaarden
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
            <h2>Artikel 1 - Definities</h2>
            <p>
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul>
              <li><strong>Opdrachtnemer:</strong> Workflo B.V., gevestigd te Amsterdam</li>
              <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die met Opdrachtnemer een overeenkomst aangaat</li>
              <li><strong>Diensten:</strong> alle door Opdrachtnemer te leveren IT-diensten en producten</li>
            </ul>

            <h2>Artikel 2 - Toepasselijkheid</h2>
            <p>
              2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Workflo en Opdrachtgever.
            </p>
            <p>
              2.2 Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.
            </p>

            <h2>Artikel 3 - Offertes en aanbiedingen</h2>
            <p>
              3.1 Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.
            </p>
            <p>
              3.2 Offertes zijn geldig gedurende 30 dagen, tenzij anders aangegeven.
            </p>

            <h2>Artikel 4 - Uitvoering van de overeenkomst</h2>
            <p>
              4.1 Workflo zal de overeenkomst naar beste inzicht en vermogen uitvoeren.
            </p>
            <p>
              4.2 Opdrachtgever draagt er zorg voor dat alle gegevens waarvan Workflo aangeeft dat deze noodzakelijk zijn, tijdig worden verstrekt.
            </p>

            <h2>Artikel 5 - Prijzen en betaling</h2>
            <p>
              5.1 Alle prijzen zijn exclusief BTW, tenzij anders vermeld.
            </p>
            <p>
              5.2 Betaling dient te geschieden binnen 14 dagen na factuurdatum.
            </p>
            <p>
              5.3 Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim.
            </p>

            <h2>Artikel 6 - Intellectueel eigendom</h2>
            <p>
              6.1 Alle rechten van intellectueel eigendom op de door Workflo ontwikkelde werken berusten bij Workflo, tenzij schriftelijk anders overeengekomen.
            </p>

            <h2>Artikel 7 - Aansprakelijkheid</h2>
            <p>
              7.1 De aansprakelijkheid van Workflo is beperkt tot het bedrag dat in het desbetreffende geval door de aansprakelijkheidsverzekering wordt uitbetaald.
            </p>
            <p>
              7.2 Workflo is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
            </p>

            <h2>Artikel 8 - Overmacht</h2>
            <p>
              8.1 Workflo is niet gehouden tot het nakomen van enige verplichting indien zij daartoe verhinderd wordt als gevolg van overmacht.
            </p>

            <h2>Artikel 9 - Geheimhouding</h2>
            <p>
              9.1 Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van hun overeenkomst hebben verkregen.
            </p>

            <h2>Artikel 10 - SLA (Service Level Agreement)</h2>
            <p>
              10.1 Voor managed services geldt een uptime garantie van 99.9% op jaarbasis.
            </p>
            <p>
              10.2 Responstijden voor support zijn als volgt:
            </p>
            <ul>
              <li>Kritieke incidenten: binnen 15 minuten</li>
              <li>Urgente zaken: binnen 2 uur</li>
              <li>Normale vragen: binnen 8 werkuren</li>
            </ul>

            <h2>Artikel 11 - Geschillen</h2>
            <p>
              11.1 Op alle overeenkomsten is Nederlands recht van toepassing.
            </p>
            <p>
              11.2 Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.
            </p>

            <h2>Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p className="mb-2"><strong>Workflo B.V.</strong></p>
              <p className="mb-2">Koivistokade 3<br />1013AC Amsterdam</p>
              <p className="mb-2">KvK: [KvK-nummer]</p>
              <p className="mb-2">BTW: [BTW-nummer]</p>
              <p className="mb-2">E-mail: <a href="mailto:info@workflo.nl" className="text-primary-600 hover:text-primary-700">info@workflo.nl</a></p>
              <p>Telefoon: <a href="tel:0203080465" className="text-primary-600 hover:text-primary-700">020-30 80 465</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}