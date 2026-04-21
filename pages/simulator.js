import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES } from '../data/heroes'

const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6' }

export default function Simulator() {
  const [slots, setSlots] = useState([null, null, null])
  const [showPicker, setShowPicker] = useState(null) // which slot to fill
  const [searchQuery, setSearchQuery] = useState('')
  const [savedTeams, setSavedTeams] = useState([])
  const [teamName, setTeamName] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('saved_teams')
    if (stored) setSavedTeams(JSON.parse(stored))
  }, [])

  const pickerHeroes = searchQuery.trim()
    ? HEROES.filter(h => h.name.includes(searchQuery) || h.country.includes(searchQuery))
    : HEROES

  const handlePick = (hero) => {
    const newSlots = [...slots]
    newSlots[showPicker] = hero
    setSlots(newSlots)
    setShowPicker(null)
    setSearchQuery('')
  }

  const handleRemove = (idx) => {
    const newSlots = [...slots]
    newSlots[idx] = null
    setSlots(newSlots)
  }

  const handleSave = () => {
    if (!slots.some(s => s)) {
      alert('请先选择至少一个武将')
      return
    }
    const name = teamName.trim() || `阵容${savedTeams.length + 1}`
    const newTeam = { id: Date.now().toString(), name, heroes: slots.filter(Boolean).map(s => s.name) }
    const newList = [...savedTeams, newTeam]
    setSavedTeams(newList)
    localStorage.setItem('saved_teams', JSON.stringify(newList))
    setTeamName('')
    showToast('阵容保存成功！')
  }

  const handleLoad = (team) => {
    const newSlots = [null, null, null]
    team.heroes.forEach((name, i) => {
      if (i < 3) newSlots[i] = HEROES.find(h => h.name === name) || null
    })
    setSlots(newSlots)
  }

  const handleDelete = (teamId) => {
    const newList = savedTeams.filter(t => t.id !== teamId)
    setSavedTeams(newList)
    localStorage.setItem('saved_teams', JSON.stringify(newList))
  }

  const totalStats = slots.filter(Boolean).reduce((acc, hero) => ({
    atk: acc.atk + hero.stats.atk,
    def: acc.def + hero.stats.def,
    intel: acc.intel + hero.stats.intel,
    spd: acc.spd + hero.stats.spd,
  }), { atk: 0, def: 0, intel: 0, spd: 0 })

  const avgScore = slots.filter(Boolean).reduce((sum, h) => sum + h.rating.score, 0) / Math.max(slots.filter(Boolean).length, 1)

  const showToast = (msg) => {
    const t = document.createElement('div')
    t.className = 'toast'
    t.textContent = msg
    document.body.appendChild(t)
    setTimeout(() => t.classList.add('show'), 10)
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => document.body.removeChild(t), 300) }, 2500)
  }

  return (
    <div>
      <Head><title>配将模拟器 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang">开荒模版</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator" className="active">配将模拟器</Link>
            
            
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🧮 配将模拟器</h1>
          <p className="page-desc">自由搭配武将阵容，保存你的阵容配置</p>
        </div>

        <div className="simulator-layout">
          <div className="simulator-main">
            {/* 阵容槽位 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
              <h2 style={{ fontSize: '16px', marginBottom: '20px', color: 'var(--primary)' }}>👥 阵容配置（3人）</h2>
              <div className="slot-grid">
                {slots.map((hero, idx) => (
                  <div key={idx} className={`hero-slot ${hero ? 'filled' : ''}`} onClick={() => !hero && setShowPicker(idx)}>
                    {hero ? (
                      <>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: COUNTRY_COLOR[hero.country], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
                          {hero.country}
                        </div>
                        <div className="slot-hero-name">{hero.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                          {hero.cost}C · {hero.stats.atk + hero.stats.def + hero.stats.intel + hero.stats.spd} 总属性
                        </div>
                        <button className="slot-remove" onClick={e => { e.stopPropagation(); handleRemove(idx) }}>✕</button>
                      </>
                    ) : (
                      <>
                        <div className="slot-placeholder">+</div>
                        <div className="slot-label">点击选择武将</div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* 阵容总评 */}
              {slots.some(Boolean) && (
                <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(201,168,76,0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>阵容总评</span>
                    <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--orange)' }}>
                      {avgScore.toFixed(1)}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {[['攻击', totalStats.atk, '#e74c3c'], ['防御', totalStats.def, '#3498db'], ['谋略', totalStats.intel, '#9b59b6'], ['速度', totalStats.spd, '#27ae60']].map(([label, val, color]) => (
                      <div key={label} style={{ textAlign: 'center', padding: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{label}</div>
                        <div style={{ fontSize: '18px', fontWeight: '700', color }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 保存阵容 */}
              <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="给阵容起个名字..."
                  value={teamName}
                  onChange={e => setTeamName(e.target.value)}
                  style={{ flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
                <button className="tool-btn primary" onClick={handleSave}>💾 保存阵容</button>
                <button className="tool-btn" onClick={() => setSlots([null, null, null])}>🗑️ 清空</button>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="simulator-sidebar">
            <h2 style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '4px' }}>💾 已保存阵容</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{savedTeams.length} 个阵容</p>
            {savedTeams.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '14px' }}>
                暂无保存的阵容<br /><br />
                上方配置阵容后点击「保存阵容」即可
              </div>
            ) : (
              <div className="saved-teams">
                {savedTeams.map(team => (
                  <div key={team.id} className="saved-team-item">
                    <div>
                      <div className="saved-team-name">{team.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {team.heroes.join(' + ')}
                      </div>
                    </div>
                    <div className="saved-team-actions">
                      <button className="icon-btn" onClick={() => handleLoad(team)} title="加载">📂</button>
                      <button className="icon-btn danger" onClick={() => handleDelete(team.id)} title="删除">🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 武将选择弹窗 */}
      {showPicker !== null && (
        <div className="modal-overlay active" onClick={e => e.target === e.currentTarget && setShowPicker(null)}>
          <div className="modal" style={{ maxHeight: '80vh' }}>
            <div className="modal-header">
              <span className="modal-title">选择武将（第{showPicker + 1}位置）</span>
              <button className="modal-close" onClick={() => setShowPicker(null)}>✕</button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="搜索武将..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '14px', outline: 'none', fontFamily: 'inherit', marginBottom: '16px' }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                autoFocus
              />
              <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {pickerHeroes.map(hero => (
                  <div key={hero.id} style={{
                    padding: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '8px',
                    cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s'
                  }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onClick={() => handlePick(hero)}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: COUNTRY_COLOR[hero.country], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#fff', margin: '0 auto 6px' }}>
                      {hero.country}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>{hero.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{hero.cost}C</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/simulator" className="active"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}
