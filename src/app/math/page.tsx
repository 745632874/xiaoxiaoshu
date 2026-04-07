'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { gradeOptions, grade7Data, grade8Data, grade9Data } from '@/data/math'

export default function MathPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>('g7')
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  const gradeDataMap: Record<string, any> = {
    g7: grade7Data,
    g8: grade8Data,
    g9: grade9Data,
  }

  const currentData = gradeDataMap[selectedGrade]

  useEffect(() => {
    // 重置选择状态
    setSelectedChapter(null)
    setSelectedSection(null)
    setSelectedPoint(null)
  }, [selectedGrade])

  const handleChapterClick = (chapterId: string) => {
    setSelectedChapter(chapterId === selectedChapter ? null : chapterId)
    setSelectedSection(null)
    setSelectedPoint(null)
  }

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId === selectedSection ? null : sectionId)
    setSelectedPoint(null)
  }

  const handlePointClick = (pointId: string) => {
    setSelectedPoint(pointId === selectedPoint ? null : pointId)
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>📐</span>
          <span>初中数学</span>
        </h1>
      </div>

      {/* 年级选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">选择年级</h2>
        <div className="flex flex-wrap gap-3">
          {gradeOptions.middle.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGrade(grade.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedGrade === grade.id
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {grade.name}
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
              <span>{currentData?.name || '七年级数学'}</span>
            </h2>
            <div className="space-y-3">
              {currentData?.chapters.map((chapter: any) => (
                <div key={chapter.id}>
                  <button
                    onClick={() => handleChapterClick(chapter.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                      selectedChapter === chapter.id
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{chapter.icon}</span>
                    <span>{chapter.name}</span>
                    <span className="ml-auto">
                      {selectedChapter === chapter.id ? '▼' : '▶'}
                    </span>
                  </button>

                  {/* 展开的章节内容 */}
                  {selectedChapter === chapter.id && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-200 pl-4">
                      {chapter.sections.map((section: any) => (
                        <div key={section.id}>
                          <button
                            onClick={() => handleSectionClick(section.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                              selectedSection === section.id
                                ? 'bg-green-50 text-green-600 font-medium'
                                : 'hover:bg-gray-50 text-gray-600'
                            }`}
                          >
                            <span>{section.name}</span>
                            <span className="ml-auto text-xs">
                              {selectedSection === section.id ? '▼' : '▶'}
                            </span>
                          </button>

                          {/* 展开的小节内容 */}
                          {selectedSection === section.id && (
                            <div className="ml-3 mt-1 space-y-1">
                              {section.points.map((point: any) => (
                                <button
                                  key={point.id}
                                  onClick={() => handlePointClick(point.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition ${
                                    selectedPoint === point.id
                                      ? 'bg-green-100 text-green-700'
                                      : 'hover:bg-gray-50 text-gray-500'
                                  }`}
                                >
                                  📌 {point.title}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
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
            {!selectedPoint ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-8xl mb-6">🌳</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  欢迎来到小小树学习平台
                </h3>
                <p className="text-gray-500 max-w-md">
                  选择左边的年级和章节<br />
                  然后点击具体的知识点开始学习<br />
                  <span className="text-green-600 font-semibold">📖 建议从七年级上册开始</span>
                </p>
              </div>
            ) : (
              (() => {
                // 找到选中的知识点
                let point = null
                let sectionName = ''
                let chapterName = ''

                for (const chapter of currentData.chapters) {
                  for (const section of chapter.sections) {
                    for (const p of section.points) {
                      if (p.id === selectedPoint) {
                        point = p
                        sectionName = section.name
                        chapterName = chapter.name
                        break
                      }
                    }
                    if (point) break
                  }
                  if (point) break
                }

                if (!point) return null

                return (
                  <div>
                    {/* 面包屑 */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <Link href="/math" className="hover:text-green-600">数学</Link>
                      <span>›</span>
                      <span>{chapterName}</span>
                      <span>›</span>
                      <span>{sectionName}</span>
                    </div>

                    {/* 知识点标题 */}
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        📌 {point.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {chapterName}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {sectionName}
                        </span>
                      </div>
                    </div>

                    {/* 知识点内容 */}
                    <div className="prose max-w-none">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span>📖</span>
                          <span>知识点</span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {point.content}
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span>💡</span>
                          <span>举例说明</span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {point.example}
                        </p>
                      </div>
                    </div>

                    {/* 底部操作 */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                      <button
                        onClick={() => setSelectedPoint(null)}
                        className="text-gray-600 hover:text-gray-800 transition"
                      >
                        ← 返回概览
                      </button>
                      <button
                        onClick={() => alert('练习功能开发中...')}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
                      >
                        📝 做练习
                      </button>
                    </div>
                  </div>
                )
              })()
            )}
          </div>

          {/* 学习小贴士 */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-md p-6 mt-6 text-white">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span>💡</span>
              <span>学习小贴士</span>
            </h3>
            <ul className="space-y-2 text-green-50">
              <li>• 先理解概念，再记忆公式</li>
              <li>• 认真看例子，试着举一反三</li>
              <li>• 及时做练习巩固所学知识</li>
              <li>• 遇到不懂的问题，可以多看几遍</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
