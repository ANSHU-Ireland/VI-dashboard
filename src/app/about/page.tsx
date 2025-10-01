import { MarkdownPanel } from "@/components/markdown-panel";

export const metadata = {
  title: "About | Future Viability Index",
  description: "The infrastructure for truth in the AI era. FVI is intentionally designed to become unnecessary by 2050.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <MarkdownPanel>
              {aboutContent}
            </MarkdownPanel>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Glossary</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">ISIC</div>
                    <div className="text-slate">International Standard Industrial Classification</div>
                  </div>
                  <div>
                    <div className="font-medium">GICS</div>
                    <div className="text-slate">Global Industry Classification Standard</div>
                  </div>
                  <div>
                    <div className="font-medium">FVI</div>
                    <div className="text-slate">Future Viability Index</div>
                  </div>
                  <div>
                    <div className="font-medium">CRG</div>
                    <div className="text-slate">Common Reality Gap</div>
                  </div>
                  <div>
                    <div className="font-medium">The Mirror</div>
                    <div className="text-slate">Viability assessment framework</div>
                  </div>
                  <div>
                    <div className="font-medium">The Map</div>
                    <div className="text-slate">Transition pathway system</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const aboutContent = `
# The Future Viability Index. It's Time.

The infrastructure for truth in the AI era.

## Planned Obsolescence — 2050 Deadline

FVI is intentionally designed to become unnecessary by 2050. When FVI reaches its end of life, it will transition into a Commons OS — a decentralized infrastructure for collective decision-making that no longer requires centralized viability assessment.

## We're All Commoners Now

The Future Viability Index represents a fundamental shift in how we assess and manage economic transitions. In an era where AI amplifies both truth and misinformation, we need infrastructure-grade tools for collective sense-making.

## The Core Model

The FVI framework is built around **25 core metrics** that assess viability across multiple dimensions:

- **Infrastructure Resilience**: Physical and digital systems
- **Ecological Impact**: Environmental sustainability and regeneration  
- **Economic Viability**: Financial sustainability and market dynamics
- **Social Cohesion**: Community impact and equity considerations
- **Technological Adaptability**: Innovation capacity and future-readiness

[View the complete 25 FVI Metrics R&D →](https://www.notion.so/25-fvi-metrics-rd)

## Why Sub-Industries?

Traditional sector analysis misses critical nuances. By analyzing at the sub-industry level using ISIC and GICS classifications, we capture the granular reality of economic transformation:

- **163 ISIC Sub-Industries** for global standardization
- **419 GICS Sub-Industries** for market-specific analysis
- **Cross-referenced taxonomy** for comprehensive coverage

### ISIC & GICS Mapping

- ISIC provides the statistical backbone for international comparability
- GICS offers market-oriented classification for investment analysis
- Our hybrid approach captures both regulatory and market perspectives

## Common Reality Gap

The **Common Reality Gap (CRG)** measures the distance between collective perception and measurable reality. In many industries, this gap has become dangerously wide:

- Market valuations disconnected from sustainability metrics
- Public policy based on outdated industrial models
- Investment flows misaligned with transition requirements

FVI makes this gap visible and measurable.

## Necessity Ranking System

*[Future tool - placeholder]*

A dynamic system for prioritizing transition pathways based on:
- Urgency of transformation required
- Availability of viable alternatives
- Social and economic impact of transition
- Technical feasibility of implementation

## Darwin vs. Goliath Transition Pathways

Every sub-industry faces a choice between **incremental adaptation (Goliath)** and **fundamental transformation (Darwin)**:

### Goliath Pathways
- Optimize existing systems
- Regulatory compliance focus  
- Risk mitigation strategies
- Gradual efficiency improvements

### Darwin Pathways
- Systemic redesign
- Breakthrough innovation
- New business models
- Rapid adaptive capacity

## Output: Structured Transition Pathway

For each sub-industry, FVI generates:

1. **Current Viability Assessment** (0-100 scale)
2. **Trajectory Analysis** (5-year projections)
3. **Pathway Options** (Darwin vs. Goliath scenarios)
4. **Implementation Roadmap** (actionable next steps)
5. **Risk Assessment** (transition challenges and mitigation)

---

*FVI: The markdown view of the market.*

We are the boring infrastructure that makes better decisions possible.
`;