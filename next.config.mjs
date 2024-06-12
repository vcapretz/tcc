/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pokemontcg.io",
      },
    ],
  },
};

export default nextConfig;
