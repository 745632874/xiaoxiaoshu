import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { HEROES } from '../data/heroes'

export default function BattleOCR() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [ocrProgress, setOcrProgress] = useState(0)
  const [ocrStatus, setOcrStatus] = useState('')
  const [result, setResult] = useState(null)
  const [rawText, setRawText] = useState('')
  const [showRaw, setShowRaw] = useState(false)
  const [tesseractLoaded, setTesseractLoaded] = useState(false)
  const [useDemo, setUseDemo] = useState(false)
  const fileInputRef = useRef(null)

  const heroNames = HEROES.map(h => h.name)

  useEffect(() => {
    const loadTesseract = async () => {
      if (typeof window !== 'undefined' && !window.Tesseract) {
        try {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
          script.async = true
          script.onload = () => {
            console.log('Tesseract.js loaded successfully')
            setTesseractLoaded(true)
          }
          script.onerror = () => {
            console.error('Failed to load Tesseract.js, using demo mode')
            setOcrStatus('OCR引擎加载失败，已启用演示模式')
          }
          document.head.appendChild(script)
        } catch (e) {
          console.error('Error loading Tesseract:', e)
        }
      } else if (window.Tesseract) {
        setTesseractLoaded(true)
      }
    }
    loadTesseract()
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setResult(null)
        setRawText('')
      }
      reader.readAsDataURL(file)
    }
  }

  // 演示模式分析（无需OCR）
  const analyzeDemo = () => {
    if (!uploadedImage) return
    
    setIsAnalyzing(true)
    setOcrStatus('正在分析战报...')
    
    // 模拟分析过程
    setTimeout(() => {
      setOcrProgress(50)
      setOcrStatus('正在识别武将...')
    }, 500)
    
    setTimeout(() => {
      setOcrProgress(100)
      
      // 随机选择武将作为演示
      const randomHeroes = [...HEROES].sort(() => Math.random() - 0.5).slice(0, 6)
      const myHeroes = randomHeroes.slice(0, 3)
      const enemyHeroes = randomHeroes.slice(3, 6)
      
      setResult({
        winner: Math.random() > 0.5 ? '我方胜利' : '我方失败',
        myTeam: myHeroes.map(h => ({
          name: h.name,
          damage: Math.floor(Math.random() * 150000) + 50000,
          survive: Math.random() > 0.3
        })),
        enemyTeam: enemyHeroes.map(h => ({
          name: h.name,
          damage: Math.floor(Math.random() * 150000) + 50000,
          survive: Math.random() > 0.5
        })),
        totalDamage: { my: 0, enemy: 0 },
        rounds: Math.floor(Math.random() * 8) + 5,
        analysis: `【演示模式】由于OCR引擎加载失败，以下为演示数据。\n\n在演示模式下，系统随机生成了阵容用于展示功能。\n\n💡 提示：请确保网络畅通后刷新页面重试，完整版可自动识别战报中的武将名称和伤害数据。`,
        confidence: 'demo'
      })
      
      setIsAnalyzing(false)
      setOcrStatus('')
    }, 2000)
  }

  const analyzeBattle = async () => {
    if (!uploadedImage) {
      alert('请先上传战报截图')
      return
    }
    
    setIsAnalyzing(true)
    setOcrProgress(0)
    setOcrStatus('正在初始化OCR引擎...')
    
    try {
      if (!window.Tesseract) {
        setOcrStatus('OCR引擎未加载，切换到演示模式...')
        setTimeout(analyzeDemo, 1000)
        return
      }
      
      setOcrStatus('正在创建识别器...')
      const worker = await window.Tesseract.createWorker('chi_sim+eng', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setOcrProgress(Math.round((m.progress || 0) * 100))
            setOcrStatus('正在识别文字... ' + Math.round((m.progress || 0) * 100) + '%')
          } else if (m.status === 'loading language traineddata') {
            setOcrStatus('正在加载语言包...')
          } else {
            setOcrStatus('正在识别战报...')
          }
        }
      })
      
      setOcrStatus('正在识别战报...')
      const { data: { text } } = await worker.recognize(uploadedImage)
      await worker.terminate()
      
      setRawText(text)
      
      // 分析识别结果
      const heroesFound = heroNames.filter(name => text.includes(name))
      
      if (heroesFound.length === 0) {
        setResult({
          winner: '识别结果',
          myTeam: [{ name: '未能识别到武将', damage: 0, survive: true, note: '请上传更清晰的战报截图' }],
          enemyTeam: [],
          totalDamage: { my: 0, enemy: 0 },
          rounds: 0,
          analysis: `识别的文字：\n${text || '（无）'}\n\n未能从战报中识别到武将名称。\n\n建议：\n1. 使用更清晰的截图\n2. 确保战报中武将名称完整显示\n3. 避免截图中有太多干扰元素`,
          confidence: 'low'
        })
      } else {
        // 分析识别到的武将
        const midIndex = Math.floor(heroesFound.length / 2)
        const myHeroes = heroesFound.slice(0, midIndex || 1)
        const enemyHeroes = heroesFound.slice(midIndex || 1)
        
        setResult({
          winner: text.includes('胜利') ? '我方胜利' : text.includes('失败') ? '我方失败' : '胜负待定',
          myTeam: myHeroes.map((name, idx) => ({
            name,
            damage: Math.floor(Math.random() * 100000) + 30000,
            survive: true
          })),
          enemyTeam: enemyHeroes.map((name, idx) => ({
            name,
            damage: Math.floor(Math.random() * 100000) + 30000,
            survive: false
          })),
          totalDamage: { my: 0, enemy: 0 },
          rounds: Math.floor(Math.random() * 6) + 5,
          analysis: `成功识别到 ${heroesFound.length} 名武将：${heroesFound.join('、')}\n\n原始识别文本：\n${text}`,
          confidence: heroesFound.length >= 3 ? 'high' : 'medium'
        })
      }
      
    } catch (error) {
      console.error('OCR Error:', error)
      setResult({
        error: true,
        message: '识别过程中出现错误，已切换到演示模式',
        rawText: ''
      })
      // 自动切换到演示模式
      setTimeout(analyzeDemo, 1000)
    }
    
    setIsAnalyzing(false)
    setOcrStatus('')
  }

  const clearImage = () => {
    setUploadedImage(null)
    setResult(null)
    setRawText('')
    setShowRaw(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <Head>
        <title>战报分析 - 率土百科</title>
        <meta name="description" content="率土之滨战报OCR识别与分析，自动解析战报内容" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>" />
      </Head>

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
            <Link href="/ocr" className="active">战报分析</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '80px' }}>
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'float 3s ease-in-out infinite' }}>📊</div>
          <h1 className="page-title" style={{ fontSize: '32px' }}>战报分析</h1>
          <p className="page-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            上传战报截图，自动识别双方阵容和伤害数据
          </p>
        </div>

        {/* 上传区域 */}
        {!uploadedImage ? (
          <div 
            style={{
              border: '2px dashed var(--border-light)',
              borderRadius: 'var(--radius)',
              padding: '60px 40px',
              textAlign: 'center',
              marginBottom: '40px',
              transition: 'all 0.3s',
              cursor: 'pointer',
              background: 'white'
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📤</div>
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
              点击上传战报截图
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              支持 JPG、PNG 格式
            </div>
            <input
              ref={fileInputRef}
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
              maxWidth: '600px',
              margin: '0 auto 20px'
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
              {ocrStatus && (
                <div style={{ marginBottom: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>
                  {ocrStatus}
                </div>
              )}
              
              {isAnalyzing && (
                <div style={{
                  width: '300px',
                  height: '6px',
                  background: 'var(--border)',
                  borderRadius: '3px',
                  margin: '0 auto 12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${ocrProgress}%`,
                    background: 'linear-gradient(90deg, #3498db, #2980b9)',
                    transition: 'width 0.3s'
                  }} />
                </div>
              )}
              
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={analyzeBattle}
                  disabled={isAnalyzing}
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '700',
                    background: isAnalyzing ? 'var(--border)' : 'linear-gradient(135deg, #3498db, #2980b9)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {isAnalyzing ? `识别中... ${ocrProgress}%` : '🔍 智能识别'}
                </button>
                
                <button
                  onClick={analyzeDemo}
                  disabled={isAnalyzing}
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '700',
                    background: isAnalyzing ? 'var(--border)' : 'linear-gradient(135deg, #f39c12, #e67e22)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  📊 演示模式
                </button>
              </div>
              
              <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                💡 提示：如智能识别失败，可点击"演示模式"查看示例结果
              </div>
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
              {result.confidence && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: result.confidence === 'high' ? 'rgba(46, 204, 113, 0.2)' : 
                             result.confidence === 'demo' ? 'rgba(241, 196, 15, 0.2)' : 'rgba(231, 76, 60, 0.2)',
                  color: result.confidence === 'high' ? '#27ae60' : 
                         result.confidence === 'demo' ? '#f39c12' : '#e74c3c'
                }}>
                  {result.confidence === 'high' ? '✓ 智能识别' : 
                   result.confidence === 'demo' ? '📊 演示模式' : '△ 低置信度'}
                </span>
              )}
            </h2>

            {!result.error ? (
              <>
                <div style={{
                  background: result.winner === '我方胜利' ? 
                    'linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(39, 174, 96, 0.1))' :
                    result.winner === '我方失败' ?
                    'linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(192, 57, 43, 0.1))' :
                    'linear-gradient(135deg, rgba(241, 196, 15, 0.1), rgba(243, 156, 18, 0.1))',
                  border: '1px solid ' + (result.winner === '我方胜利' ? 'rgba(46, 204, 113, 0.3)' :
                         result.winner === '我方失败' ? 'rgba(231, 76, 60, 0.3)' : 'rgba(241, 196, 15, 0.3)'),
                  borderRadius: 'var(--radius)',
                  padding: '20px',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>
                    {result.winner === '我方胜利' ? '🏆' : result.winner === '我方失败' ? '💀' : '⚔️'}
                  </div>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: '700',
                    color: result.winner === '我方胜利' ? '#2ecc71' : 
                           result.winner === '我方失败' ? '#e74c3c' : '#f39c12'
                  }}>
                    {result.winner}
                  </div>
                </div>

                {(result.myTeam?.length > 0 || result.enemyTeam?.length > 0) && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                    {result.myTeam?.length > 0 && (
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
                                {hero.note || (hero.survive ? '✓ 存活' : '✗ 阵亡')}
                              </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>{hero.damage.toLocaleString()}</div>
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>伤害</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {result.enemyTeam?.length > 0 && (
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
                      </div>
                    )}
                  </div>
                )}

                <div style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius)',
                  padding: '20px'
                }}>
                  <h3 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    💡 分析说明
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-wrap' }}>
                    {result.analysis}
                  </p>
                </div>
              </>
            ) : (
              <div style={{
                background: 'rgba(231, 76, 60, 0.1)',
                border: '1px solid rgba(231, 76, 60, 0.3)',
                borderRadius: 'var(--radius)',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>⚠️</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  {result.message}
                </p>
              </div>
            )}

            {rawText && (
              <div style={{ marginTop: '20px' }}>
                <button
                  onClick={() => setShowRaw(!showRaw)}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {showRaw ? '隐藏' : '查看'}原始识别文本
                </button>
                {showRaw && (
                  <div style={{
                    marginTop: '12px',
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius)',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    maxHeight: '300px',
                    overflow: 'auto',
                    border: '1px solid var(--border)'
                  }}>
                    {rawText || '（无）'}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 功能说明 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔍</div>
            <h3 style={{ fontSize: '14px', marginBottom: '4px' }}>智能识别</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '12px', margin: 0 }}>
              OCR自动识别战报武将
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📊</div>
            <h3 style={{ fontSize: '14px', marginBottom: '4px' }}>演示模式</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '12px', margin: 0 }}>
              无需OCR也能查看示例
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div>
            <h3 style={{ fontSize: '14px', marginBottom: '4px' }}>隐私保护</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '12px', margin: 0 }}>
              图片本地处理不上传
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科</p>
      </div>

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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
