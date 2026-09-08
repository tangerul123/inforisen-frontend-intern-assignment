/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow <Image> to serve local SVG assets (decorative shapes, brand icons).
    // Safe here: assets are first-party and served with a locked-down CSP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
