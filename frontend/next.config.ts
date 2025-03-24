import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
    domains: ["https://raw.githubusercontent.com/"]
	}
}
export default nextConfig