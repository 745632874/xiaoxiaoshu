#!/usr/bin/env node
/**
 * 小小树会员码生成工具
 * 
 * 使用方法：
 *   node generate-code.js              - 生成1个码（1个月）
 *   node generate-code.js 3            - 生成3个码
 *   node generate-code.js 5 --type=6m  - 生成5个码（6个月）
 *   node generate-code.js 10 --type=y   - 生成10个码（1年）
 */

const fs = require('fs');
const path = require('path');

// 生成随机字符
function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 生成兑换码
function generateCode() {
  return `${randomString(4)}-${randomString(4)}-${randomString(4)}`;
}

// 解析参数
const args = process.argv.slice(2);
let count = 1;
let months = 1;

for (const arg of args) {
  if (!isNaN(parseInt(arg))) {
    count = parseInt(arg);
  }
  if (arg.includes('--type=')) {
    const type = arg.split('=')[1];
    if (type === '6m') months = 6;
    if (type === 'y' || type === 'year') months = 12;
  }
}

// 生成码
const codes = [];
for (let i = 0; i < count; i++) {
  const code = generateCode();
  codes.push({
    code,
    months,
    created: new Date().toISOString(),
    used: false
  });
}

// 输出到控制台
console.log('\n🌱 小小树会员码生成\n');
console.log('═'.repeat(50));
codes.forEach((c, i) => {
  console.log(`  ${i + 1}. ${c.code}  (${c.months}个月)`);
});
console.log('═'.repeat(50));
console.log(`\n共生成 ${count} 个兑换码，有效期 ${months} 个月\n`);

// 保存到文件
const logFile = path.join(__dirname, '..', 'data', 'membership-codes.json');
let existingCodes = [];

if (fs.existsSync(logFile)) {
  try {
    existingCodes = JSON.parse(fs.readFileSync(logFile, 'utf8'));
  } catch (e) {
    existingCodes = [];
  }
}

const allCodes = [...existingCodes, ...codes];
fs.writeFileSync(logFile, JSON.stringify(allCodes, null, 2));

console.log(`✅ 已保存到 ${logFile}\n`);

// 输出给用户复制
console.log('复制以下兑换码发给用户：\n');
codes.forEach(c => console.log(c.code));
console.log('\n');
