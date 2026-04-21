import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function BattleOCR() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeBattle = async () => {
    if (!uploadedImage) return
    
    setIsAnalyzing(true)
    
    // 模拟分析过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 模拟结果（实际需要后端OCR服务）
    setResult({
      winner: '我方胜利',
      myTeam: [
        { name: '曹操', damage: 125000, survive: true },
        { name: '荀彧', damage: 98000, survive: true },
        { name: '郝昭', damage: 67000, survive: false }
      ],
      enemyTeam: [
        { name: '马超', damage: 156000, survive: false },
        { name: '张机', damage: 89000, survive: false },
        { name: '魏延', damage: 45000, survive: false }
      ],
      totalDamage: { my: 290000, enemy: 290000 },
      rounds: 8,
      analysis: '这是一场典型的魏智内战。我方曹操提供了稳定的减伤和属性增益，荀彧的谋略输出发挥出色。敌方马超虽然打出了高额伤害，但由于缺少有效保护，最终被我方击溃。建议敌方阵容可考虑增加前排肉盾提升生存能力。'
    })
    
    setIsAnalyzing(false)
  }

  const clearImage = () => {
    setUploadedImage(null)
    setResult(null)
  }

  return (
    <div>
      <Head>
        <title>战报分析 - 率土百科</title>
        <meta name="description" content="率土之滨战报OCR识别与分析，自动解析战报内容" />
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
            <Link href="/ocr" className="active">战报分析</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '80px' }}>
        {/* 页面标题 */}
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'float 3s ease-in-out infinite' }}>📊</div>
          <h1 className="page-title" style={{ fontSize: '32px' }}>战报分析</h1>
          <p className="page-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            上传战报截图，自动识别双方阵容和伤害数据
          </p>
        </div>

        {/* 上传区域 */}
        {!uploadedImage ? (
          <div style={{
            border: '2px dashed var(--border-light)',
            borderRadius: 'var(--radius)',
            padding: '60px 40px',
            textAlign: 'center',
            marginBottom: '40px',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('fileInput').click()}
          onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
          onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
          >
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📤</div>
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
              点击或拖拽上传战报截图
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              支持 JPG、PNG 格式，文件大小不超过 10MB
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        ) : (
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              display: 'block'
            }}>
              <img 
                src={uploadedImage} 
                alt="战报截图" 
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
              <button
                onClick={clearImage}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                onClick={analyzeBattle}
                disabled={isAnalyzing}
                style={{
                  padding: '16px 48px',
                  fontSize: '18px',
                  fontWeight: '700',
                  background: isAnalyzing ? 'var(--border)' : 'linear-gradient(135deg, #3498db, #2980b9)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
                }}
              >
                {isAnalyzing ? '分析中...' : '🔍 开始分析'}
              </button>
            </div>
          </div>
        )}

        {/* 分析结果 */}
        {result && (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px',
            marginBottom: '40px',
            animation: 'fadeInUp 0.5s ease forwards'
          }}>
            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '28px' }}>📋</span>
              分析结果
            </h2>

            {/* 结果概览 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(39, 174, 96, 0.1))',
              border: '1px solid rgba(46, 204, 113, 0.3)',
              borderRadius: 'var(--radius)',
              padding: '20px',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#2ecc71' }}>{result.winner}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                战斗回合：{result.rounds}回合
              </div>
            </div>

            {/* 双方阵容对比 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              {/* 我方 */}
              <div>
                <h3 style={{ marginBottom: '12px', color: '#3498db' }}>我方阵容</h3>
                {result.myTeam.map((hero, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>{hero.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {hero.survive ? '✓ 存活' : '✗ 阵亡'}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '700', color: 'var(--primary)' }}>{hero.damage.toLocaleString()}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>伤害</div>
                    </div>
                  </div>
                ))}
                <div style={{
                  padding: '12px',
                  background: 'rgba(52, 152, 219, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  marginTop: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>总伤害</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#3498db' }}>
                    {result.totalDamage.my.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* 敌方 */}
              <div>
                <h3 style={{ marginBottom: '12px', color: '#e74c3c' }}>敌方阵容</h3>
                {result.enemyTeam.map((hero, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>{hero.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {hero.survive ? '✓ 存活' : '✗ 阵亡'}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '700', color: 'var(--orange)' }}>{hero.damage.toLocaleString()}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>伤害</div>
                    </div>
                  </div>
                ))}
                <div style={{
                  padding: '12px',
                  background: 'rgba(231, 76, 60, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  marginTop: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>总伤害</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#e74c3c' }}>
                    {result.totalDamage.enemy.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* 战术分析 */}
            <div style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius)',
              padding: '20px'
            }}>
              <h3 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💡 战术分析
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>
                {result.analysis}
              </p>
            </div>
          </div>
        )}

        {/* 功能说明 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
            <h3 style={{ marginBottom: '8px' }}>自动识别</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>
              自动识别战报中的武将名称、伤害数据、胜负结果
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
            <h3 style={{ marginBottom: '8px' }}>数据分析</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>
              计算双方总伤害、武将存活率，提供可视化对比
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>💡</div>
            <h3 style={{ marginBottom: '8px' }}>战术建议</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>
              基于战报数据，提供阵容优化和战术改进建议
            </p>
          </div>
        </div>

        {/* 提示 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1))',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>⚠️</div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            战报分析功能正在开发中，当前为演示版本。<br/>
            完整版将支持真实的OCR识别和深度分析。
          </p>
        </div>
      </div>

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px' }}>
          <Link href="/heroes">武将库</Link> · <Link href="/formations">阵容</Link> · <Link href="/ocr">战报</Link> · <Link href="/feedback">反馈</Link>
        </p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科 · 仅供游戏参考</p>
      </div>

      {/* 移动端底部导航 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/ocr"><span>📊</span><span>战报</span></Link>
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
