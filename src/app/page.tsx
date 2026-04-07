import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          🌱 欢迎来到 <span className="text-green-600">小小树</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          像小树一样茁壮成长 · 从小学到高中的免费学习平台
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/math" className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition shadow-lg">
            开始学习 📚
          </Link>
        </div>
      </section>

      {/* 学部选择 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          选择你的年级
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 小学 */}
          <Link href="/math?grade=primary" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group">
            <div className="text-6xl mb-4 text-center">🏫</div>
            <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">小学</h3>
            <p className="text-gray-600 text-center mb-4">1-6年级</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ 语文</li>
              <li>✅ 数学</li>
              <li>✅ 英语</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold group-hover:underline">进入学习 →</span>
            </div>
          </Link>

          {/* 初中 */}
          <Link href="/math?grade=middle" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border-2 border-green-400 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              推荐
            </div>
            <div className="text-6xl mb-4 text-center">🏢</div>
            <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">初中</h3>
            <p className="text-gray-600 text-center mb-4">7-9年级</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ 数学</li>
              <li>✅ 物理</li>
              <li>✅ 化学</li>
              <li>✅ 语文</li>
              <li>✅ 英语</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold group-hover:underline">进入学习 →</span>
            </div>
          </Link>

          {/* 高中 */}
          <Link href="/math?grade=high" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group">
            <div className="text-6xl mb-4 text-center">🎓</div>
            <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">高中</h3>
            <p className="text-gray-600 text-center mb-4">10-12年级</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ 数学</li>
              <li>✅ 物理</li>
              <li>✅ 化学</li>
              <li>✅ 语文</li>
              <li>✅ 英语</li>
              <li>✅ 生物</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold group-hover:underline">进入学习 →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 科目快速入口 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          快速选择科目
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/math" className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
            <div className="text-4xl mb-3">📐</div>
            <h3 className="text-xl font-bold mb-2">数学</h3>
            <p className="text-green-100 text-sm">代数 · 几何 · 函数</p>
          </Link>

          <Link href="/physics" className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">物理</h3>
            <p className="text-blue-100 text-sm">力学 · 电学 · 光学</p>
          </Link>

          <Link href="/chemistry" className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
            <div className="text-4xl mb-3">🧪</div>
            <h3 className="text-xl font-bold mb-2">化学</h3>
            <p className="text-purple-100 text-sm">元素 · 反应 · 周期表</p>
          </Link>

          <Link href="/methods" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold mb-2">学习方法</h3>
            <p className="text-orange-100 text-sm">技巧 · 记忆 · 效率</p>
          </Link>
        </div>
      </section>

      {/* 特点介绍 */}
      <section className="py-12 bg-white rounded-2xl mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          为什么选择小小树？
        </h2>
        <div className="grid md:grid-cols-4 gap-6 px-4">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-lg mb-2">完全免费</h3>
            <p className="text-gray-600">无需付费，所有资源永久免费</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="font-bold text-lg mb-2">同步教材</h3>
            <p className="text-gray-600">与人教版教材同步</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="font-bold text-lg mb-2">精准练习</h3>
            <p className="text-gray-600">针对性练习巩固知识点</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2">随时学习</h3>
            <p className="text-gray-600">支持手机、平板、电脑</p>
          </div>
        </div>
      </section>
    </main>
  )
}
