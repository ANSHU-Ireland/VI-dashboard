import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  max?: number;
  className?: string;
}

export function RatingStars({ rating, max = 5, className = "" }: RatingStarsProps) {
  return (
    <div className={`flex items-center space-x-1 ${className}`} role="img" aria-label={`Rating: ${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => {
        const isFilled = index < rating;
        return (
          <button
            key={index}
            className="focus-visible p-0.5 rounded"
            aria-label={`Rating ${index + 1} of ${max}`}
            tabIndex={0}
          >
            <Star 
              className={`w-4 h-4 ${
                isFilled 
                  ? "fill-amber-500 text-amber-500" 
                  : "text-slate"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}