export function Activities() {
  return (
    <section id="aktivitaeten" className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
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
              Die Höhepunkte unseres Vereinsjahrs! Vom <strong>SchoDo</strong> (Schmotziger Donnerstag)
              bis zum <strong>RoMo</strong> (Rosenmontag) feiern wir die schwäbisch-alemannische
              Fasnet, wie sie sein soll. Beim traditionellen <strong>Fasnetsumzug</strong> ziehen
              wir mit unserem Wagen durch die Straßen und bringen Stimmung ins Dorf.
            </p>
            <p className="text-gray-700">
              Den Abschluss bildet das <strong>Funkenfeuer</strong> – ein spektakuläres Ereignis,
              bei dem wir den Winter vertreiben und gemeinsam in die neue Jahreszeit starten.
            </p>
          </div>

          {/* Frühling & Sommer */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🌸 Frühling & Sommer
            </h3>
            <p className="text-gray-700 mb-2">
              Im Mai laden wir zur <strong>Maiwanderung</strong> ein – eine gemütliche Tour durch
              die Natur, die Jung und Alt zusammenbringt. Perfekt, um die Region zu erkunden und
              dabei ins Gespräch zu kommen.
            </p>
            <p className="text-gray-700 mb-2">
              Der <strong>Feierabendhock</strong> ist unser entspanntes Treffen nach getaner Arbeit.
              Bei einem kühlen Getränk und guter Gesellschaft lassen wir den Tag ausklingen.
            </p>
            <p className="text-gray-700">
              Das <strong>Gartenfest</strong> ist unser Sommerhighlight – ein fröhliches Fest
              mit Musik, gutem Essen und bester Laune für die ganze Dorfgemeinschaft.
            </p>
          </div>

          {/* Winter */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ❄️ Winter & Advent
            </h3>
            <p className="text-gray-700">
              Wenn die Tage kürzer werden, versammeln wir uns zum <strong>Singen am Weihnachtsbaum</strong>.
              Mit traditionellen Liedern und besinnlicher Stimmung stimmen wir uns gemeinsam auf
              die Weihnachtszeit ein – ein warmherziger Moment, der zeigt, wie stark unsere
              Dorfgemeinschaft zusammenhält.
            </p>
          </div>

          {/* Gemeinschaft */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🤝 Das ganze Jahr – Gemeinschaft erleben
            </h3>
            <p className="text-gray-700">
              Egal ob Fasnet, Fest oder einfach nur ein gemütliches Beisammensein – bei uns
              dreht sich alles um Gemeinschaft, Tradition und die Freude am Miteinander.
              Wer Lust hat, Teil dieser besonderen Dorfkultur zu werden, ist bei uns jederzeit
              herzlich willkommen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
