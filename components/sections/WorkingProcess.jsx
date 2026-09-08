import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "@/components/ui/StepCard";
import Reveal from "@/components/ui/Reveal";
import { steps } from "@/data/steps";

export default function WorkingProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* top-right orange wash */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] rounded-full bg-[#f79b4e]/30 blur-[130px]" />
      {/* bottom-left orange wash */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#f79b4e]/22 blur-[130px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="WORKING PROCESS"
          title={
            <>
              Grow Your{" "}
              <span className="text-primary">Socials in 4 Simple</span> Steps
            </>
          }
          subtitle={
            <>
              A simple and efficient process designed to deliver fast and
              reliable results. Just place your order, and our system <br />{" "}
              will handle the rest to help grow your social media presence
              smoothly.
            </>
          }
        />

        {/* ---------- Cards ---------- */}
        <div className="relative mx-auto mt-14 w-full max-w-[1198px] lg:mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-x-[78px] lg:gap-y-0">
            {/* 01 */}
            <Reveal>
              <div className="flex justify-center lg:justify-end">
                <StepCard {...steps[0]} edge="right" dots="top-left" gradient />
              </div>
            </Reveal>

            {/* 02 */}
            <Reveal delay={0.1}>
              <div className="flex justify-center lg:justify-start">
                <StepCard {...steps[1]} edge="left" />
              </div>
            </Reveal>

            {/* 03 */}
            <Reveal delay={0.2}>
              <div className="flex justify-center lg:-mt-4 lg:justify-end">
                <StepCard {...steps[2]} edge="right" />
              </div>
            </Reveal>

            {/* 04 */}
            <Reveal delay={0.3}>
              <div className="flex justify-center lg:mt-12 lg:justify-start">
                <StepCard
                  {...steps[3]}
                  edge="left"
                  dots="bottom-right"
                  gradient
                />
              </div>
            </Reveal>
          </div>

          {/* ---------- Center logo ---------- */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <Image
              src="/logo-mark.png"
              alt=""
              width={180}
              height={180}
              className="h-[180px] w-[180px]
                         [filter:drop-shadow(0_0_18px_rgba(255,255,255,0.95))
                                 drop-shadow(0_0_45px_rgba(255,255,255,0.85))]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
