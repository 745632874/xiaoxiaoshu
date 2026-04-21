import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES } from '../data/heroes'
import { FORMATIONS } from '../data/formations'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase()
      const results = HEROES.filter(h =>
        h.name.includes(q) ||
        h.country.includes(q) ||
        h.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 8)
      setFilteredHeroes(results)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }, [searchQuery])

  const topHeroes = [...HEROES].sort((a, b) => b.rating.score - a.rating.score).slice(0, 6)
  const topFormations = [...FORMATIONS].filter(f => !f.isKaihuang).sort((a, b) => b.rating.score - a.rating.score).slice(0, 4)
  const kaihuangTeams = FORMATIONS.filter(f => f.isKaihuang).sort((a, b) => b.rating.score - a.rating.score)

  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6' }

  return (
    <div>
      <Head>
        <title>率土百科 - 率土之滨游戏辅助网站</title>
        <meta name="description" content="率土之滨游戏辅助网站，武将库、阵容推荐、配将模拟器、战法解析、攻略大全" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>" />
      </Head>

      {/* 导航栏 */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            <span className="logo-icon">⚔️</span>
            <span>率土百科</span>
          </Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang">开荒模版</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            <Link href="/gacha">抽卡模拟</Link>
            <Link href="/ocr">战报分析</Link>
            <Link href="/tools">工具箱</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="hero gradient-bg-animated">
        <h1 className="hero-title" style={{ animation: 'fadeInDown 0.8s ease forwards' }}>
          ⚔️ 率土<span className="gradient-text-animated">百科</span>
        </h1>
        <p className="hero-subtitle" style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.2s' }}>
          最全面的率土之滨游戏辅助工具，武将数据、阵容推荐、配将模拟器、攻略大全
        </p>
        <div className="hero-badges" style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.4s' }}>
          <span className="badge">🏛️ {HEROES.length} 武将数据</span>
          <span className="badge">⛏️ {kaihuangTeams.length} 开荒模版</span>
          <span className="badge">⚔️ {FORMATIONS.filter(f => !f.isKaihuang).length} PVP阵容</span>
          <span className="badge">🎰 抽卡模拟</span>
          <span className="badge">📊 战报分析</span>
          <span className="badge">📖 持续更新</span>
        </div>
        <div className="hero-search" style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="搜索武将、阵容、战法..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowResults(true)}
          />
          <button onClick={() => window.location.href = `/heroes?q=${encodeURIComponent(searchQuery)}`}>
            🔍 搜索
          </button>
          {showResults && filteredHeroes.length > 0 && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
              background: 'var(--bg-card)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius)', marginTop: '4px', overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {filteredHeroes.map(hero => (
                <div key={hero.id} style={{
                  padding: '12px 16px', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)',
                  transition: 'background 0.2s'
                }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                  onClick={() => { window.location.href = `/heroes?q=${encodeURIComponent(hero.name)}` }}
                >
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '8px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontWeight: '700',
                    background: COUNTRY_COLOR[hero.country], color: '#fff', fontSize: '14px'
                  }}>{hero.country}</span>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '15px' }}>{hero.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {hero.tags.slice(0, 3).join(' / ')}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--orange)', fontWeight: '700', fontSize: '16px' }}>
                    {hero.rating.score}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container">
        {/* T0/T1阵容推荐 */}
        <div className="page-header" style={{ marginTop: '0' }}>
          <h2 className="page-title">🔥 强势阵容推荐</h2>
          <p className="page-desc">当前版本最强势的阵容配置，助你快速上分</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {topFormations.map(team => (
            <div key={team.id} className="formation-card">
              <div className="formation-card-header">
                <div className="formation-name">{team.name}</div>
                <span className="level-badge" style={{ background: { T0: '#e74c3c', T1: '#f39c12', T2: '#3498db', T3: '#95a5a6' }[team.level] }}>
                  {team.level}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {team.heroes.map(name => {
                  const hero = HEROES.find(h => h.name === name)
                  return (
                    <span key={name} style={{
                      padding: '5px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                      background: hero ? COUNTRY_COLOR[hero.country] : 'var(--primary)', color: '#fff'
                    }}>
                      {name}
                    </span>
                  )
                })}
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>胜率 {team.winRate}</span>
                <span>•</span>
                <span>{team.cost}成本</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: 'var(--orange)' }}>{team.rating.score}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '4px' }}>{team.rating.votes}票</span>
                </div>
                <Link href="/formations">
                  <button className="vote-btn">查看详情 →</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 热门武将 */}
        <div className="page-header">
          <h2 className="page-title">⭐ 热门武将排行榜</h2>
          <p className="page-desc">根据社区评分排列的最强武将</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {topHeroes.map((hero, i) => (
            <div key={hero.id} className="hero-card" style={{ '--hero-color': COUNTRY_COLOR[hero.country] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px' }}>
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                  </span>
                  <span className="hero-name">{hero.name}</span>
                </div>
                <span className="hero-cost" style={{ background: COUNTRY_COLOR[hero.country] }}>
                  {hero.cost}C
                </span>
              </div>
              <div className="hero-meta">
                <span className="tag tag-country" style={{ background: COUNTRY_COLOR[hero.country] }}>
                  {hero.country}国
                </span>
                <span className="tag tag-rarity" style={{
                  background: { star5: '#e74c3c', star4: '#f39c12', star3: '#95a5a6' }[hero.rarity]
                }}>
                  {'★'.repeat({ star5: 5, star4: 4, star3: 3 }[hero.rarity])}
                </span>
              </div>
              <div className="hero-stats">
                <div className="stat-item"><div className="stat-label">攻击</div><div className="stat-value">{hero.stats.atk}</div></div>
                <div className="stat-item"><div className="stat-label">防御</div><div className="stat-value">{hero.stats.def}</div></div>
                <div className="stat-item"><div className="stat-label">谋略</div><div className="stat-value">{hero.stats.intel}</div></div>
                <div className="stat-item"><div className="stat-label">速度</div><div className="stat-value">{hero.stats.spd}</div></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--orange)' }}>{hero.rating.score}</span>
                <Link href={`/heroes?q=${encodeURIComponent(hero.name)}`}>
                  <button className="vote-btn">查看详情 →</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 功能入口 */}
        <div className="page-header">
          <h2 className="page-title">🎮 功能导航</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            { href: '/heroes', icon: '🏛️', title: '武将库', desc: '43+武将数据' },
            { href: '/formations', icon: '⚔️', title: '阵容推荐', desc: 'T0-T3阵容排行' },
            { href: '/kaihuang', icon: '⛏️', title: '开荒模版', desc: '7大经典阵容' },
            { href: '/skills', icon: '📖', title: '战法解析', desc: '战法配置推荐' },
            { href: '/guides', icon: '📚', title: '攻略中心', desc: '新手到精通' },
            { href: '/simulator', icon: '🧮', title: '配将模拟器', desc: '自由搭配阵容' },
            { href: '/gacha', icon: '🎰', title: '抽卡模拟', desc: '测试欧气', isNew: true },
            { href: '/ocr', icon: '📊', title: '战报分析', desc: 'OCR识别分析', isNew: true },
            { href: '/community', icon: '⭐', title: '社区评分', desc: '玩家真实评价' },
          ].map((item, index) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <div className="card-hover" style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                padding: '20px', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer',
                position: 'relative', animation: `fadeInUp 0.6s ease forwards`,
                animationDelay: `${index * 0.05}s`, opacity: 0
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 168, 76, 0.15)' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {item.isNew && (
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '10px',
                    fontWeight: '700',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}>
                    NEW
                  </span>
                )}
                <div style={{ fontSize: '32px', marginBottom: '10px', animation: 'float 3s ease-in-out infinite' }}>{item.icon}</div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px' }}>
          <Link href="/heroes">武将库</Link> · <Link href="/formations">阵容</Link> · <Link href="/simulator">配将</Link> · <Link href="/feedback">反馈</Link>
        </p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科 · 仅供游戏参考</p>
      </div>

      {/* 移动端底部导航 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/gacha"><span>🎰</span><span>抽卡</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
