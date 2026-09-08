"use client";

import useCountUp from "@/hooks/useCountUp";

export default function Counter({ value }) {
  const isNumber = typeof value === "number";
  const { ref, count } = useCountUp(isNumber ? value : 0);

  return (
    <span ref={ref}>
      {isNumber ? count.toLocaleString("en-US") : value}
    </span>
  );
}