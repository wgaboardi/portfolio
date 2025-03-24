import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
    domains: ["https://raw.githubusercontent.com/", 
			"https://github.com"
		]
	}
}
export default nextConfig