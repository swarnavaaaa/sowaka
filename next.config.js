/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
