/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@prisma/client"]
  },
  webpack: (config) => {
      config.node = {
        __dirname: true,
      };
    return config;
  },
};

module.exports = nextConfig;
