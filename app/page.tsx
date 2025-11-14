import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/BNC-Logo transparent (1).png"
                alt="BNC Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="font-bold text-xl text-gray-800">BNC</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a
                href="#ueber-uns"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Über uns
              </a>
              <a
                href="#aktivitaeten"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Aktivitäten
              </a>
              <a
                href="#mitmachen"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Mitmachen
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/assets/BNC-Logo transparent (1).png"
              alt="Bruckfelder Narren-Club Logo"
              width={200}
              height={200}
              className="mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bruckfelder Narren-Club e.V.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein kleiner, traditioneller Fasnetsverein aus Bruckfelden,
            der die schwäbisch-alemannische Fasnet lebt und das Dorfleben das
            ganze Jahr über bereichert. Bei uns verbinden sich Brauchtum,
            Gemeinschaft und echte Dorfkultur – offen für Jung und Alt, für
            alle, die gerne mit anpacken und dabei sind.
          </p>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Über uns
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Der Bruckfelder Narren-Club ist mehr als ein Fasnetsverein – wir
              sind ein fester Bestandteil unseres Dorfes. Gegründet aus der
              Liebe zur schwäbisch-alemannischen Fasnet und dem Wunsch,
              Tradition lebendig zu halten, gestalten wir seit vielen Jahren das
              gesellschaftliche Leben in Bruckfelden mit.
            </p>
            <p>
              Was uns besonders macht? Wir sind klein, familiär und ehrenamtlich
              organisiert. Jeder kennt jeden, und genau das macht den besonderen
              Charme unseres Vereins aus. Bei uns wird noch richtig
              zusammengehalten – ob beim Wagenbauen fürs Fasnet, beim Gartenfest
              oder beim gemütlichen Feierabendhock.
            </p>
            <p>
              Unser Ziel ist es, Generationen zusammenzubringen, die
              Dorfgemeinschaft zu stärken und unsere Traditionen weiterzugeben.
              Dabei setzen wir nicht nur auf die närrische Zeit, sondern
              begleiten das Jahr mit verschiedenen Aktivitäten, die das
              Miteinander fördern und für schöne gemeinsame Momente sorgen.
            </p>
            <p>
              Wir sind stolz auf unsere Wurzeln und freuen uns über jeden, der
              Teil unserer Gemeinschaft werden möchte – egal ob als aktives
              Mitglied oder treuer Unterstützer.
            </p>
          </div>
        </div>
      </section>

      {/* Unsere Aktivitäten */}
      <section
        id="aktivitaeten"
        className="py-16 px-4 bg-linear-to-b from-amber-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Unsere Aktivitäten
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fasnetszeit */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🎭 Fasnet – Die närrische Zeit
              </h3>
              <p className="text-gray-700 mb-2">
                Die Höhepunkte unseres Vereinsjahrs! Vom <strong>SchoDo</strong>{" "}
                (Schmotziger Donnerstag) bis zum <strong>RoMo</strong>{" "}
                (Rosenmontag) feiern wir die schwäbisch-alemannische Fasnet, wie
                sie sein soll. Beim traditionellen <strong>Fasnetsumzug</strong>{" "}
                ziehen wir mit unserem Wagen durch die Straßen und bringen
                Stimmung ins Dorf.
              </p>
              <p className="text-gray-700">
                Den Abschluss bildet das <strong>Funkenfeuer</strong> – ein
                spektakuläres Ereignis, bei dem wir den Winter vertreiben und
                gemeinsam in die neue Jahreszeit starten.
              </p>
            </div>

            {/* Frühling & Sommer */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🌸 Frühling & Sommer
              </h3>
              <p className="text-gray-700 mb-2">
                Im Mai laden wir zur <strong>Maiwanderung</strong> ein – eine
                gemütliche Tour durch die Natur, die Jung und Alt
                zusammenbringt. Perfekt, um die Region zu erkunden und dabei ins
                Gespräch zu kommen.
              </p>
              <p className="text-gray-700 mb-2">
                Der <strong>Feierabendhock</strong> ist unser entspanntes
                Treffen nach getaner Arbeit. Bei einem kühlen Getränk und guter
                Gesellschaft lassen wir den Tag ausklingen.
              </p>
              <p className="text-gray-700">
                Das <strong>Gartenfest</strong> ist unser Sommerhighlight – ein
                fröhliches Fest mit Musik, gutem Essen und bester Laune für die
                ganze Dorfgemeinschaft.
              </p>
            </div>

            {/* Winter */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ❄️ Winter & Advent
              </h3>
              <p className="text-gray-700">
                Wenn die Tage kürzer werden, versammeln wir uns zum{" "}
                <strong>Singen am Weihnachtsbaum</strong>. Mit traditionellen
                Liedern und besinnlicher Stimmung stimmen wir uns gemeinsam auf
                die Weihnachtszeit ein – ein warmherziger Moment, der zeigt, wie
                stark unsere Dorfgemeinschaft zusammenhält.
              </p>
            </div>

            {/* Gemeinschaft */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🤝 Das ganze Jahr – Gemeinschaft erleben
              </h3>
              <p className="text-gray-700">
                Egal ob Fasnet, Fest oder einfach nur ein gemütliches
                Beisammensein – bei uns dreht sich alles um Gemeinschaft,
                Tradition und die Freude am Miteinander. Wer Lust hat, Teil
                dieser besonderen Dorfkultur zu werden, ist bei uns jederzeit
                herzlich willkommen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitmachen */}
      <section id="mitmachen" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mitmachen & Mitglied werden
          </h2>
          <div className="bg-linear-to-r from-amber-100 to-orange-100 rounded-lg p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
              Du hast Lust, bei uns mitzumachen? Dann bist du bei uns genau
              richtig! Egal ob du die Fasnet liebst, gerne mit anpackst oder
              einfach Teil einer echten Dorfgemeinschaft sein möchtest – beim
              Bruckfelder Narren-Club bist du willkommen.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Wir freuen uns über jedes neue Gesicht, das unsere Tradition und
              unser Vereinsleben bereichert. Komm einfach bei einer unserer
              Veranstaltungen vorbei, lerne uns kennen und schnupper rein!
            </p>
            <p className="text-xl font-semibold text-gray-900 mb-8">
              Gemeinsam gestalten wir das Dorfleben – sei dabei!
            </p>
            <div className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-amber-700 transition-colors">
              Kontakt aufnehmen
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 px-4 bg-linear-to-b from-amber-100 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic">
            &ldquo;Tradition leben, Gemeinschaft stärken, Bruckfelden
            feiern&rdquo;
          </blockquote>
          <p className="mt-6 text-lg text-gray-700">
            Das ist unser Leitgedanke – dafür stehen wir, dafür machen
            wir&apos;s.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Bruckfelder Narren-Club e.V.
          </p>
          <Link
            href="/impressum"
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
}
