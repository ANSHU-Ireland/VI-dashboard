interface ViabilityLegendProps {
  inline?: boolean;
  className?: string;
}

export function ViabilityLegend({ inline = false, className = "" }: ViabilityLegendProps) {
  const items = [
    { range: "0–40", label: "High Viability", color: "bg-moss-600" },
    { range: "40–60", label: "Medium", color: "bg-amber-500" },
    { range: "60–100", label: "Low", color: "bg-crimson-600" },
  ];

  if (inline) {
    return (
      <div className={`text-sm space-y-2 ${className}`}>
        {items.map((item) => (
          <div key={item.range} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span>{item.range} = {item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`bg-muted/30 rounded-2xl p-4 ${className}`}>
      <h3 className="font-semibold mb-3">Viability Scale</h3>
      <div className="flex flex-wrap gap-4 text-sm">
        {items.map((item) => (
          <div key={item.range} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span>
              {item.range} = {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}