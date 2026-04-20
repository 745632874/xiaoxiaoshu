import Head from 'next/head'
import Link from 'next/link'
import { GUIDES } from '../../data/guides'

export default function GuideDetail({ guide }) {
  if (!guide) {
    return (
      <div>
        <Head><title>攻略不存在</title></Head>
        <nav className="navbar">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          </div>
        </nav>
        <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>📚</div>
          <h1 style={{ fontSize: '24px', marginBottom: '12px' }}>攻略不存在</h1>
          <Link href="/guides"><button className="vote-btn">返回攻略中心</button></Link>
        </div>
      </div>
    )
  }

  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
      if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>
      if (line.startsWith('- [ ] ')) return <li key={i} style={{ listStyle: 'none', paddingLeft: '20px', position: 'relative' }}>☐ {line.slice(6)}</li>
      if (line.startsWith('- ')) return <li key={i}>{line.slice(2)}</li>
      if (line.trim() === '') return <br key={i} />
      return <p key={i}>{line}</p>
    })
  }

  return (
    <div>
      <Head><title>{guide.title} - 率土百科</title></Head>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo"><span className="logo-icon">⚔️</span><span>率土百科</span></Link>
          <div className="navbar-links">
            <Link href="/heroes">武将库</Link>
            <Link href="/formations">阵容推荐</Link>
            <Link href="/guides">攻略中心</Link>
            <Link href="/simulator">配将模拟器</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div style={{ marginBottom: '24px' }}>
          <Link href="/guides" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}>
            ← 返回攻略中心
          </Link>
        </div>

        <div className="guide-content">
          <h1>{guide.title}</h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <span style={{ padding: '3px 12px', borderRadius: '12px', fontSize: '13px', background: '#27ae6022', color: '#27ae60' }}>{guide.category}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>👁 {guide.views.toLocaleString()}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>❤️ {guide.likes.toLocaleString()}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 {guide.date}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>✍️ {guide.author}</span>
          </div>
          <blockquote>{guide.summary}</blockquote>
          {renderContent(guide.content)}
        </div>
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

export async function getStaticPaths() {
  return {
    paths: GUIDES.map(g => ({ params: { id: g.id } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const guide = GUIDES.find(g => g.id === params.id) || null
  return { props: { guide } }
}
