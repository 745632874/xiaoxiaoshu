// 知识图谱树形结构数据
export interface TreeNode {
  id: string
  label: string
  type: 'grade' | 'subject' | 'chapter' | 'section' | 'point'
  icon?: string
  grade?: string // 小学/初中/高中
  gradeNum?: number // 1-12年级
  subject?: string // 数学/语文/英语...
  chapter?: string // 章节名
  children?: TreeNode[]
  data?: any // 原始知识点数据
}

// 数学知识图谱树形结构
export const mathKnowledgeTree: TreeNode = {
  id: 'root',
  label: 'K12数学',
  type: 'subject',
  icon: '📐',
  children: [
    // 小学数学
    {
      id: 'primary-math',
      label: '小学',
      type: 'grade',
      grade: 'primary',
      icon: '🏫',
      children: [
        {
          id: 'g1-math',
          label: '一年级',
          type: 'grade',
          gradeNum: 1,
          icon: '1️⃣',
          children: [
            {
              id: 'g1-ch1',
              label: '数与运算',
              type: 'chapter',
              children: [
                { id: 'g1-p1', label: '10以内数的认识', type: 'point', icon: '🔢' },
                { id: 'g1-p2', label: '10以内数的加减', type: 'point', icon: '➕' },
                { id: 'g1-p3', label: '认识图形', type: 'point', icon: '🔷' },
                { id: 'g1-p4', label: '分类与整理', type: 'point', icon: '📊' },
              ],
            },
            {
              id: 'g1-ch2',
              label: '认识钟表',
              type: 'chapter',
              children: [
                { id: 'g1-p5', label: '认识整时', type: 'point', icon: '🕐' },
              ],
            },
          ],
        },
        {
          id: 'g2-math',
          label: '二年级',
          type: 'grade',
          gradeNum: 2,
          icon: '2️⃣',
          children: [
            {
              id: 'g2-ch1',
              label: '100以内数的认识',
              type: 'chapter',
              children: [
                { id: 'g2-p1', label: '数的组成', type: 'point', icon: '🔢' },
                { id: 'g2-p2', label: '100以内加减法', type: 'point', icon: '➕' },
              ],
            },
            {
              id: 'g2-ch2',
              label: '表内乘法',
              type: 'chapter',
              children: [
                { id: 'g2-p3', label: '乘法的初步认识', type: 'point', icon: '✖️' },
                { id: 'g2-p4', label: '2-6的乘法口诀', type: 'point', icon: '📝' },
              ],
            },
          ],
        },
        {
          id: 'g3-math',
          label: '三年级',
          type: 'grade',
          gradeNum: 3,
          icon: '3️⃣',
          children: [
            {
              id: 'g3-ch1',
              label: '测量',
              type: 'chapter',
              children: [
                { id: 'g3-p1', label: '长度单位的认识', type: 'point', icon: '📏' },
                { id: 'g3-p2', label: '质量单位的认识', type: 'point', icon: '⚖️' },
              ],
            },
            {
              id: 'g3-ch2',
              label: '万以内的加法和减法',
              type: 'chapter',
              children: [
                { id: 'g3-p3', label: '万以内的加法', type: 'point', icon: '➕' },
                { id: 'g3-p4', label: '万以内的减法', type: 'point', icon: '➖' },
              ],
            },
          ],
        },
        {
          id: 'g4-math',
          label: '四年级',
          type: 'grade',
          gradeNum: 4,
          icon: '4️⃣',
          children: [
            {
              id: 'g4-ch1',
              label: '四则运算',
              type: 'chapter',
              children: [
                { id: 'g4-p1', label: '加减法的意义和各部分关系', type: 'point', icon: '➕' },
                { id: 'g4-p2', label: '乘除法的意义和各部分关系', type: 'point', icon: '✖️' },
              ],
            },
            {
              id: 'g4-ch2',
              label: '位置与方向',
              type: 'chapter',
              children: [
                { id: 'g4-p3', label: '位置与方向', type: 'point', icon: '🧭' },
              ],
            },
          ],
        },
        {
          id: 'g5-math',
          label: '五年级',
          type: 'grade',
          gradeNum: 5,
          icon: '5️⃣',
          children: [
            {
              id: 'g5-ch1',
              label: '小数的意义和性质',
              type: 'chapter',
              children: [
                { id: 'g5-p1', label: '小数的意义', type: 'point', icon: '🔢' },
                { id: 'g5-p2', label: '小数的性质', type: 'point', icon: '📝' },
              ],
            },
            {
              id: 'g5-ch2',
              label: '小数的加减法',
              type: 'chapter',
              children: [
                { id: 'g5-p3', label: '小数加减法', type: 'point', icon: '➕' },
              ],
            },
          ],
        },
        {
          id: 'g6-math',
          label: '六年级',
          type: 'grade',
          gradeNum: 6,
          icon: '6️⃣',
          children: [
            {
              id: 'g6-ch1',
              label: '分数乘法',
              type: 'chapter',
              children: [
                { id: 'g6-p1', label: '分数乘法', type: 'point', icon: '✖️' },
              ],
            },
            {
              id: 'g6-ch2',
              label: '分数除法',
              type: 'chapter',
              children: [
                { id: 'g6-p2', label: '分数除法', type: 'point', icon: '➗' },
              ],
            },
          ],
        },
      ],
    },
    // 初中数学
    {
      id: 'middle-math',
      label: '初中',
      type: 'grade',
      grade: 'middle',
      icon: '🏢',
      children: [
        {
          id: 'g7-math',
          label: '七年级',
          type: 'grade',
          gradeNum: 7,
          icon: '7️⃣',
          children: [
            {
              id: 'g7-ch1',
              label: '有理数',
              type: 'chapter',
              children: [
                {
                  id: 'g7-p1',
                  label: '正数和负数',
                  type: 'point',
                  icon: '➕',
                  data: { url: '/math?grade=g7&chapter=ch1&section=ch1-1&point=p1-1-1' },
                },
                {
                  id: 'g7-p2',
                  label: '有理数',
                  type: 'point',
                  icon: '🔢',
                  data: { url: '/math?grade=g7&chapter=ch1&section=ch1-2&point=p1-2-1' },
                },
                {
                  id: 'g7-p3',
                  label: '有理数的加减法',
                  type: 'point',
                  icon: '➕➖',
                  data: { url: '/math?grade=g7&chapter=ch1&section=ch1-3&point=p1-3-1' },
                },
                {
                  id: 'g7-p4',
                  label: '有理数的乘除法',
                  type: 'point',
                  icon: '✖️➗',
                  data: { url: '/math?grade=g7&chapter=ch1&section=ch1-4&point=p1-4-1' },
                },
              ],
            },
            {
              id: 'g7-ch2',
              label: '整式的加减',
              type: 'chapter',
              children: [
                {
                  id: 'g7-p5',
                  label: '整式',
                  type: 'point',
                  icon: '📐',
                  data: { url: '/math?grade=g7&chapter=ch2&section=ch2-1&point=p2-1-1' },
                },
                {
                  id: 'g7-p6',
                  label: '整式的加减',
                  type: 'point',
                  icon: '➕',
                  data: { url: '/math?grade=g7&chapter=ch2&section=ch2-2&point=p2-2-1' },
                },
              ],
            },
            {
              id: 'g7-ch3',
              label: '一元一次方程',
              type: 'chapter',
              children: [
                {
                  id: 'g7-p7',
                  label: '一元一次方程',
                  type: 'point',
                  icon: '⚖️',
                  data: { url: '/math?grade=g7&chapter=ch3&section=ch3-1&point=p3-1-1' },
                },
                {
                  id: 'g7-p8',
                  label: '解一元一次方程',
                  type: 'point',
                  icon: '✏️',
                  data: { url: '/math?grade=g7&chapter=ch3&section=ch3-2&point=p3-2-1' },
                },
              ],
            },
          ],
        },
        {
          id: 'g8-math',
          label: '八年级',
          type: 'grade',
          gradeNum: 8,
          icon: '8️⃣',
          children: [
            {
              id: 'g8-ch1',
              label: '全等三角形',
              type: 'chapter',
              children: [
                {
                  id: 'g8-p1',
                  label: '全等三角形',
                  type: 'point',
                  icon: '🔺',
                  data: { url: '/math?grade=g8&chapter=ch1&section=ch1-1&point=p1-1-1' },
                },
                {
                  id: 'g8-p2',
                  label: '三角形全等的判定',
                  type: 'point',
                  icon: '📐',
                  data: { url: '/math?grade=g8&chapter=ch1&section=ch1-2&point=p1-2-1' },
                },
              ],
            },
            {
              id: 'g8-ch2',
              label: '轴对称',
              type: 'chapter',
              children: [
                {
                  id: 'g8-p3',
                  label: '轴对称',
                  type: 'point',
                  icon: '🪞',
                  data: { url: '/math?grade=g8&chapter=ch2&section=ch2-1&point=p2-1-1' },
                },
              ],
            },
            {
              id: 'g8-ch3',
              label: '一次函数',
              type: 'chapter',
              children: [
                {
                  id: 'g8-p4',
                  label: '函数',
                  type: 'point',
                  icon: '📈',
                },
                {
                  id: 'g8-p5',
                  label: '一次函数',
                  type: 'point',
                  icon: '📈',
                },
              ],
            },
          ],
        },
        {
          id: 'g9-math',
          label: '九年级',
          type: 'grade',
          gradeNum: 9,
          icon: '9️⃣',
          children: [
            {
              id: 'g9-ch1',
              label: '二次函数',
              type: 'chapter',
              children: [
                {
                  id: 'g9-p1',
                  label: '二次函数',
                  type: 'point',
                  icon: '📈',
                  data: { url: '/math?grade=g9&chapter=ch1&section=ch1-1&point=p1-1-1' },
                },
                {
                  id: 'g9-p2',
                  label: '二次函数的性质',
                  type: 'point',
                  icon: '📉',
                  data: { url: '/math?grade=g9&chapter=ch1&section=ch1-2&point=p1-2-1' },
                },
              ],
            },
            {
              id: 'g9-ch2',
              label: '圆',
              type: 'chapter',
              children: [
                { id: 'g9-p3', label: '圆的认识', type: 'point', icon: '⭕' },
                { id: 'g9-p4', label: '圆的周长和面积', type: 'point', icon: '📏' },
              ],
            },
            {
              id: 'g9-ch3',
              label: '概率初步',
              type: 'chapter',
              children: [
                { id: 'g9-p5', label: '概率', type: 'point', icon: '🎲' },
              ],
            },
          ],
        },
      ],
    },
    // 高中数学
    {
      id: 'high-math',
      label: '高中',
      type: 'grade',
      grade: 'high',
      icon: '🎓',
      children: [
        {
          id: 'h1-math',
          label: '高一',
          type: 'grade',
          gradeNum: 10,
          icon: '🥇',
          children: [
            {
              id: 'h1-ch1',
              label: '集合与函数概念',
              type: 'chapter',
              children: [
                { id: 'h1-p1', label: '集合', type: 'point', icon: '🔗' },
                { id: 'h1-p2', label: '函数及其表示', type: 'point', icon: '📈' },
                { id: 'h1-p3', label: '函数的基本性质', type: 'point', icon: '📊' },
              ],
            },
            {
              id: 'h1-ch2',
              label: '基本初等函数',
              type: 'chapter',
              children: [
                { id: 'h1-p4', label: '指数函数', type: 'point', icon: '📈' },
                { id: 'h1-p5', label: '对数函数', type: 'point', icon: '📉' },
                { id: 'h1-p6', label: '幂函数', type: 'point', icon: '⚡' },
              ],
            },
          ],
        },
        {
          id: 'h2-math',
          label: '高二',
          type: 'grade',
          gradeNum: 11,
          icon: '🥈',
          children: [
            {
              id: 'h2-ch1',
              label: '三角函数',
              type: 'chapter',
              children: [
                { id: 'h2-p1', label: '任意角和弧度制', type: 'point', icon: '📐' },
                { id: 'h2-p2', label: '三角函数', type: 'point', icon: '🔄' },
                { id: 'h2-p3', label: '三角函数的图像和性质', type: 'point', icon: '📈' },
              ],
            },
            {
              id: 'h2-ch2',
              label: '向量',
              type: 'chapter',
              children: [
                { id: 'h2-p4', label: '平面向量', type: 'point', icon: '➡️' },
                { id: 'h2-p5', label: '向量的运算', type: 'point', icon: '⚡' },
              ],
            },
          ],
        },
        {
          id: 'h3-math',
          label: '高三',
          type: 'grade',
          gradeNum: 12,
          icon: '🥉',
          children: [
            {
              id: 'h3-ch1',
              label: '数列',
              type: 'chapter',
              children: [
                { id: 'h3-p1', label: '数列的概念', type: 'point', icon: '🔢' },
                { id: 'h3-p2', label: '等差数列', type: 'point', icon: '➕' },
                { id: 'h3-p3', label: '等比数列', type: 'point', icon: '✖️' },
              ],
            },
            {
              id: 'h3-ch2',
              label: '导数及其应用',
              type: 'chapter',
              children: [
                { id: 'h3-p4', label: '导数的概念', type: 'point', icon: '📈' },
                { id: 'h3-p5', label: '导数的计算', type: 'point', icon: '✏️' },
                { id: 'h3-p6', label: '导数的应用', type: 'point', icon: '📉' },
              ],
            },
            {
              id: 'h3-ch3',
              label: '立体几何',
              type: 'chapter',
              children: [
                { id: 'h3-p7', label: '空间几何体', type: 'point', icon: '🔷' },
                { id: 'h3-p8', label: '空间点线面', type: 'point', icon: '📐' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// 获取节点的颜色
export function getNodeColor(node: TreeNode): string {
  // 小学 - 绿色系
  if (node.grade === 'primary') {
    return '#4ADE80' // 绿色
  }
  // 初中 - 蓝色系
  if (node.grade === 'middle') {
    return '#60A5FA' // 蓝色
  }
  // 高中 - 紫色系
  if (node.grade === 'high') {
    return '#A78BFA' // 紫色
  }
  // 根节点
  return '#10B981' // 翠绿
}

// 将树形结构转换为节点和边（用于React Flow）
export function treeToGraph(tree: TreeNode): any[] {
  const nodes: any[] = []
  const edges: any[] = []

  function traverse(node: TreeNode, parentId: string | null, depth: number = 0) {
    const x = depth * 300
    const y = nodes.filter(n => n.data.depth === depth).length * 120

    nodes.push({
      id: node.id,
      type: 'treeNode',
      position: { x, y },
      data: {
        ...node,
        depth,
        color: getNodeColor(node),
      },
    })

    if (parentId) {
      edges.push({
        id: `edge-${parentId}-${node.id}`,
        source: parentId,
        target: node.id,
        type: 'smoothstep',
        animated: true,
        style: { stroke: getNodeColor(node), strokeWidth: 2 },
      })
    }

    if (node.children) {
      node.children.forEach((child, index) => {
        traverse(child, node.id, depth + 1)
      })
    }
  }

  traverse(tree, null)

  return { nodes, edges }
}
