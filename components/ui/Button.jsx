import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  // brand gradient — FF9243 → DD6017 → 983200
  primary:
    "btn-gradient text-white shadow-card hover:-translate-y-0.5 hover:brightness-105",
  outline:
  "border border-[#FF8D28] bg-white text-primary shadow-sm hover:bg-primary-light",
  ghost: "text-ink/80 hover:text-primary",
  white: "bg-white text-primary shadow-card hover:-translate-y-0.5",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
