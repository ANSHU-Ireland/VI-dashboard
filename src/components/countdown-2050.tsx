"use client";

import { useState, useEffect } from "react";

interface Countdown2050Props {
  target: string;
}

export function Countdown2050({ target }: Countdown2050Props) {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(target);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ years, months, days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="space-y-4">
      <div className="text-2xl font-mono">
        ⏳ Countdown to 2050:
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-lg">
        <div className="bg-card border border-border rounded-xl px-4 py-2">
          <span className="font-mono font-bold text-2xl tabular-nums transition-all duration-300 ease-out">
            {timeLeft.years}
          </span>
          <span className="text-slate ml-1 text-sm">years</span>
        </div>
        <div className="bg-card border border-border rounded-xl px-4 py-2">
          <span className="font-mono font-bold text-2xl tabular-nums transition-all duration-300 ease-out">
            {timeLeft.months}
          </span>
          <span className="text-slate ml-1 text-sm">months</span>
        </div>
        <div className="bg-card border border-border rounded-xl px-4 py-2">
          <span className="font-mono font-bold text-2xl tabular-nums transition-all duration-300 ease-out">
            {timeLeft.days}
          </span>
          <span className="text-slate ml-1 text-sm">days</span>
        </div>
        <div className="bg-card border border-border rounded-xl px-3 py-2">
          <span className="font-mono font-bold text-xl tabular-nums transition-all duration-300 ease-out">
            {timeLeft.hours}
          </span>
          <span className="text-slate ml-1 text-xs">hrs</span>
        </div>
        <div className="bg-card border border-border rounded-xl px-3 py-2">
          <span className="font-mono font-bold text-xl tabular-nums transition-all duration-300 ease-out">
            {timeLeft.minutes}
          </span>
          <span className="text-slate ml-1 text-xs">min</span>
        </div>
        <div className="bg-card border border-border rounded-xl px-3 py-2">
          <span className="font-mono font-bold text-xl tabular-nums transition-all duration-300 ease-out animate-pulse">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-slate ml-1 text-xs">sec</span>
        </div>
      </div>
    </div>
  );
}