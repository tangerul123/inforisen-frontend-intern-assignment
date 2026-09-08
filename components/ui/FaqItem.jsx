"use client";

import { AnimatePresence, motion } from "framer-motion";

/** Faint L-shaped orange outline hugging the top-left corner, fading out at the ends. */
function CornerOutline() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-14 w-14"
    >
      <defs>
        <linearGradient id="faqCorner" x1="56" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D55B02" stopOpacity="0" />
          <stop offset="0.4" stopColor="#D55B02" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#D55B02" stopOpacity="0.55" />
          <stop offset="1" stopColor="#D55B02" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M55 1 H17 A16 16 0 0 0 1 17 V55"
        stroke="url(#faqCorner)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FaqItem({ question, answer, open, onToggle }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-colors duration-300 ${
        open ? "bg-[#D55B02] text-white" : "bg-[#f4f4f4] text-ink"
      }`}
    >
      {!open && <CornerOutline />}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`text-[14px] font-semibold leading-snug ${
            open ? "text-white" : "text-ink"
          }`}
        >
          {question}
        </span>

        {/* right-corner toggle icon — drop your SVG at /public/icons/faq-toggle.svg */}
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ">
          <img
            src="/icons/faq-toggle.svg"
            alt=""
            aria-hidden="true"
            className={`h-[7px] w-[12px] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[13.5px] leading-[1.7] text-white/90">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
