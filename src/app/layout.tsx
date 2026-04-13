import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '小小树 - K12学习平台',
  description: '像小树一样茁壮成长',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-3xl">🌱</span>
                <span className="text-xl font-bold text-green-600">小小树</span>
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-green-600 transition">首页</Link>
                <Link href="/math" className="text-gray-600 hover:text-green-600 transition">数学</Link>
                <Link href="/chinese" className="text-gray-600 hover:text-green-600 transition">语文</Link>
                <Link href="/english" className="text-gray-600 hover:text-green-600 transition">英语</Link>
                <Link href="/physics" className="text-gray-600 hover:text-green-600 transition">物理</Link>
                <Link href="/chemistry" className="text-gray-600 hover:text-green-600 transition">化学</Link>
                <Link href="/biology" className="text-gray-600 hover:text-green-600 transition">生物</Link>
                <Link href="/methods" className="text-gray-600 hover:text-green-600 transition">学习方法</Link>
                <Link href="/knowledge-tree" className="text-gray-600 hover:text-green-600 transition">知识图谱</Link>
                <Link href="/jobs" className="text-gray-600 hover:text-green-600 transition">就业</Link>
                <Link href="/membership" className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600 transition">
                  🌱 会员
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-lg mb-2">🌱 小小树 - 像小树一样茁壮成长</p>
            <p className="text-gray-400 text-sm mb-4">免费学习资源平台</p>
            <Link href="/membership" className="text-green-400 hover:text-green-300 transition text-sm">
              开通会员 · AI答疑 ¥9.9/月 →
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
