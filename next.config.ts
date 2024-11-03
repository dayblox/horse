import type { NextConfig } from "next"

export default {
  experimental: {
    reactCompiler: true,
    ppr: true,
    dynamicIO: true,
  },
} satisfies NextConfig
