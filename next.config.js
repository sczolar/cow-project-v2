/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: "http://localhost:3000",
    mongodburl: "mongodb+srv://sczolar:hacker2K@cluster0.1qfy5.mongodb.net/cowbs?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
