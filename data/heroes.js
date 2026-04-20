// ============================================================
// 率土之滨 - 武将数据库
// ============================================================

export const HEROES = [
  // ===== 魏国 =====
  {
    id: "hero_001",
    name: "曹操",
    rarity: "star5",
    country: "魏",
    cost: 3,
    type: "soccer",
    stats: { atk: 76, def: 92, intel: 101, spd: 92 },
    skills: ["skill_001", "skill_002"],
    tags: ["辅助", "减伤", "国家队"],
    description: "魏国核心辅助，拥有全游最强的减伤指挥技能，搭配任何队伍都能大幅提升生存能力。",
    bestTeams: ["team_001", "team_002"],
    rating: { score: 98, votes: 2847 }
  },
  {
    id: "hero_002",
    name: "司马懿",
    rarity: "star5",
    country: "魏",
    cost: 3,
    type: "intel",
    stats: { atk: 42, def: 76, intel: 122, spd: 84 },
    skills: ["skill_003", "skill_004"],
    tags: ["谋略输出", "持续伤害", "爆发"],
    description: "魏国最强谋略输出，被动技能提供卓越的谋略增伤与连击效果，法师队伍核心。",
    bestTeams: ["team_003", "team_004"],
    rating: { score: 96, votes: 2156 }
  },
  {
    id: "hero_003",
    name: "张辽",
    rarity: "star5",
    country: "魏",
    cost: 2,
    type: "spd",
    stats: { atk: 104, def: 78, intel: 42, spd: 118 },
    skills: ["skill_005", "skill_006"],
    tags: ["物理输出", "先手", "爆发"],
    description: "魏国突击代表，高速度提供先手优势，擅长快速击败敌方脆皮目标。",
    bestTeams: ["team_005"],
    rating: { score: 94, votes: 1892 }
  },
  {
    id: "hero_004",
    name: "甄姬",
    rarity: "star5",
    country: "魏",
    cost: 2,
    type: "intel",
    stats: { atk: 38, def: 68, intel: 112, spd: 88 },
    skills: ["skill_007", "skill_008"],
    tags: ["谋略输出", "控制", "冰冻"],
    description: "魏国控制型谋士，拥有强力冰冻效果与持续伤害，适合各种阵容搭配。",
    bestTeams: ["team_002", "team_006"],
    rating: { score: 91, votes: 1634 }
  },
  {
    id: "hero_005",
    name: "郭嘉",
    rarity: "star4",
    country: "魏",
    cost: 2,
    type: "intel",
    stats: { atk: 36, def: 64, intel: 108, spd: 86 },
    skills: ["skill_009", "skill_010"],
    tags: ["谋略辅助", "先手", "减益"],
    description: "魏国神级辅助，高先手指挥技能为队伍提供强大增益，是魏国阵容的核心组件。",
    bestTeams: ["team_001", "team_002", "team_007"],
    rating: { score: 95, votes: 2231 }
  },
  {
    id: "hero_006",
    name: "许褚",
    rarity: "star4",
    country: "魏",
    cost: 2,
    type: "atk",
    stats: { atk: 118, def: 82, intel: 36, spd: 72 },
    skills: ["skill_011", "skill_012"],
    tags: ["物理输出", "爆发", "单点"],
    description: "魏国单点爆发代表，高攻击面板配合追击技能，可在战斗中快速击杀关键目标。",
    bestTeams: ["team_008"],
    rating: { score: 88, votes: 1203 }
  },
  {
    id: "hero_007",
    name: "夏侯惇",
    rarity: "star4",
    country: "魏",
    cost: 2,
    type: "atk",
    stats: { atk: 108, def: 88, intel: 42, spd: 76 },
    skills: ["skill_013", "skill_014"],
    tags: ["物理输出", "反击", "肉盾"],
    description: "魏国反击队核心，高防御配合反击技能，擅长消耗战与持久战。",
    bestTeams: ["team_009"],
    rating: { score: 87, votes: 987 }
  },

  // ===== 蜀国 =====
  {
    id: "hero_008",
    name: "刘备",
    rarity: "star5",
    country: "蜀",
    cost: 3,
    type: "soccer",
    stats: { atk: 52, def: 86, intel: 108, spd: 88 },
    skills: ["skill_015", "skill_016"],
    tags: ["辅助", "治疗", "国家队"],
    description: "蜀国核心奶爸，全游最强治疗指挥技能，自身属性全面，适合各种队伍。",
    bestTeams: ["team_010", "team_011", "team_012"],
    rating: { score: 99, votes: 3102 }
  },
  {
    id: "hero_009",
    name: "关羽",
    rarity: "star5",
    country: "蜀",
    cost: 3,
    type: "atk",
    stats: { atk: 122, def: 88, intel: 48, spd: 94 },
    skills: ["skill_017", "skill_018"],
    tags: ["物理输出", "控制", "爆发"],
    description: "蜀国物理天花板，强大的群体伤害配合控制效果，是蜀国阵容的灵魂人物。",
    bestTeams: ["team_010", "team_013"],
    rating: { score: 97, votes: 2654 }
  },
  {
    id: "hero_010",
    name: "张飞",
    rarity: "star5",
    country: "蜀",
    cost: 2,
    type: "atk",
    stats: { atk: 126, def: 84, intel: 38, spd: 88 },
    skills: ["skill_019", "skill_020"],
    tags: ["物理输出", "爆发", "追击"],
    description: "蜀国暴力输出代表，高攻击面板配合多次攻击技能，前期开荒表现极为出色。",
    bestTeams: ["team_010", "team_014"],
    rating: { score: 93, votes: 1987 }
  },
  {
    id: "hero_011",
    name: "赵云",
    rarity: "star5",
    country: "蜀",
    cost: 2,
    type: "spd",
    stats: { atk: 112, def: 92, intel: 52, spd: 108 },
    skills: ["skill_021", "skill_022"],
    tags: ["物理输出", "先手", "全能"],
    description: "蜀国全能战士，优秀面板配合多段攻击技能，能胜任多种阵容位置。",
    bestTeams: ["team_011", "team_013", "team_014"],
    rating: { score: 95, votes: 2341 }
  },
  {
    id: "hero_012",
    name: "诸葛亮",
    rarity: "star5",
    country: "蜀",
    cost: 3,
    type: "intel",
    stats: { atk: 38, def: 72, intel: 128, spd: 96 },
    skills: ["skill_023", "skill_024"],
    tags: ["谋略输出", "控制", "先手"],
    description: "蜀国谋略核心，强大的先手控制与持续输出，是谋略队伍的核心组件。",
    bestTeams: ["team_012", "team_015"],
    rating: { score: 94, votes: 2103 }
  },
  {
    id: "hero_013",
    name: "马超",
    rarity: "star5",
    country: "蜀",
    cost: 2,
    type: "spd",
    stats: { atk: 116, def: 82, intel: 38, spd: 122 },
    skills: ["skill_025", "skill_026"],
    tags: ["物理输出", "先手", "追击"],
    description: "蜀国速度之王，最高基础速度配合追击技能，先手能力全游第一。",
    bestTeams: ["team_014"],
    rating: { score: 92, votes: 1756 }
  },
  {
    id: "hero_014",
    name: "黄月英",
    rarity: "star4",
    country: "蜀",
    cost: 2,
    type: "intel",
    stats: { atk: 38, def: 68, intel: 114, spd: 78 },
    skills: ["skill_027", "skill_028"],
    tags: ["谋略输出", "辅助", "指挥"],
    description: "蜀国指挥型谋士，强大的指挥技能为全队提供增伤，是蜀国阵容的重要拼图。",
    bestTeams: ["team_010", "team_012"],
    rating: { score: 90, votes: 1567 }
  },

  // ===== 吴国 =====
  {
    id: "hero_015",
    name: "孙权",
    rarity: "star5",
    country: "吴",
    cost: 3,
    type: "soccer",
    stats: { atk: 56, def: 84, intel: 112, spd: 92 },
    skills: ["skill_029", "skill_030"],
    tags: ["辅助", "治疗", "国家队"],
    description: "吴国核心辅助，强大的治疗与解控能力，是吴国阵容不可或缺的灵魂人物。",
    bestTeams: ["team_016", "team_017", "team_018"],
    rating: { score: 98, votes: 2891 }
  },
  {
    id: "hero_016",
    name: "周瑜",
    rarity: "star5",
    country: "吴",
    cost: 3,
    type: "intel",
    stats: { atk: 42, def: 74, intel: 126, spd: 92 },
    skills: ["skill_031", "skill_032"],
    tags: ["谋略输出", "火攻", "爆发"],
    description: "吴国谋略输出天花板，强大的火攻技能配合持续伤害，团战表现卓越。",
    bestTeams: ["team_016", "team_019"],
    rating: { score: 96, votes: 2456 }
  },
  {
    id: "hero_017",
    name: "陆逊",
    rarity: "star5",
    country: "吴",
    cost: 2,
    type: "intel",
    stats: { atk: 44, def: 72, intel: 120, spd: 94 },
    skills: ["skill_033", "skill_034"],
    tags: ["谋略输出", "火攻", "追击"],
    description: "吴国火系核心，强大的追击火攻技能，配合灼烧效果可打出高额伤害。",
    bestTeams: ["team_016", "team_019", "team_020"],
    rating: { score: 95, votes: 2234 }
  },
  {
    id: "hero_018",
    name: "甘宁",
    rarity: "star5",
    country: "吴",
    cost: 2,
    type: "spd",
    stats: { atk: 114, def: 80, intel: 42, spd: 116 },
    skills: ["skill_035", "skill_036"],
    tags: ["物理输出", "先手", "暴击"],
    description: "吴国暴击之王，高速度配合暴击技能，先手高爆发是甘宁的最大特点。",
    bestTeams: ["team_021"],
    rating: { score: 91, votes: 1678 }
  },
  {
    id: "hero_019",
    name: "太史慈",
    rarity: "star4",
    country: "吴",
    cost: 2,
    type: "atk",
    stats: { atk: 108, def: 78, intel: 44, spd: 112 },
    skills: ["skill_037", "skill_038"],
    tags: ["物理输出", "连击", "追击"],
    description: "吴国连击代表，强大的连击与追击技能，可在一回合内造成多次伤害。",
    bestTeams: ["team_016", "team_021"],
    rating: { score: 89, votes: 1432 }
  },
  {
    id: "hero_020",
    name: "吕蒙",
    rarity: "star5",
    country: "吴",
    cost: 2,
    type: "atk",
    stats: { atk: 110, def: 86, intel: 52, spd: 102 },
    skills: ["skill_039", "skill_040"],
    tags: ["物理输出", "谋略", "爆发"],
    description: "吴国文武双全，独特的谋略+物理双修设定，让吕蒙在各种情况下都能发挥作用。",
    bestTeams: ["team_017", "team_020"],
    rating: { score: 93, votes: 1876 }
  },
  {
    id: "hero_021",
    name: "小乔",
    rarity: "star4",
    country: "吴",
    cost: 1,
    type: "intel",
    stats: { atk: 34, def: 62, intel: 106, spd: 94 },
    skills: ["skill_041", "skill_042"],
    tags: ["谋略辅助", "治疗", "加速"],
    description: "吴国加速辅助，强大的加速与治疗技能，平民玩家的吴国核心首选。",
    bestTeams: ["team_016", "team_017", "team_018"],
    rating: { score: 90, votes: 1543 }
  },

  // ===== 群雄 =====
  {
    id: "hero_022",
    name: "吕布",
    rarity: "star5",
    country: "群",
    cost: 3,
    type: "atk",
    stats: { atk: 128, def: 86, intel: 42, spd: 98 },
    skills: ["skill_043", "skill_044"],
    tags: ["物理输出", "爆发", "全能"],
    description: "全游面板最强武将，无与伦比的攻击属性，配合多种技能可应对各种战斗。",
    bestTeams: ["team_022", "team_023"],
    rating: { score: 97, votes: 2987 }
  },
  {
    id: "hero_023",
    name: "董卓",
    rarity: "star5",
    country: "群",
    cost: 3,
    type: "atk",
    stats: { atk: 118, def: 96, intel: 68, spd: 76 },
    skills: ["skill_045", "skill_046"],
    tags: ["物理输出", "肉盾", "持久"],
    description: "群雄核心肉盾，强大的生存能力与持续伤害，是群雄阵容的前排支柱。",
    bestTeams: ["team_022", "team_024"],
    rating: { score: 92, votes: 1654 }
  },
  {
    id: "hero_024",
    name: "貂蝉",
    rarity: "star5",
    country: "群",
    cost: 2,
    type: "intel",
    stats: { atk: 38, def: 68, intel: 118, spd: 96 },
    skills: ["skill_047", "skill_048"],
    tags: ["谋略辅助", "控制", "混乱"],
    description: "群雄控制之王，强大的混乱与控制技能，可有效限制敌方核心武将的发挥。",
    bestTeams: ["team_022", "team_023", "team_024"],
    rating: { score: 94, votes: 2134 }
  },
  {
    id: "hero_025",
    name: "张角",
    rarity: "star5",
    country: "群",
    cost: 2,
    type: "intel",
    stats: { atk: 44, def: 70, intel: 124, spd: 88 },
    skills: ["skill_049", "skill_050"],
    tags: ["谋略输出", "雷击", "爆发"],
    description: "群雄谋略核心，强大的雷击技能配合控制效果，是雷系队伍的灵魂人物。",
    bestTeams: ["team_025"],
    rating: { score: 93, votes: 1890 }
  },
  {
    id: "hero_026",
    name: "华雄",
    rarity: "star4",
    country: "群",
    cost: 2,
    type: "atk",
    stats: { atk: 112, def: 88, intel: 42, spd: 80 },
    skills: ["skill_051", "skill_052"],
    tags: ["物理输出", "反击", "吸血"],
    description: "群雄反击代表，高攻击配合反击与吸血技能，前期开荒与PK都很实用。",
    bestTeams: ["team_024"],
    rating: { score: 85, votes: 1098 }
  },
  {
    id: "hero_027",
    name: "袁绍",
    rarity: "star4",
    country: "群",
    cost: 2,
    type: "intel",
    stats: { atk: 46, def: 74, intel: 116, spd: 86 },
    skills: ["skill_053", "skill_054"],
    tags: ["谋略输出", "弓兵", "指挥"],
    description: "群雄弓兵核心，优秀的弓兵指挥技能与持续伤害，平民玩家的好选择。",
    bestTeams: ["team_022", "team_026"],
    rating: { score: 86, votes: 1234 }
  },
  {
    id: "hero_028",
    name: "蔡文姬",
    rarity: "star3",
    country: "群",
    cost: 2,
    type: "soccer",
    stats: { atk: 32, def: 58, intel: 98, spd: 82 },
    skills: ["skill_055", "skill_056"],
    tags: ["辅助", "治疗", "平民"],
    description: "平民神将，强大的治疗与减伤能力，免费获取，是新手玩家最重要的辅助。",
    bestTeams: ["team_027"],
    rating: { score: 93, votes: 3201 }
  },
  {
    id: "hero_029",
    name: "朱儁",
    rarity: "star4",
    country: "群",
    cost: 2,
    type: "intel",
    stats: { atk: 44, def: 70, intel: 110, spd: 84 },
    skills: ["skill_057", "skill_058"],
    tags: ["谋略输出", "指挥", "压制"],
    description: "群雄指挥代表，强大的压制指挥技能，适合各种群雄阵容的核心位置。",
    bestTeams: ["team_022", "team_026"],
    rating: { score: 88, votes: 1345 }
  },
  {
    id: "hero_030",
    name: "灵帝",
    rarity: "star4",
    country: "群",
    cost: 2,
    type: "intel",
    stats: { atk: 48, def: 72, intel: 112, spd: 88 },
    skills: ["skill_059", "skill_060"],
    tags: ["谋略输出", "持续伤害", "辅助"],
    description: "群雄持续输出代表，强大的持续伤害技能与全队增益，是群雄阵容的好辅助。",
    bestTeams: ["team_022", "team_024"],
    rating: { score: 87, votes: 1256 }
  }
];

// 武将国家映射（中文）
export const COUNTRY_MAP = {
  "魏": { color: "#3498db", name: "魏国" },
  "蜀": { color: "#27ae60", name: "蜀国" },
  "吴": { color: "#e74c3c", name: "吴国" },
  "群": { color: "#9b59b6", name: "群雄" }
};

// 武将星级映射
export const RARITY_MAP = {
  "star3": { stars: 3, color: "#95a5a6", label: "三星" },
  "star4": { stars: 4, color: "#f39c12", label: "四星" },
  "star5": { stars: 5, color: "#e74c3c", label: "五星" }
};

// 兵种类型映射
export const TYPE_MAP = {
  "atk": { name: "骑兵", icon: "🐎", desc: "高攻击，低防御" },
  "def": { name: "步兵", icon: "🛡️", desc: "高防御，低速度" },
  "spd": { name: "弓兵", icon: "🏹", desc: "高速度，中攻击" },
  "intel": { name: "骑兵(谋)", icon: "🔮", desc: "高谋略，中速度" },
  "soccer": { name: "步兵(辅)", icon: "⚔️", desc: "辅助型兵种" }
};

//  COST 映射
export const COST_MAP = {
  1: { name: "1C", color: "#27ae60" },
  2: { name: "2C", color: "#3498db" },
  3: { name: "3C", color: "#e74c3c" }
};
