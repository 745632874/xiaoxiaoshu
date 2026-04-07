'use client'

import { useState } from 'react'
import Link from 'next/link'
import { middlePhysicsData, highPhysicsData } from '@/data/physics'

export default function PhysicsPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>('middle')
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  const gradeDataMap: Record<string, any> = {
    middle: middlePhysicsData,
    high: highPhysicsData,
  }

  const currentData = gradeDataMap[selectedGrade]

  const gradeOptions = [
    { id: 'middle', name: '初中物理', icon: '🏫' },
    { id: 'high', name: '高中物理', icon: '🎓' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>⚡</span>
          <span>物理学习</span>
        </h1>
      </div>

      {/* 年级选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">选择年级</h2>
        <div className="flex flex-wrap gap-3">
          {gradeOptions.map((grade) => (
            <button
              key={grade.id}
              onClick={() => {
                setSelectedGrade(grade.id)
                setSelectedChapter(null)
                setSelectedSection(null)
                setSelectedPoint(null)
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                selectedGrade === grade.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{grade.icon}</span>
              <span>{grade.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 左侧：章节列表 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span>📚</span>
              <span>{currentData?.name}</span>
            </h2>
            <div className="space-y-3">
              {currentData?.chapters.map((chapter: any) => (
                <div key={chapter.id}>
                  <button
                    onClick={() => setSelectedChapter(chapter.id === selectedChapter ? null : chapter.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                      selectedChapter === chapter.id
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{chapter.icon}</span>
                    <span>{chapter.name}</span>
                    <span className="ml-auto">{selectedChapter === chapter.id ? '▼' : '▶'}</span>
                  </button>

                  {selectedChapter === chapter.id && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                      {chapter.sections.map((section: any) => (
                        <button
                          key={section.id}
                          onClick={() => setSelectedSection(section.id === selectedSection ? null : section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                            selectedSection === section.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <span>{section.name}</span>
                          <span className="ml-auto text-xs">{selectedSection === section.id ? '▼' : '▶'}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：知识点详情 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-8 min-h-[500px]">
            {!selectedSection ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-8xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  选择章节开始学习
                </h3>
                <p className="text-gray-500 max-w-md">
                  点击左侧章节名称<br />
                  然后选择小节查看知识点<br />
                  <span className="text-blue-600 font-semibold">💡 建议配合学习方法页面一起使用</span>
                </p>
                <Link
                  href="/methods"
                  className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  查看学习方法
                </Link>
              </div>
            ) : (
              (() => {
                let section = null
                let chapterName = ''
                for (const chapter of currentData.chapters) {
                  for (const sec of chapter.sections) {
                    if (sec.id === selectedSection) {
                      section = sec
                      chapterName = chapter.name
                      break
                    }
                  }
                  if (section) break
                }

                if (!section) return null

                return (
                  <div>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        📖 {section.name}
                      </h2>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {chapterName}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {section.points.map((point: any) => (
                        <div key={point.id} className="border-b border-gray-100 pb-6 last:border-0">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            📌 {point.title}
                          </h3>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-3">
                            <p className="text-gray-700 leading-relaxed">{point.content}</p>
                          </div>
                          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                            <p className="text-gray-700">
                              <span className="font-bold text-green-700">💡 举例：</span>
                              {point.example}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
