"use client";

import Image from "next/image";

const HEX = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

export default function ServiceTab({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-primary/20
        px-2.5 py-2 text-[12px] font-medium transition-all duration-200 active:scale-[0.98]
        sm:gap-2.5 sm:px-3.5 sm:py-3 sm:text-[14px] lg:text-[15px]
        ${
          active
            ? "btn-gradient text-white shadow-[0_6px_18px_rgba(255,107,44,0.3)]"
            : "bg-[#fdf1e8] text-ink hover:bg-[#fbe4d3]"
        }`}
    >
      {/* hexagon icon */}
      <span
        className={`grid shrink-0 place-items-center ${active ? "bg-white" : "bg-primary"}`}
        style={{ ...HEX, width: 28, height: 32.4 }}
      >
        <span
          className="grid place-items-center bg-white"
          style={{ ...HEX, width: 26, height: 30 }}
        >
          <Image
            src={icon}
            alt=""
            width={64}
            height={64}
            className="h-4 w-4 object-contain sm:h-[18px] sm:w-[18px]"
          />
        </span>
      </span>

      <span className="min-w-0 text-center leading-tight break-words">{label}</span>
    </button>
  );
}
