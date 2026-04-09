/**
 * 微信支付对接示例
 * 
 * 注意：这是示例代码，实际使用需要：
 * 1. 有微信支付商户号
 * 2. 有后端服务器
 * 3. 配置支付回调域名
 */

// 支付配置
const WXPAY_CONFIG = {
  appId: 'wxXXXXXXXXXXXX',      // 小程序/公众号AppID
  mchId: '1234567890',          // 商户号
  apiKey: 'XXXXXXXXXXXXXXXX',   // API密钥
  notifyUrl: 'https://xiaoxiaoshu.cc/api/payment/callback'  // 回调地址
}

/**
 * 创建支付订单
 * @param {string} orderId 订单号
 * @param {number} amount 金额（分）
 * @param {string} description 商品描述
 */
async function createPayment(orderId, amount, description) {
  const params = {
    appid: WXPAY_CONFIG.appId,
    mch_id: WXPAY_CONFIG.mchId,
    nonce_str: generateNonceStr(),
    body: description,
    out_trade_no: orderId,
    total_fee: amount,  // 单位：分
    spbill_create_ip: '127.0.0.1',
    notify_url: WXPAY_CONFIG.notifyUrl,
    trade_type: 'NATIVE',  // 扫码支付
  }

  // 生成签名
  params.sign = generateSign(params, WXPAY_CONFIG.apiKey)

  // 调用微信支付API
  const response = await fetch('https://api.mch.weixin.qq.com/pay/unifiedorder', {
    method: 'POST',
    body: buildXML(params)
  })

  const result = await parseXML(await response.text())
  
  return {
    orderId,
    qrCodeUrl: result.code_url,  // 支付二维码链接
    amount,
    createdAt: new Date()
  }
}

/**
 * 处理支付回调
 * 微信支付成功后会调用这个接口
 */
async function handlePaymentCallback(xmlData) {
  const data = await parseXML(xmlData)
  
  // 验证签名
  if (!verifySign(data, WXPAY_CONFIG.apiKey)) {
    throw new Error('签名验证失败')
  }

  // 验证支付状态
  if (data.return_code !== 'SUCCESS' || data.result_code !== 'SUCCESS') {
    throw new Error('支付失败')
  }

  const orderId = data.out_trade_no
  const transactionId = data.transaction_id

  // 更新订单状态
  await updateOrderStatus(orderId, {
    status: 'paid',
    transactionId,
    paidAt: new Date()
  })

  // 激活会员
  const order = await getOrder(orderId)
  await activateMember(order.userId, order.months)

  // 返回成功响应
  return buildXML({
    return_code: 'SUCCESS',
    return_msg: 'OK'
  })
}

/**
 * 激活会员
 */
async function activateMember(userId, months) {
  const expireDate = new Date()
  expireDate.setMonth(expireDate.getMonth() + months)

  // 保存到数据库
  await db.members.update({
    where: { userId },
    data: {
      status: 'active',
      expireAt: expireDate,
      updatedAt: new Date()
    }
  })
}

// ============ 工具函数 ============

function generateNonceStr() {
  return Math.random().toString(36).substr(2, 15)
}

function generateSign(params, apiKey) {
  // 按字典序排序参数
  const sortedKeys = Object.keys(params).sort()
  
  // 拼接字符串
  const stringA = sortedKeys
    .map(key => `${key}=${params[key]}`)
    .join('&')
  
  // 加上密钥
  const stringSignTemp = `${stringA}&key=${apiKey}`
  
  // MD5加密
  return md5(stringSignTemp).toUpperCase()
}

function buildXML(params) {
  let xml = '<xml>'
  for (const [key, value] of Object.entries(params)) {
    xml += `<${key}><![CDATA[${value}]]></${key}>`
  }
  xml += '</xml>'
  return xml
}

async function parseXML(xml) {
  // 使用 xml2js 等库解析
  // 这里简化处理
  const result = {}
  const regex = /<(\w+)><!\[CDATA\[(.+?)\]\]><\/\1>/g
  let match
  while ((match = regex.exec(xml)) !== null) {
    result[match[1]] = match[2]
  }
  return result
}

module.exports = {
  createPayment,
  handlePaymentCallback,
  activateMember
}
