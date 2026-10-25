/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
