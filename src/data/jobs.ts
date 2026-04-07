// 就业数据
export const jobMarketData = {
  // 全球数据
  global: {
    title: '🌍 全球就业概况',
    lastUpdated: '2026年4月',
    data: {
      unemployment: {
        value: '4.9%',
        trend: '↓0.1%',
        description: '全球失业率',
      },
      workforce: {
        value: '33亿',
        trend: '↑1.2%',
        description: '全球劳动力人口',
      },
      remoteJobs: {
        value: '28%',
        trend: '↑3%',
        description: '远程工作占比',
      },
      topIndustries: [
        { name: '科技/互联网', growth: '+12%', demand: '极高' },
        { name: '医疗健康', growth: '+8%', demand: '很高' },
        { name: '新能源', growth: '+15%', demand: '极高' },
        { name: '金融', growth: '+3%', demand: '高' },
        { name: '制造业', growth: '+2%', demand: '中等' },
      ],
    },
  },

  // 中国数据
  china: {
    title: '🇨🇳 中国就业市场',
    lastUpdated: '2026年4月',
    data: {
      employed: {
        value: '7.3亿',
        trend: '↑0.5%',
        description: '城镇就业人员',
      },
      unemployment: {
        value: '5.2%',
        trend: '↓0.2%',
        description: '城镇失业率',
      },
      newJobs: {
        value: '1200万',
        trend: '年度目标',
        description: '新增就业目标',
      },
      avgSalary: {
        value: '¥8,500',
        trend: '↑5.8%',
        description: '平均月薪',
      },
      industries: [
        { name: 'IT/互联网', salary: '¥15,000+', demand: '极高' },
        { name: '人工智能', salary: '¥20,000+', demand: '极高' },
        { name: '新能源汽车', salary: '¥12,000+', demand: '很高' },
        { name: '半导体/芯片', salary: '¥18,000+', demand: '很高' },
        { name: '生物医药', salary: '¥13,000+', demand: '高' },
        { name: '金融服务', salary: '¥11,000+', demand: '高' },
        { name: '教育培训', salary: '¥8,000+', demand: '中等' },
        { name: '房地产', salary: '¥7,500+', demand: '下降' },
      ],
    },
  },

  // 职业分类
  jobCategories: [
    {
      id: 'tech',
      icon: '💻',
      name: '技术/IT',
      jobs: [
        { title: '前端开发工程师', salary: '¥12,000-25,000', demand: '极高' },
        { title: '后端开发工程师', salary: '¥13,000-28,000', demand: '极高' },
        { title: '全栈工程师', salary: '¥15,000-30,000', demand: '极高' },
        { title: '算法工程师', salary: '¥20,000-45,000', demand: '极高' },
        { title: 'AI/机器学习工程师', salary: '¥22,000-50,000', demand: '极高' },
        { title: '数据分析师', salary: '¥10,000-20,000', demand: '很高' },
        { title: '网络安全工程师', salary: '¥15,000-30,000', demand: '很高' },
        { title: '运维工程师', salary: '¥10,000-20,000', demand: '高' },
      ],
    },
    {
      id: 'business',
      icon: '💼',
      name: '商业/金融',
      jobs: [
        { title: '投资银行分析师', salary: '¥20,000-40,000', demand: '高' },
        { title: '项目经理', salary: '¥15,000-30,000', demand: '高' },
        { title: '产品经理', salary: '¥18,000-35,000', demand: '极高' },
        { title: '运营专员', salary: '¥8,000-15,000', demand: '高' },
        { title: '市场营销', salary: '¥8,000-18,000', demand: '高' },
        { title: '财务专员', salary: '¥7,000-15,000', demand: '中等' },
        { title: '人力资源', salary: '¥7,000-14,000', demand: '中等' },
      ],
    },
    {
      id: 'healthcare',
      icon: '🏥',
      name: '医疗健康',
      jobs: [
        { title: '医生', salary: '¥10,000-30,000', demand: '很高' },
        { title: '护士', salary: '¥6,000-12,000', demand: '高' },
        { title: '药剂师', salary: '¥7,000-15,000', demand: '中等' },
        { title: '医疗器械', salary: '¥10,000-20,000', demand: '高' },
        { title: '健康管理师', salary: '¥8,000-16,000', demand: '高' },
        { title: '生物制药', salary: '¥12,000-25,000', demand: '很高' },
      ],
    },
    {
      id: 'education',
      icon: '📚',
      name: '教育培训',
      jobs: [
        { title: '中小学教师', salary: '¥6,000-12,000', demand: '中等' },
        { title: '培训讲师', salary: '¥10,000-25,000', demand: '高' },
        { title: '课程设计', salary: '¥10,000-20,000', demand: '高' },
        { title: '留学顾问', salary: '¥8,000-18,000', demand: '中等' },
        { title: '在线教育运营', salary: '¥9,000-18,000', demand: '高' },
      ],
    },
    {
      id: 'engineering',
      icon: '🏗️',
      name: '工程/制造',
      jobs: [
        { title: '机械工程师', salary: '¥8,000-18,000', demand: '中等' },
        { title: '电气工程师', salary: '¥9,000-20,000', demand: '中等' },
        { title: '土木工程师', salary: '¥8,000-18,000', demand: '下降' },
        { title: '汽车工程师', salary: '¥10,000-22,000', demand: '高' },
        { title: '新能源工程师', salary: '¥12,000-25,000', demand: '极高' },
        { title: '半导体工程师', salary: '¥15,000-30,000', demand: '极高' },
      ],
    },
    {
      id: 'creative',
      icon: '🎨',
      name: '创意/设计',
      jobs: [
        { title: 'UI/UX设计师', salary: '¥10,000-22,000', demand: '高' },
        { title: '平面设计师', salary: '¥7,000-15,000', demand: '中等' },
        { title: '视频剪辑', salary: '¥8,000-18,000', demand: '高' },
        { title: '文案策划', salary: '¥7,000-14,000', demand: '中等' },
        { title: '新媒体运营', salary: '¥8,000-16,000', demand: '高' },
        { title: '电商设计', salary: '¥9,000-18,000', demand: '高' },
      ],
    },
  ],

  // 热门岗位排行
  hotJobs: [
    { rank: 1, title: '人工智能工程师', company: '科技大厂', salary: '¥35K+', trend: '↑18%' },
    { rank: 2, title: '数据科学家', company: '互联网', salary: '¥30K+', trend: '↑15%' },
    { rank: 3, title: '新能源工程师', company: '车企/电池', salary: '¥25K+', trend: '↑22%' },
    { rank: 4, title: '全栈工程师', company: '互联网', salary: '¥28K+', trend: '↑12%' },
    { rank: 5, title: '产品经理', company: '各行业', salary: '¥25K+', trend: '↑10%' },
    { rank: 6, title: '芯片工程师', company: '半导体', salary: '¥30K+', trend: '↑25%' },
    { rank: 7, title: '网络安全专家', company: '安全公司', salary: '¥28K+', trend: '↑20%' },
    { rank: 8, title: '生物医药研发', company: '药企', salary: '¥22K+', trend: '↑15%' },
    { rank: 9, title: '云计算工程师', company: '云服务商', salary: '¥27K+', trend: '↑16%' },
    { rank: 10, title: '新媒体运营', company: '各行业', salary: '¥15K+', trend: '↑8%' },
  ],

  // 就业趋势
  trends: [
    {
      icon: '🤖',
      title: 'AI替代加速',
      description: '重复性工作被AI取代，创意类、管理类岗位需求增加',
      impact: '高危职业：客服、数据录入、基础翻译',
    },
    {
      icon: '🌐',
      title: '远程办公常态化',
      description: '混合办公成为主流，跨区域就业成为可能',
      impact: '新兴岗位：远程协作专家、在线团队管理',
    },
    {
      icon: '🔋',
      title: '新能源爆发',
      description: '电动汽车、储能、太阳能行业高速增长',
      impact: '人才缺口：电池工程师、充电桩运维',
    },
    {
      icon: '🏥',
      title: '银发经济崛起',
      description: '老龄化带来养老、医疗、健康管理需求',
      impact: '增长领域：养老服务、康复医疗、健康管理',
    },
    {
      icon: '📱',
      title: '数字化转型',
      description: '传统行业加速数字化，IT人才需求旺盛',
      impact: '热门岗位：数字化顾问、转型咨询',
    },
  ],
}
