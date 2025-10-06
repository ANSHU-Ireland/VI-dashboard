"use client";

import { useState, useEffect } from "react";
import { ProgressBarText } from "./progress-bar-text";
import { ScorePill } from "./score-pill";
import { RatingStars } from "./rating-stars";
import { VerificationIndicator } from "./verify-badges";
import { useSector, getDefaultSubIndustryForSector } from "@/contexts/sector-context";
import { getSystemProgress, getSystemScores, getSectors, type SystemProgress, type SystemScores, type Sector } from "@/lib/api";

export function SystemDashboard() {
  const [progress, setProgress] = useState<SystemProgress | null>(null);
  const [scores, setScores] = useState<SystemScores | null>(null);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { setSelectedSectorId, setSelectedSubIndustryId } = useSector();

  useEffect(() => {
    async function fetchData() {
      try {
        const [progressData, scoresData, sectorsData] = await Promise.all([
          getSystemProgress(),
          getSystemScores(),
          getSectors(),
        ]);
        setProgress(progressData);
        setScores(scoresData);
        setSectors(sectorsData.sectors);
        console.log("Sectors data loaded:", sectorsData.sectors);
      } catch (error) {
        console.error("Error fetching system dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSectorClick = (sectorId: string) => {
    // Set the selected sector in context
    setSelectedSectorId(sectorId);
    
    // Get the default sub-industry for this sector
    const defaultSubIndustry = getDefaultSubIndustryForSector(sectorId);
    setSelectedSubIndustryId(defaultSubIndustry);
    
    // Smooth scroll to sub-industry dashboard
    const element = document.getElementById("sub-industry-dashboard");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus();
    }
  };

  if (loading) {
    return (
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">📊 System Dashboard</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Loading skeletons */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6">
              <div className="animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-mono font-normal text-measurement">SYSTEM MEASUREMENT PROTOCOL</h2>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Overall System Progress */}
          <div className="data-card p-6 space-y-6">
            <h3 className="text-xl font-mono font-light text-grey-700">SYSTEM PROGRESS INDICATORS</h3>
            
            {progress && (
              <div className="space-y-4">
                <ProgressBarText 
                  value={progress.sub_industries_completed}
                  max={progress.total_sub_industries}
                  label="Sub-Industries Completed"
                />
                <ProgressBarText 
                  value={progress.metrics_completed_pct}
                  label="Metrics Completed"
                />
                <ProgressBarText 
                  value={progress.global_coverage_pct}
                  label="Global Coverage (peer-reviewed)"
                />
              </div>
            )}
          </div>

          {/* Placeholder for layout */}
          <div></div>
        </div>

        {/* Aggregated Scores */}
        <div className="data-card p-6 space-y-6">
          <h3 className="text-xl font-mono font-light text-grey-700">AGGREGATED MEASUREMENT DATA</h3>
          
          <div className="overflow-x-auto">
            <table className="data-grid w-full text-sm font-mono">
              <thead>
                <tr className="border-b border-grey-300">
                  <th className="text-left py-3 font-normal text-grey-700">DIMENSION</th>
                  <th className="text-left py-3 font-normal text-grey-700">VALUE</th>
                  <th className="text-left py-3 font-normal text-grey-700">CLASSIFICATION</th>
                  <th className="text-left py-3 font-normal text-grey-700">COVERAGE</th>
                  <th className="text-left py-3 font-normal text-grey-700">CONFIDENCE</th>
                  <th className="text-left py-3 font-normal text-grey-700">HUMAN</th>
                  <th className="text-left py-3 font-normal text-grey-700">EXPERT</th>
                  <th className="text-left py-3 font-normal text-grey-700">RATING</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-grey-200 hover-accent">
                  <td className="py-3 font-normal text-measurement">INFRASTRUCTURE</td>
                  <td className="py-3">
                    <ScorePill score={58} classification="Medium" />
                  </td>
                  <td className="py-3 text-measurement">MEDIUM</td>
                  <td className="py-3 text-measurement">80%</td>
                  <td className="py-3 text-measurement">0.72</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={4} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '40ms'}}>
                  <td className="py-3 font-medium">Necessity</td>
                  <td className="py-3">
                    <ScorePill score={53} classification="Medium" />
                  </td>
                  <td className="py-3">Medium</td>
                  <td className="py-3">75%</td>
                  <td className="py-3">0.70</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={false} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={3} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '80ms'}}>
                  <td className="py-3 font-medium">Resource</td>
                  <td className="py-3">
                    <ScorePill score={46} classification="Medium/High" />
                  </td>
                  <td className="py-3">Medium/High</td>
                  <td className="py-3">68%</td>
                  <td className="py-3">0.65</td>
                  <td className="py-3">
                    <VerificationIndicator verified={false} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={false} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={2} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '120ms'}}>
                  <td className="py-3 font-medium">Artificial Support</td>
                  <td className="py-3">
                    <ScorePill score={64} classification="Low Viability" />
                  </td>
                  <td className="py-3">Low Viability</td>
                  <td className="py-3">82%</td>
                  <td className="py-3">0.78</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={4} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '160ms'}}>
                  <td className="py-3 font-medium">Ecological</td>
                  <td className="py-3">
                    <ScorePill score={79} classification="Low Viability" />
                  </td>
                  <td className="py-3">Low Viability</td>
                  <td className="py-3">90%</td>
                  <td className="py-3">0.85</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={5} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '200ms'}}>
                  <td className="py-3 font-medium">Economic</td>
                  <td className="py-3">
                    <ScorePill score={55} classification="Medium" />
                  </td>
                  <td className="py-3">Medium</td>
                  <td className="py-3">72%</td>
                  <td className="py-3">0.66</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={false} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={3} />
                  </td>
                </tr>
                <tr className="border-b border-border/50 animate-fade-in" style={{animationDelay: '240ms'}}>
                  <td className="py-3 font-medium">Emissions</td>
                  <td className="py-3">
                    <ScorePill score={82} classification="Low Viability" />
                  </td>
                  <td className="py-3">Low Viability</td>
                  <td className="py-3">95%</td>
                  <td className="py-3">0.88</td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="human" />
                  </td>
                  <td className="py-3">
                    <VerificationIndicator verified={true} type="expert" />
                  </td>
                  <td className="py-3">
                    <RatingStars rating={4} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="font-medium">Composite Global FVI Score:</span>
              <ScorePill 
                score={63}
                classification="Low Viability"
              />
            </div>
          </div>
        </div>

        {/* Sector Snapshot */}
        <div className="data-card p-6 space-y-6">
          <h3 className="text-xl font-mono font-light text-grey-700">SECTOR MEASUREMENT GRID</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className="bg-grey-100 hover:bg-grey-200 border border-grey-300 p-4 text-left transition-all duration-120 hover-accent focus-visible font-mono"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="space-y-2">
                  <div className="font-normal text-sm text-measurement text-grey-700">{sector.name.toUpperCase()}</div>
                  <ScorePill 
                    score={sector.score}
                    classification={sector.classification}
                    className="text-xs"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}