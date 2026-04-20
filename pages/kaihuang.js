import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FORMATIONS } from '../data/formations'
import { HEROES } from '../data/heroes'

const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6', '晋': '#e67e22', '汉': '#f1c40f' }

const KAIHUANG_LEVEL_COLORS = {
  'T0': '#e74c3c',
  'T1': '#f39c12',
  'T2': '#3498db',
  'T3': '#95a5a6'
}

export default function Kaihuang() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [filter, setFilter] = useState('全部')

  const kaihuangTeams = FORMATIONS.filter(f => f.isKaihuang)

  const filtered = filter === '全部'
    ? kaihuangTeams
    : kaihuangTeams.filter(t => t.kaihuangLevel === filter)

  const getHeroes = (names) => {
    return names.map(name => HEROES.find(h => h.name === name)).filter(Boolean)
  }

  return (
    <div>
      <Head><title>开荒模版 - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/kaihuang" className="active">开荒模版</Link>
            <Link href="/skills">战法解析</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
            <Link href="/community">社区评分</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* 顶部介绍 */}
        <div style={{ background: 'linear-gradient(135deg, rgba(230,126,34,0.15), rgba(201,168,76,0.08))', border: '1px solid rgba(230,126,34,0.3)', borderRadius: 'var(--radius)', padding: '32px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '40px' }}>⛏️</span>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>开荒模版中心</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: '4px 0 0' }}>
                根据你的武将卡池，智能推荐最适合的开荒阵容
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span className="badge">⛏️ {kaihuangTeams.length} 套开荒模版</span>
            <span className="badge">🌟 T0级推荐</span>
            <span className="badge">📋 战法配置详解</span>
            <span className="badge">🔄 转型路线指引</span>
          </div>
        </div>

        {/* 快速筛选 */}
        <div className="filter-bar">
          <span className="filter-label">筛选等级：</span>
          {['全部', 'T0', 'T1', 'T2'].map(l => (
            <button key={l} className={`filter-tag ${filter === l ? 'active' : ''}`}
              style={filter === l && l !== '全部' ? { borderColor: KAIHUANG_LEVEL_COLORS[l], color: KAIHUANG_LEVEL_COLORS[l] } : {}}
              onClick={() => setFilter(l)}>
              {l === '全部' ? '🌐 全部' : `${l}级`}
            </button>
          ))}
        </div>

        {/* 模版卡片列表 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {filtered.map(team => {
            const heroes = getHeroes(team.heroes)
            const isSelected = selectedTemplate?.id === team.id
            return (
              <div key={team.id} className="formation-card"
                style={{
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                  boxShadow: isSelected ? '0 0 30px rgba(201,168,76,0.2)' : 'none',
                  transition: 'all 0.2s'
                }}
                onClick={() => setSelectedTemplate(isSelected ? null : team)}>

                {/* 标题栏 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>{team.name}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                      {team.heroes.join(' + ')}
                    </p>
                  </div>
                  <span className="level-badge" style={{ background: KAIHUANG_LEVEL_COLORS[team.kaihuangLevel] }}>
                    {team.kaihuangLevel}
                  </span>
                </div>

                {/* 武将头像 */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  {heroes.map(hero => (
                    <div key={hero.id} style={{
                      flex: 1, textAlign: 'center', padding: '12px 8px',
                      background: 'rgba(255,255,255,0.04)', borderRadius: '10px',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto 6px',
                        background: COUNTRY_COLOR[hero.country], display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        fontSize: '18px', fontWeight: '700', color: '#fff'
                      }}>
                        {hero.country}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>{hero.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {hero.country}国 · {hero.rarity === 'star5' ? '五星' : hero.rarity === 'star4' ? '四星' : '三星'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 简介 */}
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '14px' }}>
                  {team.description.slice(0, 120)}...
                </p>

                {/* 优劣势 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                  <div style={{ padding: '8px 10px', background: 'rgba(39,174,96,0.08)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--green)', marginBottom: '4px', fontWeight: '600' }}>✅ 优势</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{team.advantages[0]}</div>
                  </div>
                  <div style={{ padding: '8px 10px', background: 'rgba(231,76,60,0.08)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--red)', marginBottom: '4px', fontWeight: '600' }}>⚠️ 注意</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{team.disadvantages[0]}</div>
                  </div>
                </div>

                {/* 战损评分 */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>💰 成本：<span style={{ color: 'var(--primary)', fontWeight: '600' }}>{team.cost}</span></span>
                  <span style={{ color: 'var(--text-muted)' }}>📊 胜率：<span style={{ color: 'var(--green)', fontWeight: '600' }}>{team.winRate}</span></span>
                  <span style={{ color: 'var(--text-muted)' }}>🏷️ {team.formationType}</span>
                </div>

                {/* 展开详情 */}
                {isSelected && (
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: '4px' }}>
                    <div style={{ background: 'rgba(201,168,76,0.08)', borderRadius: '10px', padding: '14px', marginBottom: '14px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', marginBottom: '10px' }}>💡 开荒技巧</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{team.kaihuangTips}</p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>📋 各阶段攻略</h4>
                      {team.kaihuangStages?.map((stage, i) => (
                        <div key={i} style={{
                          display: 'flex', gap: '12px', padding: '10px',
                          background: 'rgba(255,255,255,0.03)', borderRadius: '8px',
                          marginBottom: '8px', borderLeft: '3px solid var(--primary)'
                        }}>
                          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary)', minWidth: '80px' }}>
                            {stage.stage}
                          </div>
                          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {stage.strategy}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '14px', display: 'flex', gap: '8px' }}>
                      <Link href={`/simulator?heroes=${team.heroes.join(',')}`}>
                        <button className="tool-btn primary" style={{ flex: 1 }}>
                          🧮 去模拟配将
                        </button>
                      </Link>
                      <Link href="/guides/guide_001">
                        <button className="tool-btn" style={{ flex: 1 }}>
                          📖 查看攻略
                        </button>
                      </Link>
                    </div>
                  </div>
                )}

                {!isSelected && (
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '4px' }}>
                    点击查看战法配置和阶段攻略 →
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 开荒小贴士 */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginTop: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>💡 开荒必知</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            {[
              { icon: '⏰', title: '时间规划', desc: '第1-3天冲5000势力，第7天完成转型' },
              { icon: '💰', title: '战法分配', desc: '百战无怯、磐阵善守、战必断金是开荒三大件' },
              { icon: '👥', title: '同盟优先', desc: '加入活跃同盟，获取保护和资源支援' },
              { icon: '🎯', title: '转型目标', desc: '开荒队后期转型打架队，一队两用最划算' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '10px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/kaihuang" className="active"><span>⛏️</span><span>开荒</span></Link>
          <Link href="/simulator"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}
