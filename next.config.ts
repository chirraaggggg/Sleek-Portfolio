import type { NextConfig } from "next"
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({ enabled: true })
    : (cfg: NextConfig) => cfg

export default withBundleAnalyzer({
  reactStrictMode: true,
  turbopack: {}
})
