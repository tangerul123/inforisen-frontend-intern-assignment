import Image from "next/image";

export default function AdvantageCard({ icon, title, description, highlight }) {
  return (
    <div className="group h-full rounded-[20px] bg-white p-7 shadow-[0_16px_44px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_54px_rgba(0,0,0,0.10)] lg:p-9">
      <div className="flex h-14 w-14 items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={112}
          height={112}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-5 font-heading text-[19px] font-bold text-ink">
        {title}
      </h3>

      <p className="mt-3 text-[14.5px] leading-[1.7] text-muted">
        {description}
      </p>

      {highlight && (
        <p className="mt-2 text-[14.5px] font-semibold text-[#0EA672]">
          {highlight}
        </p>
      )}
    </div>
  );
}