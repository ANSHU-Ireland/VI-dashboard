import { MarkdownPanel } from "@/components/markdown-panel";

export const metadata = {
  title: "Get Involved | Future Viability Index",
  description: "Join or start a node. Contribute to building the infrastructure for truth in the AI era.",
};

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono">Get Involved</h1>
          <p className="text-lg text-slate">
            Join the community building infrastructure for economic truth
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border">
            <div className="flex">
              <button className="px-6 py-4 font-medium bg-muted border-b-2 border-cobalt-600 text-cobalt-600">
                Online
              </button>
              <button className="px-6 py-4 font-medium text-slate hover:text-ink transition-colors">
                In Person
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <MarkdownPanel>
              {onlineContent}
            </MarkdownPanel>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-cobalt-600 text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-colors">
                Start a node on Common Reality
              </button>
              <button className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-colors">
                Login to StageRail
              </button>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold">Common Reality</h3>
              <p className="text-slate">
                The people holding the mirror. Community platform for collaborative sense-making and data validation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold">FVI</h3>
              <p className="text-slate">
                The mirror itself, a systems framework. Open source viability assessment infrastructure.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold">Darwin & Goliath</h3>
              <p className="text-slate">
                The craftspeople who built the mirror. Strategy and implementation consultancy for economic transformation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold">The Socratics</h3>
              <p className="text-slate">
                The philosophers who interpret what's reflected. Research collective exploring implications of viability metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const onlineContent = `
## Join or Start a Node

**Nodes** are self-organizing communities that contribute to FVI development and deployment. Each node focuses on specific sectors, regions, or methodological areas.

### What Nodes Do

- **Research & Development**: Contribute to metric development and validation
- **Data Collection**: Gather and verify industry-specific data
- **Local Implementation**: Adapt FVI for regional contexts
- **Knowledge Sharing**: Teach and learn viability assessment methods

### Starting a Node

1. **Identify Focus Area**: Choose a sector, region, or methodology to specialize in
2. **Gather Community**: Find 3-5 committed collaborators with relevant expertise  
3. **Create Charter**: Define node purpose, scope, and governance structure
4. **Register on Platform**: Submit node proposal for community review
5. **Begin Contributing**: Start with small projects and build reputation

### Node Resources

- **Methodology Toolkit**: Standard frameworks and assessment tools
- **Data Access**: APIs and datasets for viability analysis
- **Communication Channels**: Forums, chat, and video conferencing
- **Mentorship Program**: Connect with experienced node operators
- **Funding Opportunities**: Grants and resource sharing for node projects

### Current Priority Areas

- **Sub-Industry Specialists**: Deep expertise in specific ISIC/GICS categories
- **Regional Coordinators**: Local knowledge for geographic adaptation
- **Data Scientists**: Advanced analytics and modeling capabilities
- **Policy Researchers**: Government and regulatory expertise
- **Community Organizers**: Outreach and engagement specialists

---

*Every node contributes to the collective intelligence that makes better economic decisions possible.*
`;