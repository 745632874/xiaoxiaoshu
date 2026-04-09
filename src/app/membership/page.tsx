"use client"

import { useState } from 'react'
import Link from 'next/link'

// 会员权益列表
const BENEFITS = [
  { icon: '🤖', title: 'AI一对一答疑', desc: '拍照搜题，AI智能讲解' },
  { icon: '📊', title: '智能错题本', desc: '自动整理，举一反三' },
  { icon: '🎯', title: '个性化学习', desc: '根据你的情况推荐练习' },
  { icon: '👨‍👩‍👧', title: '家长报告', desc: '了解孩子学习进度' },
]

// 定价
const PRICING = {
  monthly: 9.9,
  quarterly: 25,
  yearly: 88
}

export default function Membership() {
  const [showRedeem, setShowRedeem] = useState(false)
  const [redeemCode, setRedeemCode] = useState('')
  const [redeemStatus, setRedeemStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isMember, setIsMember] = useState(false)

  // 检查是否已是会员
  useState(() => {
    if (typeof window !== 'undefined') {
      const member = localStorage.getItem('xiaoxiaoshu_member')
      const expireTime = localStorage.getItem('xiaoxiaoshu_member_expire')
      if (member && expireTime && new Date(expireTime) > new Date()) {
        setIsMember(true)
      }
    }
  })

  // 兑换会员码
  const handleRedeem = () => {
    if (!redeemCode.trim()) {
      setRedeemStatus('error')
      return
    }

    // 简单的兑换码验证（格式：XXXX-XXXX-XXXX）
    const codePattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/
    
    if (codePattern.test(redeemCode.toUpperCase())) {
      // 设置会员过期时间（默认1个月）
      const expireDate = new Date()
      expireDate.setMonth(expireDate.getMonth() + 1)
      
      localStorage.setItem('xiaoxiaoshu_member', 'active')
      localStorage.setItem('xiaoxiaoshu_member_code', redeemCode.toUpperCase())
      localStorage.setItem('xiaoxiaoshu_member_expire', expireDate.toISOString())
      
      setRedeemStatus('success')
      setIsMember(true)
      setRedeemCode('')
    } else {
      setRedeemStatus('error')
    }
  }

  // 如果已是会员
  if (isMember) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-2">你已是小小树会员</h1>
          <p className="text-green-100 mb-6">感谢你的支持！开始享受AI答疑服务吧</p>
          <Link href="/chat" className="inline-block bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition">
            🤖 开始AI答疑
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center py-8">
        <div className="text-6xl mb-4">🌱</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          小小树AI会员
        </h1>
        <p className="text-xl text-gray-600">
          解锁AI答疑，让学习更高效
        </p>
      </section>

      {/* 会员权益 */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          ✨ 会员专属权益
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-green-100">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 定价 */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          💰 超值定价
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 opacity-75">
            <div className="text-gray-500 mb-2">季度会员</div>
            <div className="text-4xl font-bold text-gray-800 mb-2">¥{PRICING.quarterly}</div>
            <div className="text-gray-500 mb-4">≈ ¥{PRICING.quarterly / 3}/月</div>
            <button className="w-full bg-gray-200 text-gray-500 py-2 rounded-lg cursor-not-allowed">
              敬请期待
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-green-500 relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              热门
            </div>
            <div className="text-green-600 mb-2">月度会员</div>
            <div className="text-4xl font-bold text-gray-800 mb-2">¥{PRICING.monthly}</div>
            <div className="text-gray-500 mb-4">/月</div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition">
              立即开通
            </button>
            <p className="text-xs text-gray-400 mt-2 text-center">推荐初学者使用</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-500">
            <div className="text-blue-600 mb-2">年度会员</div>
            <div className="text-4xl font-bold text-gray-800 mb-2">¥{PRICING.yearly}</div>
            <div className="text-gray-500 mb-4">/年 (省¥{PRICING.monthly * 12 - PRICING.yearly})</div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              一年仅¥7.3/月
            </button>
          </div>
        </div>
      </section>

      {/* 支付方式 */}
      <section className="py-8 bg-gray-50 rounded-2xl px-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          📱 如何开通会员
        </h2>
        <div className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-gray-800">联系站长</h3>
                <p className="text-gray-600 text-sm">添加微信或公众号，告知要开通会员</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-gray-800">完成支付</h3>
                <p className="text-gray-600 text-sm">微信/支付宝转账 ¥{PRICING.monthly}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-gray-800">获取兑换码</h3>
                <p className="text-gray-600 text-sm">站长发你专属会员码</p>
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="mt-6 p-4 bg-green-50 rounded-xl">
            <p className="text-center text-gray-700">
              📞 微信：<span className="font-bold">xiaoxiaoshu-cc</span>
            </p>
          </div>
        </div>
      </section>

      {/* 兑换码入口 */}
      <section className="py-8">
        <div className="text-center">
          <button 
            onClick={() => setShowRedeem(!showRedeem)}
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            {showRedeem ? '收起兑换' : '已有兑换码？点击兑换'}
          </button>
        </div>

        {showRedeem && (
          <div className="max-w-md mx-auto mt-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-800 mb-4 text-center">输入会员兑换码</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={redeemCode}
                  onChange={(e) => {
                    setRedeemCode(e.target.value.toUpperCase())
                    setRedeemStatus('idle')
                  }}
                  placeholder="XXXX-XXXX-XXXX"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-lg font-mono tracking-widest focus:border-green-500 focus:outline-none"
                />
                <button
                  onClick={handleRedeem}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition"
                >
                  兑换
                </button>
              </div>
              
              {redeemStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl text-center">
                  🎉 兑换成功！欢迎成为小小树会员！
                </div>
              )}
              
              {redeemStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl text-center">
                  ❌ 兑换码格式错误，请检查后重新输入
                </div>
              )}

              <p className="text-xs text-gray-400 mt-4 text-center">
                兑换码格式：XXXX-XXXX-XXXX
              </p>
            </div>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          ❓ 常见问题
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Q: 会员可以退款吗？</h3>
            <p className="text-gray-600">A: 会员开通后不支持退款，请确认后再购买。</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Q: 会员过期了怎么办？</h3>
            <p className="text-gray-600">A: 联系站长续费即可，功能会自动恢复。</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Q: 可以开发票吗？</h3>
            <p className="text-gray-600">A: 目前暂不支持开发票功能。</p>
          </div>
        </div>
      </section>

      {/* 返回首页 */}
      <div className="text-center py-8">
        <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
          ← 返回首页
        </Link>
      </div>
    </main>
  )
}
