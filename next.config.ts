/** @type {import('next').NextConfig} */
const nextConfig = {
   /* config options here */
   images: {
      domains: ["placeholder.svg"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
};

export default nextConfig;
