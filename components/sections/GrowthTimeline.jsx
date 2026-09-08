import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { growthTimeline, growthNote } from "@/data/growth";
function Row({ index, label, value, last }) {
  return (
    <div className="relative min-h-[175px] w-full rounded-2xl bg-[#f5f5f5] px-5 py-6">
      {/* number badge */}
      <span className="absolute left-[14px] top-[14px] flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f7893c_0%,transparent_35%,transparent_65%,#f7893c_100%)] p-px">
        <span className="flex h-full w-full items-center justify-center rounded-[15px] bg-white text-[17px] font-semibold text-primary">
          {index}
        </span>
      </span>

      <h4 className="ml-[62px] font-heading text-[21px] font-bold leading-snug text-primary">
        {label}
      </h4>

      <div className="relative ml-[62px] mt-4">
        {!last && (
          <>
            {/* dot at the start of this row */}
            <span className="absolute -left-[50px] top-[4px] h-[11px] w-[11px] rounded-full bg-primary" />
            {/* dashed line down to the next row */}
            <span className="absolute -left-[45.5px] top-[15px] h-[calc(100%+72px)] w-px border-l-[1.5px] border-dashed border-primary/80" />
            {/* dot at the bottom end of the line */}
            <span className="absolute z-10 -left-[50px] top-[120px] h-[11px] w-[11px] rounded-full bg-primary" />
          </>
        )}

        <p className="text-[14px] leading-[1.65] text-ink/75">{value}</p>
      </div>
    </div>
  );
}
export default function GrowthTimeline() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="GROWTH"
          title={
            <>
              Growing on Social Media in{" "}
              <span className="text-primary">Bangladesh</span>
            </>
          }
          subtitle={
            <>
              The smartest way to grow is by combining SMM support with real
              content. You use SMM at the beginning <br /> for momentum, then
              let organic growth take over.
            </>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {growthTimeline.map((phase, i) => (
            <Reveal key={phase.id} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-primary/45 bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                {/* period pill — sits at the very top */}
                <div className="flex justify-center">
                  <span className="btn-gradient inline-flex rounded-lg px-[66px] py-2.5 text-[14px] font-medium text-white">
                    {phase.period}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <Row index="01" label="What You Do" value={phase.whatYouDo} />
                  <Row
                    index="02"
                    label="Why it Works"
                    value={phase.whyItWorks}
                  />
                  <Row
                    index="03"
                    label="Estimated Cost/ Time"
                    value={phase.cost}
                    last
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
