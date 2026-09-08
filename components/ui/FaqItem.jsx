"use client";

import { AnimatePresence, motion } from "framer-motion";

/**
 * L-shaped orange outline hugging the top-left corner.
 * A real bordered box (rounded to match the card) so it always aligns with the
 * card's corner; the mask fades the two far ends out.
 */
function CornerOutline() {
  const fade = "linear-gradient(135deg, #000 0%, #000 38%, transparent 72%)";
  return (
    <span
      aria-hidden="true"
      style={{ WebkitMaskImage: fade, maskImage: fade }}
      className="pointer-events-none absolute left-0 top-0 h-12 w-12 rounded-tl-2xl border-l-[1.5px] border-t-[1.5px] border-[#D55B02]/35 blur-[1px]"
    />
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
