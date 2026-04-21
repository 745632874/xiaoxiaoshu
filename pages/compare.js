import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { HEROES } from '../data/heroes'
import { COUNTER_RULES, getCounterInfo, getTypeCounter } from '../data/counters'

export default function Compare() {
  const [hero1, setHero1] = useState(null)
  const [hero2, setHero2] = useState(null)
  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')

  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6', '晋': '#f39c12', '汉': '#1abc9c' }

  const filteredHeroes1 = HEROES.filter(h => h.name.includes(search1)).slice(0, 8)
  const filteredHeroes2 = HEROES.filter(h => h.name.includes(search2)).slice(0, 8)

  const counter1 = hero1 ? getCounterInfo(hero1.name) : null
  const counter2 = hero2 ? getCounterInfo(hero2.name) : null

  return (
    <div>
      <Head>
        <title>武将对比 - 率土百科</title>
        <meta name="description" content="率土之滨武将对比工具，对比两个武将的属性、技能和克制关系" />
      </Head>

      {/* 导航栏 */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang">开荒模版</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '80px' }}>
        <div className="page-header">
          <h1 className="page-title">⚖️ 武将对比</h1>
          <p className="page-desc">选择两个武将，对比属性、技能和克制关系</p>
        </div>

        {/* 武将选择 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '20px', marginBottom: '40px', alignItems: 'start' }}>
          {/* 武将1 */}
          <div>
            <div style={{ marginBottom: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>武将 1</div>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="搜索武将..."
                value={search1}
                onChange={e => setSearch1(e.target.value)}
                style={{ width: '100%' }}
              />
              {search1 && filteredHeroes1.length > 0 && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
                  background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'
                }}>
                  {filteredHeroes1.map(h => (
                    <div key={h.id} style={{
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      display: 'flex', justifyContent: 'space-between'
                    }}
                      onClick={() => { setHero1(h); setSearch1('') }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontWeight: '600' }}>{h.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{h.country} {h.cost}C</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {hero1 && (
              <div className="hero-card" style={{ '--hero-color': COUNTRY_COLOR[hero1.country] }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>⚔️</div>
                  <div style={{ fontSize: '24px', fontWeight: '800' }}>{hero1.name}</div>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
                    <span style={{ background: COUNTRY_COLOR[hero1.country], color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px' }}>{hero1.country}</span>
                    <span style={{ background: '#e74c3c', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px' }}>{hero1.rarity === 'star5' ? '★★★★★' : '★★★★'}</span>
                  </div>
                </div>
                <div className="hero-stats">
                  <div className="stat-item"><div className="stat-label">攻击</div><div className="stat-value">{hero1.stats.atk}</div></div>
                  <div className="stat-item"><div className="stat-label">防御</div><div className="stat-value">{hero1.stats.def}</div></div>
                  <div className="stat-item"><div className="stat-label">谋略</div><div className="stat-value">{hero1.stats.intel}</div></div>
                  <div className="stat-item"><div className="stat-label">速度</div><div className="stat-value">{hero1.stats.spd}</div></div>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px' }}>标签</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {hero1.tags.map(tag => (
                      <span key={tag} style={{ background: 'var(--border)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* VS */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
            <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--primary)' }}>VS</div>
          </div>

          {/* 武将2 */}
          <div>
            <div style={{ marginBottom: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>武将 2</div>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="搜索武将..."
                value={search2}
                onChange={e => setSearch2(e.target.value)}
                style={{ width: '100%' }}
              />
              {search2 && filteredHeroes2.length > 0 && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
                  background: 'var(--bg-card)', border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'
                }}>
                  {filteredHeroes2.map(h => (
                    <div key={h.id} style={{
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      display: 'flex', justifyContent: 'space-between'
                    }}
                      onClick={() => { setHero2(h); setSearch2('') }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontWeight: '600' }}>{h.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{h.country} {h.cost}C</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {hero2 && (
              <div className="hero-card" style={{ '--hero-color': COUNTRY_COLOR[hero2.country] }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>⚔️</div>
                  <div style={{ fontSize: '24px', fontWeight: '800' }}>{hero2.name}</div>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
                    <span style={{ background: COUNTRY_COLOR[hero2.country], color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px' }}>{hero2.country}</span>
                    <span style={{ background: '#e74c3c', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px' }}>{hero2.rarity === 'star5' ? '★★★★★' : '★★★★'}</span>
                  </div>
                </div>
                <div className="hero-stats">
                  <div className="stat-item"><div className="stat-label">攻击</div><div className="stat-value">{hero2.stats.atk}</div></div>
                  <div className="stat-item"><div className="stat-label">防御</div><div className="stat-value">{hero2.stats.def}</div></div>
                  <div className="stat-item"><div className="stat-label">谋略</div><div className="stat-value">{hero2.stats.intel}</div></div>
                  <div className="stat-item"><div className="stat-label">速度</div><div className="stat-value">{hero2.stats.spd}</div></div>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px' }}>标签</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {hero2.tags.map(tag => (
                      <span key={tag} style={{ background: 'var(--border)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 对比结果 */}
        {hero1 && hero2 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>📊 属性对比</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {['atk', 'def', 'intel', 'spd'].map(stat => {
                const statName = { atk: '攻击', def: '防御', intel: '谋略', spd: '速度' }[stat]
                const v1 = hero1.stats[stat]
                const v2 = hero2.stats[stat]
                const diff = v1 - v2
                return (
                  <div key={stat} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', padding: '20px', textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>{statName}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: diff > 0 ? 'var(--primary)' : 'var(--text-primary)' }}>{v1}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hero1.name}</div>
                      </div>
                      <div style={{ fontSize: '20px', color: 'var(--text-muted)' }}>-</div>
                      <div>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: diff < 0 ? 'var(--primary)' : 'var(--text-primary)' }}>{v2}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hero2.name}</div>
                      </div>
                    </div>
                    {diff !== 0 && (
                      <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--primary)' }}>
                        {diff > 0 ? `${hero1.name} +${diff}` : `${hero2.name} +${Math.abs(diff)}`}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* 克制关系 */}
            {(counter1 || counter2) && (
              <div style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>⚔️ 克制关系</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {counter1 && (
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                      <div style={{ fontWeight: '700', marginBottom: '12px' }}>{hero1.name}</div>
                      {counter1.strong.includes(hero2.name) ? (
                        <div style={{ color: '#27ae60', fontWeight: '600' }}>✅ 克制 {hero2.name}</div>
                      ) : counter1.weak.includes(hero2.name) ? (
                        <div style={{ color: '#e74c3c', fontWeight: '600' }}>⚠️ 被 {hero2.name} 克制</div>
                      ) : (
                        <div style={{ color: 'var(--text-muted)' }}>无克制关系</div>
                      )}
                      <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>{counter1.reason}</div>
                    </div>
                  )}
                  {counter2 && (
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                      <div style={{ fontWeight: '700', marginBottom: '12px' }}>{hero2.name}</div>
                      {counter2.strong.includes(hero1.name) ? (
                        <div style={{ color: '#27ae60', fontWeight: '600' }}>✅ 克制 {hero1.name}</div>
                      ) : counter2.weak.includes(hero1.name) ? (
                        <div style={{ color: '#e74c3c', fontWeight: '600' }}>⚠️ 被 {hero1.name} 克制</div>
                      ) : (
                        <div style={{ color: 'var(--text-muted)' }}>无克制关系</div>
                      )}
                      <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>{counter2.reason}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
      </div>

      {/* 移动端底部导航 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/compare"><span>⚖️</span><span>对比</span></Link>
          <Link href="/kaihuang"><span>⛏️</span><span>开荒</span></Link>
        </div>
      </nav>
    </div>
  )
}
