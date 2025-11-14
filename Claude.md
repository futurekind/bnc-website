# BNC Website - Dokumentation für Claude

## Projekt-Übersicht
Website für den Bruckfelder Narren-Club e.V. (BNC), einen traditionellen Fasnetsverein aus Bruckfelden.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Linting**: ESLint mit Next.js Config

## Projekt-Struktur
```
bnc-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (alle Sections)
│   ├── impressum/         # Impressum-Seite
│   ├── layout.tsx         # Root Layout
│   └── globals.css        # Globale Styles
├── public/
│   └── assets/
│       └── BNC-Logo transparent (1).png
├── components/            # React Components
└── Claude.md             # Diese Datei
```

## Design-Konzept

### Farbschema
- Primärfarbe: Warmes Orange/Amber (passend zur Fasnets-Tradition)
- Akzentfarbe: Dunkles Blau/Grau
- Hintergrund: Cremeweiß/helle Töne
- Logo: Schwarz-Weiß (Schimmelreiter mit Mond & Stern)

### Responsive Design
- Mobile-first Ansatz
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Website-Struktur

### Homepage (Single Page)
1. **Hero-Section** mit Logo
2. **Kurzbeschreibung** (3-5 Sätze)
3. **Über uns** (Geschichte, Zweck, Gemeinschaft)
4. **Unsere Aktivitäten**:
   - Fasnetsumzug
   - SchoDo (Schmotziger Donnerstag)
   - RoMo (Rosenmontag)
   - Funkenfeuer
   - Maiwanderung
   - Feierabendhock
   - Gartenfest
   - Singen am Weihnachtsbaum
5. **Mitmachen & Mitglied werden**
6. **Motto/Leitgedanke**
7. **Footer** mit Link zum Impressum

### Navigation
- Sticky Header mit Sprungmarken zu Sections
- Smooth Scroll Effekt

### Impressum
- Separate Seite unter `/impressum`
- Standard-Vereinsimpressum

## Tonalität & Stil
- **Freundlich & einladend**: Bodenständig, authentisch
- **Leichte regionale Färbung**: Ohne übertriebenen Dialekt
- **Gemeinschaftsfokus**: Generationenübergreifend, traditionsbewusst
- **Offen für Neue**: Einladend, sympathisch

## Vereins-Kerninformationen
- **Name**: Bruckfelder Narren-Club e.V. (BNC)
- **Ort**: Bruckfelden
- **Tradition**: Schwäbisch-alemannische Fasnet
- **Charakter**: Klein, traditionell, ehrenamtlich
- **Mission**: Dorfleben bereichern, Gemeinschaft stärken, Generationen verbinden

## Entwicklung

### Dev Server starten
```bash
pnpm dev
```

### Build erstellen
```bash
pnpm build
```

### Linting
```bash
pnpm lint
```

## Besonderheiten
- Statische Inhalte (keine CMS-Anbindung)
- Alle Inhalte auf einer Page (außer Impressum)
- Logo als transparentes PNG
- Keine Bilder außer Logo (vorerst)
- Fokus auf Text und klare Struktur
