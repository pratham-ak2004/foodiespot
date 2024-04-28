/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.qantas.com",
      },
      {
        protocol: "https",
        hostname: "talktobirbal.com",
      },
    ],
  },
};

export default nextConfig;
