'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function CookiesPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {language === 'en' ? (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What are cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They are widely used to make websites work efficiently and provide information to website owners.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How we use cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Workflo uses cookies to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Remember your language preferences</li>
                    <li>Understand how you use our website</li>
                    <li>Improve your user experience</li>
                    <li>Enable certain website functionalities</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of cookies we use</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies are necessary for the website to function and cannot be disabled. They are usually set in response to actions you take, such as setting your privacy preferences or logging in.
                    </p>
                    <p className="text-sm text-gray-600">Duration: Session</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies allow us to remember choices you make (such as your language preference) and provide enhanced features.
                    </p>
                    <p className="text-sm text-gray-600">Duration: 1 year</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics cookies</h3>
                    <p className="text-gray-700 mb-2">
                      We use Google Analytics to understand how visitors interact with our website. These cookies collect information in an aggregated form.
                    </p>
                    <p className="text-sm text-gray-600">Duration: 2 years</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies may be set through our site by advertising partners to build a profile of your interests and show relevant ads on other sites.
                    </p>
                    <p className="text-sm text-gray-600">Duration: 1 year</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-party cookies</h2>
                  <p className="text-gray-700 mb-4">
                    We use services from the following third parties that may set cookies:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Google Analytics:</strong> For website analytics</li>
                    <li><strong>HubSpot:</strong> For contact forms and customer relationship management</li>
                    <li><strong>LinkedIn:</strong> For social media integration</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing cookies</h2>
                  <p className="text-gray-700 mb-4">
                    You can control and delete cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Browser manufacturers provide help pages relating to cookie management:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your rights under GDPR</h2>
                  <p className="text-gray-700 mb-4">
                    Under the General Data Protection Regulation (GDPR), you have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ('right to be forgotten')</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent at any time</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about our cookie policy or how we handle your data, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      <strong>Workflo B.V.</strong><br />
                      Koivistokade 3<br />
                      1013AC Amsterdam<br />
                      Netherlands<br />
                      Email: privacy@workflo.nl<br />
                      Phone: 020-30 80 465
                    </p>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookiebeleid</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Laatst bijgewerkt: januari 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Wat zijn cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u onze website bezoekt. 
                    Ze worden veel gebruikt om websites efficiënt te laten werken en informatie aan website-eigenaren te verstrekken.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hoe wij cookies gebruiken</h2>
                  <p className="text-gray-700 mb-4">
                    Workflo gebruikt cookies om:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Uw taalvoorkeuren te onthouden</li>
                    <li>Te begrijpen hoe u onze website gebruikt</li>
                    <li>Uw gebruikerservaring te verbeteren</li>
                    <li>Bepaalde websitefunctionaliteiten mogelijk te maken</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Soorten cookies die wij gebruiken</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essentiële cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld. Ze worden meestal ingesteld als reactie op acties die u onderneemt, zoals het instellen van uw privacyvoorkeuren of inloggen.
                    </p>
                    <p className="text-sm text-gray-600">Duur: Sessie</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Functionele cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Deze cookies stellen ons in staat om keuzes die u maakt te onthouden (zoals uw taalvoorkeur) en verbeterde functies te bieden.
                    </p>
                    <p className="text-sm text-gray-600">Duur: 1 jaar</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytische cookies</h3>
                    <p className="text-gray-700 mb-2">
                      We gebruiken Google Analytics om te begrijpen hoe bezoekers omgaan met onze website. Deze cookies verzamelen informatie in geaggregeerde vorm.
                    </p>
                    <p className="text-sm text-gray-600">Duur: 2 jaar</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Deze cookies kunnen via onze site worden geplaatst door advertentiepartners om een profiel van uw interesses op te bouwen en relevante advertenties op andere sites te tonen.
                    </p>
                    <p className="text-sm text-gray-600">Duur: 1 jaar</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies van derden</h2>
                  <p className="text-gray-700 mb-4">
                    We gebruiken diensten van de volgende derde partijen die cookies kunnen plaatsen:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Google Analytics:</strong> Voor website-analyse</li>
                    <li><strong>HubSpot:</strong> Voor contactformulieren en klantrelatiebeheer</li>
                    <li><strong>LinkedIn:</strong> Voor sociale media-integratie</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies beheren</h2>
                  <p className="text-gray-700 mb-4">
                    U kunt cookies beheren en verwijderen via uw browserinstellingen. Houd er rekening mee dat het verwijderen of blokkeren van cookies uw gebruikerservaring kan beïnvloeden en delen van onze website mogelijk niet langer volledig toegankelijk zijn.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Browserfabrikanten bieden helppagina's over cookiebeheer:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/nl/kb/cookies-informatie-websites-op-uw-computer-opslaan" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Uw rechten onder de AVG</h2>
                  <p className="text-gray-700 mb-4">
                    Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Recht op toegang tot uw persoonsgegevens</li>
                    <li>Recht op rectificatie van onjuiste gegevens</li>
                    <li>Recht op verwijdering ('recht om vergeten te worden')</li>
                    <li>Recht op beperking van verwerking</li>
                    <li>Recht op gegevensoverdraagbaarheid</li>
                    <li>Recht om bezwaar te maken tegen verwerking</li>
                    <li>Recht om toestemming op elk moment in te trekken</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact opnemen</h2>
                  <p className="text-gray-700 mb-4">
                    Als u vragen heeft over ons cookiebeleid of hoe we met uw gegevens omgaan, neem dan contact met ons op:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      <strong>Workflo B.V.</strong><br />
                      Koivistokade 3<br />
                      1013AC Amsterdam<br />
                      Nederland<br />
                      E-mail: privacy@workflo.nl<br />
                      Telefoon: 020-30 80 465
                    </p>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}