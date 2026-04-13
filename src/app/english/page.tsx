'use client'

import { useState } from 'react'
import Link from 'next/link'
import { englishData } from '@/data/english'

export default function EnglishPage() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

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

  // 找到当前选中的章节、小节和知识点
  let currentChapter = null
  let currentSection = null
  let currentPoint = null
  let chapterName = ''
  let sectionName = ''

  if (selectedPoint) {
    for (const chapter of englishData.chapters) {
      for (const section of chapter.sections) {
        for (const p of section.points) {
          if (p.id === selectedPoint) {
            currentChapter = chapter
            currentSection = section
            currentPoint = p
            chapterName = chapter.name
            sectionName = section.name
            break
          }
        }
        if (currentPoint) break
      }
      if (currentPoint) break
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>📝</span>
          <span>英语基础知识</span>
        </h1>
        <p className="text-gray-500 mt-2">词汇辨析 · 语法基础 · 阅读技巧 · 写作句型</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 左侧：章节列表 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span>📚</span>
              <span>{englishData.name}</span>
            </h2>
            <div className="space-y-3">
              {englishData.chapters.map((chapter) => (
                <div key={chapter.id}>
                  <button
                    onClick={() => handleChapterClick(chapter.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                      selectedChapter === chapter.id
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{chapter.icon}</span>
                    <span>{chapter.name}</span>
                    <span className="ml-auto">
                      {selectedChapter === chapter.id ? '▼' : '▶'}
                    </span>
                  </button>

                  {/* 展开的小节 */}
                  {selectedChapter === chapter.id && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                      {chapter.sections.map((section) => (
                        <div key={section.id}>
                          <button
                            onClick={() => handleSectionClick(section.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                              selectedSection === section.id
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <span>{selectedSection === section.id ? '▼' : '▶'}</span>
                            <span>{section.name}</span>
                          </button>

                          {/* 展开的知识点列表 */}
                          {selectedSection === section.id && (
                            <div className="ml-4 mt-1 space-y-1">
                              {section.points.map((point) => (
                                <button
                                  key={point.id}
                                  onClick={() => handlePointClick(point.id)}
                                  className={`w-full text-left px-2 py-1.5 rounded transition text-xs ${
                                    selectedPoint === point.id
                                      ? 'bg-blue-100 text-blue-700 font-medium'
                                      : 'hover:bg-gray-50'
                                  }`}
                                >
                                  {point.title}
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
          <div className="bg-white rounded-xl shadow-md p-8">
            {currentPoint ? (
              <>
                {/* 面包屑 */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>{chapterName}</span>
                  <span>›</span>
                  <span>{sectionName}</span>
                </div>

                {/* 标题 */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {currentPoint.title}
                </h2>

                {/* 内容 */}
                <div className="prose max-w-none">
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <span>📖</span>
                      <span>知识点</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {currentPoint.content}
                    </p>
                  </div>

                  {currentPoint.example && (
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <span>💡</span>
                        <span>例子</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                        {currentPoint.example}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                  Select a knowledge point to start learning
                </h2>
                <p className="text-gray-400">
                  点击左侧目录，查看详细的英语知识
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
