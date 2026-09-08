export default function StepCard({
  index,
  title,
  description,
  edge = "right",
  dots = null,
  gradient = false,
}) {
  return (
    <div
      className="relative h-[330px] w-full max-w-[560px] overflow-hidden rounded-2xl p-8 lg:p-9"
      style={
        gradient
          ? {
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,165,74,0.14) 52%, rgba(255,255,255,0.5) 100%)",
            }
          : undefined
      }
    >
      {/* orange edge line */}
      <span
        className={`absolute inset-y-8 w-[2px] bg-[linear-gradient(180deg,transparent,#f7893c_45%,#f7893c_55%,transparent)] ${
          edge === "right" ? "right-0" : "left-0"
        }`}
      />

      {/* dotted decoration */}
      {dots && (
        <span
          className={`pointer-events-none absolute h-[86px] w-[70px] opacity-70
            [background-image:radial-gradient(#f7a86b_1px,transparent_1px)]
            [background-size:7px_7px]
            ${dots === "top-left" ? "left-2 top-2" : "bottom-3 right-3"}`}
        />
      )}

      <div className="relative">
        <div className="font-heading text-[40px] font-bold leading-none text-primary lg:text-[44px]">
          {index}
        </div>

        <h3 className="mt-3 font-heading text-[19px] font-semibold text-primary">
          {title}
        </h3>

        <p className="mt-5 max-w-[400px] text-[15px] leading-[1.65] text-ink/80">
          {description}
        </p>
      </div>
    </div>
  );
}