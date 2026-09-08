export const footerBrand = {
  logoText: "LOGO",
  description:
    "SMM is Bangladesh's most trusted SMM panel. We offer fast, affordable social media growth for every platform, with full support for local payments like bKash and Nagad.",
};

export const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
  {
    title: "Services Pages",
    links: [
      { label: "Facebook SMM Panel", href: "/services/facebook" },
      { label: "Instagram SMM Panel", href: "/services/instagram" },
      { label: "YouTube SMM Panel", href: "/services/youtube" },
      { label: "TikTok SMM Panel", href: "/services/tiktok" },
      { label: "Telegram SMM Panel", href: "/services/telegram" },
      { label: "X-Twitter SMM Panel", href: "/services/x" },
    ],
  },
];

// Decorative SVG slots — drop your own artwork at these paths.
export const footerShapes = {
  top: "/images/footer-shape-top.svg",
  bottom: "/images/footer-shape-bottom.svg",
};

export const contactInfo = {
  email: "info@smmsun.com",
  phone: "+1 833 252 278",
  phoneHref: "tel:+1833252278",
  supportLines: ["Serving all of Bangladesh", "Support: 24/7"],
  // icon slots — replace the SVGs in /public/icons/contact/
  icons: {
    email: "/icons/contact/mail.svg",
    phone: "/icons/contact/phone.svg",
    support: "/icons/contact/support.svg",
  },
};

// icon = slot path in /public/icons/social/ ; color/gradient = tile background
export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "/icons/social/facebook.svg", color: "#1877F2" },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/icons/social/instagram.svg",
    gradient:
      "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
  { label: "YouTube", href: "https://youtube.com", icon: "/icons/social/youtube.svg", color: "#FF0000" },
  { label: "X (Twitter)", href: "https://x.com", icon: "/icons/social/x.svg", color: "#232323" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/icons/social/linkedin.svg", color: "#0A66C2" },
];

export const legal = {
  copyright: `© ${new Date().getFullYear()} SMM Limited. All Rights Reserved.`,
  note: "Operated under the Bangladesh ICT framework.",
};
