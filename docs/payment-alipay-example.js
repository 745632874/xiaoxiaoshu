/**
 * 支付宝支付对接示例
 * 
 * 使用支付宝开放平台SDK
 * npm install alipay-sdk
 */

const AlipaySdk = require('alipay-sdk').default
const alipay = new AlipaySdk({
  appId: '2021000000000000',        // 应用ID
  privateKey: 'XXX',                // 应用私钥
  alipayPublicKey: 'XXX',           // 支付宝公钥
})

/**
 * 创建扫码支付
 */
async function createAlipayQR(orderId, amount, subject) {
  const result = await alipay.exec('alipay.trade.precreate', {
    notify_url: 'https://xiaoxiaoshu.cc/api/alipay/callback',
    biz_content: {
      out_trade_no: orderId,
      total_amount: (amount / 100).toFixed(2),  // 单位：元
      subject: subject,
    }
  })

  return {
    orderId,
    qrCodeUrl: result.qrCode,  // 支付宝二维码链接
    amount,
    createdAt: new Date()
  }
}

/**
 * 处理支付回调
 */
async function handleAlipayCallback(params) {
  // 验证签名
  const signVerified = alipay.checkNotifySign(params)
  if (!signVerified) {
    throw new Error('签名验证失败')
  }

  // 验证支付状态
  if (params.trade_status !== 'TRADE_SUCCESS') {
    throw new Error('支付失败')
  }

  const orderId = params.out_trade_no
  const transactionId = params.trade_no

  // 更新订单并激活会员
  await updateOrderStatus(orderId, { status: 'paid', transactionId })
  const order = await getOrder(orderId)
  await activateMember(order.userId, order.months)

  return 'success'
}

module.exports = { createAlipayQR, handleAlipayCallback }
