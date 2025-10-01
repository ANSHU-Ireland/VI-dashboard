interface ScorePillProps {
  score: number;
  classification: string;
  className?: string;
}

export function ScorePill({ score, classification, className = "" }: ScorePillProps) {
  const getScoreColor = (score: number) => {
    if (score <= 40) return "text-moss-600";
    if (score <= 60) return "text-amber-500";
    return "text-crimson-600";
  };

  const getDotColor = (score: number) => {
    if (score <= 40) return "bg-moss-600";
    if (score <= 60) return "bg-amber-500";
    return "bg-crimson-600";
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`font-mono font-bold ${getScoreColor(score)}`}>
        {score}
      </span>
      <div className={`w-2 h-2 rounded-full ${getDotColor(score)}`}></div>
      <span className="text-sm text-slate">{classification}</span>
    </div>
  );
}