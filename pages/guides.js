import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { GUIDES, GUIDE_CATEGORIES } from '../data/guides'

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [likedGuides, setLikedGuides] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('liked_guides') || '[]')
    }
    return []
  })
  const [guideLikes, setGuideLikes] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('guide_likes') || '{}')
      return stored
    }
    return {}
  })

  const categories = ['全部', ...Object.keys(GUIDE_CATEGORIES)]

  const filtered = activeCategory === '全部'
    ? GUIDES
    : GUIDES.filter(g => g.category === activeCategory)

  const handleLike = (guideId) => {
    if (likedGuides.includes(guideId)) return
    const newLiked = [...likedGuides, guideId]
    setLikedGuides(newLiked)
    if (typeof window !== 'undefined') {
      localStorage.setItem('liked_guides', JSON.stringify(newLiked))
      const likes = { ...guideLikes, [guideId]: (guideLikes[guideId] || 0) + 1 }
      setGuideLikes(likes)
      localStorage.setItem('guide_likes', JSON.stringify(likes))
    }
  }

  return (
    <div>
      <Head><title>攻略中心 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides" className="active">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📚 攻略中心</h1>
          <p className="page-desc">从新手入门到精通进阶，全方位游戏指南</p>
        </div>

        <div className="tabs">
          {categories.map(cat => (
            <button key={cat} className={`tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}>
              {cat === '全部' ? '🌐 全部' : `${GUIDE_CATEGORIES[cat]?.icon || ''} ${cat}`}
            </button>
          ))}
        </div>

        <div className="guides-grid">
          {filtered.map(guide => {
            const cat = GUIDE_CATEGORIES[guide.category]
            const likes = guide.likes + (guideLikes[guide.id] || 0)
            return (
              <div key={guide.id} className="guide-card" onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = `/guides/${guide.id}`
                }
              }}>
                <div className="guide-card-category" style={{
                  background: `${cat?.color}22`, color: cat?.color || 'var(--text-secondary)'
                }}>
                  {cat?.icon} {guide.category}
                </div>
                <div className="guide-card-title">{guide.title}</div>
                <p className="guide-card-summary">{guide.summary}</p>
                <div className="guide-card-footer">
                  <div>
                    <span className="guide-views">👁 {guide.views.toLocaleString()}</span>
                    <span className="guide-likes" style={{ marginLeft: '12px' }}>❤️ {likes.toLocaleString()}</span>
                  </div>
                  <button className={`like-btn ${likedGuides.includes(guide.id) ? 'liked' : ''}`}
                    onClick={e => { e.stopPropagation(); handleLike(guide.id) }}>
                    {likedGuides.includes(guide.id) ? '❤️ 已赞' : '🤍 点赞'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <div className="empty-state-text">暂无该分类攻略</div>
          </div>
        )}
      </div>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/simulator"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}
