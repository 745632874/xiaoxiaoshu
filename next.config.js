/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除export配置，使用Vercel原生Next.js部署模式
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
