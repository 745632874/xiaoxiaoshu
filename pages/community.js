import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES } from '../data/heroes'
import { FORMATIONS } from '../data/formations'

const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6' }

export default function Community() {
  const [heroRatings, setHeroRatings] = useState({})
  const [teamRatings, setTeamRatings] = useState({})
  const [userRatings, setUserRatings] = useState({})
  const [tab, setTab] = useState('heroes')

  useEffect(() => {
    const h = JSON.parse(localStorage.getItem('hero_ratings') || '{}')
    const t = JSON.parse(localStorage.getItem('formation_ratings') || '{}')
    const u = JSON.parse(localStorage.getItem('user_ratings') || '{}')
    setHeroRatings(h)
    setTeamRatings(t)
    setUserRatings(u)
  }, [])

  const rateHero = (heroId, score) => {
    const newRatings = { ...heroRatings, [heroId]: score }
    setHeroRatings(newRatings)
    if (typeof window !== 'undefined') {
      localStorage.setItem('hero_ratings', JSON.stringify(newRatings))
    }
    showToast(`已为武将评分：${score}分`)
  }

  const rateTeam = (teamId, score) => {
    const newRatings = { ...teamRatings, [teamId]: score }
    setTeamRatings(newRatings)
    if (typeof window !== 'undefined') {
      localStorage.setItem('formation_ratings', JSON.stringify(newRatings))
    }
    showToast(`已为阵容评分：${score}分`)
  }

  const rateGeneral = (key, score) => {
    const newRatings = { ...userRatings, [key]: score }
    setUserRatings(newRatings)
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_ratings', JSON.stringify(newRatings))
    }
    showToast(`已评分：${score}分`)
  }

  const showToast = (msg) => {
    const t = document.createElement('div')
    t.className = 'toast'
    t.textContent = msg
    document.body.appendChild(t)
    setTimeout(() => t.classList.add('show'), 10)
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => document.body.removeChild(t), 300) }, 2500)
  }

  const sortedHeroes = [...HEROES].sort((a, b) => {
    const aScore = (a.rating.score * a.rating.votes + (heroRatings[a.id] || 0)) / (a.rating.votes + 1)
    const bScore = (b.rating.score * b.rating.votes + (heroRatings[b.id] || 0)) / (b.rating.votes + 1)
    return bScore - aScore
  })

  const topHeroes = sortedHeroes.slice(0, 20)

  return (
    <div>
      <Head><title>社区评分 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            <Link href="/community" className="active">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">⭐ 社区评分</h1>
          <p className="page-desc">玩家真实评分，你的每一票都很重要！</p>
        </div>

        <div className="tabs">
          <button className={`tab ${tab === 'heroes' ? 'active' : ''}`} onClick={() => setTab('heroes')}>🏛️ 武将评分</button>
          <button className={`tab ${tab === 'teams' ? 'active' : ''}`} onClick={() => setTab('teams')}>⚔️ 阵容评分</button>
          <button className={`tab ${tab === 'general' ? 'active' : ''}`} onClick={() => setTab('general')}>📊 趣味评分</button>
        </div>

        {tab === 'heroes' && (
          <div>
            <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
              {topHeroes.map((hero, i) => (
                <div key={hero.id} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                  padding: '14px 16px', transition: 'all 0.2s'
                }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={{ fontSize: '18px', width: '28px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`}
                  </span>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: COUNTRY_COLOR[hero.country], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#fff', flexShrink: 0 }}>
                    {hero.country}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '2px' }}>{hero.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {hero.tags.slice(0, 2).join(' / ')}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    {[1,2,3,4,5].map(score => (
                      <button key={score} onClick={() => rateHero(hero.id, score)}
                        style={{
                          width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border)',
                          background: (userRatings[`hero_${hero.id}`] || heroRatings[hero.id]) >= score ? 'var(--orange)' : 'transparent',
                          color: (userRatings[`hero_${hero.id}`] || heroRatings[hero.id]) >= score ? '#fff' : 'var(--text-muted)',
                          fontSize: '14px', cursor: 'pointer', transition: 'all 0.15s',
                          fontFamily: 'inherit'
                        }}
                        onMouseOver={e => { if (!(userRatings[`hero_${hero.id}`] || heroRatings[hero.id]) >= score) { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)' } }}
                        onMouseOut={e => { if (!(userRatings[`hero_${hero.id}`] || heroRatings[hero.id]) >= score) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' } }}>
                        ⭐
                      </button>
                    ))}
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--orange)', width: '40px', textAlign: 'right' }}>
                    {hero.rating.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'teams' && (
          <div>
            <div style={{ display: 'grid', gap: '8px' }}>
              {FORMATIONS.sort((a, b) => b.rating.score - a.rating.score).map(team => (
                <div key={team.id} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                  padding: '14px 16px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '4px' }}>{team.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {team.heroes.join(' + ')}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3,4,5].map(score => (
                      <button key={score} onClick={() => rateTeam(team.id, score)}
                        style={{
                          width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border)',
                          background: (userRatings[`team_${team.id}`] || teamRatings[team.id]) >= score ? 'var(--orange)' : 'transparent',
                          color: (userRatings[`team_${team.id}`] || teamRatings[team.id]) >= score ? '#fff' : 'var(--text-muted)',
                          fontSize: '14px', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit'
                        }}>
                        ⭐
                      </button>
                    ))}
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--orange)', width: '40px', textAlign: 'right' }}>
                    {team.rating.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'general' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { key: 'best_country', question: '最强国家是？', options: ['魏国', '蜀国', '吴国', '群雄'] },
              { key: 'best_waigua', question: '最强开荒武将是？', options: ['吕布', '马超', '刘备', '蔡文姬'] },
              { key: 'best_zuoyong', question: '最有用的辅助武将是？', options: ['刘备', '曹操', '孙权', '蔡文姬'] },
              { key: 'hardest_content', question: '最难的内容是？', options: ['城战', '深渊', '国战', '征服赛季'] },
              { key: 'pvp_favorite', question: '最喜欢的PVP内容？', options: ['1v1单挑', '3v3团战', '城战攻防', '野外遭遇'] },
            ].map(item => (
              <div key={item.key} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  {item.question}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.options.map((opt, idx) => (
                    <button key={opt} onClick={() => rateGeneral(`${item.key}_${idx}`, idx + 1)}
                      style={{
                        padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)',
                        background: userRatings[`${item.key}_${idx}`] ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
                        color: userRatings[`${item.key}_${idx}`] ? 'var(--primary)' : 'var(--text-secondary)',
                        fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', fontFamily: 'inherit',
                        fontWeight: userRatings[`${item.key}_${idx}`] ? '600' : '400'
                      }}>
                      {userRatings[`${item.key}_${idx}`] ? '✅ ' : '○ '}{opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
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
