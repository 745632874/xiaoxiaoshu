import Head from 'next/head'
import Link from 'next/link'
import { HEROES } from '../data/heroes'
import { COUNTER_RULES, FORMATION_COUNTERS } from '../data/counters'

export default function Counters() {
  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6', '晋': '#f39c12', '汉': '#1abc9c' }

  const heroCounters = COUNTER_RULES.filter(r => r.hero)
  const typeCounters = COUNTER_RULES.filter(r => r.type)

  return (
    <div>
      <Head>
        <title>克制表 - 率土百科</title>
        <meta name="description" content="率土之滨武将克制关系表，了解哪些武将克制哪些武将" />
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
          <h1 className="page-title">⚔️ 克制关系表</h1>
          <p className="page-desc">了解武将和阵容的克制关系，搭配更合理的阵容</p>
        </div>

        {/* 类型克制 */}
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>📊 类型克制</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {typeCounters.map(rule => (
            <div key={rule.type} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '20px'
            }}>
              <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '12px' }}>{rule.name}</div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#27ae60', fontWeight: '600' }}>✅ 克制：</span>
                <span style={{ color: 'var(--text-muted)' }}>{rule.strong.join('、')}</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠️ 被克制：</span>
                <span style={{ color: 'var(--text-muted)' }}>{rule.weak.join('、')}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                {rule.description}
              </div>
            </div>
          ))}
        </div>

        {/* 武将克制 */}
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>⚔️ 武将克制</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {heroCounters.map(rule => {
            const hero = HEROES.find(h => h.name === rule.hero)
            return (
              <div key={rule.hero} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '8px',
                    background: hero ? COUNTRY_COLOR[hero.country] : '#666',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700'
                  }}>
                    {hero?.country || '?'}
                  </span>
                  <div style={{ fontWeight: '700', fontSize: '16px' }}>{rule.hero}</div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#27ae60', fontWeight: '600' }}>✅ 克制：</span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                    {rule.strong.map(name => (
                      <span key={name} style={{
                        background: '#27ae60', color: '#fff', padding: '3px 8px',
                        borderRadius: '10px', fontSize: '12px'
                      }}>{name}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠️ 被克制：</span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                    {rule.weak.map(name => (
                      <span key={name} style={{
                        background: '#e74c3c', color: '#fff', padding: '3px 8px',
                        borderRadius: '10px', fontSize: '12px'
                      }}>{name}</span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                  {rule.reason}
                </div>
              </div>
            )
          })}
        </div>

        {/* 阵容克制 */}
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>🎯 阵容克制</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {FORMATION_COUNTERS.map(rule => (
            <div key={rule.formation} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '20px'
            }}>
              <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '12px' }}>{rule.formation}</div>
              <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#27ae60', fontWeight: '600' }}>✅ 克制：</span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                  {rule.strong.map(name => (
                    <span key={name} style={{
                      background: '#27ae60', color: '#fff', padding: '3px 8px',
                      borderRadius: '10px', fontSize: '12px'
                    }}>{name}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠️ 被克制：</span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                  {rule.weak.map(name => (
                    <span key={name} style={{
                      background: '#e74c3c', color: '#fff', padding: '3px 8px',
                      borderRadius: '10px', fontSize: '12px'
                    }}>{name}</span>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                {rule.reason}
              </div>
            </div>
          ))}
        </div>

        {/* 使用提示 */}
        <div style={{
          background: 'rgba(201,168,76,0.1)', border: '1px solid var(--primary)',
          borderRadius: 'var(--radius)', padding: '20px', marginTop: '40px'
        }}>
          <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>💡 使用提示</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)' }}>
            <li>克制关系基于游戏机制，仅供参考</li>
            <li>实际战斗结果受红度、战法、阵容搭配影响</li>
            <li>建议根据对手阵容调整自己的武将选择</li>
            <li>点击 <Link href="/compare" style={{ color: 'var(--primary)' }}>武将对比</Link> 可详细对比两个武将</li>
          </ul>
        </div>
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
          <Link href="/counters"><span>⚔️</span><span>克制</span></Link>
          <Link href="/kaihuang"><span>⛏️</span><span>开荒</span></Link>
        </div>
      </nav>
    </div>
  )
}
