import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
    transpilePackages: ["three"],
    turbopack: { root: path.join(__dirname, ".") },
    async rewrites() {
        return [
            {
                source: "/api/script.js",
                destination: "https://rybbit.pompy.dev/api/script.js",
            },
            {
                source: "/api/track",
                destination: "https://rybbit.pompy.dev/api/track",
            },
        ]
    },
}

export default nextConfig
