/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: "http://localhost:3000",
  },
};

module.exports = nextConfig;
