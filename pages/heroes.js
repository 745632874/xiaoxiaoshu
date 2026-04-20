import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES, COUNTRY_MAP, RARITY_MAP } from '../data/heroes'

export default function Heroes({ initialQuery }) {
  const [filterCountry, setFilterCountry] = useState('全部')
  const [filterRarity, setFilterRarity] = useState('全部')
  const [filterCost, setFilterCost] = useState('全部')
  const [searchQuery, setSearchQuery] = useState(initialQuery || '')
  const [filteredHeroes, setFilteredHeroes] = useState(HEROES)
  const [selectedHero, setSelectedHero] = useState(null)

  useEffect(() => {
    let heroes = [...HEROES]
    if (filterCountry !== '全部') heroes = heroes.filter(h => h.country === filterCountry)
    if (filterRarity !== '全部') heroes = heroes.filter(h => h.rarity === filterRarity)
    if (filterCost !== '全部') heroes = heroes.filter(h => h.cost === parseInt(filterCost))
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      heroes = heroes.filter(h =>
        h.name.toLowerCase().includes(q) ||
        h.tags.some(t => t.toLowerCase().includes(q)) ||
        h.description.toLowerCase().includes(q)
      )
    }
    setFilteredHeroes(heroes)
  }, [filterCountry, filterRarity, filterCost, searchQuery])

  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6' }

  return (
    <div>
      <Head><title>武将库 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes" className="active">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang">开荒模版</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🏛️ 武将库</h1>
          <p className="page-desc">共 {HEROES.length} 名武将，支持按国家、星级、COST筛选</p>
        </div>

        <div className="filter-bar">
          <span className="filter-label">国家：</span>
          {['全部', '魏', '蜀', '吴', '群'].map(c => (
            <button key={c} className={`filter-tag ${filterCountry === c ? 'active' : ''}`}
              onClick={() => setFilterCountry(c)}>
              {c === '全部' ? '🌐 全部' : c}
            </button>
          ))}
          <span className="filter-label" style={{ marginLeft: '16px' }}>星级：</span>
          {['全部', 'star5', 'star4', 'star3'].map(r => (
            <button key={r} className={`filter-tag ${filterRarity === r ? 'active' : ''}`}
              onClick={() => setFilterRarity(r)}>
              {r === '全部' ? '全部' : r === 'star5' ? '⭐⭐⭐⭐⭐' : r === 'star4' ? '⭐⭐⭐⭐' : '⭐⭐⭐'}
            </button>
          ))}
          <span className="filter-label" style={{ marginLeft: '16px' }}>COST：</span>
          {['全部', '3', '2', '1'].map(c => (
            <button key={c} className={`filter-tag ${filterCost === c ? 'active' : ''}`}
              onClick={() => setFilterCost(c)}>
              {c === '全部' ? '全部' : `${c}C`}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="搜索武将名称或标签..."
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

        <div className="heroes-grid">
          {filteredHeroes.map(hero => (
            <div key={hero.id} className="hero-card" style={{ '--hero-color': COUNTRY_COLOR[hero.country] }}
              onClick={() => setSelectedHero(hero)}>
              <div className="hero-card-header">
                <span className="hero-name">{hero.name}</span>
                <span className="hero-cost" style={{ background: COUNTRY_COLOR[hero.country] }}>{hero.cost}C</span>
              </div>
              <div className="hero-meta">
                <span className="tag tag-country" style={{ background: COUNTRY_COLOR[hero.country] }}>{hero.country}国</span>
                <span className="tag tag-rarity" style={{
                  background: { star5: '#e74c3c', star4: '#f39c12', star3: '#95a5a6' }[hero.rarity]
                }}>
                  {'★'.repeat({ star5: 5, star4: 4, star3: 3 }[hero.rarity])}
                </span>
                {hero.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="tag tag-type">{tag}</span>
                ))}
              </div>
              <div className="hero-stats">
                <div className="stat-item"><div className="stat-label">攻击</div><div className="stat-value">{hero.stats.atk}</div></div>
                <div className="stat-item"><div className="stat-label">防御</div><div className="stat-value">{hero.stats.def}</div></div>
                <div className="stat-item"><div className="stat-label">谋略</div><div className="stat-value">{hero.stats.intel}</div></div>
                <div className="stat-item"><div className="stat-label">速度</div><div className="stat-value">{hero.stats.spd}</div></div>
              </div>
              <div className="hero-desc">{hero.description}</div>
              <div className="hero-rating">
                <div>
                  <span className="rating-score">{hero.rating.score}</span>
                  <span className="rating-votes"> ({hero.rating.votes}票)</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>点击查看详情 →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredHeroes.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <div className="empty-state-text">没有找到符合条件的武将</div>
            <div className="empty-state-sub">试试调整筛选条件</div>
          </div>
        )}
      </div>

      {/* 武将详情弹窗 */}
      {selectedHero && (
        <div className="modal-overlay active" onClick={e => e.target === e.currentTarget && setSelectedHero(null)}>
          <div className="modal">
            <div className="modal-header">
              <div>
                <span className="modal-title" style={{ color: COUNTRY_COLOR[selectedHero.country] }}>{selectedHero.name}</span>
                <div style={{ marginTop: '4px', display: 'flex', gap: '8px' }}>
                  <span style={{
                    padding: '2px 10px', borderRadius: '10px', fontSize: '13px', fontWeight: '600',
                    background: COUNTRY_COLOR[selectedHero.country], color: '#fff'
                  }}>{selectedHero.country}国</span>
                  <span style={{ padding: '2px 10px', borderRadius: '10px', fontSize: '13px', background: 'var(--primary)', color: '#000', fontWeight: '700' }}>
                    {selectedHero.cost}C
                  </span>
                  <span style={{
                    padding: '2px 10px', borderRadius: '10px', fontSize: '13px',
                    background: { star5: '#e74c3c', star4: '#f39c12', star3: '#95a5a6' }[selectedHero.rarity], color: '#fff', fontWeight: '700'
                  }}>
                    {'★'.repeat({ star5: 5, star4: 4, star3: 3 }[selectedHero.rarity])}
                  </span>
                </div>
              </div>
              <button className="modal-close" onClick={() => setSelectedHero(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="hero-detail-section">
                <h3>基础属性</h3>
                <div className="hero-detail-stats">
                  <div className="detail-stat">
                    <div className="detail-stat-label">攻击</div>
                    <div className="detail-stat-value" style={{ color: '#e74c3c' }}>{selectedHero.stats.atk}</div>
                  </div>
                  <div className="detail-stat">
                    <div className="detail-stat-label">防御</div>
                    <div className="detail-stat-value" style={{ color: '#3498db' }}>{selectedHero.stats.def}</div>
                  </div>
                  <div className="detail-stat">
                    <div className="detail-stat-label">谋略</div>
                    <div className="detail-stat-value" style={{ color: '#9b59b6' }}>{selectedHero.stats.intel}</div>
                  </div>
                  <div className="detail-stat">
                    <div className="detail-stat-label">速度</div>
                    <div className="detail-stat-value" style={{ color: '#27ae60' }}>{selectedHero.stats.spd}</div>
                  </div>
                </div>
              </div>

              <div className="hero-detail-section">
                <h3>武将标签</h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {selectedHero.tags.map(tag => (
                    <span key={tag} className="tag tag-type" style={{ padding: '4px 12px' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="hero-detail-section">
                <h3>武将介绍</h3>
                <p className="hero-detail-desc">{selectedHero.description}</p>
              </div>

              <div className="hero-detail-section">
                <h3>社区评分</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800', color: 'var(--orange)' }}>{selectedHero.rating.score}</span>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>综合评分</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{selectedHero.rating.votes} 位玩家评分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes" className="active"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/simulator"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}

Heroes.getInitialProps = async ({ query }) => {
  return { initialQuery: query.q || '' }
}
