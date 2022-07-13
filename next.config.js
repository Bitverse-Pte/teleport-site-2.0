const withPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  publicRuntimeConfig: {
    BUILD_ENV: process.env.BUILD_ENV || 'development',
  },
}

module.exports = withVideos(
  withPlugins(
    [
      [withBundleAnalyzer],
      // your other plugins here
    ],
    nextConfig
  )
)
