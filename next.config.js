/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  googleFonts: {
    fonts: [
      {
        family: "Inter",
        weights: ["400", "700"],
      },
    ],
  },
  images: {
    domains: ["api.sceo.itcodes.ca"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sceo.itcodes.ca",
        port: "",
        pathname: "/image/resize",
      },
    ],
  },
};
module.exports = nextConfig;
