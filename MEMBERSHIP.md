# 小小树会员系统使用指南

## 🌱 会员系统简介

小小树采用**手动兑换码**模式，无需商户号即可开始收费。

---

## 📋 会员权益

| 权益 | 免费用户 | 会员 |
|-----|---------|------|
| 知识点浏览 | ✅ | ✅ |
| 学习方法 | ✅ | ✅ |
| 就业信息 | ✅ | ✅ |
| AI一对一答疑 | ❌ | ✅ |
| 智能错题本 | ❌ | ✅ |
| 个性化学习推荐 | ❌ | ✅ |
| 家长学习报告 | ❌ | ✅ |

**定价：¥9.9/月**

---

## 🔧 会员码生成

### 生成步骤

```bash
# 1个月会员码
node scripts/generate-code.js

# 生成3个码
node scripts/generate-code.js 3

# 生成6个月会员码
node scripts/generate-code.js --type=6m

# 生成1年会员码
node scripts/generate-code.js 5 --type=y
```

### 输出示例

```
🌱 小小树会员码生成

══════════════════════════════════════════════════
  1. K72K-ZYZL-DG3D  (1个月)
  2. NBQ8-SRI2-6JOS  (1个月)
  3. MC8V-FDXL-A6XL  (1个月)
══════════════════════════════════════════════════

复制以下兑换码发给用户：

K72K-ZYZL-DG3D
NBQ8-SRI2-6JOS
MC8V-FDXL-A6XL
```

### 已生成的码记录

保存在 `data/membership-codes.json`

---

## 💰 收款流程

### 1. 用户咨询
用户在小程序/微信/网站联系你，询问如何开通会员

### 2. 发送价格
- 月度会员：¥9.9
- 季度会员：¥25（暂无）
- 年度会员：¥88（暂无）

### 3. 用户转账
用户通过微信转账/支付宝转账

### 4. 发送兑换码
根据转账金额，给用户发对应时长的兑换码

### 5. 用户兑换
用户到网站 `/membership` 页面输入兑换码

---

## 📊 会员管理

### 查看已发放的码

```bash
cat data/membership-codes.json
```

### 查看已使用的码

```bash
# 筛选未使用的码
node -e "const codes = require('./data/membership-codes.json'); console.log('未使用:', codes.filter(c => !c.used).length); console.log('已使用:', codes.filter(c => c.used).length);"
```

### 统计收入

```bash
# 计算总收入
node -e "const codes = require('./data/membership-codes.json'); const total = codes.filter(c => c.used).reduce((sum, c) => sum + (9.9 / codes.length * c.months), 0); console.log('总收入约: ¥' + total.toFixed(2));"
```

---

## ⚠️ 注意事项

1. **转账安全**：建议让用户备注"小小树会员"，方便对账
2. **保存凭证**：保留转账截图，以备查询
3. **码的有效期**：生成后长期有效，但建议每月清理
4. **防滥用**：不要公开代码库中的码文件

---

## 🔄 未来升级

当会员数量增多后，可以升级为：

1. **自动化发货**：接入微信支付商户号，自动发货
2. **用户系统**：注册账号，跟踪订阅状态
3. **数据库存储**：用Supabase/Firebase存储会员数据
4. **短信通知**：用户付款后自动发送兑换码

---

## 📞 问题处理

| 问题 | 解决方案 |
|-----|---------|
| 用户说没收到码 | 核查转账记录，重新发送 |
| 码兑换失败 | 检查码格式，或手动后台激活 |
| 用户要退款 | 根据情况自行决定，暂无硬性规定 |

---

## 📱 联系方式

站长微信：**xiaoxiaoshu-cc**

---

*最后更新：2026-04-09*
