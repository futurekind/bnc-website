import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Bruckfelder Narren-Club e.V.</p>
        <Link
          href="/impressum"
          className="text-teal-400 hover:text-teal-300 transition-colors"
        >
          Impressum
        </Link>
        <span className="mx-2">·</span>
        <a
          href="/satzung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 transition-colors"
        >
          Satzung (PDF)
        </a>
      </div>
    </footer>
  );
}
