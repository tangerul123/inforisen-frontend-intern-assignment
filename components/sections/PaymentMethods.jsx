"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { paymentMethods } from "@/data/payments";

export default function PaymentMethods() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[100px]">
      <Container className="relative">
        <SectionHeading
          eyebrow="Payment Methods"
          title={
            <>
              Multiple Payment <span className="text-primary">Methods</span>
            </>
          }
          subtitle={
            <>
              We accept Visa, Mastercard, American Express, Bkash, Nagad,
              Rocket, and more, so you are never stuck at checkout. Deposits are
              instant, and you <br className="hidden lg:inline" /> can start with
              as little as $1, which means there is no reason to wait before
              placing your first order.
            </>
          }
        />
      </Container>

      {/* ---------- Mobile: simple centred icon grid ---------- */}
      <div className="mx-auto mt-10 flex max-w-sm flex-wrap justify-center gap-x-5 gap-y-6 px-4 sm:hidden">
        {paymentMethods.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 220, damping: 18 }}
            className="flex w-[72px] flex-col items-center gap-1.5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.10)] ring-1 ring-primary/15">
              <Image
                src={m.icon}
                alt={m.name}
                width={96}
                height={96}
                className="h-7 w-7 object-contain"
              />
            </div>
            <span className="text-center text-[11px] leading-tight text-muted">
              {m.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ---------- Desktop stage (map + arc of badges) ---------- */}
      <div className="relative mx-auto mt-12 hidden h-[380px] w-full max-w-[1439px] sm:block lg:h-[440px] xl:h-[480px]">
        <Image
          src="/images/world-map.png"
          alt=""
          fill
          className="object-cover object-top"
        />

        {/* white fade so the map dissolves at the bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.85)_55%,#ffffff_100%)]" />

        {/* concentric arcs */}
        <div className="pointer-events-none absolute left-1/2 top-[14%] w-[820px] max-w-[88%] -translate-x-1/2">
          <Image
            src="/images/payment-arcs.png"
            alt=""
            width={820}
            height={410}
            className="h-auto w-full"
          />
        </div>

        {/* payment badges */}
        {paymentMethods.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.1 + i * 0.09,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            whileHover={{ scale: 1.12, y: -6 }}
            style={{ left: m.left, top: m.top }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.10)] ring-1 ring-primary/15 sm:h-[58px] sm:w-[58px] lg:h-[68px] lg:w-[68px]">
              <Image
                src={m.icon}
                alt={m.name}
                width={96}
                height={96}
                className="h-6 w-6 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------- Wordmark ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto mt-8 w-full max-w-[1439px] select-none text-center font-heading text-[10vw] font-medium leading-none tracking-[-0.02em] text-[#fcf1e8] sm:mt-4 lg:text-[84px] xl:text-[128px]"
      >
        MULTIPLE PAYMENTS
      </div>
    </section>
  );
}
