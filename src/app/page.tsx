import { Countdown2050 } from "@/components/countdown-2050";
import { SystemDashboard } from "@/components/system-dashboard";
import { SubIndustryDashboard } from "@/components/sub-industry-dashboard";
import { ViabilityLegend } from "@/components/viability-legend";
import { CallsToAction } from "@/components/calls-to-action";
import { SectorProvider } from "@/contexts/sector-context";

export default function HomePage() {
  return (
    <SectorProvider>
      <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero + Countdown Banner */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-balance">
            🌍 FUTURE VIABILITY INDEX<br />
            <span className="text-slate">…</span> UNIFIED MIRROR SCOREBOARD
          </h1>
          <div className="inline-block bg-muted px-4 py-2 rounded-xl font-mono text-sm">
            Planned Obsolescence — 2050 Deadline
          </div>
        </div>
        
        <Countdown2050 target="2050-12-31T23:59:59Z" />
        
        <p className="text-lg text-slate max-w-2xl mx-auto">
          FVI is intentionally designed to become unnecessary by 2050.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-cobalt-600 text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-colors">
            Contribute Research
          </button>
          <button className="border border-slate px-6 py-3 rounded-xl hover:bg-muted transition-colors">
            Get Notified of Completion
          </button>
        </div>
      </section>

      {/* System Dashboard */}
      <SystemDashboard />

      {/* Sub-Industry Dashboard */}
      <SubIndustryDashboard />

      {/* Viability Scale Legend */}
      <ViabilityLegend />

      {/* Calls to Action */}
      <CallsToAction />
    </div>
    </SectorProvider>
  );
}