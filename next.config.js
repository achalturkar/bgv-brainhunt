// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",

//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   webpack(config, { dev }) {
//     if (dev) {
//       config.watchOptions = {
//         poll: 2000,
//         aggregateTimeout: 300,
//         ignored: ["**/node_modules"],
//       };
//     }
//     return config;
//   },

//   onDemandEntries: {
//     maxInactiveAge: 10000,
//     pagesBufferLength: 2,
//   },

//   trailingSlash: true,
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;