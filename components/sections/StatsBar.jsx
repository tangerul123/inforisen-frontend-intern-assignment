import Image from "next/image";
import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

export default function StatsBar() {
  return (
    <section className="relative z-10 bg-[#f7f7f7] py-14 lg:py-16">
      <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1}>
            <div
              className="group h-full rounded-2xl bg-white px-6 py-8 text-center
                         shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300
                         hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.09)]"
            >
              <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center">
                <Image
                  src={s.icon}
                  alt=""
                  width={144}
                  height={144}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="font-heading text-[28px] font-bold leading-none text-ink lg:text-[30px]">
                <Counter value={s.value} />
              </div>

              <div className="mt-2.5 text-sm font-medium text-primary">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}