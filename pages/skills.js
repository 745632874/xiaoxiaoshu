import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { SKILLS, QUALITY_COLORS, SKILL_TYPES } from '../data/skills'

export default function Skills() {
  const [filterType, setFilterType] = useState('全部')
  const [filterQuality, setFilterQuality] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = SKILLS.filter(s => {
    if (filterType !== '全部' && s.type !== filterType) return false
    if (filterQuality !== '全部' && s.quality !== filterQuality) return false
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      return s.name.toLowerCase().includes(q) || s.tags.some(t => t.toLowerCase().includes(q))
    }
    return true
  })

  return (
    <div>
      <Head><title>战法解析 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang">开荒模版</Link>
            <Link href="/skills" className="active">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            
            
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📖 战法解析</h1>
          <p className="page-desc">共 {SKILLS.length} 个战法，指挥/主动/被动/追击全解析</p>
        </div>

        <div className="filter-bar">
          <span className="filter-label">类型：</span>
          {['全部', 'command', 'active', 'passive', 'chase'].map(t => (
            <button key={t} className={`filter-tag ${filterType === t ? 'active' : ''}`}
              onClick={() => setFilterType(t)}>
              {t === '全部' ? '全部' : SKILL_TYPES[t]?.name || t}
            </button>
          ))}
          <span className="filter-label" style={{ marginLeft: '16px' }}>品质：</span>
          {['全部', '极强', '强力', '一般'].map(q => (
            <button key={q} className={`filter-tag ${filterQuality === q ? 'active' : ''}`}
              onClick={() => setFilterQuality(q)}>
              {q}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="搜索战法名称或标签..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              flex: 1, padding: '12px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '14px',
              outline: 'none', fontFamily: 'inherit'
            }}
            onFocus={e => e.target.style.borderColor = 'var(--primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
          />
        </div>

        <div className="skills-grid">
          {filtered.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-card-name">{skill.name}</span>
                <span className="skill-type-badge" style={{ background: SKILL_TYPES[skill.type]?.color, color: '#fff' }}>
                  {SKILL_TYPES[skill.type]?.name || skill.type}
                </span>
              </div>
              <p className="skill-card-effect">{skill.effect}</p>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                {skill.tags.map(tag => (
                  <span key={tag} className="tag tag-type" style={{ fontSize: '11px', padding: '2px 8px' }}>{tag}</span>
                ))}
              </div>
              <div className="skill-card-footer">
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  适用: {skill.heroes.join('、')}
                </span>
                <span className="skill-quality" style={{ background: QUALITY_COLORS[skill.quality], color: '#fff' }}>
                  {skill.quality}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">📖</div>
            <div className="empty-state-text">没有找到符合条件的战法</div>
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
