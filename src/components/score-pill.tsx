interface ScorePillProps {
  score: number;
  classification: string;
  className?: string;
}

export function ScorePill({ score, classification, className = "" }: ScorePillProps) {
  // Empirical measurement visualization - truth through data
  const getScoreIntensity = (score: number) => {
    if (score <= 40) return "text-muted-foreground"; // High viability - operational text
    if (score <= 60) return "text-grey-600";         // Medium - uncertainty 
    return "text-truth";                              // Low viability - absolute measurement
  };

  const getMeasurementBar = (score: number) => {
    if (score <= 40) return "bg-grey-400";
    if (score <= 60) return "bg-grey-500"; 
    return "bg-truth";
  };

  return (
    <div className={`flex items-center space-x-3 font-mono ${className}`}>
      <span className={`font-normal text-measurement ${getScoreIntensity(score)}`}>
        {score.toString().padStart(2, '0')}
      </span>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 ${getMeasurementBar(score)}`}></div>
        <span className="text-xs text-muted-foreground text-measurement">
          {classification.toUpperCase()}
        </span>
      </div>
    </div>
  );
}