# Future Viability Index Dashboard

![Future Viability Index](https://img.shields.io/badge/FVI-Dashboard-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue)

A production-ready, accessible, responsive web application for the Future Viability Index - designed to be "primitive by design, beautiful in restraint". The infrastructure for truth in the AI era.

## 🌍 Overview

The Future Viability Index (FVI) is intentionally designed to become unnecessary by 2050. This dashboard provides a unified mirror scoreboard for tracking industry viability across multiple dimensions.

## ✨ Features

- **📊 System Dashboard** - Global progress tracking and aggregated scores
- **🏭 Sub-Industry Dashboard** - Detailed analysis per industry sector
- **⏳ 2050 Countdown** - Live countdown to planned obsolescence
- **📈 Interactive Charts** - Time-series data visualization with Recharts
- **🎨 Dark/Light Mode** - System-aware theme switching
- **♿ Accessibility** - WCAG AA compliant with keyboard navigation
- **📱 Responsive Design** - Mobile-first, works on all devices
- **🎭 Markdown UI Mode** - Optional primitive text-based interface

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design tokens
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Content**: MDX support
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/VI-dashboard.git
cd VI-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── get-involved/      # Community participation
│   ├── strategy/          # Implementation strategy
│   └── page.tsx           # Home dashboard
├── components/            # Reusable UI components
│   ├── countdown-2050.tsx # Live countdown component
│   ├── system-dashboard.tsx # Global metrics
│   ├── sub-industry-dashboard.tsx # Industry-specific data
│   └── ...               # Other components
├── lib/                  # Utilities and API
│   └── api.ts           # Data fetching functions
└── data/                # Mock JSON data
    ├── system-progress.json
    ├── coal-scores.json
    └── ...
```

## 🎨 Design System

### Color Palette
- **High Viability (0-40)**: Green (`#16A34A`)
- **Medium Viability (40-60)**: Amber (`#F59E0B`) 
- **Low Viability (60-100)**: Red (`#DC2626`)
- **Interactive**: Cobalt (`#2563EB`)

### Typography
- **Headings**: Inter
- **Body**: Inter  
- **Code/Mono**: IBM Plex Mono

### Motion
- **Durations**: 120ms (taps), 240ms (entrances), 400ms (progress)
- **Easing**: Standard cubic bezier
- **Reduced Motion**: Respects user preferences

## 📊 Data Structure

The dashboard expects data in specific formats:

- **System Progress**: Overall completion metrics
- **System Scores**: Aggregated viability scores across dimensions
- **Sub-Industry Data**: Sector-specific metrics and time-series
- **Viability Scale**: Classification thresholds

See `/data/*.json` files for examples.

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload /out folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **Common Reality** - The people holding the mirror
- **FVI** - The mirror itself, a systems framework  
- **Darwin & Goliath** - The craftspeople who built the mirror
- **The Socratics** - The philosophers who interpret what's reflected

## 📞 Contact

For questions about the Future Viability Index methodology or dashboard:

- Website: [FutureViability.org](https://futureviability.org)
- Email: info@futureviability.org

---

*"We are the boring infrastructure that makes the exciting stuff possible."*