/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // ✅ added youtube image host
      },
    ],
  },
};

module.exports = nextConfig;
