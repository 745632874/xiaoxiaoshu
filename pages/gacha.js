import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES } from '../data/heroes'

const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6', '晋': '#e67e22', '汉': '#95a5a6' }

// 抽卡概率配置（参考游戏真实概率）
const GACHA_RATES = {
  star5: 0.02,    // 5星 2%
  star4: 0.08,    // 4星 8%
  star3: 0.90     // 3星 90%
}

export default function Gacha() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])
  const [stats, setStats] = useState({ total: 0, star5: 0, star4: 0, star3: 0 })
  const [guarantee, setGuarantee] = useState(0) // 保底计数
  const [showResult, setShowResult] = useState(false)

  // 按星级分类武将
  const heroesByRarity = {
    star5: HEROES.filter(h => h.rarity === 'star5'),
    star4: HEROES.filter(h => h.rarity === 'star4'),
    star3: HEROES.filter(h => h.rarity === 'star3')
  }

  // 单抽
  const drawOne = () => {
    const rand = Math.random()
    let rarity, pool
    
    // 保底机制：连续89抽没有5星，第90抽必出5星
    if (guarantee >= 89) {
      rarity = 'star5'
      pool = heroesByRarity.star5
      setGuarantee(0)
    } else if (rand < GACHA_RATES.star5) {
      rarity = 'star5'
      pool = heroesByRarity.star5
      setGuarantee(0)
    } else if (rand < GACHA_RATES.star5 + GACHA_RATES.star4) {
      rarity = 'star4'
      pool = heroesByRarity.star4
      setGuarantee(g => g + 1)
    } else {
      rarity = 'star3'
      pool = heroesByRarity.star3 || heroesByRarity.star4 // 如果没有3星，用4星代替
      setGuarantee(g => g + 1)
    }

    const hero = pool[Math.floor(Math.random() * pool.length)]
    return { ...hero, rarity }
  }

  // 十连抽
  const drawTen = async () => {
    if (isDrawing) return
    setIsDrawing(true)
    setResults([])
    setShowResult(true)

    const newResults = []
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 200))
      const result = drawOne()
      newResults.push(result)
      setResults([...newResults])
    }

    // 更新统计
    const newStats = { ...stats, total: stats.total + 10 }
    newResults.forEach(r => {
      if (r.rarity === 'star5') newStats.star5++
      else if (r.rarity === 'star4') newStats.star4++
      else newStats.star3++
    })
    setStats(newStats)
    
    // 保存历史
    setHistory(prev => [{ id: Date.now(), results: newResults, time: new Date().toLocaleString() }, ...prev].slice(0, 10))
    
    setTimeout(() => setIsDrawing(false), 500)
  }

  // 单抽
  const drawSingle = async () => {
    if (isDrawing) return
    setIsDrawing(true)
    setShowResult(true)

    await new Promise(resolve => setTimeout(resolve, 500))
    const result = drawOne()
    setResults([result])

    // 更新统计
    const newStats = { ...stats, total: stats.total + 1 }
    if (result.rarity === 'star5') newStats.star5++
    else if (result.rarity === 'star4') newStats.star4++
    else newStats.star3++
    setStats(newStats)
    
    setHistory(prev => [{ id: Date.now(), results: [result], time: new Date().toLocaleString() }, ...prev].slice(0, 10))
    
    setTimeout(() => setIsDrawing(false), 300)
  }

  const closeResult = () => {
    setShowResult(false)
    setResults([])
  }

  const getRarityColor = (rarity) => {
    if (rarity === 'star5') return '#ff6b6b'
    if (rarity === 'star4') return '#c792ea'
    return '#82aaff'
  }

  const getRarityName = (rarity) => {
    if (rarity === 'star5') return '★★★★★'
    if (rarity === 'star4') return '★★★★'
    return '★★★'
  }

  return (
    <div>
      <Head>
        <title>抽卡模拟器 - 率土百科</title>
        <meta name="description" content="率土之滨抽卡模拟器，模拟抽卡体验，测试你的欧气" />
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
            <Link href="/gacha" className="active">抽卡模拟</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '80px' }}>
        {/* 页面标题 */}
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'float 3s ease-in-out infinite' }}>🎰</div>
          <h1 className="page-title" style={{ fontSize: '32px' }}>抽卡模拟器</h1>
          <p className="page-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            模拟率土之滨抽卡体验，测试你的欧气！（非官方，仅供娱乐）
          </p>
        </div>

        {/* 概率说明 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(241, 196, 15, 0.1))',
          border: '1px solid rgba(231, 76, 60, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '20px', marginBottom: '12px' }}>📊 抽卡概率</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div>
              <span style={{ color: '#ff6b6b', fontWeight: '700', fontSize: '24px' }}>2%</span>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>★★★★★</div>
            </div>
            <div>
              <span style={{ color: '#c792ea', fontWeight: '700', fontSize: '24px' }}>8%</span>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>★★★★</div>
            </div>
            <div>
              <span style={{ color: '#82aaff', fontWeight: '700', fontSize: '24px' }}>90%</span>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>★★★</div>
            </div>
          </div>
          <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
            ⚠️ 保底机制：连续89抽未出5星，第90抽必出5星
          </div>
        </div>

        {/* 抽卡按钮 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              onClick={drawSingle}
              disabled={isDrawing}
              style={{
                padding: '16px 48px',
                fontSize: '18px',
                fontWeight: '700',
                background: isDrawing ? 'var(--border)' : 'linear-gradient(135deg, #3498db, #2980b9)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: isDrawing ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
              }}
            >
              {isDrawing ? '抽卡中...' : '单抽'}
            </button>
            <button
              onClick={drawTen}
              disabled={isDrawing}
              style={{
                padding: '16px 48px',
                fontSize: '18px',
                fontWeight: '700',
                background: isDrawing ? 'var(--border)' : 'linear-gradient(135deg, #e74c3c, #c0392b)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: isDrawing ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
              }}
            >
              {isDrawing ? '抽卡中...' : '十连抽'}
            </button>
          </div>
          
          {/* 保底进度 */}
          <div style={{ 
            background: 'var(--bg-card)', 
            borderRadius: 'var(--radius-sm)', 
            padding: '12px 20px',
            display: 'inline-block'
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>保底进度：{guarantee}/90</span>
            <div style={{ 
              width: '200px', 
              height: '6px', 
              background: 'var(--border)', 
              borderRadius: '3px', 
              marginTop: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${(guarantee / 90) * 100}%`, 
                height: '100%', 
                background: guarantee >= 80 ? '#e74c3c' : 'var(--primary)',
                transition: 'width 0.3s'
              }} />
            </div>
          </div>
        </div>

        {/* 统计数据 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)' }}>{stats.total}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>总抽数</div>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#ff6b6b' }}>{stats.star5}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>5星武将</div>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#c792ea' }}>{stats.star4}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>4星武将</div>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#82aaff' }}>{stats.star3}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>3星武将</div>
          </div>
        </div>

        {/* 历史记录 */}
        {history.length > 0 && (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px',
            marginBottom: '40px'
          }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📜 抽卡历史
            </h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {history.map((record) => (
                <div key={record.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', minWidth: '140px' }}>{record.time}</span>
                  {record.results.map((hero, idx) => (
                    <span key={idx} style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: COUNTRY_COLOR[hero.country],
                      color: '#fff',
                      boxShadow: `0 0 10px ${getRarityColor(hero.rarity)}40`
                    }}>
                      {hero.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 提示 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1))',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>💡</div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            这是非官方的娱乐向抽卡模拟器，概率仅供参考。<br/>
            实际游戏中的抽卡概率和保底机制请以官方公告为准。
          </p>
        </div>
      </div>

      {/* 抽卡结果弹窗 */}
      {showResult && results.length > 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }} onClick={closeResult}>
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius)',
            padding: '40px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {results.some(r => r.rarity === 'star5') ? '🎉' : '📦'}
              </div>
              <h2 style={{ fontSize: '24px' }}>
                {results.some(r => r.rarity === 'star5') ? '恭喜获得稀有武将！' : '抽卡结果'}
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: results.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '16px',
              marginBottom: '30px'
            }}>
              {results.map((hero, idx) => (
                <div key={idx} style={{
                  textAlign: 'center',
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius)',
                  animation: 'fadeInUp 0.5s ease forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                  boxShadow: `0 0 30px ${getRarityColor(hero.rarity)}40`
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: COUNTRY_COLOR[hero.country],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    fontSize: '36px',
                    fontWeight: '800',
                    color: '#fff',
                    boxShadow: `0 0 20px ${getRarityColor(hero.rarity)}`
                  }}>
                    {hero.country}
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>{hero.name}</div>
                  <div style={{
                    color: getRarityColor(hero.rarity),
                    fontSize: '16px',
                    fontWeight: '700',
                    marginBottom: '4px'
                  }}>
                    {getRarityName(hero.rarity)}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{hero.cost}C</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={closeResult}
                style={{
                  padding: '12px 40px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: '#000',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                继续
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px' }}>
          <Link href="/heroes">武将库</Link> · <Link href="/formations">阵容</Link> · <Link href="/gacha">抽卡</Link> · <Link href="/feedback">反馈</Link>
        </p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科 · 仅供娱乐参考</p>
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
            transform: translateY(20px);
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
      `}</style>
    </div>
  )
}
