import { Check, Brain } from "lucide-react";

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