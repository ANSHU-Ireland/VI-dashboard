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
        {/* Empirical Header - Truth Through Measurement */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-mono font-normal text-balance text-measurement">
              FUTURE VIABILITY INDEX
            </h1>
            <div className="text-xl md:text-2xl font-mono font-light text-grey-600">
              UNIFIED MEASUREMENT PROTOCOL
            </div>
            <div className="inline-block bg-grey-200 px-4 py-2 font-mono text-sm text-grey-700 border border-grey-300">
              PLANNED OBSOLESCENCE — 2050 MEASUREMENT DEADLINE
            </div>
          </div>
        
        <Countdown2050 target="2050-12-31T23:59:59Z" />
        
        <p className="text-lg text-grey-600 max-w-2xl mx-auto font-normal">
          Empirical measurement instrument designed for systematic obsolescence by 2050.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-truth text-void px-6 py-3 border border-grey-300 hover-accent font-mono text-sm transition-colors">
            CONTRIBUTE DATA
          </button>
          <button className="border border-grey-400 text-muted-foreground px-6 py-3 hover-accent font-mono text-sm transition-colors">
            SYSTEM NOTIFICATIONS
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