import { MarkdownPanel } from "@/components/markdown-panel";

export const metadata = {
  title: "Strategy | Future Viability Index",
  description: "Comprehensive strategy overview for the Future Viability Index: Mirror, Map, and OS phases 2025-2050.",
};

export default function StrategyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <MarkdownPanel>
          {strategyContent}
        </MarkdownPanel>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Mirror Phase</h3>
              <span className="text-sm text-slate">2025–2032</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-moss-600 h-2 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <p className="text-sm text-slate">
              Build the assessment infrastructure. Deploy viability metrics across all sub-industries. 
              Establish the mirror that reflects true economic sustainability.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Map Phase</h3>
              <span className="text-sm text-slate">2032–2044</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: "15%" }}></div>
            </div>
            <p className="text-sm text-slate">
              Generate transition pathways. Connect viability assessments to actionable strategies. 
              Create the map for navigating economic transformation.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">OS Phase</h3>
              <span className="text-sm text-slate">2044–2050</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-slate h-2 rounded-full" style={{ width: "5%" }}></div>
            </div>
            <p className="text-sm text-slate">
              Transition to Commons OS. Decentralize decision-making infrastructure. 
              Make FVI obsolete by embedding viability thinking into all systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const strategyContent = `
# Future Viability Index – Comprehensive Strategy Overview

A 25-year plan to build and sunset the infrastructure for economic truth.

## Phase 1: The Mirror (2025–2032)

**Build the assessment infrastructure**

### Core Objectives
- Deploy viability metrics across all 163 ISIC sub-industries
- Establish data collection and validation pipelines
- Create the foundational mirror that reflects true economic sustainability
- Build community of practice around viability assessment

### Key Deliverables
- **25 FVI Metrics** fully operational across all sectors
- **Real-time dashboards** for system-wide viability tracking
- **Community verification** protocols for data validation
- **Open source tools** for independent viability assessment

### Success Metrics
- 100% sub-industry coverage with basic viability metrics
- 10,000+ active community contributors
- Integration with major economic databases (World Bank, OECD, etc.)
- Recognition as standard framework by 3+ international organizations

---

## Phase 2: The Map (2032–2044)

**Generate transition pathways**

### Core Objectives
- Connect viability assessments to actionable transformation strategies
- Develop Darwin vs. Goliath pathway models for each sub-industry
- Create the map for navigating economic transformation
- Scale intervention and policy recommendation systems

### Key Deliverables
- **Transition pathway generator** for all sub-industries
- **Policy simulation tools** for testing intervention strategies  
- **Investment flow guidance** aligned with viability metrics
- **Regional adaptation frameworks** for local implementation

### Success Metrics
- Transition pathways defined for 90% of global economic activity
- 50+ governments using FVI for policy development
- $1T+ in investment flows aligned with viability metrics
- Measurable improvement in viability scores across 25+ sub-industries

---

## Phase 3: Commons OS (2044–2050)

**Transition to decentralized infrastructure**

### Core Objectives
- Make FVI obsolete by embedding viability thinking into all economic systems
- Transition from centralized assessment to distributed decision-making
- Create Commons OS for collective economic governance
- Ensure knowledge and tools remain accessible beyond FVI sunset

### Key Deliverables
- **Decentralized governance protocols** for economic decision-making
- **Embedded viability logic** in financial systems, supply chains, and policy frameworks
- **Commons OS infrastructure** for collective sense-making
- **Complete knowledge transfer** to distributed network of institutions

### Success Metrics
- FVI assessment integrated into 90% of major economic systems
- Commons OS handling 10,000+ collective decisions monthly
- Zero dependence on centralized FVI infrastructure
- Successful sunset with all functions distributed

---

## Implementation Principles

### Open by Default
- All methodologies, data, and tools released under open licenses
- Community-driven development and validation processes
- Transparent governance and decision-making protocols

### Infrastructure Thinking
- Build for 25-year lifecycle with planned obsolescence
- Design systems that can scale to global economic activity
- Create robust, antifragile infrastructure that improves under stress

### Collaborative Development
- Multi-stakeholder governance including academia, government, business, and civil society
- Distributed development across multiple institutions and geographies
- Knowledge sharing protocols to prevent single points of failure

---

*The future is not something that happens to us. It's something we build together.*
`;