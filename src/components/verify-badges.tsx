// Empirical verification indicators - measurement certainty visualization
interface VerificationIndicatorProps {
  verified: boolean;
  type: 'human' | 'expert';
}

export function VerificationIndicator({ verified, type }: VerificationIndicatorProps) {
  if (verified) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 bg-truth flex items-center justify-center">
          <div className="w-2 h-2 bg-void"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border border-grey-400 flex items-center justify-center">
        <div className="w-1 h-1 bg-grey-400"></div>
      </div>
    </div>
  );
}

// Legacy badges component - will phase out
interface VerifyBadgesProps {
  humanCheck: boolean;
  expertCheck: boolean;
  className?: string;
}

export function VerifyBadges({ humanCheck, expertCheck, className = "" }: VerifyBadgesProps) {
  return (
    <div className={`flex items-center space-x-2 font-mono ${className}`}>
      <div 
        className={`px-2 py-1 text-xs border text-measurement ${
          humanCheck 
            ? "bg-truth text-void border-grey-300" 
            : "bg-grey-100 text-grey-600 border-grey-300"
        }`}
        title={humanCheck ? "Human verification confirmed" : "Human verification pending"}
      >
        H
      </div>
      <div 
        className={`px-2 py-1 text-xs border text-measurement ${
          expertCheck 
            ? "bg-truth text-void border-grey-300" 
            : "bg-grey-100 text-grey-600 border-grey-300"
        }`}
        title={expertCheck ? "Expert verification confirmed" : "Expert verification pending"}
      >
        E
      </div>
    </div>
  );
}