"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServiceTab from "@/components/ui/ServiceTab";
import { serviceTabs } from "@/data/services";

export default function Services() {
  const [active, setActive] = useState(serviceTabs[0].key);
  const tab = serviceTabs.find((t) => t.key === active) ?? serviceTabs[0];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 lg:pt-24 lg:pb-[60px] "
    >
      <Container>
        <SectionHeading
          eyebrow="our services"
          title={
            <>
              Powerful <span className="text-primary">SMM Services</span> for
              Fast Growth
            </>
          }
          subtitle={
            <>
              Explore our comprehensive range of social media marketing services
              designed to help you grow your presence across all major{" "}
              <br className="hidden lg:inline" />
              platforms. From Facebook to TikTok. got you covered.
            </>
          }
        />

        {/* ---------- Tabs ---------- */}
        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
          {serviceTabs.map((t) => (
            <ServiceTab
              key={t.key}
              label={t.name}
              icon={t.icon}
              active={t.key === active}
              onClick={() => setActive(t.key)}
            />
          ))}
        </div>

        {/* ---------- Panel ---------- */}
        <div className="relative mt-9">
          {/* floating 3D icon on the left edge */}
          <div className="pointer-events-none absolute -left-53 -bottom-20 hidden -translate-y-1/2 xl:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: -8 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={tab.floatIcon}
                  alt=""
                  width={220}
                  height={220}
                  className="h-[130px] w-[130px] drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-primary/60 bg-white p-4 sm:p-5 lg:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10"
              >
                {/* image */}
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[linear-gradient(180deg,#fffaf6_0%,#fbdcc4_100%)] lg:aspect-auto">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* content */}
                <div className="lg:py-2">
                  <h3 className="font-heading text-[20px] font-bold text-primary sm:text-[26px]">
                    {tab.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7] text-ink/85 sm:mt-4 sm:text-[15px]">
                    {tab.blurb}
                  </p>

                  <ul className="mt-5 space-y-4 sm:mt-6">
                    {tab.points.map((p, i) => (
                      <motion.li
                        key={p.label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
                        className="flex items-start gap-3.5"
                      >
                        <span
                          className="btn-gradient mt-0.5 flex h-[30px] w-[27px] shrink-0 items-center justify-center
             text-[11px] font-semibold text-white
             [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[13.5px] leading-[1.6] text-ink sm:text-[15px]">
                          <span className="text-primary">{p.label}</span>{" "}
                          {p.text}
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  <Button href="#signup" className="mt-7">
                    View {tab.name} Services
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
