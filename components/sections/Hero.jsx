import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import RatingBadge from "@/components/ui/RatingBadge";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* top-right orange glow */}
      <div className="pointer-events-none absolute -right-[41px] -top-32 h-[620px] w-[1393px] rounded-full bg-[#f5a45c]/35 blur-[130px]" />
      {/* bottom-left orange glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-[31px] h-[520px] w-[520px] rounded-full bg-[#f5a45c]/35 blur-[130px]" />

      <Container className="relative grid items-center gap-10 pb-24 pt-32 lg:grid-cols-2 lg:pb-28 lg:pt-36">
        <Reveal>
          <RatingBadge score="4.8" />

          <h1 className="mt-6 font-heading text-[32px] font-bold leading-[1.25] tracking-tight text-ink sm:text-[2.6rem] lg:text-[45px]">
            <span className="text-primary">Best SMM Panel</span>
            <br />
            in Bangladesh – <span className="text-primary">Fast ,Safe</span>&
            <br className="hidden sm:block" /> Growth in Social Media.
          </h1>

          <p className="mt-6 max-w-[600px] text-[15px] leading-[1.75] text-[#5A5A5A]">
            SMM is Bangladesh's most reliable & cheap SMM panel for real social
            media <br/> growth. We built this platform for Bangladeshi businesses,
            creators, and agencies. You get fast delivery, safe methods, and
            followers that actually stay. No fake bots. No account risks. Just
            real results. Most panels chase big numbers. We focus on keeping
            those numbers. You get retention guarantees, delivery control, and
            long-term credibility.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#services" variant="outline" size="lg">
              View Services
            </Button>
            <Button href="#signup" variant="primary" size="lg">
              Create an Account
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <Image
            src="/images/hero.png"
            alt="Social media growth illustration"
            width={731}
            height={655}
            priority
            className="mx-auto h-auto w-full max-w-[600px]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
