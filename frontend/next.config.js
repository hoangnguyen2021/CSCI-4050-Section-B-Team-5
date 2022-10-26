/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "amc-theatres-res.cloudinary.com",
      "static1.colliderimages.com",
      "www.thx.com",
      "www.siff.net",
      "image.cnbcfm.com",
      "hips.hearstapps.com",
      "spheracinema.com",
    ],
  },
};

module.exports = nextConfig;
