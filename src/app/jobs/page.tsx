'use client'

import { useState } from 'react'
import Link from 'next/link'
import { jobMarketData } from '@/data/jobs'

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tech')
  const [searchKeyword, setSearchKeyword] = useState('')

  const { global, china, jobCategories, hotJobs, trends } = jobMarketData

  // 过滤岗位
  const filteredJobs = selectedCategory === 'all'
    ? jobCategories.flatMap(cat => cat.jobs)
    : jobCategories.find(cat => cat.id === selectedCategory)?.jobs || []

  const searchedJobs = searchKeyword
    ? filteredJobs.filter(job =>
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.title.includes(searchKeyword)
      )
    : filteredJobs

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* 顶部导航 */}
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>📊</span>
          <span>就业数据看板</span>
        </h1>
        <p className="text-gray-600 mt-2">实时更新 · 全球视野 · 职业趋势分析</p>
      </div>

      {/* 全球与中国就业数据 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* 全球数据 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{global.title}</h2>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              更新: {global.lastUpdated}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{global.data.unemployment.value}</div>
              <div className="text-sm text-blue-100 flex items-center gap-1">
                {global.data.unemployment.trend}
                <span className="ml-1">{global.data.unemployment.description}</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{global.data.workforce.value}</div>
              <div className="text-sm text-blue-100 flex items-center gap-1">
                {global.data.workforce.trend}
                <span className="ml-1">{global.data.workforce.description}</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 col-span-2">
              <div className="text-3xl font-bold">{global.data.remoteJobs.value}</div>
              <div className="text-sm text-blue-100 flex items-center gap-1">
                {global.data.remoteJobs.trend}
                <span className="ml-1">{global.data.remoteJobs.description}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">🔥 全球热门行业</h3>
            <div className="space-y-2">
              {global.data.topIndustries.map((industry, index) => (
                <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
                  <span>{industry.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-300 text-sm">{industry.growth}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      industry.demand === '极高' ? 'bg-red-500' :
                      industry.demand === '很高' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`}>
                      {industry.demand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中国数据 */}
        <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{china.title}</h2>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              更新: {china.lastUpdated}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{china.data.employed.value}</div>
              <div className="text-sm text-red-100 flex items-center gap-1">
                {china.data.employed.trend}
                <span className="ml-1">{china.data.employed.description}</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{china.data.unemployment.value}</div>
              <div className="text-sm text-red-100 flex items-center gap-1">
                {china.data.unemployment.trend}
                <span className="ml-1">{china.data.unemployment.description}</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{china.data.newJobs.value}</div>
              <div className="text-sm text-red-100">{china.data.newJobs.description}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold">{china.data.avgSalary.value}</div>
              <div className="text-sm text-red-100 flex items-center gap-1">
                {china.data.avgSalary.trend}
                <span className="ml-1">{china.data.avgSalary.description}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">💼 国内热门行业</h3>
            <div className="space-y-2">
              {china.data.industries.slice(0, 6).map((industry, index) => (
                <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
                  <span>{industry.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-300 text-sm">{industry.salary}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      industry.demand === '极高' ? 'bg-red-500' :
                      industry.demand === '很高' ? 'bg-orange-500' :
                      industry.demand === '高' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`}>
                      {industry.demand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 热门岗位TOP10 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span>🏆</span>
          <span>热门岗位 TOP 10</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {hotJobs.map((job) => (
            <div key={job.rank} className="border rounded-xl p-4 hover:shadow-lg transition">
              <div className={`text-3xl font-bold mb-2 ${
                job.rank === 1 ? 'text-yellow-500' :
                job.rank === 2 ? 'text-gray-400' :
                job.rank === 3 ? 'text-orange-400' : 'text-blue-400'
              }`}>
                #{job.rank}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{job.company}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold">{job.salary}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  {job.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 职业分类 */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 左侧：分类选择 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">职业分类</h2>

            {/* 搜索框 */}
            <div className="mb-4">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="搜索岗位..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* 分类列表 */}
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                  selectedCategory === 'all' ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                <span>📋</span>
                <span>全部职业</span>
              </button>
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition ${
                    selectedCategory === category.id ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：岗位列表 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {searchKeyword ? `搜索结果: "${searchKeyword}"` : '岗位列表'}
              <span className="text-gray-400 text-sm font-normal ml-2">
                ({searchedJobs.length}个岗位)
              </span>
            </h2>

            {searchedJobs.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <div className="text-6xl mb-4">🔍</div>
                <p>没有找到相关岗位</p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchedJobs.map((job, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-800">{job.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">{job.salary}</div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          job.demand === '极高' ? 'bg-red-100 text-red-700' :
                          job.demand === '很高' ? 'bg-orange-100 text-orange-700' :
                          job.demand === '高' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          需求: {job.demand}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 就业趋势分析 */}
      <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>📈</span>
          <span>2026年就业趋势分析</span>
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trends.map((trend, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-4">
              <div className="text-4xl mb-3">{trend.icon}</div>
              <h3 className="font-bold mb-2">{trend.title}</h3>
              <p className="text-sm text-purple-100 mb-3">{trend.description}</p>
              <div className="text-xs bg-white/20 rounded-lg px-3 py-2">
                {trend.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 数据来源 */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>数据来源: 国家统计局、国际劳工组织(ILO)、智联招聘、人社部等公开数据</p>
        <p className="mt-1">每月定期更新数据</p>
      </div>
    </main>
  )
}
