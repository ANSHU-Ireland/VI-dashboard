"use client";

import { useState, useEffect } from "react";
import { ProgressBarText } from "./progress-bar-text";
import { ScorePill } from "./score-pill";
import { RatingStars } from "./rating-stars";
import { VerifyBadges } from "./verify-badges";
import { getSystemProgress, getSystemScores, getSectors, type SystemProgress, type SystemScores, type Sector } from "@/lib/api";

export function SystemDashboard() {
  const [progress, setProgress] = useState<SystemProgress | null>(null);
  const [scores, setScores] = useState<SystemScores | null>(null);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error("Error fetching system dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSectorClick = (sectorId: string) => {
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
      <h2 className="text-2xl font-bold">📊 System Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall System Progress */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-semibold">Overall System Progress</h3>
          
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

        {/* Aggregated Scores */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-semibold">📊 Aggregated Scores (All Industries)</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium">Dimension</th>
                  <th className="text-left py-2 font-medium">Avg Score</th>
                  <th className="text-left py-2 font-medium">Classification</th>
                  <th className="text-left py-2 font-medium">Coverage</th>
                  <th className="text-left py-2 font-medium">Confidence</th>
                  <th className="text-left py-2 font-medium">Human ✅</th>
                  <th className="text-left py-2 font-medium">Expert 🧠</th>
                  <th className="text-left py-2 font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 animate-fade-in">
                  <td className="py-3 font-medium">Infrastructure</td>
                  <td className="py-3">
                    <ScorePill score={58} classification="Medium" />
                  </td>
                  <td className="py-3">Medium</td>
                  <td className="py-3">80%</td>
                  <td className="py-3">0.72</td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={true} />
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
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={false} />
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
                    <VerifyBadges humanCheck={false} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={false} />
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
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={true} />
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
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={true} />
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
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={false} />
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
                    <VerifyBadges humanCheck={true} expertCheck={false} />
                  </td>
                  <td className="py-3">
                    <VerifyBadges humanCheck={false} expertCheck={true} />
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
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-semibold">Sector Snapshot</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className="bg-muted/30 hover:bg-muted/50 border border-border rounded-xl p-4 text-left transition-all duration-200 hover:shadow-sm hover:translate-y-[-2px] focus-visible animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="space-y-2">
                  <div className="font-medium text-sm">{sector.name}</div>
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