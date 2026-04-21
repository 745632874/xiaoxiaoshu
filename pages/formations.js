import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FORMATIONS, LEVEL_COLORS } from '../data/formations'
import { HEROES } from '../data/heroes'

export default function Formations() {
  const [filterCountry, setFilterCountry] = useState('全部')
  const [filterLevel, setFilterLevel] = useState('全部')
  const [votedTeams, setVotedTeams] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('voted_teams') || '[]')
    }
    return []
  })

  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6' }

  const filtered = FORMATIONS.filter(t => {
    if (filterCountry !== '全部' && t.country !== filterCountry) return false
    if (filterLevel !== '全部' && t.level !== filterLevel) return false
    return true
  }).sort((a, b) => b.rating.score - a.rating.score)

  const handleVote = (teamId) => {
    if (votedTeams.includes(teamId)) return
    const newVoted = [...votedTeams, teamId]
    setVotedTeams(newVoted)
    if (typeof window !== 'undefined') {
      localStorage.setItem('voted_teams', JSON.stringify(newVoted))
      const data = JSON.parse(localStorage.getItem('formations_data') || '{}')
      if (!data[teamId]) data[teamId] = { votes: 0, score: 0 }
      data[teamId].votes = (data[teamId].votes || 0) + 1
      localStorage.setItem('formations_data', JSON.stringify(data))
    }
    alert('投票成功！感谢你的支持！')
  }

  return (
    <div>
      <Head><title>阵容推荐 - 率土百科</title></Head>
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

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">⚔️ 阵容推荐</h1>
          <p className="page-desc">共 {FORMATIONS.length} 套阵容，按强度排行，支持投票</p>
        </div>

        <div className="filter-bar">
          <span className="filter-label">国家：</span>
          {['全部', '魏', '蜀', '吴', '群'].map(c => (
            <button key={c} className={`filter-tag ${filterCountry === c ? 'active' : ''}`}
              onClick={() => setFilterCountry(c)}>
              {c === '全部' ? '🌐 全部' : c}
            </button>
          ))}
          <span className="filter-label" style={{ marginLeft: '16px' }}>评级：</span>
          {['全部', 'T0', 'T1', 'T2', 'T3'].map(l => (
            <button key={l} className={`filter-tag ${filterLevel === l ? 'active' : ''}`}
              onClick={() => setFilterLevel(l)}>
              {l}
            </button>
          ))}
        </div>

        <div className="formations-grid">
          {filtered.map(team => (
            <div key={team.id} className="formation-card">
              <div className="formation-card-header">
                <span className="formation-name">{team.name}</span>
                <span className="level-badge" style={{ background: LEVEL_COLORS[team.level] }}>{team.level}</span>
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

              <div className="formation-stats">
                <div className="formation-stat">
                  <div className="formation-stat-label">评级</div>
                  <div className="formation-stat-value" style={{ color: LEVEL_COLORS[team.level] }}>{team.level}</div>
                </div>
                <div className="formation-stat">
                  <div className="formation-stat-label">胜率</div>
                  <div className="formation-stat-value" style={{ color: 'var(--green)' }}>{team.winRate}</div>
                </div>
                <div className="formation-stat">
                  <div className="formation-stat-label">成本</div>
                  <div className="formation-stat-value">{team.cost}</div>
                </div>
                <div className="formation-stat">
                  <div className="formation-stat-label">得票</div>
                  <div className="formation-stat-value">{team.rating.votes}</div>
                </div>
              </div>

              <div className="formation-tags">
                {team.tags.map(tag => (
                  <span key={tag} className="tag tag-type">{tag}</span>
                ))}
                <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', background: COUNTRY_COLOR[team.country], color: '#fff' }}>
                  {team.country}国
                </span>
              </div>

              <p className="formation-desc">{team.description}</p>

              <div style={{ marginBottom: '12px', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--green)', marginBottom: '4px' }}>✅ 优势</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{team.advantages.join(' / ')}</div>
                <div style={{ fontSize: '12px', color: 'var(--red)', marginBottom: '4px', marginTop: '8px' }}>⚠️ 劣势</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{team.disadvantages.join(' / ')}</div>
              </div>

              <div className="formation-rating">
                <div>
                  <span className="rating-score" style={{ fontSize: '24px' }}>{team.rating.score}</span>
                  <span className="rating-votes"> ({team.rating.votes}票)</span>
                </div>
                <button className={`vote-btn ${votedTeams.includes(team.id) ? 'voted' : ''}`}
                  onClick={() => handleVote(team.id)}>
                  {votedTeams.includes(team.id) ? '✅ 已投票' : '👍 投票支持'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations" className="active"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/simulator"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}
