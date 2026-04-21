import Head from 'next/head'
import Link from 'next/link'

export default function Tools() {
  const tools = [
    {
      category: '🔍 查询工具',
      items: [
        { icon: '🏛️', name: '武将库', desc: '43+武将属性、技能、搭配推荐', href: '/heroes', color: '#3b82f6' },
        { icon: '📖', name: '战法解析', desc: '30+战法效果、适用武将', href: '/skills', color: '#8b5cf6' },
        { icon: '⭐', name: '社区评分', desc: '玩家真实评价和推荐', href: '/community', color: '#f59e0b' },
      ]
    },
    {
      category: '⚔️ 配将工具',
      items: [
        { icon: '🧮', name: '配将模拟器', desc: '自由搭配武将，查看属性组合', href: '/simulator', color: '#10b981' },
        { icon: '⚔️', name: '阵容推荐', desc: 'T0-T3主流阵容配置', href: '/formations', color: '#ef4444' },
        { icon: '⛏️', name: '开荒模版', desc: '7大经典开荒阵容', href: '/kaihuang', color: '#f97316' },
      ]
    },
    {
      category: '📊 分析工具',
      items: [
        { icon: '📊', name: '战报分析', desc: 'OCR识别，自动分析战报', href: '/ocr', color: '#06b6d4', badge: 'AI' },
        { icon: '🎰', name: '抽卡模拟', desc: '测试欧气，真实概率', href: '/gacha', color: '#ec4899' },
        { icon: '💡', name: '攻略中心', desc: '新手到进阶攻略大全', href: '/guides', color: '#84cc16' },
      ]
    }
  ]

  const quickTips = [
    { icon: '🔥', text: '版本强势：马超、张机、曹操' },
    { icon: '⚡', text: '开荒推荐：大黄乐、鬼吕张机严颜' },
    { icon: '💡', text: '每日更新武将数据和阵容推荐' },
  ]

  return (
    <div>
      <Head>
        <title>工具箱 - 率土百科</title>
        <meta name="description" content="率土之滨游戏辅助工具箱，武将查询、配将模拟、战报分析等实用工具" />
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
            <Link href="/gacha">抽卡模拟</Link>
            <Link href="/ocr">战报分析</Link>
            <Link href="/community">社区评分</Link>
            <Link href="/feedback">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '80px' }}>
        {/* 页面标题 */}
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🧰</div>
          <h1 className="page-title" style={{ fontSize: '32px' }}>工具箱</h1>
          <p className="page-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            集合所有率土之滨辅助工具，助力征战天下
          </p>
        </div>

        {/* 快速提示 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.1), rgba(184, 147, 63, 0.1))',
          border: '1px solid rgba(212, 168, 83, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '16px 24px',
          marginBottom: '32px',
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {quickTips.map((tip, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <span style={{ fontSize: '18px' }}>{tip.icon}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{tip.text}</span>
            </div>
          ))}
        </div>

        {/* 工具分类 */}
        {tools.map((category, catIdx) => (
          <div key={catIdx} style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              marginBottom: '20px',
              color: 'var(--text-primary)',
              paddingBottom: '12px',
              borderBottom: '2px solid var(--border)'
            }}>
              {category.category}
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {category.items.map((item, idx) => (
                <Link key={idx} href={item.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '24px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.borderColor = item.color
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                  >
                    {/* 顶部装饰线 */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: item.color
                    }} />
                    
                    {/* Badge */}
                    {item.badge && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '11px',
                        fontWeight: '700',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}>
                        {item.badge}
                      </div>
                    )}
                    
                    {/* 图标 */}
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: `${item.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      marginBottom: '16px'
                    }}>
                      {item.icon}
                    </div>
                    
                    {/* 名称 */}
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      marginBottom: '8px',
                      color: 'var(--text-primary)'
                    }}>
                      {item.name}
                    </h3>
                    
                    {/* 描述 */}
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                    
                    {/* 箭头 */}
                    <div style={{
                      position: 'absolute',
                      bottom: '24px',
                      right: '24px',
                      fontSize: '20px',
                      color: item.color,
                      opacity: 0.5,
                      transition: 'all 0.3s'
                    }}>
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* 使用提示 */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '24px',
          marginBottom: '40px'
        }}>
          <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '24px' }}>💡</span>
            使用建议
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--primary-dark)' }}>新手玩家</div>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <li>先看<strong>开荒模版</strong>选择适合的阵容</li>
                <li>用<strong>武将库</strong>了解武将属性</li>
                <li>阅读<strong>攻略中心</strong>快速上手</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--primary-dark)' }}>进阶玩家</div>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <li>用<strong>配将模拟器</strong>优化阵容</li>
                <li>查看<strong>阵容推荐</strong>学习T0阵容</li>
                <li>分析<strong>战报</strong>改进战术</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 数据来源 */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1))',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>📊</div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '14px' }}>
            数据来源于游戏官方公告和玩家社区贡献<br/>
            武将属性、阵容推荐持续更新中
          </p>
        </div>
      </div>

      {/* 底部 */}
      <div className="footer">
        <p>⚔️ 率土百科 · 率土之滨游戏辅助网站</p>
        <p style={{ marginTop: '8px' }}>
          <Link href="/heroes">武将库</Link> · <Link href="/formations">阵容</Link> · <Link href="/simulator">配将</Link> · <Link href="/feedback">反馈</Link>
        </p>
        <p style={{ marginTop: '8px', opacity: 0.5 }}>© 2026 率土百科 · 仅供游戏参考</p>
      </div>

      {/* 移动端底部导航 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/tools"><span>🧰</span><span>工具</span></Link>
          <Link href="/feedback"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
