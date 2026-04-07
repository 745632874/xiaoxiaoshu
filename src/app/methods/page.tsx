'use client'

import { useState } from 'react'
import { studyMethods } from '@/data/studyMethods'
import Link from 'next/link'

export default function MethodsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('general')
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null)

  const currentMethods = studyMethods[selectedSubject as keyof typeof studyMethods]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>💡</span>
          <span>学习方法</span>
        </h1>
        <p className="text-gray-600 mt-2">科学的方法，让学习效率翻倍！</p>
      </div>

      {/* 科目选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">选择科目</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(studyMethods).map(([key, subject]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedSubject(key)
                setExpandedMethod(null)
              }}
              className={`px-5 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                selectedSubject === key
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{subject.icon}</span>
              <span>{subject.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 学习方法列表 */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span>{currentMethods.icon}</span>
          <span>{currentMethods.title}</span>
        </h2>

        {currentMethods.methods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* 方法标题 */}
            <button
              onClick={() => setExpandedMethod(expandedMethod === method.id ? null : method.id)}
              className="w-full p-6 text-left hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      适用: {method.适用}
                    </span>
                  </div>
                </div>
                <div className="ml-4 text-2xl text-gray-400">
                  {expandedMethod === method.id ? '📖' : '📄'}
                </div>
              </div>
            </button>

            {/* 展开内容 */}
            {expandedMethod === method.id && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <span>📝</span>
                  <span>具体步骤</span>
                </h4>
                <div className="space-y-3">
                  {method.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 学习技巧卡片 */}
      <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🚀</span>
          <span>高效学习小贴士</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <h4 className="font-bold mb-2">⏰ 黄金时间</h4>
            <p>早上6-8点、晚上6-8点是学习的最佳时段，记忆力最强！</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <h4 className="font-bold mb-2">🧠 交替学习</h4>
            <p>文理交替学习，每45分钟换一次科目，效率更高！</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <h4 className="font-bold mb-2">💤 充足睡眠</h4>
            <p>每天7-8小时睡眠，大脑整理记忆，学习效果翻倍！</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <h4 className="font-bold mb-2">📱 远离手机</h4>
            <p>学习时手机放远点，每分心一次，需要23分钟才能恢复！</p>
          </div>
        </div>
      </div>
    </main>
  )
}
