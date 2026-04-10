'use client'

import { useState } from 'react'
import Link from 'next/link'
import { biologyJuniorData, biologyModule1Data, biologyModule2Data, biologyModule3Data } from '@/data/biology'

export default function BiologyPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>('junior')
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  const gradeDataMap: Record<string, any> = {
    junior: biologyJuniorData,
    'module1': biologyModule1Data,
    'module2': biologyModule2Data,
    'module3': biologyModule3Data,
  }

  const currentData = gradeDataMap[selectedGrade]

  const gradeOptions = [
    { id: 'junior', name: '初中生物', icon: '🏫' },
    { id: 'module1', name: '必修一：分子与细胞', icon: '🧬' },
    { id: 'module2', name: '必修二：遗传与进化', icon: '🧪' },
    { id: 'module3', name: '必修三：稳态与环境', icon: '🌿' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>🧬</span>
          <span>生物学习</span>
        </h1>
        <p className="text-gray-600 mt-2">
          从细胞到生态系统，探索生命科学的奥秘
        </p>
      </div>

      {/* 年级选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">选择课程</h2>
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
                  ? 'bg-green-500 text-white shadow-md'
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
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{chapter.icon}</span>
                    <span>{chapter.name}</span>
                    <span className="ml-auto">{selectedChapter === chapter.id ? '▼' : '▶'}</span>
                  </button>

                  {selectedChapter === chapter.id && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-200 pl-4">
                      {chapter.sections.map((section: any) => (
                        <button
                          key={section.id}
                          onClick={() => setSelectedSection(section.id === selectedSection ? null : section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                            selectedSection === section.id
                              ? 'bg-green-50 text-green-600 font-medium'
                              : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <span>{section.name}</span>
                          <span className="ml-auto text-xs opacity-60">
                            {selectedSection === section.id ? '▼' : '▶'}
                          </span>
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
          {selectedSection ? (
            <div className="bg-white rounded-xl shadow-md p-6">
              {currentData?.chapters
                .find((c: any) => c.id === selectedChapter)
                ?.sections.find((s: any) => s.id === selectedSection) && (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {currentData.chapters
                        .find((c: any) => c.id === selectedChapter)
                        ?.sections.find((s: any) => s.id === selectedSection)?.name}
                    </h2>
                    <p className="text-gray-500">
                      共 {currentData.chapters
                        .find((c: any) => c.id === selectedChapter)
                        ?.sections.find((s: any) => s.id === selectedSection)?.points.length} 个知识点
                    </p>
                  </div>

                  <div className="space-y-4">
                    {currentData.chapters
                      .find((c: any) => c.id === selectedChapter)
                      ?.sections.find((s: any) => s.id === selectedSection)
                      ?.points.map((point: any) => (
                        <div
                          key={point.id}
                          className={`p-5 rounded-xl border-2 cursor-pointer transition ${
                            selectedPoint === point.id
                              ? 'border-green-400 bg-green-50'
                              : 'border-gray-100 hover:border-green-200'
                          }`}
                          onClick={() => setSelectedPoint(point.id === selectedPoint ? null : point.id)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{point.title}</h3>
                          </div>

                          {selectedPoint === point.id && (
                            <div className="mt-4 space-y-4">
                              <div>
                                <p className="text-gray-700 leading-relaxed">{point.content}</p>
                              </div>
                              {point.example && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                  <p className="text-sm">
                                    <span className="font-semibold text-yellow-700">💡 示例：</span>
                                    <span className="text-gray-700">{point.example}</span>
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-6xl mb-4">🧬</div>
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {selectedChapter ? '选择一个知识点' : '选择一个章节'}
              </h2>
              <p className="text-gray-500">
                {selectedChapter
                  ? '点击左侧的知识点名称查看详细内容'
                  : '点击左侧的章节名称开始学习'}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
