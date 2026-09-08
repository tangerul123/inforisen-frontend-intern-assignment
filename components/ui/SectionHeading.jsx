export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""}  ${className}`}>
      {eyebrow && (
        <div
          className={`${centered ? "mx-auto text-center" : ""} ${className}`}
        >
          {eyebrow && (
            <div
              className={`flex ${centered ? "justify-center" : "justify-start"}`}
            >
              <div className="inline-flex flex-col">
                <span className=" text-[15px] font-normal text-primary">
                  {eyebrow}
                </span>

                {/* underline matches text width */}
                <span className="relative mt-1.5 block h-[2px] w-full bg-primary">
                  <span className="absolute left-[65%] top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                </span>
              </div>
            </div>
          )}
          {/* ... rest */}
        </div>
      )}

      <h2 className="mt-5 font-heading text-[26px] font-semibold leading-[1.3] tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4  text-[12px] sm:text-[15px] leading-[1.7] text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
