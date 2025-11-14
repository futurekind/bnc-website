import Image from "next/image";

export function Navigation() {
  return (
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
            <a href="#ueber-uns" className="text-gray-700 hover:text-amber-600 transition-colors">
              Über uns
            </a>
            <a href="#aktivitaeten" className="text-gray-700 hover:text-amber-600 transition-colors">
              Aktivitäten
            </a>
            <a href="#mitmachen" className="text-gray-700 hover:text-amber-600 transition-colors">
              Mitmachen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
