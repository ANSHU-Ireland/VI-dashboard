"use client";

import { useEffect, useState } from "react";

interface ProgressBarTextProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
  animated?: boolean;
}

export function ProgressBarText({ 
  value, 
  max = 100, 
  label, 
  className = "", 
  animated = true 
}: ProgressBarTextProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);
  const blocks = 20;
  const filledBlocks = Math.round((percentage / 100) * blocks);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setDisplayValue(value), 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const progressBar = "█".repeat(filledBlocks) + "░".repeat(blocks - filledBlocks);

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex justify-between items-center text-sm">
          <span>{label}</span>
          <span className="font-mono tabular-nums">{displayValue}{max === 100 ? '%' : ` of ${max}`}</span>
        </div>
      )}
      <div 
        className="font-mono text-sm leading-none tracking-wider"
        role="progressbar"
        aria-valuenow={displayValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `Progress: ${displayValue} of ${max}`}
      >
        <span className="text-slate">[</span>
        <span 
          className={`${
            percentage <= 40 ? 'text-moss-600' : 
            percentage <= 60 ? 'text-amber-500' : 
            'text-crimson-600'
          }`}
        >
          {progressBar}
        </span>
        <span className="text-slate">]</span>
      </div>
    </div>
  );
}