"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/** Fade + rise into view once. */
export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
