import { Star } from "lucide-react";

export default function RatingBadge({ score = "4.8" }) {
  return (
    <div className="flex items-center gap-2">
      {/* Trustpilot-style green star */}
      <Star className="h-[18px] w-[18px] fill-[#00b67a] text-[#00b67a]" />

      <div className="flex gap-[3px]">
        {Array.from({ length: 5 }).map((_, i) => {
          const isLast = i === 4;
          return (
            <span
              key={i}
              className="flex h-[17px] w-[17px] items-center justify-center rounded-[2px] bg-primary"
            >
              {isLast ? (
                // half star — left side white, right side hidden
                <span className="relative block h-[10px] w-[10px]">
                  <span className="absolute inset-0 w-1/2 overflow-hidden">
                    <Star className="h-[10px] w-[10px] fill-white text-white" />
                  </span>
                </span>
              ) : (
                <Star className="h-[10px] w-[10px] fill-white text-white" />
              )}
            </span>
          );
        })}
      </div>

      <p className="text-sm text-ink">
        <span className="font-bold">Excellent</span> {score} out of 5
      </p>
    </div>
  );
}