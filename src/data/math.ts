// 七年级数学知识点数据
export const grade7Data = {
  name: '七年级数学',
  chapters: [
    {
      id: 'ch1',
      name: '有理数',
      icon: '🔢',
      sections: [
        {
          id: 'ch1-1',
          name: '正数和负数',
          points: [
            {
              id: 'p1-1-1',
              title: '正数的概念',
              content: '大于0的数叫做正数。如：1, 2, 3, +5 等都是正数。',
              example: '温度上升5°C记作 +5°C',
            },
            {
              id: 'p1-1-2',
              title: '负数的概念',
              content: '小于0的数叫做负数。如：-1, -2, -3 等都是负数。',
              example: '温度下降3°C记作 -3°C',
            },
            {
              id: 'p1-1-3',
              title: '0的意义',
              content: '0既不是正数也不是负数，0是正负数的分界点。',
              example: '0°C表示温度的零点，不是没有温度',
            },
          ],
        },
        {
          id: 'ch1-2',
          name: '有理数',
          points: [
            {
              id: 'p1-2-1',
              title: '有理数的分类',
              content: '整数和分数统称为有理数。有理数可以分为正有理数、0、负有理数。',
              example: '整数：...,-2,-1,0,1,2,...；分数：1/2, -3/4, 0.5',
            },
            {
              id: 'p1-2-2',
              title: '数轴',
              content: '规定了原点、正方向和单位长度的直线叫做数轴。所有有理数都可以用数轴上的点表示。',
              example: '数轴上，右边的数总比左边的大',
            },
            {
              id: 'p1-2-3',
              title: '相反数',
              content: '只有符号不同的两个数叫做互为相反数。a的相反数是-a。',
              example: '3的相反数是-3；-5的相反数是5',
            },
            {
              id: 'p1-2-4',
              title: '绝对值',
              content: '一个数在数轴上所对应点到原点的距离叫做这个数的绝对值。|a| ≥ 0。',
              example: '|-3| = 3，|3| = 3，|0| = 0',
            },
          ],
        },
        {
          id: 'ch1-3',
          name: '有理数的加减法',
          points: [
            {
              id: 'p1-3-1',
              title: '有理数加法法则',
              content: '同号两数相加，取相同的符号，并把绝对值相加。异号两数相加，绝对值相等时和为0，否则取绝对值较大的加数的符号。',
              example: '(-3) + (-5) = -8；(-3) + 5 = 2',
            },
            {
              id: 'p1-3-2',
              title: '有理数减法法则',
              content: '减去一个数，等于加上这个数的相反数。a - b = a + (-b)',
              example: '5 - (-3) = 5 + 3 = 8',
            },
          ],
        },
        {
          id: 'ch1-4',
          name: '有理数的乘除法',
          points: [
            {
              id: 'p1-4-1',
              title: '有理数乘法法则',
              content: '两数相乘，同号得正，异号得负，并把绝对值相乘。任何数与0相乘都得0。',
              example: '(-3) × (-5) = 15；(-3) × 5 = -15',
            },
            {
              id: 'p1-4-2',
              title: '有理数除法法则',
              content: '两数相除，同号得正，异号得负，并把绝对值相除。0除以任何非零数都得0。',
              example: '(-15) ÷ (-3) = 5；(-15) ÷ 3 = -5',
            },
          ],
        },
      ],
    },
    {
      id: 'ch2',
      name: '整式的加减',
      icon: '📐',
      sections: [
        {
          id: 'ch2-1',
          name: '整式',
          points: [
            {
              id: 'p2-1-1',
              title: '单项式',
              content: '数与字母的积叫做单项式。单独的一个数或一个字母也是单项式。',
              example: '3x, -5y², 7 都是单项式',
            },
            {
              id: 'p2-1-2',
              title: '多项式',
              content: '几个单项式的和叫做多项式。每个单项式叫做多项式的项。',
              example: '2x + 3, x² - 2x + 1 都是多项式',
            },
            {
              id: 'p2-1-3',
              title: '整式',
              content: '单项式和多项式统称为整式。',
              example: '3x, 2x+1, x² 都是整式',
            },
          ],
        },
        {
          id: 'ch2-2',
          name: '整式的加减',
          points: [
            {
              id: 'p2-2-1',
              title: '合并同类项',
              content: '把多项式中同类项合成一项，叫做合并同类项。合并时只把系数相加，字母和指数不变。',
              example: '3x + 2x = 5x；7y² - 3y² = 4y²',
            },
            {
              id: 'p2-2-2',
              title: '去括号法则',
              content: '括号前面是"+"号，去括号后括号里各项不变号；括号前面是"-"号，去括号后括号里各项都变号。',
              example: '+(a-b) = a-b；-(a-b) = -a+b',
            },
          ],
        },
      ],
    },
    {
      id: 'ch3',
      name: '一元一次方程',
      icon: '⚖️',
      sections: [
        {
          id: 'ch3-1',
          name: '一元一次方程',
          points: [
            {
              id: 'p3-1-1',
              title: '方程的概念',
              content: '含有未知数的等式叫做方程。使方程左右两边相等的未知数的值叫做方程的解。',
              example: 'x + 3 = 5 是一个方程，x=2 是它的解',
            },
            {
              id: 'p3-1-2',
              title: '一元一次方程',
              content: '只含有一个未知数，未知数的次数都是1，这样的方程叫做一元一次方程。',
              example: '2x + 3 = 7, x - 5 = 0 都是一元一次方程',
            },
          ],
        },
        {
          id: 'ch3-2',
          name: '解一元一次方程',
          points: [
            {
              id: 'p3-2-1',
              title: '等式的性质',
              content: '等式两边加（或减）同一个数（或式子），结果仍相等。等式两边乘同一个数，或除以同一个不为0的数，结果仍相等。',
              example: '如果 a=b，那么 a+c=b+c，a-c=b-c，ac=bc，a/c=b/c(c≠0)',
            },
            {
              id: 'p3-2-2',
              title: '解方程步骤',
              content: '1. 去分母；2. 去括号；3. 移项；4. 合并同类项；5. 系数化为1',
              example: '解 2x + 3 = 7：移项得 2x = 4，系数化为1得 x = 2',
            },
          ],
        },
      ],
    },
  ],
}

// 八年级数学数据
export const grade8Data = {
  name: '八年级数学',
  chapters: [
    {
      id: 'ch1',
      name: '全等三角形',
      icon: '🔺',
      sections: [
        {
          id: 'ch1-1',
          name: '全等三角形',
          points: [
            {
              id: 'p1-1-1',
              title: '全等三角形的定义',
              content: '能够完全重合的两个三角形叫做全等三角形。互相重合的顶点叫做对应顶点，互相重合的边叫做对应边，互相重合的角叫做对应角。',
              example: '△ABC ≌ △DEF，A与D、B与E、C与F是对应顶点',
            },
            {
              id: 'p1-1-2',
              title: '全等三角形的性质',
              content: '全等三角形的对应边相等，对应角相等。',
              example: '如果 △ABC ≌ △DEF，则 AB=DE, BC=EF, AC=DF',
            },
          ],
        },
        {
          id: 'ch1-2',
          name: '三角形全等的判定',
          points: [
            {
              id: 'p1-2-1',
              title: 'SSS（边边边）',
              content: '三边分别对应相等的两个三角形全等。',
              example: 'AB=DE, BC=EF, AC=DF ⇒ △ABC ≌ △DEF',
            },
            {
              id: 'p1-2-2',
              title: 'SAS（边角边）',
              content: '两边及其夹角分别对应相等的两个三角形全等。',
              example: 'AB=DE, ∠B=∠E, BC=EF ⇒ △ABC ≌ △DEF',
            },
            {
              id: 'p1-2-3',
              title: 'ASA（角边角）',
              content: '两角及其夹边分别对应相等的两个三角形全等。',
              example: '∠A=∠D, AB=DE, ∠B=∠E ⇒ △ABC ≌ △DEF',
            },
          ],
        },
      ],
    },
    {
      id: 'ch2',
      name: '轴对称',
      icon: '🪞',
      sections: [
        {
          id: 'ch2-1',
          name: '轴对称',
          points: [
            {
              id: 'p2-1-1',
              title: '轴对称图形',
              content: '如果一个图形沿某条直线折叠后，直线两旁的部分能够完全重合，那么这个图形叫做轴对称图形。这条直线叫做对称轴。',
              example: '圆、正方形、等腰三角形都是轴对称图形',
            },
            {
              id: 'p2-1-2',
              title: '两个图形成轴对称',
              content: '如果两个图形沿某条直线折叠后，它们能完全重合，则称这两个图形成轴对称。这条直线叫做对称轴。',
              example: '△ABC 和 △A\'B\'C\'关于直线l对称',
            },
          ],
        },
      ],
    },
  ],
}

// 九年级数学数据
export const grade9Data = {
  name: '九年级数学',
  chapters: [
    {
      id: 'ch1',
      name: '二次函数',
      icon: '📈',
      sections: [
        {
          id: 'ch1-1',
          name: '二次函数',
          points: [
            {
              id: 'p1-1-1',
              title: '二次函数的定义',
              content: '形如 y = ax² + bx + c（a≠0）的函数叫做二次函数。其中a、b、c为常数，a为二次项系数，b为一次项系数，c为常数项。',
              example: 'y = x², y = 2x² + 3x - 1 都是二次函数',
            },
            {
              id: 'p1-1-2',
              title: '二次函数的图像',
              content: '二次函数的图像是一条抛物线。当a>0时，抛物线开口向上；当a<0时，抛物线开口向下。',
              example: 'y = x² 的图像是开口向上的抛物线',
            },
          ],
        },
        {
          id: 'ch1-2',
          name: '二次函数的性质',
          points: [
            {
              id: 'p1-2-1',
              title: '顶点坐标',
              content: '二次函数 y = ax² + bx + c 的顶点坐标为 (-b/2a, (4ac-b²)/4a)。对称轴为直线 x = -b/2a。',
              example: 'y = x² - 2x + 1 的顶点为 (1, 0)',
            },
            {
              id: 'p1-2-2',
              title: '最值',
              content: '当a>0时，二次函数有最小值，值为顶点纵坐标；当a<0时，二次函数有最大值。',
              example: 'y = x² 的最小值是0；y = -x² 的最大值是0',
            },
          ],
        },
      ],
    },
  ],
}

// 年级选项配置
export const gradeOptions = {
  middle: [
    { id: 'g7', name: '七年级', data: grade7Data },
    { id: 'g8', name: '八年级', data: grade8Data },
    { id: 'g9', name: '九年级', data: grade9Data },
  ],
  primary: [
    { id: 'p1', name: '一年级' },
    { id: 'p2', name: '二年级' },
    { id: 'p3', name: '三年级' },
    { id: 'p4', name: '四年级' },
    { id: 'p5', name: '五年级' },
    { id: 'p6', name: '六年级' },
  ],
  high: [
    { id: 'h1', name: '高一' },
    { id: 'h2', name: '高二' },
    { id: 'h3', name: '高三' },
  ],
}
