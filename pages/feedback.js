import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const FEEDBACK_TYPES = [
  { value: 'bug', label: '🐛 错误反馈', color: '#e74c3c' },
  { value: 'suggestion', label: '💡 功能建议', color: '#f39c12' },
  { value: 'content', label: '📝 内容纠错', color: '#3498db' },
  { value: 'guide', label: '📚 攻略投稿', color: '#27ae60' },
  { value: 'other', label: '💬 其他反馈', color: '#9b59b6' },
]

export default function Feedback() {
  const [type, setType] = useState('suggestion')
  const [content, setContent] = useState('')
  const [contact, setContact] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('user_feedbacks')
    if (stored) setFeedbacks(JSON.parse(stored))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) {
      alert('请填写反馈内容')
      return
    }
    const newFeedback = {
      id: Date.now().toString(),
      type,
      content: content.trim(),
      contact: contact.trim(),
      date: new Date().toLocaleDateString('zh-CN'),
      status: '待处理'
    }
    const newList = [newFeedback, ...feedbacks]
    setFeedbacks(newList)
    localStorage.setItem('user_feedbacks', JSON.stringify(newList))
    setContent('')
    setContact('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleDelete = (id) => {
    const newList = feedbacks.filter(f => f.id !== id)
    setFeedbacks(newList)
    localStorage.setItem('user_feedbacks', JSON.stringify(newList))
  }

  return (
    <div>
      <Head><title>反馈建议 - 率土百科</title></Head>
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
            <Link href="/community">社区评分</Link>
            <Link href="/feedback" className="active">反馈建议</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1 className="page-title">💬 反馈建议</h1>
          <p className="page-desc">发现错误？有好的建议？想要新功能？告诉我们！</p>
        </div>

        <div className="feedback-section">
          <div className="feedback-form">
            <div className="form-group">
              <label>反馈类型</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {FEEDBACK_TYPES.map(t => (
                  <button key={t.value} onClick={() => setType(t.value)}
                    style={{
                      padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-light)',
                      background: type === t.value ? `${t.color}22` : 'rgba(255,255,255,0.04)',
                      color: type === t.value ? t.color : 'var(--text-secondary)',
                      borderColor: type === t.value ? t.color : 'var(--border-light)',
                      fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit', fontWeight: type === t.value ? '600' : '400'
                    }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>反馈内容 *</label>
              <textarea
                placeholder="请详细描述你的问题或建议..."
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={5}
              />
            </div>

            <div className="form-group">
              <label>联系方式（选填）</label>
              <input
                type="text"
                placeholder="微信号 / QQ号 / 邮箱（方便我们联系你）"
                value={contact}
                onChange={e => setContact(e.target.value)}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              {submitted ? '✅ 提交成功！' : '📨 提交反馈'}
            </button>

            <div style={{ padding: '12px', background: 'rgba(39,174,96,0.1)', border: '1px solid rgba(39,174,96,0.2)', borderRadius: '8px', fontSize: '13px', color: 'var(--green)' }}>
              💡 小提示：反馈内容会保存在本地浏览器中，方便你随时查看历史记录。我们也会认真阅读每一条反馈！
            </div>
          </div>

          {/* 历史反馈 */}
          {feedbacks.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--primary)' }}>
                📋 我的反馈记录（{feedbacks.length} 条）
              </h2>
              <div className="feedback-list">
                {feedbacks.map(fb => {
                  const typeInfo = FEEDBACK_TYPES.find(t => t.value === fb.type)
                  return (
                    <div key={fb.id} className="feedback-item">
                      <div className="feedback-item-header">
                        <span className="feedback-type" style={{ background: `${typeInfo?.color}22`, color: typeInfo?.color }}>
                          {typeInfo?.label}
                        </span>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{
                            padding: '2px 10px', borderRadius: '10px', fontSize: '12px', fontWeight: '600',
                            background: fb.status === '已处理' ? 'rgba(39,174,96,0.15)' : 'rgba(243,156,18,0.15)',
                            color: fb.status === '已处理' ? '#27ae60' : '#f39c12'
                          }}>
                            {fb.status}
                          </span>
                          <span className="feedback-date">{fb.date}</span>
                          <button onClick={() => handleDelete(fb.id)} style={{
                            background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px', padding: '2px 6px', borderRadius: '4px'
                          }}
                            onMouseOver={e => e.currentTarget.style.color = 'var(--red)'}
                            onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                            🗑️
                          </button>
                        </div>
                      </div>
                      <p className="feedback-content">{fb.content}</p>
                      {fb.contact && (
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                          📞 {fb.contact}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <Link href="/"><span>🏠</span><span>首页</span></Link>
          <Link href="/heroes"><span>🏛️</span><span>武将</span></Link>
          <Link href="/formations"><span>⚔️</span><span>阵容</span></Link>
          <Link href="/simulator"><span>🧮</span><span>模拟</span></Link>
          <Link href="/feedback" className="active"><span>💬</span><span>反馈</span></Link>
        </div>
      </nav>
    </div>
  )
}
