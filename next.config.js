/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const withFonts = require('next-fonts');

module.exports = withFonts({
  // Other configurations...
  webpack(config, options) {
    return config;
  },
});