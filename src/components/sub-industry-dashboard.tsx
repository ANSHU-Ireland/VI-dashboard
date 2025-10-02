"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressBarText } from "./progress-bar-text";
import { ScorePill } from "./score-pill";
import { RatingStars } from "./rating-stars";
import { VerifyBadges, VerificationIndicator } from "./verify-badges";
import { TimeseriesChart } from "./timeseries-chart";
import { 
  getSubIndustryProgress, 
  getSubIndustryScores, 
  getSubIndustryTimeSeries,
  type SubIndustryProgress, 
  type SubIndustryScores, 
  type TimeSeriesData 
} from "@/lib/api";

export function SubIndustryDashboard() {
  const [currentId, setCurrentId] = useState("coal");
  const [progress, setProgress] = useState<SubIndustryProgress | null>(null);
  const [scores, setScores] = useState<SubIndustryScores | null>(null);
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMethodology, setShowMethodology] = useState(false);

  const subIndustries = [
    { id: "coal", name: "Coal & Consumable Fuels" },
    { id: "ogx", name: "Oil & Gas Exploration" },
    { id: "utilities", name: "Electric Utilities" },
    { id: "renewable", name: "Renewable Energy" },
  ];

  const currentIndex = subIndustries.findIndex(s => s.id === currentId);
  const currentName = subIndustries[currentIndex]?.name || "Coal & Consumable Fuels";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [progressData, scoresData, timeSeriesData] = await Promise.all([
          getSubIndustryProgress(currentId),
          getSubIndustryScores(currentId),
          getSubIndustryTimeSeries(currentId),
        ]);
        setProgress(progressData);
        setScores(scoresData);
        setTimeSeries(timeSeriesData);
      } catch (error) {
        console.error("Error fetching sub-industry data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentId]);

  const navigateSubIndustry = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? Math.max(0, currentIndex - 1)
      : Math.min(subIndustries.length - 1, currentIndex + 1);
    setCurrentId(subIndustries[newIndex].id);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      navigateSubIndustry("prev");
    } else if (event.key === "ArrowRight") {
      navigateSubIndustry("next");
    }
  };

  return (
    <section id="sub-industry-dashboard" className="space-y-8" tabIndex={-1}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sub-Industry Dashboard</h2>
        
        {/* Navigation */}
        <div 
          className="flex items-center space-x-4"
          onKeyDown={handleKeyDown}
        >
          <button
            onClick={() => navigateSubIndustry("prev")}
            disabled={currentIndex === 0}
            className="p-2 rounded-xl hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible"
            aria-label="Previous sub-industry"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center min-w-[200px]">
            <div className="font-mono text-lg">
              ⬅ ◀ {currentName} ▶ ➡
            </div>
          </div>
          
          <button
            onClick={() => navigateSubIndustry("next")}
            disabled={currentIndex === subIndustries.length - 1}
            className="p-2 rounded-xl hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible"
            aria-label="Next sub-industry"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
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
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sub-Industry Overview */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Sub-Industry Overview</h3>
            <div className="space-y-2">
              <div>
                <span className="text-slate">Current Sub-Industry: </span>
                <span className="font-medium">{currentName}</span>
              </div>
              <div>
                <span className="text-slate">Sub-Industries Completed: </span>
                <span className="font-mono">1 of 163 or 419</span>
              </div>
            </div>
          </div>

          {/* Sub-Industry Progress */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold">Sub-Industry Progress</h3>
            {progress && (
              <div className="space-y-4">
                <ProgressBarText 
                  value={progress.metrics_completed_pct}
                  label={`Metric Completion (${currentName})`}
                />
                <ProgressBarText 
                  value={progress.coverage_pct}
                  label="Coverage (data confidence)"
                />
              </div>
            )}
          </div>

          {/* Scores */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold">Scores ({currentName})</h3>
            
            {scores && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-medium">Dimension</th>
                        <th className="text-left py-2 font-medium">Score</th>
                        <th className="text-left py-2 font-medium">Verify</th>
                        <th className="text-left py-2 font-medium">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scores.dimensions.map((dimension, index) => (
                        <tr 
                          key={dimension.name}
                          className="border-b border-border/50 animate-fade-in"
                          style={{ animationDelay: `${index * 40}ms` }}
                        >
                          <td className="py-3 font-medium">{dimension.name}</td>
                          <td className="py-3">
                            <ScorePill 
                              score={dimension.score} 
                              classification={dimension.classification} 
                            />
                          </td>
                          <td className="py-3">
                            <VerifyBadges 
                              humanCheck={dimension.human_check}
                              expertCheck={dimension.expert_check}
                            />
                          </td>
                          <td className="py-3">
                            <RatingStars rating={dimension.rating} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Composite FVI Score ({currentName}):</span>
                    <ScorePill 
                      score={scores.composite_score}
                      classification={scores.classification}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Time-Series Chart */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold">Time-Series ({currentName})</h3>
            {timeSeries && (
              <TimeseriesChart data={timeSeries.time_series} />
            )}
          </div>

          {/* Methodology Snapshot */}
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold">Methodology Snapshot</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-slate">•</span>
                  <div>
                    <span className="font-medium">Formulas:</span>
                    <span className="text-slate"> Weighted sums, normalization, component weighting per schema</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-slate">•</span>
                  <div>
                    <span className="font-medium">Weighting system:</span>
                    <span className="text-slate"> Explicit per sub-metric</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-slate">•</span>
                  <div>
                    <span className="font-medium">Normalizations:</span>
                    <span className="text-slate"> 0–100</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-slate">•</span>
                  <div>
                    <span className="font-medium">Validation:</span>
                    <span className="text-slate"> Sensitivity analysis and correlation checks</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-slate">•</span>
                  <div>
                    <span className="font-medium">Confidence:</span>
                    <span className="text-slate"> Each metric includes assumptions and known biases</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="text-cobalt-600 hover:underline focus-visible"
            >
              View full methodology
            </button>
          </div>
        </div>
      )}
    </section>
  );
}