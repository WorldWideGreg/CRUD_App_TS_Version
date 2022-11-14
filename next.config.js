/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  //add other configs here too
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};
module.exports = {
  reactStrictMode: false,
};
