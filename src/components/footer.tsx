import Link from "next/link";
import { ViabilityLegend } from "./viability-legend";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* The Commons Manifesto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">The Commons Manifesto</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li>• Infrastructure for truth in the AI era</li>
              <li>• Planned obsolescence by 2050</li>
              <li>• Open source viability framework</li>
              <li>• Community-driven research</li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Partners</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li>
                <Link href="#" className="hover:text-cobalt-600 transition-colors">
                  Common Reality
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cobalt-600 transition-colors">
                  Darwin & Goliath
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cobalt-600 transition-colors">
                  The Socratics
                </Link>
              </li>
            </ul>
          </div>

          {/* Viability Scale */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Viability Scale</h3>
            <ViabilityLegend inline />
          </div>

          {/* Contact + Subscribe */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact + Subscribe</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-3 py-2 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none"
              />
              <button className="bg-cobalt-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-slate">
          <div className="flex items-center space-x-4">
            <span>© 2025 Future Viability Index</span>
            <span>•</span>
            <span>Hosted on Blacknight Domains</span>
            <div className="w-2 h-2 bg-moss-600 rounded-full animate-pulse" title="Uptime status"></div>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-cobalt-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}