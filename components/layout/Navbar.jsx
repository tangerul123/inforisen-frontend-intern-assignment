"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, authLinks, brand } from "@/data/navigation";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { headerSlide } from "@/lib/motion";

function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 shadow-card ring-1 ring-black/5"
      aria-label={`${brand.name} home`}
    >
      <span className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
        {brand.logoText}
      </span>
    </Link>
  );
}

/** Inner row — reused by the transparent overlay bar and the sticky bar. */
function Bar({ onOpenMenu }) {
  return (
    <Container className="relative flex h-20 items-center justify-between gap-4">
      <Logo />

      <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : "text-[#393939]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-3 lg:flex">
        <Button variant="outline" href={authLinks.signIn.href} className="px-5 py-2.5">
          {authLinks.signIn.label}
        </Button>
        <Button href={authLinks.signUp.href} className="px-5 py-2.5">
          {authLinks.signUp.label}
        </Button>
      </div>

      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="inline-flex items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-black/5 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>
    </Container>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader(80);

  return (
    <>
      {/* Transparent bar — sits on the hero and scrolls away with the page */}
      <header className="absolute inset-x-0 top-0 z-40 bg-transparent">
        <Bar onOpenMenu={() => setOpen(true)} />
      </header>

      {/* Sticky bar — slides down past the fold, wearing the hero's warm tint */}
      <AnimatePresence>
        {scrolled && !open && (
          <motion.header
            key="sticky-nav"
            variants={headerSlide}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-primary-light/85 shadow-card backdrop-blur-md"
          >
            <Bar onOpenMenu={() => setOpen(true)} />
          </motion.header>
        )}
      </AnimatePresence>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
