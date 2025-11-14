import Image from "next/image";

export function Hero() {
  return (
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
          Wir sind ein kleiner, traditioneller Fasnetsverein aus Bruckfelden, der die
          schwäbisch-alemannische Fasnet lebt und das Dorfleben das ganze Jahr über bereichert.
          Bei uns verbinden sich Brauchtum, Gemeinschaft und echte Dorfkultur –
          offen für Jung und Alt, für alle, die gerne mit anpacken und dabei sind.
        </p>
      </div>
    </section>
  );
}
