import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  contactInfo,
  footerBrand,
  footerColumns,
  footerShapes,
  legal,
  socialLinks,
} from "@/data/footer";

function BrandMark() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center rounded-xl bg-white px-14 py-3.5 shadow-card"
      aria-label="Home"
    >
      <span className="font-heading text-base font-extrabold uppercase tracking-[0.28em] text-primary">
        {footerBrand.logoText}
      </span>
    </Link>
  );
}

const contactRows = [
  { key: "email", icon: contactInfo.icons.email, href: `mailto:${contactInfo.email}`, text: contactInfo.email, tile: "bg-white/15" },
  { key: "phone", icon: contactInfo.icons.phone, href: contactInfo.phoneHref, text: contactInfo.phone, tile: "bg-white/15" },
  { key: "support", icon: contactInfo.icons.support, lines: contactInfo.supportLines, tile: "bg-white/15" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[30px] bg-[linear-gradient(180deg,#9a3b13_0%,#bd4d1a_46%,#ee6c1b_100%)] text-white">
      {/* decorative SVG slots — swap the files in /public/images/ */}
      <Image
        src={footerShapes.top}
        alt=""
        aria-hidden="true"
        width={1920}
        height={240}
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none"
      />
      <Image
        src={footerShapes.bottom}
        alt=""
        aria-hidden="true"
        width={1920}
        height={200}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full select-none"
      />

      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-x-16">
          {/* Brand */}
          <div>
            <BrandMark />
            <p className="mt-6 max-w-[260px] text-sm font-semibold leading-relaxed text-white">
              {footerBrand.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/10 ring-1 ring-white/25 backdrop-blur-md transition-transform hover:-translate-y-0.5"
                  >
                    {/* icon slot — drop the full-colour brand SVG at {s.icon} */}
                    <Image
                      src={s.icon}
                      alt=""
                      aria-hidden="true"
                      width={28}
                      height={28}
                      unoptimized
                      className="h-7 w-7 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[17px] font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[17px] font-semibold text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4 text-sm font-semibold text-white">
              {contactRows.map((row) => (
                <li key={row.key} className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/30 ${row.tile}`}
                  >
                    {/* icon slot — drop the SVG at {row.icon} */}
                    <Image
                      src={row.icon}
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      
                      className="h-4 w-4 object-contain"
                    />
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="pt-1 transition-colors hover:text-white"
                    >
                      {row.text}
                    </a>
                  ) : (
                    <span className="pt-0.5">
                      {row.lines.map((line) => (
                        <span key={line} className="block leading-snug">
                          {line}
                        </span>
                      ))}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar — centred rounded pill */}
      <div className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto mb-5 flex h-[60px] w-full max-w-[1880px] items-center justify-center rounded-lg bg-[#82330C] px-4 text-center">
          <p className="text-xs font-semibold text-white">
            {legal.copyright} <span className="mx-1 text-white">|</span>{" "}
            {legal.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
