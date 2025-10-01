"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TimeseriesChartProps {
  data: Array<{
    year: number;
    score: number;
  }>;
  className?: string;
}

export function TimeseriesChart({ data, className = "" }: TimeseriesChartProps) {
  const getStrokeColor = (score: number) => {
    if (score <= 40) return "#16A34A"; // moss-600
    if (score <= 60) return "#F59E0B"; // amber-500
    return "#DC2626"; // crimson-600
  };

  // Use the latest score for the line color
  const latestScore = data[data.length - 1]?.score || 0;
  const strokeColor = getStrokeColor(latestScore);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              stroke="var(--slate)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="var(--slate)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                fontSize: "0.875rem",
              }}
              labelStyle={{ color: "var(--ink)" }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke={strokeColor}
              strokeWidth={3}
              dot={{
                fill: strokeColor,
                strokeWidth: 0,
                r: 4,
              }}
              activeDot={{
                r: 6,
                fill: strokeColor,
              }}
              animationDuration={400}
              animationBegin={100}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Primitive mode toggle placeholder */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <button className="text-sm text-slate hover:text-cobalt-600 transition-colors">
          Toggle "Primitive mode"
        </button>
        <div className="text-xs text-slate">
          Data points: {data.length}
        </div>
      </div>
      
      {/* Screen reader accessible data table */}
      <div className="sr-only">
        <table>
          <caption>Time series data for viability scores</caption>
          <thead>
            <tr>
              <th>Year</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((point) => (
              <tr key={point.year}>
                <td>{point.year}</td>
                <td>{point.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}