import Head from 'next/head'
import Link from 'next/link'

export default function Tools() {
  const tools = [
    {
      id: 'stzbhelper',
      name: 'StzbHelper 率土助手',
      author: 'FlxSNX',
      stars: 48,
      desc: '功能强大的率土之滨辅助工具，支持多种自动化功能',
      url: 'https://github.com/FlxSNX/stzbHelper',
      tags: ['自动化', '辅助工具', '⭐ 热门推荐'],
      updated: '2026-04-15',
      features: ['自动化操作', '资源管理', '战斗辅助']
    },
    {
      id: 'battle-ocr',
      name: '战报OCR识别系统',
      author: 'mrm-ns',
      stars: 0,
      desc: '游戏《率土之滨》战报OCR识别系统，自动解析战报内容',
      url: 'https://github.com/mrm-ns/ShuaiTuZhiBing-BattleReport-OCR',
      tags: ['OCR识别', '战报分析', '技术工具'],
      updated: '2026-04-11',
      features: ['战报OCR', '自动识别', '数据分析']
    },
    {
      id: 'border-helper',
      name: 'BorderHelper 配将模拟器',
      author: 'zzbChina',
      stars: 19,
      desc: '率土之滨辅助模拟器，配置队伍模拟对局，仅学习专注娱乐，不商用',
      url: 'https://github.com/zzbChina/BorderHelper',
      tags: ['配将模拟', '对局模拟', '⭐ 推荐'],
      updated: '2026-04-09',
      features: ['配将模拟', '对局预测', '阵容优化']
    },
    {
      id: 'stzb-wiki',
      name: '率土之滨知识库',
      author: 'zouqin',
      stars: 0,
      desc: '一个关于率土之滨的公开知识库，包含武将、战法等数据',
      url: 'https://github.com/zouqin/stzb',
      tags: ['知识库', '数据资料', '开源贡献'],
      updated: '2026-02-05',
      features: ['武将数据', '战法资料', '持续更新']
    },
    {
      id: 'st-auto',
      name: '率土自动化工具',
      author: 'chenzhiron',
      stars: 3,
      desc: '率土之滨自动化工具，简化重复操作',
      url: 'https://github.com/chenzhiron/st',
      tags: ['自动化', '效率工具'],
      updated: '2026-04-06',
      features: ['自动任务', '资源采集', '定时操作']
    },
    {
      id: 'gacha-sim',
      name: '抽卡模拟器',
      author: '6A13F',
      stars: 0,
      desc: '率土之滨抽卡模拟器（非官方），娱乐向工具',
      url: 'https://github.com/6A13F/rate-land-gacha',
      tags: ['抽卡模拟', '娱乐工具'],
      updated: '2025-12-14',
      features: ['抽卡模拟', '概率展示', '娱乐向']
    }
  ]

  const sortedTools = [...tools].sort((a, b) => b.stars - a.stars)

  return (
    <div>
      <Head>
        <title>开源工具 - 率土百科</title>
        <meta name="description" content="率土之滨开源工具合集，来自GitHub的优秀项目" />
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
            <Link href="/tools" className="active">开源工具</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      {/* 页面标题 */}
      <div className="container" style={{ paddingTop: '80px' }}>
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px', animation: 'float 3s ease-in-out infinite' }}>
            🛠️
          </div>
          <h1 className="page-title" style={{ fontSize: '32px' }}>
            开源工具合集
          </h1>
          <p className="page-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            来自GitHub社区的率土之滨辅助工具，开源免费，持续更新
          </p>
        </div>

        {/* 工具卡片 */}
        <div style={{ display: 'grid', gap: '20px', marginBottom: '60px' }}>
          {sortedTools.map((tool, index) => (
            <div 
              key={tool.id} 
              className="tool-card fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 168, 76, 0.15)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Stars 装饰 */}
              {tool.stars >= 10 && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  ⭐ {tool.stars} Stars
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, var(--primary), #d4a84a)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0
                }}>
                  🔧
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '700', 
                    marginBottom: '4px',
                    color: 'var(--text-primary)'
                  }}>
                    {tool.name}
                  </h3>
                  <div style={{ 
                    fontSize: '13px', 
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>👤 {tool.author}</span>
                    <span>•</span>
                    <span>📅 {tool.updated}</span>
                    {tool.stars > 0 && (
                      <>
                        <span>•</span>
                        <span style={{ color: 'var(--orange)' }}>⭐ {tool.stars}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {tool.desc}
              </p>

              {/* 标签 */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {tool.tags.map(tag => (
                  <span 
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: tag.includes('热门') || tag.includes('推荐') 
                        ? 'linear-gradient(135deg, #e74c3c, #c0392b)'
                        : 'rgba(201, 168, 76, 0.1)',
                      color: tag.includes('热门') || tag.includes('推荐') ? '#fff' : 'var(--primary)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 功能特点 */}
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                {tool.features.map(feature => (
                  <span 
                    key={feature}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>

              {/* 操作按钮 */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: 'linear-gradient(135deg, var(--primary), #d4a84a)',
                    color: '#fff',
                    borderRadius: 'var(--radius)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 168, 76, 0.3)'
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  访问项目
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 提示信息 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1))',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '20px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>💡</div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            以上工具均来自GitHub开源社区，仅供学习交流使用。<br/>
            使用前请阅读各项目的使用协议，自行承担使用风险。
          </p>
        </div>

        {/* 贡献提示 */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '24px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h3 style={{ marginBottom: '12px' }}>🚀 发现了好用的工具？</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
            欢迎推荐优秀的率土之滨开源项目，一起完善工具库！
          </p>
          <Link href="/feedback">
            <button className="vote-btn" style={{ fontSize: '16px', padding: '12px 32px' }}>
              提交推荐
            </button>
          </Link>
        </div>
      </div>

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px' }}>
          <Link href="/heroes">武将库</Link> · <Link href="/formations">阵容</Link> · <Link href="/tools">工具</Link> · <Link href="/feedback">反馈</Link>
        </p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科 · 仅供游戏参考</p>
      </div>

      {/* 移动端底部导航 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/tools"><span>🛠️</span><span>工具</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
