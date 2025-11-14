import Link from "next/link";
import Image from "next/image";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/assets/BNC-Logo transparent (1).png"
                alt="BNC Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="font-bold text-xl text-gray-800">BNC</span>
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      {/* Impressum Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-gray-700">
                <strong>Bruckfelder Narren-Club e.V.</strong>
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] Bruckfelden
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertreten durch</h2>
              <p className="text-gray-700">
                [Name des 1. Vorsitzenden]
                <br />
                1. Vorsitzender
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                E-Mail: <a href="mailto:info@bnc-bruckfelden.de" className="text-amber-600 hover:text-amber-700">info@bnc-bruckfelden.de</a>
                <br />
                Telefon: [Telefonnummer]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h2>
              <p className="text-gray-700">
                Eintragung im Vereinsregister
                <br />
                Registergericht: [Amtsgericht]
                <br />
                Registernummer: [VR-Nummer]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-gray-700">
                [Name des 1. Vorsitzenden]
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] Bruckfelden
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700 mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Haftung für Links</h3>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-gray-700 mb-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Urheberrecht</h3>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Datenschutz</h2>
              <p className="text-gray-700">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
                möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
                Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
                Zustimmung nicht an Dritte weitergegeben.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Bruckfelder Narren-Club e.V.</p>
        </div>
      </footer>
    </div>
  );
}
