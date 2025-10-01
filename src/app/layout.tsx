import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Future Viability Index | Unified Mirror Scoreboard",
  description: "FVI is intentionally designed to become unnecessary by 2050. The infrastructure for truth in the AI era.",
  keywords: ["future viability", "sustainability", "industry analysis", "viability index"],
  authors: [{ name: "Future Viability Index" }],
  openGraph: {
    title: "Future Viability Index",
    description: "The infrastructure for truth in the AI era",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <a 
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-cobalt-600 text-white px-4 py-2 rounded-xl"
            >
              Skip to content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}