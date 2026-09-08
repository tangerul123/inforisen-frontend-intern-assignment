"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks, authLinks } from "@/data/navigation";

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="lg:hidden">
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-lg p-2 text-ink hover:bg-black/5"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="mt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-primary-light hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline" href={authLinks.signIn.href} onClick={onClose}>
                {authLinks.signIn.label}
              </Button>
              <Button href={authLinks.signUp.href} onClick={onClose}>
                {authLinks.signUp.label}
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
