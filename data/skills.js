// ============================================================
// 率土之滨 - 战法数据库
// ============================================================

export const SKILLS = [
  // ===== 指挥战法 =====
  {
    id: "skill_001",
    name: "魏武之德",
    type: "command",
    target: "me",
    effect: "战斗中，使我军全体防御属性提高42点，谋略属性提高28点。",
    cooldown: 0,
    tags: ["防御", "谋略", "增益", "指挥"],
    heroes: ["曹操"],
    quality: "极强",
    description: "全游最强指挥技能之一，魏国阵容核心辅助技能。",
    stars: 5
  },
  {
    id: "skill_002",
    name: "梦中好杀人",
    type: "passive",
    target: "self",
    effect: "行动前有35%概率对敌军单体发动一次攻击（伤害率120%）。",
    cooldown: 0,
    tags: ["攻击", "被动", "概率"],
    heroes: ["曹操"],
    quality: "一般",
    description: "曹操的被动技能，补充少量伤害。",
    stars: 5
  },
  {
    id: "skill_003",
    name: "破敌",
    type: "passive",
    target: "self",
    effect: "战斗开始后每回合有45%概率进入狂暴状态，攻击提高35点，持续1回合。",
    cooldown: 0,
    tags: ["攻击", "增益", "被动"],
    heroes: ["司马懿"],
    quality: "强力",
    description: "司马懿的核心被动，提供强大的攻击增益。",
    stars: 5
  },
  {
    id: "skill_015",
    name: "昭烈",
    type: "command",
    target: "me",
    effect: "战斗开始后每回合恢复我军单体一定兵力（恢复率88%，受谋略属性影响）。",
    cooldown: 0,
    tags: ["治疗", "指挥", "持续"],
    heroes: ["刘备"],
    quality: "极强",
    description: "全游最强治疗指挥技能，刘备的核心技能。",
    stars: 5
  },
  {
    id: "skill_016",
    name: "疾战",
    type: "passive",
    target: "self",
    effect: "普通攻击后有30%概率再次发起普通攻击。",
    cooldown: 0,
    tags: ["追击", "被动", "连击"],
    heroes: ["刘备"],
    quality: "强力",
    description: "刘备的被动技能，补充追击伤害。",
    stars: 5
  },
  {
    id: "skill_017",
    name: "威震华夏",
    type: "command",
    target: "enemy",
    effect: "1回合准备，对敌军全体发动强力攻击（伤害率168%），并使其陷入混乱状态，持续1回合。",
    cooldown: 2,
    tags: ["攻击", "控制", "指挥", "混乱"],
    heroes: ["关羽"],
    quality: "极强",
    description: "蜀国最强技能之一，强大的群体伤害配合控制效果。",
    stars: 5
  },
  {
    id: "skill_018",
    name: "义绝",
    type: "passive",
    target: "self",
    effect: "普通攻击后，对目标再发动一次攻击（伤害率110%）。",
    cooldown: 0,
    tags: ["追击", "被动", "攻击"],
    heroes: ["关羽"],
    quality: "强力",
    description: "关羽的追击技能，补充额外伤害。",
    stars: 5
  },
  {
    id: "skill_029",
    name: "九锡",
    type: "command",
    target: "me",
    effect: "战斗开始后，每2回合恢复我军单体一定兵力（恢复率98%），并使其免疫有害效果。",
    cooldown: 0,
    tags: ["治疗", "免疫", "指挥"],
    heroes: ["孙权"],
    quality: "极强",
    description: "吴国最强辅助技能，提供治疗与免疫双重保护。",
    stars: 5
  },
  {
    id: "skill_030",
    name: "连击",
    type: "passive",
    target: "self",
    effect: "普通攻击后有35%概率再次发起普通攻击。",
    cooldown: 0,
    tags: ["追击", "被动", "连击"],
    heroes: ["孙权"],
    quality: "强力",
    description: "孙权的被动技能，补充追击伤害。",
    stars: 5
  },
  {
    id: "skill_031",
    name: "火烧连营",
    type: "command",
    target: "enemy",
    effect: "1回合准备，对敌军单体发动火攻（谋略伤害率200%），并使其收到下一次火攻伤害提高80%。",
    cooldown: 2,
    tags: ["谋略", "火攻", "指挥", "增伤"],
    heroes: ["周瑜"],
    quality: "极强",
    description: "吴国最强谋略技能，火攻核心技能。",
    stars: 5
  },
  {
    id: "skill_043",
    name: "虓虎之勇",
    type: "command",
    target: "me",
    effect: "战斗开始后，使自身攻击属性提高55点，防御属性提高25点。",
    cooldown: 0,
    tags: ["攻击", "防御", "增益", "指挥"],
    heroes: ["吕布"],
    quality: "极强",
    description: "全游最高攻击面板加成，吕布的核心技能。",
    stars: 5
  },
  {
    id: "skill_044",
    name: "天下无双",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动一次猛烈攻击（伤害率300%），目标为骑兵时额外发动一次。",
    cooldown: 3,
    tags: ["攻击", "爆发", "主动", "骑兵克制"],
    heroes: ["吕布"],
    quality: "极强",
    description: "全游最高单次伤害技能，吕布的招牌技能。",
    stars: 5
  },
  {
    id: "skill_033",
    name: "谋略",
    type: "passive",
    target: "self",
    effect: "使自身谋略属性提高35点，谋略攻击后有40%概率使目标陷入火攻状态。",
    cooldown: 0,
    tags: ["谋略", "火攻", "被动", "增伤"],
    heroes: ["陆逊"],
    quality: "强力",
    description: "陆逊的核心被动，提供谋略增伤和火攻效果。",
    stars: 5
  },

  // ===== 主动战法 =====
  {
    id: "skill_005",
    name: "其疾如风",
    type: "active",
    target: "me",
    effect: "使自身进入疾行状态，攻击提高50点，速度提高40点，持续2回合。",
    cooldown: 3,
    tags: ["攻击", "速度", "增益", "主动"],
    heroes: ["张辽"],
    quality: "强力",
    description: "张辽的核心技能，高额攻击和速度加成。",
    stars: 4
  },
  {
    id: "skill_009",
    name: "遗计",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动谋略攻击（谋略伤害率180%），并使其防御属性降低40点，持续2回合。",
    cooldown: 2,
    tags: ["谋略", "减益", "主动"],
    heroes: ["郭嘉"],
    quality: "强力",
    description: "郭嘉的核心技能，谋略伤害配合减防效果。",
    stars: 4
  },
  {
    id: "skill_023",
    name: "诸葛连弩",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动3次谋略攻击（谋略伤害率65%）。",
    cooldown: 3,
    tags: ["谋略", "多段攻击", "主动"],
    heroes: ["诸葛亮"],
    quality: "强力",
    description: "诸葛亮的标志性技能，高次数谋略攻击。",
    stars: 5
  },
  {
    id: "skill_047",
    name: "闭月",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动谋略攻击（谋略伤害率180%），并有60%概率使目标陷入混乱状态。",
    cooldown: 2,
    tags: ["谋略", "控制", "混乱", "主动"],
    heroes: ["貂蝉"],
    quality: "强力",
    description: "貂蝉的核心控制技能，高概率混乱效果。",
    stars: 5
  },
  {
    id: "skill_049",
    name: "黄天太平",
    type: "active",
    target: "enemy",
    effect: "对敌军全体发动雷攻（谋略伤害率120%），并有50%概率使目标陷入动摇状态。",
    cooldown: 3,
    tags: ["谋略", "雷攻", "群体", "主动"],
    heroes: ["张角"],
    quality: "强力",
    description: "张角的核心技能，群体雷攻配合控制效果。",
    stars: 5
  },
  {
    id: "skill_055",
    name: "胡笳羌笛",
    type: "active",
    target: "me",
    effect: "恢复我军群体一定兵力（恢复率120%），并使其防御属性提高30点，持续2回合。",
    cooldown: 2,
    tags: ["治疗", "防御", "群体", "主动"],
    heroes: ["蔡文姬"],
    quality: "强力",
    description: "蔡文姬的核心技能，平民最强治疗技能。",
    stars: 3
  },

  // ===== 追击战法 =====
  {
    id: "skill_006",
    name: "侵略如火",
    type: "chase",
    target: "enemy",
    effect: "普通攻击后，对目标再发动一次攻击（伤害率130%）。",
    cooldown: 0,
    tags: ["追击", "攻击", "单点"],
    heroes: ["张辽"],
    quality: "强力",
    description: "张辽的追击技能，补充额外单点伤害。",
    stars: 4
  },
  {
    id: "skill_025",
    name: "疾行",
    type: "chase",
    target: "self",
    effect: "使自身速度提高35点，普通攻击后再次行动。",
    cooldown: 0,
    tags: ["追击", "速度", "先手"],
    heroes: ["马超"],
    quality: "极强",
    description: "马超的核心技能，极致的先手与追击能力。",
    stars: 5
  },
  {
    id: "skill_035",
    name: "百步穿杨",
    type: "chase",
    target: "self",
    effect: "使自身攻击后有35%概率使目标陷入怯战状态，普通攻击伤害提高30%。",
    cooldown: 0,
    tags: ["追击", "怯战", "增伤"],
    heroes: ["甘宁"],
    quality: "强力",
    description: "甘宁的核心追击技能，高暴击与怯战效果。",
    stars: 4
  },

  // ===== 被动战法 =====
  {
    id: "skill_007",
    name: "洛神",
    type: "passive",
    target: "self",
    effect: "普通攻击后，有40%概率对目标发动谋略攻击（谋略伤害率90%），并有30%概率使目标陷入冰冻状态。",
    cooldown: 0,
    tags: ["谋略", "追击", "冰冻", "被动"],
    heroes: ["甄姬"],
    quality: "强力",
    description: "甄姬的核心被动，冰冻控制配合谋略伤害。",
    stars: 4
  },
  {
    id: "skill_021",
    name: "银龙",
    type: "passive",
    target: "self",
    effect: "普通攻击后，对目标再发动一次攻击（伤害率100%），并有30%概率使目标怯战。",
    cooldown: 0,
    tags: ["追击", "怯战", "攻击", "被动"],
    heroes: ["赵云"],
    quality: "强力",
    description: "赵云的追击技能，补充伤害配合怯战控制。",
    stars: 5
  },
  {
    id: "skill_037",
    name: "手不释卷",
    type: "passive",
    target: "self",
    effect: "使自身谋略属性提高30点，普通攻击后有45%概率对目标发动谋略攻击（谋略伤害率80%）。",
    cooldown: 0,
    tags: ["谋略", "追击", "被动"],
    heroes: ["太史慈"],
    quality: "强力",
    description: "太史慈的被动技能，谋略追击补充伤害。",
    stars: 4
  },

  // ===== 指挥增益类 =====
  {
    id: "skill_053",
    name: "双将",
    type: "command",
    target: "me",
    effect: "战斗开始后，每回合使自身攻击提高15点，可叠加3次。",
    cooldown: 0,
    tags: ["攻击", "增益", "指挥", "叠加"],
    heroes: ["袁绍"],
    quality: "一般",
    description: "袁绍的指挥技能，叠加攻击增益。",
    stars: 3
  },
  {
    id: "skill_057",
    name: "镇压",
    type: "command",
    target: "enemy",
    effect: "战斗开始后，每回合使敌军单体谋略属性降低20点。",
    cooldown: 0,
    tags: ["减益", "指挥", "谋略"],
    heroes: ["朱儁"],
    quality: "强力",
    description: "朱儁的指挥技能，持续降低敌方谋略。",
    stars: 4
  },
  {
    id: "skill_059",
    name: "亡语",
    type: "command",
    target: "me",
    effect: "我军群体普通攻击后，对敌军单体发动谋略攻击（谋略伤害率60%）。",
    cooldown: 0,
    tags: ["谋略", "指挥", "追击"],
    heroes: ["灵帝"],
    quality: "强力",
    description: "灵帝的指挥技能，配合普攻输出额外伤害。",
    stars: 4
  }
];

// 战法品质颜色
export const QUALITY_COLORS = {
  "极强": "#e74c3c",
  "强力": "#f39c12",
  "一般": "#95a5a6"
};

// 战法类型
export const SKILL_TYPES = {
  "command": { name: "指挥", color: "#9b59b6" },
  "active": { name: "主动", color: "#e74c3c" },
  "passive": { name: "被动", color: "#3498db" },
  "chase": { name: "追击", color: "#27ae60" }
};
