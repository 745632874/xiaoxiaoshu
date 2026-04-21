import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HEROES } from '../data/heroes'
import { FORMATIONS } from '../data/formations'

export default function MiniApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const topHeroes = [...HEROES].sort((a, b) => b.rating.score - a.rating.score).slice(0, 3)
  const topFormations = [...FORMATIONS].filter(f => !f.isKaihuang).sort((a, b) => b.rating.score - a.rating.score).slice(0, 2)

  const COUNTRY_COLOR = { '魏': '#3498db', '蜀': '#27ae60', '吴': '#e74c3c', '群': '#9b59b6', '晋': '#f97316', '汉': '#64748b' }

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      window.location.href = `/heroes?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f3', paddingBottom: '80px' }}>
      <Head>
        <title>率土百科 - 悬浮工具</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#d4a853" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* 悬浮窗 */}
      <div style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        zIndex: 9999
      }}>
        {/* 菜单 */}
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 30px rgba(0,0,0,0.15)',
          padding: '12px',
          minWidth: '200px',
          display: menuOpen ? 'block' : 'none',
          animation: menuOpen ? 'fadeIn 0.2s ease' : 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '24px',
            height: '24px',
            background: '#666',
            borderRadius: '50%',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '12px'
          }} onClick={() => setMenuOpen(false)}>✕</div>
          <div style={{ fontSize: '13px', color: '#8b7d6b', padding: '8px 12px', borderBottom: '1px solid #f0ebe1', marginBottom: '8px' }}>⚡ 快捷工具</div>
          
          {[
            { href: '/heroes', icon: '🏛️', name: '武将库', desc: '查询武将属性', color: 'rgba(59, 130, 246, 0.1)' },
            { href: '/simulator', icon: '🧮', name: '配将模拟', desc: '自由搭配阵容', color: 'rgba(16, 185, 129, 0.1)' },
            { href: '/ocr', icon: '📊', name: '战报分析', desc: 'OCR识别', color: 'rgba(6, 182, 212, 0.1)' },
            { href: '/gacha', icon: '🎰', name: '抽卡模拟', desc: '测试欧气', color: 'rgba(236, 72, 153, 0.1)' }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} style={{ textDecoration: 'none', color: '#2c2416' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => setMenuOpen(false)}
                onMouseOver={e => e.currentTarget.style.background = '#faf8f3'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontSize: '20px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: item.color }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: '#8b7d6b' }}>{item.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* 悬浮球 */}
        <div style={{
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #d4a853, #b8933f)',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(212, 168, 83, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s',
          position: 'relative'
        }}
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '24px' }}>{menuOpen ? '←' : '🧰'}</span>
          <div style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '18px',
            height: '18px',
            background: '#ef4444',
            borderRadius: '50%',
            color: 'white',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>4</div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* 头部 */}
        <div style={{
          background: 'linear-gradient(135deg, #d4a853, #b8933f)',
          color: 'white',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>⚔️ 率土百科</h1>
          <p style={{ fontSize: '13px', opacity: 0.9 }}>率土之滨游戏辅助工具</p>
        </div>

        {/* 搜索框 */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
        }}>
          <span style={{ color: '#8b7d6b' }}>🔍</span>
          <input
            type="text"
            placeholder="搜索武将、阵容、战法..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '15px', background: 'transparent' }}
          />
        </div>

        {/* 快捷入口 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {[
            { href: '/heroes', icon: '🏛️', label: '武将库', color: 'rgba(59, 130, 246, 0.1)' },
            { href: '/formations', icon: '⚔️', label: '阵容', color: 'rgba(239, 68, 68, 0.1)' },
            { href: '/kaihuang', icon: '⛏️', label: '开荒', color: 'rgba(249, 115, 22, 0.1)' },
            { href: '/gacha', icon: '🎰', label: '抽卡', color: 'rgba(236, 72, 153, 0.1)' }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 8px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '24px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: item.color
                }}>{item.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: '500', color: '#2c2416' }}>{item.label}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 热门武将 */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>🔥 热门武将</div>
          {topHeroes.map((hero) => (
            <Link key={hero.id} href={`/heroes?q=${encodeURIComponent(hero.name)}`} style={{ textDecoration: 'none', color: '#2c2416' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  background: COUNTRY_COLOR[hero.country]
                }}>{hero.country}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{hero.name}</div>
                  <div style={{ fontSize: '12px', color: '#8b7d6b' }}>{hero.cost}C · {hero.tags[0]} · {hero.tags[1]}</div>
                </div>
                <div style={{ color: '#d4a853', fontSize: '18px' }}>→</div>
              </div>
            </Link>
          ))}
        </div>

        {/* T0阵容 */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>⚔️ T0阵容推荐</div>
          {topFormations.map((team) => (
            <Link key={team.id} href="/formations" style={{ textDecoration: 'none', color: '#2c2416' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #9b59b6, #e74c3c)'
                }}>{team.heroes[0][0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{team.name}</div>
                  <div style={{ fontSize: '12px', color: '#8b7d6b' }}>{team.heroes.join(' + ')} · 胜率{team.winRate}</div>
                </div>
                <div style={{ color: '#d4a853', fontSize: '18px' }}>→</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 实用工具 */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>🧰 实用工具</div>
          {[
            { href: '/ocr', icon: '📊', name: '战报分析器', desc: '上传截图，AI自动分析', color: 'rgba(6, 182, 212, 0.2)' },
            { href: '/simulator', icon: '🧮', name: '配将模拟器', desc: '自由搭配，查看属性', color: 'rgba(16, 185, 129, 0.2)' }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} style={{ textDecoration: 'none', color: '#2c2416' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: item.color
                }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#8b7d6b' }}>{item.desc}</div>
                </div>
                <div style={{ color: '#d4a853', fontSize: '18px' }}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        display: 'flex',
        padding: '8px 0',
        paddingBottom: 'env(safe-area-inset-bottom, 8px)',
        boxShadow: '0 -2px 20px rgba(0,0,0,0.05)',
        zIndex: 1000
      }}>
        {[
          { href: '/mini', icon: '🏠', label: '首页', active: true },
          { href: '/heroes', icon: '🏛️', label: '武将', active: false },
          { href: '/formations', icon: '⚔️', label: '阵容', active: false },
          { href: '/tools', icon: '🧰', label: '工具', active: false },
          { href: '/mine', icon: '👤', label: '我的', active: false }
        ].map((item, idx) => (
          <Link key={idx} href={item.href} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 0', textDecoration: 'none', color: item.active ? '#d4a853' : '#8b7d6b' }}>
            <span style={{ fontSize: '22px' }}>{item.icon}</span>
            <span style={{ fontSize: '10px', fontWeight: '500' }}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
