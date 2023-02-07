/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  //basePath: isProd ? '/marketing-website' : undefined,
  //typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    //ignoreBuildErrors: true,
  //},
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: [
        {
          loader: require.resolve("file-loader"),
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: '${isServer ? "../" : ""}static/videos/',
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
