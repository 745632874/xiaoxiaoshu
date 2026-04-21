// ============================================================
// 率土之滨 - 武将克制关系表（2026年版本）
// 基于游戏机制的克制关系
// ============================================================

export const COUNTER_RULES = [
  // ===== 类型克制 =====
  {
    type: 'atk',
    name: '攻击型',
    strong: ['辅助型'],
    weak: ['坦克型'],
    description: '攻击型武将对辅助型有优势，但被坦克型克制'
  },
  {
    type: 'def',
    name: '坦克型',
    strong: ['攻击型'],
    weak: ['谋略型'],
    description: '坦克型克制攻击型，但被谋略型克制'
  },
  {
    type: 'intel',
    name: '谋略型',
    strong: ['坦克型', '辅助型'],
    weak: ['攻击型'],
    description: '谋略型克制坦克和辅助型，但被攻击型克制'
  },
  {
    type: 'support',
    name: '辅助型',
    strong: ['谋略型'],
    weak: ['攻击型'],
    description: '辅助型克制谋略型，但被攻击型克制'
  },

  // ===== 武将克制（具体）=====
  {
    hero: '马超',
    strong: ['曹操', '刘备', '孙权'],
    weak: ['张机', '司马懿', '陆逊'],
    reason: '马超高输出克制慢速辅助，但被控制型克制'
  },
  {
    hero: '曹操',
    strong: ['张机', '陆逊', '吕布'],
    weak: ['马超', '关羽', '张辽'],
    reason: '曹操减伤克制谋略型，但被高爆发克制'
  },
  {
    hero: '刘备',
    strong: ['司马懿', '周瑜', '陆逊'],
    weak: ['马超', '吕布', '群袁绍'],
    reason: '刘备回复克制持续伤害，但被爆发克制'
  },
  {
    hero: '张机',
    strong: ['马超', '张辽', '关羽'],
    weak: ['曹操', '刘备', '荀彧'],
    reason: '张机控制克制爆发，但被减伤克制'
  },
  {
    hero: '司马懿',
    strong: ['马超', '吕布', '群袁绍'],
    weak: ['刘备', '曹操', '孙权'],
    reason: '司马懿爆发克制脆皮，但被回复克制'
  },
  {
    hero: '吕布',
    strong: ['曹操', '刘备', '荀彧'],
    weak: ['张机', '司马懿', '陆逊'],
    reason: '吕布超高输出克制前排，但被控制克制'
  },
  {
    hero: '关羽',
    strong: ['曹操', '刘备', '孙权'],
    weak: ['张机', '陆逊', '司马懿'],
    reason: '关羽高输出克制前排，但被控制克制'
  },
  {
    hero: '陆逊',
    strong: ['张机', '关羽', '吕布'],
    weak: ['马超', '张辽', '群袁绍'],
    reason: '陆逊持续伤害克制坦克，但被爆发克制'
  },
  {
    hero: '周瑜',
    strong: ['吕布', '马超', '关羽'],
    weak: ['刘备', '曹操', '张机'],
    reason: '周瑜控制克制爆发，但被回复克制'
  },
  {
    hero: '荀彧',
    strong: ['张机', '司马懿', '陆逊'],
    weak: ['马超', '吕布', '关羽'],
    reason: '荀彧辅助克制控制，但被爆发克制'
  }
]

// ===== 阵容克制 =====
export const FORMATION_COUNTERS = [
  {
    formation: '吕鬼魏延',
    strong: ['荀彧郝昭曹操', '庞统刘备司马懿', '丑刀神兵大赏'],
    weak: ['大黄乐开荒', '张机体系', '控制流'],
    reason: '吕鬼魏延高爆发克制回复流，但被开荒队克制'
  },
  {
    formation: '荀彧郝昭曹操',
    strong: ['张机体系', '陆逊火烧', '持续伤害流'],
    weak: ['吕鬼魏延', '马超爆发', '吕布暴力输出'],
    reason: '减伤回复克制持续伤害，但被高爆发克制'
  },
  {
    formation: '大黄乐开荒',
    strong: ['吕鬼魏延', '马超爆发', '吕布暴力'],
    weak: ['控制流', '张机体系'],
    reason: '开荒队稳定克制爆发，但被控制克制'
  },
  {
    formation: '张机体系',
    strong: ['吕布暴力', '关羽爆发', '马超突击'],
    weak: ['荀彧郝昭曹操', '刘备回复流'],
    reason: '控制克制爆发，但被减伤回复克制'
  }
]

// ===== 获取武将克制信息 =====
export function getCounterInfo(heroName) {
  return COUNTER_RULES.find(rule => rule.hero === heroName)
}

// ===== 获取类型克制信息 =====
export function getTypeCounter(type) {
  return COUNTER_RULES.find(rule => rule.type === type)
}
