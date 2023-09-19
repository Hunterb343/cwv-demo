/**
 * @typedef {import("next").NextConfig} NextConfig
 * @typedef {import("webpack").Configuration} WebpackConfig
 */
const path = require("path")

/** @type {NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@import "_modulePrepend.scss";`,
  },
  /** @param {WebpackConfig} config */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Remove next-js-image-loader

    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
