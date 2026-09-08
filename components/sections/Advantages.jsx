import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AdvantageCard from "@/components/ui/AdvantageCard";
import Reveal from "@/components/ui/Reveal";
import { advantages } from "@/data/advantages";

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* decorative corner shapes — swap the SVGs at these paths */}
      <Image
        src="/images/advantages/shape-top-left-.svg"
        alt=""
        width={640}
        height={420}
        aria-hidden="true"
        priority={false}
        className="pointer-events-none absolute left-0 top-0 h-auto w-[46vw] max-w-[760px] select-none"
      />
      <Image
        src="/images/advantages/shape-bottom-right-.svg"
        alt=""
        width={640}
        height={420}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-auto w-[46vw] max-w-[640px] select-none"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="ADVANTAGES"
          title={
            <>
              Advantages of using{" "}
              <span className="text-primary">our panel services</span>
            </>
          }
          subtitle={
            <>
              Find clear and simple explanations to the most common questions
              about our services, payments,
              <br /> orders, and account management.
            </>
          }
        />

        <div className="relative mx-auto mt-14 max-w-[1120px]">
          {/* faint gradient cross between the four cards */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[38%] hidden h-[150px] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(247,137,60,0.35),transparent)] sm:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[43%] top-1/2 hidden h-px w-[150px] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(247,137,60,0.35),transparent)] sm:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-14">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <AdvantageCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
