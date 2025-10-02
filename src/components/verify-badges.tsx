import { Check, X, Brain } from "lucide-react";

interface VerifyBadgesProps {
  humanCheck: boolean;
  expertCheck: boolean;
  className?: string;
}

export function VerifyBadges({ humanCheck, expertCheck, className = "" }: VerifyBadgesProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div 
        className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs ${
          humanCheck 
            ? "bg-moss-600/10 text-moss-600" 
            : "bg-slate/10 text-slate"
        }`}
        title={humanCheck ? "Verified by community" : "Not verified by community"}
      >
        <Check className="w-3 h-3" />
        <span>Human</span>
      </div>
      <div 
        className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs ${
          expertCheck 
            ? "bg-cobalt-600/10 text-cobalt-600" 
            : "bg-slate/10 text-slate"
        }`}
        title={expertCheck ? "Verified by domain expert" : "Not verified by domain expert"}
      >
        <Brain className="w-3 h-3" />
        <span>Expert</span>
      </div>
    </div>
  );
}

// Simple verification indicator for table cells
interface VerificationIndicatorProps {
  verified: boolean;
  type: 'human' | 'expert';
}

export function VerificationIndicator({ verified, type }: VerificationIndicatorProps) {
  if (verified) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-moss-600 flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-slate/20 flex items-center justify-center">
        <X className="w-4 h-4 text-slate" />
      </div>
    </div>
  );
}