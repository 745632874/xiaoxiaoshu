// ============================================================
// 率土之滨 - 战法数据库（2026年真实版）
// ============================================================


export const SKILLS = [
  // ===== T0级战法 =====
  {
    id: "skill_001",
    name: "百战无怯",
    type: "passive",
    target: "self",
    effect: "每回合行动时，有50%概率进入【百战】状态：自身受到的所有伤害降低50%，每回合恢复一定兵力。持续2回合。",
    cooldown: 0,
    tags: ["减伤", "回复", "被动", "开荒核心"],
    heroes: ["乐进"],
    quality: "极强",
    description: "当前版本最强开荒战法！自成一体系的被动技能，减伤+奶量的双重保障让携带武将几乎不掉血。是百战大黄乐体系的核心。",
    stars: 5
  },
  {
    id: "skill_002",
    name: "垒石迎击",
    type: "passive",
    target: "self",
    effect: "自身受到普通攻击时，有45%概率进入规避状态使本次伤害规避；每次成功规避后，使自身下一次普攻伤害提高50%并恢复一定兵力。",
    cooldown: 0,
    tags: ["规避", "反击", "被动", "肉盾核心"],
    heroes: ["严颜"],
    quality: "极强",
    description: "征服赛季肉队必备战法！前锋武将首选。前排武将带上垒石后生存能力大幅提升，是当前版本T0阵容的标配前排战法。",
    stars: 5
  },
  {
    id: "skill_003",
    name: "战必断金",
    type: "passive",
    target: "enemy",
    effect: "战斗开始后前3回合，使敌军群体2人每回合首次普通攻击失效（怯战）。",
    cooldown: 0,
    tags: ["怯战", "控制", "被动", "开荒必备"],
    heroes: ["荀彧", "曹操"],
    quality: "极强",
    description: "开荒必备战法！前3回合怯战效果可有效降低敌方普攻伤害，是大黄乐等开荒阵容的标配控制战法。5级即可，不用刻意高加。",
    stars: 5
  },
  {
    id: "skill_004",
    name: "磐阵善守",
    type: "passive",
    target: "me",
    effect: "战斗开始后前4回合，我军群体2人兵力最低的武将首次受到伤害时伤害大幅降低，并使我军随机1人下次普攻伤害提高30%。",
    cooldown: 0,
    tags: ["减伤", "增益", "被动", "开荒必备"],
    heroes: ["黄月英", "魏延", "陆抗"],
    quality: "极强",
    description: "开荒必备战法！前4回合大幅减伤，完美配合百战体系。1级就有效，开荒期不需要高加。需注意征兵时让磐阵武将兵力比队友少1兵。",
    stars: 5
  },

  // ===== T1级战法 =====
  {
    id: "skill_005",
    name: "神兵天降",
    type: "command",
    target: "enemy",
    effect: "战斗开始后首回合，使敌军全体受到的所有伤害提高50%（受谋略属性影响），持续1回合。",
    cooldown: 0,
    tags: ["增伤", "指挥", "神赏体系"],
    heroes: ["荀彧", "张机", "陆抗"],
    quality: "强力",
    description: "神赏体系核心组件！首回合增伤50%配合大赏三军可最大化首回合爆发。是吕鬼魏延等T0阵容的必备战法。",
    stars: 5
  },
  {
    id: "skill_006",
    name: "大赏三军",
    type: "command",
    target: "me",
    effect: "战斗开始后首回合，使我军群体2人下次攻击或策略伤害提高50%（受谋略属性影响），持续1回合。",
    cooldown: 0,
    tags: ["增益", "指挥", "神赏体系"],
    heroes: ["张机", "曹操"],
    quality: "强力",
    description: "神赏体系核心组件！首回合双增益配合神兵天降，是吕鬼队等T0物理阵容的标配。",
    stars: 5
  },
  {
    id: "skill_007",
    name: "击势",
    type: "chase",
    target: "self",
    effect: "使自身普攻目标造成的下一次谋略伤害提高50%，持续直到目标发动一次谋略伤害。",
    cooldown: 0,
    tags: ["增伤", "追击", "物理核心"],
    heroes: ["吕布", "关羽"],
    quality: "强力",
    description: "物理武将核心追击战法！配合吕布等高攻击武将可最大化物理输出。是吕鬼队、蜀风队等物理阵容的标配追击技能。",
    stars: 5
  },
  {
    id: "skill_008",
    name: "一骑当千",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动一次猛烈攻击（伤害率300%），目标为骑兵时额外发动一次。",
    cooldown: 3,
    tags: ["爆发", "攻击", "主动", "物理核心"],
    heroes: ["吕布", "马超", "马云禄"],
    quality: "强力",
    description: "物理武将最强主动战法！300%伤害率配合吕布的极高面板可打出恐怖的单体爆发。是吕鬼队等顶级物理阵容的核心输出技能。",
    stars: 5
  },
  {
    id: "skill_009",
    name: "深谋远虑",
    type: "passive",
    target: "self",
    effect: "使自身每次成功发动主动战法后，对敌军单体再次发动一次强力谋略攻击（谋略伤害率120%），最多触发3次。",
    cooldown: 0,
    tags: ["谋略", "追击", "被动"],
    heroes: ["司马懿", "魏贾诩"],
    quality: "强力",
    description: "司马懿核心被动技能！配合主动战法可实现多段谋略追击，是晋司马懿等谋略阵容的必备战法。",
    stars: 5
  },
  {
    id: "skill_010",
    name: "衡轭",
    type: "command",
    target: "enemy",
    effect: "使我军全体攻击、防御、谋略属性提高15点，持续2回合。",
    cooldown: 0,
    tags: ["增益", "指挥", "魏核"],
    heroes: ["荀彧"],
    quality: "强力",
    description: "魏国神赏体系核心指挥技能！全属性增益配合神兵大赏，是魏核阵容的标准配置。",
    stars: 5
  },
  {
    id: "skill_011",
    name: "先驱突击",
    type: "passive",
    target: "self",
    effect: "战斗开始后前3回合，使自身每回合行动时优先行动，并有30%概率再次发动普通攻击。",
    cooldown: 0,
    tags: ["先手", "追击", "被动", "开荒核心"],
    heroes: ["太史慈", "郝昭", "马超"],
    quality: "强力",
    description: "开荒和打架都常用的追击战法！前3回合先手+追击效果，配合马超等高速武将可实现先手压制。",
    stars: 4
  },
  {
    id: "skill_012",
    name: "疾击其后",
    type: "chase",
    target: "self",
    effect: "使自身普攻后，对目标再发动一次攻击（伤害率110%），目标为弓兵时伤害提高50%。",
    cooldown: 0,
    tags: ["追击", "攻击", "弓兵克制"],
    heroes: ["马超", "马云禄", "甘宁"],
    quality: "强力",
    description: "马超核心追击战法！配合先驱突击可在一回合内多次攻击，快速击杀弓兵目标。",
    stars: 4
  },
  {
    id: "skill_013",
    name: "三术",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动谋略攻击（谋略伤害率200%），并使其攻击、谋略属性降低20点，持续2回合。",
    cooldown: 2,
    tags: ["谋略", "减益", "主动"],
    heroes: ["大乔"],
    quality: "强力",
    description: "大乔核心主动技能！谋略伤害配合双属性降低，是大黄乐等开荒阵容的重要补充技能。",
    stars: 4
  },
  {
    id: "skill_014",
    name: "兵无常势",
    type: "passive",
    target: "self",
    effect: "使自身每次受到伤害后，有40%概率使下次攻击伤害提高15%，最多叠加5次。",
    cooldown: 0,
    tags: ["增伤", "被动", "叠加"],
    heroes: ["黄月英", "荀彧"],
    quality: "强力",
    description: "黄月英核心被动！受击叠加增伤效果，配合大乔的治疗可稳定叠加，是百战体系的重要输出增益。",
    stars: 4
  },
  {
    id: "skill_015",
    name: "浑水摸鱼",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动谋略攻击（谋略伤害率150%），并有60%概率使目标陷入混乱状态，持续2回合。",
    cooldown: 2,
    tags: ["谋略", "混乱", "控制", "主动"],
    heroes: ["貂蝉", "吕蒙"],
    quality: "强力",
    description: "核心控制技能！高概率混乱配合吕蒙等武将，是打控制阵容的必备技能。",
    stars: 5
  },
  {
    id: "skill_016",
    name: "草木皆兵",
    type: "active",
    target: "enemy",
    effect: "对敌军单体发动谋略攻击（谋略伤害率180%），目标为骑兵时伤害提高50%。",
    cooldown: 3,
    tags: ["谋略", "攻击", "骑兵克制", "主动"],
    heroes: ["吕蒙"],
    quality: "强力",
    description: "吕蒙核心主动技能！高伤害配合骑兵克制，是吴法刀阵容的标准配置。",
    stars: 4
  },
  {
    id: "skill_017",
    name: "反计之策",
    type: "passive",
    target: "enemy",
    effect: "战斗开始后前3回合，使敌军单体首次发动主动战法时，该主动战法无效并使目标陷入怯战状态持续1回合。",
    cooldown: 0,
    tags: ["怯战", "控制", "被动", "克制法刀"],
    heroes: ["吕蒙", "曹操"],
    quality: "强力",
    description: "克制主动法刀的核心战法！前3回合封主动技能，是吕蒙等谋略武将的标配控制技能。",
    stars: 5
  },
  {
    id: "skill_018",
    name: "健卒不殆",
    type: "passive",
    target: "self",
    effect: "自身受到普通攻击时，有40%概率使本次伤害降低50%，并对攻击者发动一次反击（伤害率150%）。",
    cooldown: 0,
    tags: ["减伤", "反击", "被动", "前排"],
    heroes: ["严颜", "曹操"],
    quality: "强力",
    description: "前排武将常用被动战法！减伤配合反击效果，是严颜等肉盾武将的标配前排技能。",
    stars: 4
  },
  {
    id: "skill_019",
    name: "三军之众",
    type: "command",
    target: "me",
    effect: "每回合使我军群体2人恢复一定兵力（恢复率100%，受谋略属性影响），持续全场。",
    cooldown: 0,
    tags: ["治疗", "指挥", "辅助"],
    heroes: ["刘备", "司马炎"],
    quality: "强力",
    description: "刘备核心指挥治疗技能！每回合稳定奶量，是蜀步和晋系阵容的必备辅助技能。",
    stars: 5
  },
  {
    id: "skill_020",
    name: "始计",
    type: "command",
    target: "self",
    effect: "使自身速度提高25点，普通攻击后使下次攻击伤害提高40%。",
    cooldown: 0,
    tags: ["增益", "指挥", "追击"],
    heroes: ["刘备", "孙权"],
    quality: "强力",
    description: "常用指挥辅助技能！速度增益配合追击效果，是辅助武将的标配增益技能。",
    stars: 4
  },
  {
    id: "skill_021",
    name: "无心恋战",
    type: "command",
    target: "enemy",
    effect: "战斗开始后前3回合，使敌军全体攻击力降低30%，我军全体攻击提高15%。",
    cooldown: 0,
    tags: ["减益", "增益", "指挥", "晋系"],
    heroes: ["司马炎"],
    quality: "强力",
    description: "晋系T0阵容核心指挥技能！攻降+攻增的组合效果，是吕鬼魏延等晋系阵容的标配。",
    stars: 5
  },
  {
    id: "skill_022",
    name: "擅兵不寡",
    type: "passive",
    target: "self",
    effect: "每回合开始时，有60%概率恢复一定兵力（恢复率80%），战斗开始后第4回合起，恢复率提高30%。",
    cooldown: 0,
    tags: ["治疗", "被动", "辅助"],
    heroes: ["何太后", "张机"],
    quality: "强力",
    description: "辅助武将常用被动战法！稳定奶量配合何太后等武将，是开荒阵容的常用辅助技能。",
    stars: 3
  },
  {
    id: "skill_023",
    name: "母仪浮梦",
    type: "command",
    target: "me",
    effect: "战斗开始后每回合使自身及友军单体兵力最低的武将恢复一定兵力（恢复率70%），并使其受到伤害降低10%。",
    cooldown: 0,
    tags: ["治疗", "减伤", "指挥", "辅助"],
    heroes: ["何太后"],
    quality: "强力",
    description: "何太后的核心指挥技能！治疗配合减伤效果，是开荒阵容中何太后必备的辅助技能。",
    stars: 4
  },
  {
    id: "skill_024",
    name: "方阵突击",
    type: "chase",
    target: "self",
    effect: "使自身普攻后，对目标再发动一次攻击（伤害率100%），目标为步兵时伤害提高50%。",
    cooldown: 0,
    tags: ["追击", "攻击", "步兵克制"],
    heroes: ["太史慈"],
    quality: "强力",
    description: "太史慈的标配追击战法！配合先驱突击可稳定触发步兵克制效果。",
    stars: 4
  },
  {
    id: "skill_025",
    name: "避其锋芒",
    type: "command",
    target: "me",
    effect: "战斗开始后前3回合，使我军全体受到的谋略伤害降低40%。",
    cooldown: 0,
    tags: ["减伤", "指挥", "辅助", "克制谋略"],
    heroes: ["张机", "弓诸葛亮"],
    quality: "强力",
    description: "克制谋略队伍的核心战法！前3回合谋略减伤40%，是蜀智等阵容应对谋略对手的必备技能。",
    stars: 4
  },
  {
    id: "skill_026",
    name: "重整旗鼓",
    type: "command",
    target: "me",
    effect: "每回合有50%概率使受伤最多的友军恢复一定兵力（恢复率120%）。",
    cooldown: 0,
    tags: ["治疗", "指挥", "辅助"],
    heroes: ["弓诸葛亮", "刘备"],
    quality: "强力",
    description: "常用指挥治疗技能！概率触发奶人效果，配合蜀智阵容可稳定维持队伍血线。",
    stars: 4
  },
  {
    id: "skill_027",
    name: "胡笳羌笛",
    type: "active",
    target: "me",
    effect: "恢复我军群体2人一定兵力（恢复率100%），并使其防御属性提高30点，持续2回合。",
    cooldown: 2,
    tags: ["治疗", "增益", "主动", "平民"],
    heroes: ["蔡文姬"],
    quality: "强力",
    description: "蔡文姬的核心技能！平民玩家的最强治疗，零门槛获取，是S1-S2赛季最重要的辅助技能。",
    stars: 3
  },
  {
    id: "skill_028",
    name: "魏武之德",
    type: "command",
    target: "me",
    effect: "战斗开始后，使我军全体防御属性提高42点，谋略属性提高28点。",
    cooldown: 0,
    tags: ["增益", "指挥", "魏核"],
    heroes: ["曹操"],
    quality: "强力",
    description: "曹操的核心指挥技能！全属性增益效果，是魏国阵容的标配辅助技能。",
    stars: 5
  },
  {
    id: "skill_029",
    name: "九锡",
    type: "command",
    target: "me",
    effect: "战斗开始后每2回合恢复我军单体一定兵力（恢复率98%），并使其免疫有害效果。",
    cooldown: 0,
    tags: ["治疗", "免疫", "指挥", "吴核"],
    heroes: ["孙权"],
    quality: "强力",
    description: "孙权的核心指挥技能！治疗配合免疫效果，是吴国阵容的标配辅助技能。",
    stars: 5
  },
  {
    id: "skill_030",
    name: "战必断金(开荒版)",
    type: "passive",
    target: "enemy",
    effect: "战斗开始后前3回合，使敌军群体2人首次普通攻击失效（怯战）。5级即可，不需要高加。",
    cooldown: 0,
    tags: ["怯战", "控制", "被动", "开荒"],
    heroes: ["大乔"],
    quality: "强力",
    description: "大乔核心被动！开荒必备控制技能，5级足够。重点是配合磐阵善守形成双减伤体系。",
    stars: 4
  },
  // ===== 4/15更新：赵云加强 + XP武将下放 =====
  {
    id: "skill_025_new",
    name: "银龙冲阵(加强版)",
    type: "chase",
    target: "enemy",
    effect: "【4/15加强】发动率50%，随机对敌军单体发动2次攻击（伤害率150%），并使首次受到伤害的敌军单体受到攻击和策略攻击时的伤害提高20%（受攻击属性影响），持续至战斗结束，最多可叠加3次。",
    cooldown: 0,
    tags: ["追击", "物理输出", "加强", "增伤"],
    heroes: ["赵云"],
    quality: "强力",
    description: "【4/15加强】增伤效果从2回合改为持续至战斗结束，最多叠加3次！蜀步、赵无敌等队伍强度大幅提升，后期伤害爆炸！",
    stars: 5
  },
  {
    id: "skill_xp_guanyu_1",
    name: "樊渊泅囚",
    type: "active",
    target: "enemy",
    effect: "【4/15下放全赛季】发动率45%，使敌军单体陷入怯战状态（无法普通攻击）持续1回合，并对其发动一次攻击（伤害率120%）。",
    cooldown: 1,
    tags: ["控制", "物理输出", "XP下放", "怯战"],
    heroes: ["关羽XP"],
    quality: "强力",
    description: "【4/15下放全赛季】蜀国五虎上将核心技能！提供强力控制与输出，攻击成长2.54，全赛季可用！",
    stars: 5
  },
  {
    id: "skill_xp_sunce_1",
    name: "霸王之威",
    type: "chase",
    target: "enemy",
    effect: "【4/15下放全赛季】普通攻击后，对敌军单体发动一次攻击（伤害率120%），并有50%概率使目标陷入怯战状态持续1回合。",
    cooldown: 0,
    tags: ["追击", "物理输出", "XP下放", "怯战"],
    heroes: ["孙策XP"],
    quality: "强力",
    description: "【4/15下放全赛季】吴国霸王核心技能！稳定的追击伤害配合怯战效果，螃蟹队核心之一！",
    stars: 5
  },
  {
    id: "skill_xp_xiahouchun_1",
    name: "虎步关右",
    type: "active",
    target: "enemy",
    effect: "【4/15下放全赛季】发动率50%，使敌军单体受到攻击伤害提高15%持续2回合，并对其发动一次攻击（伤害率100%）。",
    cooldown: 1,
    tags: ["辅助", "物理输出", "XP下放", "增伤"],
    heroes: ["夏侯惇XP"],
    quality: "一般",
    description: "【4/15下放全赛季】魏国名将辅助技能！增伤配合输出，螃蟹队核心之一，全赛季可用！",
    stars: 5
  },
  {
    id: "skill_wei_jiagu",
    name: "谋谟帷幄(加强版)",
    type: "command",
    target: "me",
    effect: "【4/15加强】自身及友军单体每回合首次发动主动战法时，有60%（原55%）几率对敌军单体发动策略攻击（伤害率171%）；我军全体（原仅大营中军）低于60%兵力时，额外发动一次策略攻击（伤害率76%）。",
    cooldown: 0,
    tags: ["谋略输出", "加强", "爆发"],
    heroes: ["魏贾诩"],
    quality: "强力",
    description: "【4/15加强】触发几率55%→60%，生效目标从单体扩展为全体！魏智、魏法刀体系大幅增强！",
    stars: 5
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
  "command": { name: "指挥", color: "#9b59b6", desc: "战斗前生效，不受控制影响" },
  "active": { name: "主动", color: "#e74c3c", desc: "需要主动释放，有冷却" },
  "passive": { name: "被动", color: "#3498db", desc: "战斗前生效，不占回合" },
  "chase": { name: "追击", color: "#27ae60", desc: "普通攻击后触发" }
};

// 常用战法推荐表

export const SKILL_RECOMMENDATIONS = {
  开荒必备: ["百战无怯", "垒石迎击", "战必断金", "磐阵善守"],
  神赏体系: ["神兵天降", "大赏三军", "无心恋战"],
  物理输出: ["击势", "一骑当千", "先驱突击", "疾击其后"],
  谋略输出: ["深谋远虑", "浑水摸鱼", "草木皆兵", "三术"],
  前排肉盾: ["垒石迎击", "健卒不殆", "避其锋芒"],
  辅助治疗: ["三军之众", "擅兵不寡", "母仪浮梦", "胡笳羌笛"]
};
