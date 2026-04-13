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

// 高一数学知识点数据
export const grade10Data = {
  name: '高一数学',
  chapters: [
    {
      id: 'h1ch1',
      name: '集合与函数',
      icon: '📊',
      sections: [
        {
          id: 'h1ch1-1',
          name: '集合',
          points: [
            {
              id: 'h1p1-1-1',
              title: '集合的概念',
              content: '集合是具有某种特定性质的事物的总体。组成集合的对象称为元素。',
              example: 'A = {1, 2, 3} 表示由1,2,3组成的集合',
            },
            {
              id: 'h1p1-1-2',
              title: '集合的表示方法',
              content: '列举法：将集合的所有元素一一列出。描述法：用元素特征性质描述。',
              example: '列举法：A = {1, 2, 3}；描述法：B = {x | x > 0}',
            },
            {
              id: 'h1p1-1-3',
              title: '集合的关系',
              content: '子集：若A中任意元素都在B中，则A⊆B。真子集：A⊆B且A≠B。空集：不含任何元素的集合，记作∅。',
              example: '{1,2} ⊆ {1,2,3}；∅是任何集合的子集',
            },
            {
              id: 'h1p1-1-4',
              title: '集合的运算',
              content: '交集A∩B：属于A且属于B。并集A∪B：属于A或属于B。补集∁UA：U中不属于A的元素。',
              example: 'A={1,2}, B={2,3}，则A∩B={2}，A∪B={1,2,3}',
            },
          ],
        },
        {
          id: 'h1ch1-2',
          name: '函数',
          points: [
            {
              id: 'h1p1-2-1',
              title: '函数的概念',
              content: '设A、B是非空数集，如果按照某种对应法则f，对于A中的每个元素x，在B中有唯一确定的y与之对应，则称f是A到B的函数，记作y=f(x)。',
              example: 'f(x) = 2x + 1，定义域A={1,2,3}，则f(1)=3',
            },
            {
              id: 'h1p1-2-2',
              title: '函数的定义域与值域',
              content: '定义域：自变量x的取值范围。值域：函数值y的取值范围。',
              example: 'f(x)=1/x的定义域是x≠0，值域是y≠0',
            },
            {
              id: 'h1p1-2-3',
              title: '函数的单调性',
              content: '增函数：x1<x2时，f(x1)<f(x2)。减函数：x1<x2时，f(x1)>f(x2)。',
              example: 'f(x)=2x在R上是增函数；f(x)=-x在R上是减函数',
            },
            {
              id: 'h1p1-2-4',
              title: '函数的奇偶性',
              content: '偶函数：f(-x)=f(x)，图像关于y轴对称。奇函数：f(-x)=-f(x)，图像关于原点对称。',
              example: 'f(x)=x²是偶函数；f(x)=x³是奇函数',
            },
          ],
        },
        {
          id: 'h1ch1-3',
          name: '指数函数与对数函数',
          points: [
            {
              id: 'h1p1-3-1',
              title: '指数运算法则',
              content: 'aᵐ·aⁿ=aᵐ⁺ⁿ；(aᵐ)ⁿ=aᵐⁿ；a⁰=1(a≠0)；a⁻ᵐ=1/aᵐ',
              example: '2³·2⁴=2⁷=128；(3²)³=3⁶=729',
            },
            {
              id: 'h1p1-3-2',
              title: '指数函数',
              content: '形式：y=aˣ (a>0且a≠1)。a>1时为增函数，0<a<1时为减函数。',
              example: 'y=2ˣ，当x=3时y=8',
            },
            {
              id: 'h1p1-3-3',
              title: '对数的概念',
              content: '若aᵐ=n，则m=logₐn。a是底数，n是真数。logₐa=1，logₐ1=0。',
              example: '2³=8，所以log₂8=3',
            },
            {
              id: 'h1p1-3-4',
              title: '对数运算法则',
              content: 'logₐ(MN)=logₐM+logₐN；logₐ(M/N)=logₐM-logₐN；logₐMⁿ=n·logₐM',
              example: 'log₂8+log₂4=log₂32=5',
            },
            {
              id: 'h1p1-3-5',
              title: '对数函数',
              content: '形式：y=logₐx (a>0且a≠1)。与指数函数互为反函数。',
              example: 'y=log₂x，当x=8时y=3',
            },
          ],
        },
      ],
    },
    {
      id: 'h1ch2',
      name: '三角函数',
      icon: '📐',
      sections: [
        {
          id: 'h1ch2-1',
          name: '任意角的三角函数',
          points: [
            {
              id: 'h1p2-1-1',
              title: '角的推广',
              content: '角可以超出0°~360°，正角逆时针，负角顺时针。弧度制：180°=π弧度。',
              example: '30°=π/6弧度；-45°=-π/4弧度',
            },
            {
              id: 'h1p2-1-2',
              title: '三角函数定义',
              content: 'sinα=y/r，cosα=x/r，tanα=y/x（x≠0）。其中(x,y)是角α终边上一点，r=√(x²+y²)。',
              example: 'P(1,√3)在角α终边上，则sinα=√3/2',
            },
            {
              id: 'h1p2-1-3',
              title: '同角三角函数关系',
              content: 'sin²α+cos²α=1；tanα=sinα/cosα',
              example: '已知sinα=3/5，则cosα=±4/5',
            },
          ],
        },
        {
          id: 'h1ch2-2',
          name: '三角函数图像与性质',
          points: [
            {
              id: 'h1p2-2-1',
              title: '正弦函数图像',
              content: 'y=sinx，定义域R，值域[-1,1]，周期2π，奇函数。',
              example: 'sin0=0，sinπ/2=1，sinπ=0',
            },
            {
              id: 'h1p2-2-2',
              title: '余弦函数图像',
              content: 'y=cosx，定义域R，值域[-1,1]，周期2π，偶函数。',
              example: 'cos0=1，cosπ/2=0，cosπ=-1',
            },
            {
              id: 'h1p2-2-3',
              title: '正切函数图像',
              content: 'y=tanx，定义域{x|x≠π/2+kπ}，值域R，周期π，奇函数。',
              example: 'tan0=0，tanπ/4=1',
            },
            {
              id: 'h1p2-2-4',
              title: '三角函数图像变换',
              content: 'y=sinx→y=Asin(ωx+φ)：A是振幅，ω影响周期，T=2π/|ω|，φ是初相。',
              example: 'y=2sin(2x+π/3)：振幅2，周期π，初相π/3',
            },
          ],
        },
        {
          id: 'h1ch2-3',
          name: '三角恒等变换',
          points: [
            {
              id: 'h1p2-3-1',
              title: '两角和与差公式',
              content: 'sin(α±β)=sinαcosβ±cosαsinβ；cos(α±β)=cosαcosβ∓sinαsinβ',
              example: 'sin75°=sin(45°+30°)=sin45°cos30°+cos45°sin30°',
            },
            {
              id: 'h1p2-3-2',
              title: '二倍角公式',
              content: 'sin2α=2sinαcosα；cos2α=cos²α-sin²α=2cos²α-1',
              example: 'sin30°=2sin15°cos15°',
            },
          ],
        },
      ],
    },
    {
      id: 'h1ch3',
      name: '平面向量',
      icon: '➡️',
      sections: [
        {
          id: 'h1ch3-1',
          name: '向量的概念',
          points: [
            {
              id: 'h1p3-1-1',
              title: '向量的定义',
              content: '既有大小又有方向的量叫做向量。表示方法：→a或AB。',
              example: '→a=(3,4)表示一个向右3个单位、向上4个单位的向量',
            },
            {
              id: 'h1p3-1-2',
              title: '向量的模',
              content: '向量的大小叫做向量的模，记作||。若→a=(x,y)，则||=√(x²+y²)。',
              example: '→a=(3,4)，则||=√(9+16)=5',
            },
            {
              id: 'h1p3-1-3',
              title: '零向量与单位向量',
              content: '长度为0的向量叫零向量(→0)。长度为1的向量叫单位向量。',
              example: '→0的方向是任意的；→a/||→a||是→a方向的单位向量',
            },
          ],
        },
        {
          id: 'h1ch3-2',
          name: '向量的运算',
          points: [
            {
              id: 'h1p3-2-1',
              title: '向量加法',
              content: '平行四边形法则：→a+→b。坐标运算：(x₁,y₁)+(x₂,y₂)=(x₁+x₂,y₁+y₂)。',
              example: '(1,2)+(3,4)=(4,6)',
            },
            {
              id: 'h1p3-2-2',
              title: '向量减法',
              content: '→a-→b=→a+(-→b)。坐标运算：(x₁,y₁)-(x₂,y₂)=(x₁-x₂,y₁-y₂)。',
              example: '(5,6)-(2,3)=(3,3)',
            },
            {
              id: 'h1p3-2-3',
              title: '数乘向量',
              content: 'λ→a，λ为实数。λ>0时方向相同，λ<0时方向相反，||λ→a||=|λ|·||。',
              example: '3·(2,1)=(6,3)；-2·(1,2)=(-2,-4)',
            },
            {
              id: 'h1p3-2-4',
              title: '向量数量积',
              content: '→a·→b=||·||·cosθ。坐标：(x₁,y₁)·(x₂,y₂)=x₁x₂+y₁y₂。',
              example: '(1,2)·(3,4)=1×3+2×4=11',
            },
          ],
        },
      ],
    },
  ],
}

// 高二数学知识点数据
export const grade11Data = {
  name: '高二数学',
  chapters: [
    {
      id: 'h2ch1',
      name: '数列',
      icon: '🔢',
      sections: [
        {
          id: 'h2ch1-1',
          name: '数列的概念',
          points: [
            {
              id: 'h2p1-1-1',
              title: '数列的定义',
              content: '按一定次序排列的一列数叫做数列。数列的一般形式：a₁,a₂,a₃,...,aₙ,...',
              example: '1,3,5,7,9,... 是一个数列，通项公式aₙ=2n-1',
            },
            {
              id: 'h2p1-1-2',
              title: '数列的通项公式',
              content: '数列第n项aₙ与n之间的关系式叫做数列的通项公式。',
              example: 'aₙ=n²的数列为1,4,9,16,...',
            },
            {
              id: 'h2p1-1-3',
              title: '数列的分类',
              content: '有穷数列与无穷数列。递增数列、递减数列、常数列。',
              example: 'aₙ=n²是递增数列；aₙ=1/n是递减数列',
            },
          ],
        },
        {
          id: 'h2ch1-2',
          name: '等差数列',
          points: [
            {
              id: 'h2p1-2-1',
              title: '等差数列定义',
              content: '从第2项起，每一项与它的前一项的差等于同一个常数d，这个数列叫等差数列。',
              example: '1,4,7,10,...是等差数列，d=3',
            },
            {
              id: 'h2p1-2-2',
              title: '等差数列通项公式',
              content: 'aₙ=a₁+(n-1)d',
              example: 'a₁=2,d=3时，a₁₀=2+9×3=29',
            },
            {
              id: 'h2p1-2-3',
              title: '等差数列前n项和',
              content: 'Sₙ=n(a₁+aₙ)/2 或 Sₙ=na₁+n(n-1)d/2',
              example: '求1+2+3+...+100=100×(1+100)/2=5050',
            },
          ],
        },
        {
          id: 'h2ch1-3',
          name: '等比数列',
          points: [
            {
              id: 'h2p1-3-1',
              title: '等比数列定义',
              content: '从第2项起，每一项与它的前一项的比等于同一个常数q，这个数列叫等比数列。',
              example: '2,6,18,54,...是等比数列，q=3',
            },
            {
              id: 'h2p1-3-2',
              title: '等比数列通项公式',
              content: 'aₙ=a₁·qⁿ⁻¹',
              example: 'a₁=3,q=2时，a₅=3×2⁴=48',
            },
            {
              id: 'h2p1-3-3',
              title: '等比数列前n项和',
              content: 'q≠1时，Sₙ=a₁(1-qⁿ)/(1-q)；q=1时，Sₙ=na₁',
              example: '求2+4+8+...+2¹⁰=2×(2¹⁰-1)/(2-1)=2046',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch2',
      name: '立体几何',
      icon: '🧊',
      sections: [
        {
          id: 'h2ch2-1',
          name: '空间几何体',
          points: [
            {
              id: 'h2p2-1-1',
              title: '棱柱',
              content: '有两个面互相平行，其余各面都是四边形，且相邻四边形的公共边都互相平行的多面体。',
              example: '长方体、正方体都是棱柱',
            },
            {
              id: 'h2p2-1-2',
              title: '棱锥',
              content: '有一个面是多边形，其余各面是有一个公共顶点的三角形的多面体。',
              example: '金字塔是四棱锥',
            },
            {
              id: 'h2p2-1-3',
              title: '圆柱、圆锥、球',
              content: '圆柱：矩形绕一边旋转。圆锥：直角三角形绕直角边旋转。球：圆绕直径旋转。',
              example: '圆柱体积V=πr²h；球体积V=4/3πr³',
            },
          ],
        },
        {
          id: 'h2ch2-2',
          name: '空间位置关系',
          points: [
            {
              id: 'h2p2-2-1',
              title: '线面平行',
              content: '直线与平面无公共点。判定：平面外一条直线与平面内一条直线平行，则该直线与此平面平行。',
              example: '长方体中，上底面的边平行于下底面',
            },
            {
              id: 'h2p2-2-2',
              title: '线面垂直',
              content: '直线与平面内任意一条直线都垂直。判定：一条直线与平面内两条相交直线垂直，则该直线垂直于这个平面。',
              example: '长方体的侧棱垂直于底面',
            },
            {
              id: 'h2p2-2-3',
              title: '面面平行',
              content: '两个平面无公共点。判定：一个平面内的两条相交直线与另一个平面平行。',
              example: '长方体的上下底面互相平行',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch3',
      name: '解析几何',
      icon: '📈',
      sections: [
        {
          id: 'h2ch3-1',
          name: '直线与圆',
          points: [
            {
              id: 'h2p3-1-1',
              title: '直线方程',
              content: '点斜式：y-y₁=k(x-x₁)；斜截式：y=kx+b；一般式：Ax+By+C=0',
              example: '过点(1,2)，斜率3的直线：y-2=3(x-1)',
            },
            {
              id: 'h2p3-1-2',
              title: '两条直线的位置关系',
              content: '平行：k₁=k₂且b₁≠b₂；垂直：k₁·k₂=-1；夹角：tanθ=|k₁-k₂|/|1+k₁k₂|',
              example: 'y=2x+1与y=2x-3平行；y=2x+1与y=-x/2+3垂直',
            },
            {
              id: 'h2p3-1-3',
              title: '圆的方程',
              content: '标准式：(x-a)²+(y-b)²=r²；一般式：x²+y²+Dx+Ey+F=0',
              example: '圆心(3,4)，半径5的圆：(x-3)²+(y-4)²=25',
            },
            {
              id: 'h2p3-1-4',
              title: '直线与圆的位置关系',
              content: '相离：d>r；相切：d=r；相交：d<r（d为圆心到直线距离）',
              example: '圆x²+y²=1与直线y=2的位置关系：d=2>1，相离',
            },
          ],
        },
        {
          id: 'h2ch3-2',
          name: '椭圆、双曲线、抛物线',
          points: [
            {
              id: 'h2p3-2-1',
              title: '椭圆',
              content: '标准方程：x²/a²+y²/b²=1 (a>b>0)。焦点在x轴上，c²=a²-b²。',
              example: 'x²/25+y²/9=1，a=5，b=3，c=4',
            },
            {
              id: 'h2p3-2-2',
              title: '双曲线',
              content: '标准方程：x²/a²-y²/b²=1。焦点在x轴上，c²=a²+b²。渐近线：y=±(b/a)x。',
              example: 'x²/9-y²/16=1，a=3，b=4，c=5',
            },
            {
              id: 'h2p3-2-3',
              title: '抛物线',
              content: '标准方程：y²=2px (p>0)。焦点(p/2,0)，准线x=-p/2。',
              example: 'y²=4x，焦点(1,0)，准线x=-1',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch4',
      name: '概率统计',
      icon: '📊',
      sections: [
        {
          id: 'h2ch4-1',
          name: '计数原理',
          points: [
            {
              id: 'h2p4-1-1',
              title: '分类加法计数原理',
              content: '完成一件事有n类方案，在第1类方案中有m₁种方法...则共有m₁+m₂+...+mₙ种方法。',
              example: '从甲地去乙地，汽车3种、火车2种、飞机1种，共6种',
            },
            {
              id: 'h2p4-1-2',
              title: '分步乘法计数原理',
              content: '完成一件事需要n个步骤，第1步有m₁种方法...则共有m₁×m₂×...×mₙ种方法。',
              example: '甲3件衬衫、乙2条裤子，可搭配3×2=6种',
            },
            {
              id: 'h2p4-1-3',
              title: '排列组合',
              content: '排列Aₙᵐ=n!/(n-m)!；组合Cₙᵐ=n!/[m!(n-m)!]',
              example: '5人中选3人排成一列：A₅³=60；只选3人：C₅³=10',
            },
          ],
        },
        {
          id: 'h2ch4-2',
          name: '概率',
          points: [
            {
              id: 'h2p4-2-1',
              title: '古典概型',
              content: 'P(A)=A包含的基本事件数/基本事件总数',
              example: '掷骰子，点数大于4的概率：P=2/6=1/3',
            },
            {
              id: 'h2p4-2-2',
              title: '几何概型',
              content: 'P(A)=A区域长度(面积、体积)/总区域长度(面积、体积)',
              example: '在[0,1]区间随机取一点，大于0.5的概率=0.5',
            },
            {
              id: 'h2p4-2-3',
              title: '条件概率',
              content: 'P(B|A)=P(AB)/P(A)，事件A发生的条件下B发生的概率。',
              example: '袋中2白3黑，不放回取两次，两次都是白球的概率',
            },
          ],
        },
      ],
    },
  ],
}

// 高三数学知识点数据
export const grade12Data = {
  name: '高三数学',
  chapters: [
    {
      id: 'h3ch1',
      name: '导数及其应用',
      icon: '📈',
      sections: [
        {
          id: 'h3ch1-1',
          name: '导数的概念',
          points: [
            {
              id: 'h3p1-1-1',
              title: '导数的定义',
              content: 'f\'(x)=lim(Δx→0)[f(x+Δx)-f(x)]/Δx，几何意义是切线斜率。',
              example: 'f(x)=x²的导数：f\'(x)=2x',
            },
            {
              id: 'h3p1-1-2',
              title: '常见函数的导数',
              content: '(xⁿ)\'=nxⁿ⁻¹；(sinx)\'=cosx；(cosx)\'=-sinx；(eˣ)\'=eˣ；(lnx)\'=1/x',
              example: 'f(x)=x³+2x，则f\'(x)=3x²+2',
            },
            {
              id: 'h3p1-1-3',
              title: '导数的运算法则',
              content: '(u±v)\'=u\'±v\'；(uv)\'=u\'v+uv\'；(u/v)\'=(u\'v-uv\')/v²',
              example: 'f(x)=x·sinx，f\'(x)=sinx+x·cosx',
            },
          ],
        },
        {
          id: 'h3ch1-2',
          name: '导数的应用',
          points: [
            {
              id: 'h3p1-2-1',
              title: '函数的单调性',
              content: 'f\'(x)>0则f(x)递增；f\'(x)<0则f(x)递减。',
              example: 'f(x)=x²-4x，f\'(x)=2x-4>0时x>2，递增',
            },
            {
              id: 'h3p1-2-2',
              title: '函数的极值',
              content: 'f\'(x)=0的点是可疑极值点。左侧f\'>0、右侧f\'<0则为极大值点；反之为极小值点。',
              example: 'f(x)=x³-3x，f\'(x)=3(x²-1)，极值点x=±1',
            },
            {
              id: 'h3p1-2-3',
              title: '函数的最值',
              content: '闭区间上连续函数必有最大值和最小值，比较极值点和端点函数值。',
              example: '求f(x)=x²-4x在[0,3]上的最值：最小值f(2)=-4，最大值f(0)=0',
            },
          ],
        },
      ],
    },
    {
      id: 'h3ch2',
      name: '复数',
      icon: '➕',
      sections: [
        {
          id: 'h3ch2-1',
          name: '复数的概念与运算',
          points: [
            {
              id: 'h3p2-1-1',
              title: '复数的定义',
              content: '形如a+bi(a,b∈R)的数叫复数。i²=-1。a叫实部，b叫虚部。',
              example: '3+4i，实部3，虚部4',
            },
            {
              id: 'h3p2-1-2',
              title: '复数的分类',
              content: 'b=0时为实数；b≠0时为虚数；a=0且b≠0时为纯虚数。',
              example: '3是实数；3+4i是虚数；3i是纯虚数',
            },
            {
              id: 'h3p2-1-3',
              title: '复数的运算',
              content: '(a+bi)+(c+di)=(a+c)+(b+d)i；(a+bi)(c+di)=(ac-bd)+(ad+bc)i',
              example: '(1+2i)(3+i)=3+i+6i+2i²=1+7i',
            },
            {
              id: 'h3p2-1-4',
              title: '复数的模',
              content: '|a+bi|=√(a²+b²)',
              example: '|3+4i|=√(9+16)=5',
            },
          ],
        },
      ],
    },
    {
      id: 'h3ch3',
      name: '排列组合与二项式定理',
      icon: '🔢',
      sections: [
        {
          id: 'h3ch3-1',
          name: '排列组合',
          points: [
            {
              id: 'h3p3-1-1',
              title: '排列数公式',
              content: 'Aₙᵐ=n(n-1)(n-2)...(n-m+1)=n!/(n-m)!；Aₙⁿ=n!',
              example: 'A₅³=5×4×3=60',
            },
            {
              id: 'h3p3-1-2',
              title: '组合数公式',
              content: 'Cₙᵐ=Aₙᵐ/Aₘᵐ=n!/[m!(n-m)!]；性质：Cₙᵐ=Cₙⁿ⁻ᵐ；Cₙᵐ⁺¹=Cₙᵐ⁻¹+Cₙᵐ',
              example: 'C₅³=10，C₅²也等于10',
            },
          ],
        },
        {
          id: 'h3ch3-2',
          name: '二项式定理',
          points: [
            {
              id: 'h3p3-2-1',
              title: '二项式定理',
              content: '(a+b)ⁿ=ΣCₙᵏaⁿ⁻ᵏbᵏ=Cₙ⁰aⁿ+Cₙ¹aⁿ⁻¹b+...+Cₙⁿbⁿ',
              example: '(x+1)³=x³+3x²+3x+1',
            },
            {
              id: 'h3p3-2-2',
              title: '二项展开式的性质',
              content: '共有n+1项；第k+1项Tₖ₊₁=Cₙᵏaⁿ⁻ᵏbᵏ；各项二项式系数之和=2ⁿ。',
              example: '(1+2)⁴=1+8+24+32+16=81，C₄⁰+C₄¹+C₄²+C₄³+C₄⁴=16=2⁴',
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
    { id: 'h1', name: '高一', data: grade10Data },
    { id: 'h2', name: '高二', data: grade11Data },
    { id: 'h3', name: '高三', data: grade12Data },
  ],
}

// 高一数学知识点数据
export const grade10Data = {
  name: '高一数学',
  chapters: [
    {
      id: 'h1ch1',
      name: '集合与函数',
      icon: '📊',
      sections: [
        {
          id: 'h1ch1-1',
          name: '集合',
          points: [
            {
              id: 'h1p1-1-1',
              title: '集合的概念',
              content: '集合是具有某种特定性质的事物的总体。组成集合的对象称为元素。',
              example: 'A = {1, 2, 3} 表示由1,2,3组成的集合',
            },
            {
              id: 'h1p1-1-2',
              title: '集合的表示方法',
              content: '列举法：将集合的所有元素一一列出。描述法：用元素特征性质描述。',
              example: '列举法：A = {1, 2, 3}；描述法：B = {x | x > 0}',
            },
            {
              id: 'h1p1-1-3',
              title: '集合的关系',
              content: '子集：若A中任意元素都在B中，则A⊆B。真子集：A⊆B且A≠B。空集：不含任何元素的集合，记作∅。',
              example: '{1,2} ⊆ {1,2,3}；∅是任何集合的子集',
            },
            {
              id: 'h1p1-1-4',
              title: '集合的运算',
              content: '交集A∩B：属于A且属于B。并集A∪B：属于A或属于B。补集∁UA：U中不属于A的元素。',
              example: 'A={1,2}, B={2,3}，则A∩B={2}，A∪B={1,2,3}',
            },
          ],
        },
        {
          id: 'h1ch1-2',
          name: '函数',
          points: [
            {
              id: 'h1p1-2-1',
              title: '函数的概念',
              content: '设A、B是非空数集，如果按照某种对应法则f，对于A中的每个元素x，在B中有唯一确定的y与之对应，则称f是A到B的函数，记作y=f(x)。',
              example: 'f(x) = 2x + 1，定义域A={1,2,3}，则f(1)=3',
            },
            {
              id: 'h1p1-2-2',
              title: '函数的定义域与值域',
              content: '定义域：自变量x的取值范围。值域：函数值y的取值范围。',
              example: 'f(x)=1/x的定义域是x≠0，值域是y≠0',
            },
            {
              id: 'h1p1-2-3',
              title: '函数的单调性',
              content: '增函数：x1<x2时，f(x1)<f(x2)。减函数：x1<x2时，f(x1)>f(x2)。',
              example: 'f(x)=2x在R上是增函数；f(x)=-x在R上是减函数',
            },
            {
              id: 'h1p1-2-4',
              title: '函数的奇偶性',
              content: '偶函数：f(-x)=f(x)，图像关于y轴对称。奇函数：f(-x)=-f(x)，图像关于原点对称。',
              example: 'f(x)=x²是偶函数；f(x)=x³是奇函数',
            },
          ],
        },
        {
          id: 'h1ch1-3',
          name: '指数函数与对数函数',
          points: [
            {
              id: 'h1p1-3-1',
              title: '指数运算法则',
              content: 'aᵐ·aⁿ=aᵐ⁺ⁿ；(aᵐ)ⁿ=aᵐⁿ；a⁰=1(a≠0)；a⁻ᵐ=1/aᵐ',
              example: '2³·2⁴=2⁷=128；(3²)³=3⁶=729',
            },
            {
              id: 'h1p1-3-2',
              title: '指数函数',
              content: '形式：y=aˣ (a>0且a≠1)。a>1时为增函数，0<a<1时为减函数。',
              example: 'y=2ˣ，当x=3时y=8',
            },
            {
              id: 'h1p1-3-3',
              title: '对数的概念',
              content: '若aᵐ=n，则m=logₐn。a是底数，n是真数。logₐa=1，logₐ1=0。',
              example: '2³=8，所以log₂8=3',
            },
            {
              id: 'h1p1-3-4',
              title: '对数运算法则',
              content: 'logₐ(MN)=logₐM+logₐN；logₐ(M/N)=logₐM-logₐN；logₐMⁿ=n·logₐM',
              example: 'log₂8+log₂4=log₂32=5',
            },
            {
              id: 'h1p1-3-5',
              title: '对数函数',
              content: '形式：y=logₐx (a>0且a≠1)。与指数函数互为反函数。',
              example: 'y=log₂x，当x=8时y=3',
            },
          ],
        },
      ],
    },
    {
      id: 'h1ch2',
      name: '三角函数',
      icon: '📐',
      sections: [
        {
          id: 'h1ch2-1',
          name: '任意角的三角函数',
          points: [
            {
              id: 'h1p2-1-1',
              title: '角的推广',
              content: '角可以超出0°~360°，正角逆时针，负角顺时针。弧度制：180°=π弧度。',
              example: '30°=π/6弧度；-45°=-π/4弧度',
            },
            {
              id: 'h1p2-1-2',
              title: '三角函数定义',
              content: 'sinα=y/r，cosα=x/r，tanα=y/x（x≠0）。其中(x,y)是角α终边上一点，r=√(x²+y²)。',
              example: 'P(1,√3)在角α终边上，则sinα=√3/2',
            },
            {
              id: 'h1p2-1-3',
              title: '同角三角函数关系',
              content: 'sin²α+cos²α=1；tanα=sinα/cosα',
              example: '已知sinα=3/5，则cosα=±4/5',
            },
          ],
        },
        {
          id: 'h1ch2-2',
          name: '三角函数图像与性质',
          points: [
            {
              id: 'h1p2-2-1',
              title: '正弦函数图像',
              content: 'y=sinx，定义域R，值域[-1,1]，周期2π，奇函数。',
              example: 'sin0=0，sinπ/2=1，sinπ=0',
            },
            {
              id: 'h1p2-2-2',
              title: '余弦函数图像',
              content: 'y=cosx，定义域R，值域[-1,1]，周期2π，偶函数。',
              example: 'cos0=1，cosπ/2=0，cosπ=-1',
            },
            {
              id: 'h1p2-2-3',
              title: '正切函数图像',
              content: 'y=tanx，定义域{x|x≠π/2+kπ}，值域R，周期π，奇函数。',
              example: 'tan0=0，tanπ/4=1',
            },
            {
              id: 'h1p2-2-4',
              title: '三角函数图像变换',
              content: 'y=sinx→y=Asin(ωx+φ)：A是振幅，ω影响周期，T=2π/|ω|，φ是初相。',
              example: 'y=2sin(2x+π/3)：振幅2，周期π，初相π/3',
            },
          ],
        },
        {
          id: 'h1ch2-3',
          name: '三角恒等变换',
          points: [
            {
              id: 'h1p2-3-1',
              title: '两角和与差公式',
              content: 'sin(α±β)=sinαcosβ±cosαsinβ；cos(α±β)=cosαcosβ∓sinαsinβ',
              example: 'sin75°=sin(45°+30°)=sin45°cos30°+cos45°sin30°',
            },
            {
              id: 'h1p2-3-2',
              title: '二倍角公式',
              content: 'sin2α=2sinαcosα；cos2α=cos²α-sin²α=2cos²α-1',
              example: 'sin30°=2sin15°cos15°',
            },
          ],
        },
      ],
    },
    {
      id: 'h1ch3',
      name: '平面向量',
      icon: '➡️',
      sections: [
        {
          id: 'h1ch3-1',
          name: '向量的概念',
          points: [
            {
              id: 'h1p3-1-1',
              title: '向量的定义',
              content: '既有大小又有方向的量叫做向量。表示方法：→a或AB。',
              example: '→a=(3,4)表示一个向右3个单位、向上4个单位的向量',
            },
            {
              id: 'h1p3-1-2',
              title: '向量的模',
              content: '向量的大小叫做向量的模，记作||。若→a=(x,y)，则||=√(x²+y²)。',
              example: '→a=(3,4)，则||=√(9+16)=5',
            },
            {
              id: 'h1p3-1-3',
              title: '零向量与单位向量',
              content: '长度为0的向量叫零向量(→0)。长度为1的向量叫单位向量。',
              example: '→0的方向是任意的；→a/||→a||是→a方向的单位向量',
            },
          ],
        },
        {
          id: 'h1ch3-2',
          name: '向量的运算',
          points: [
            {
              id: 'h1p3-2-1',
              title: '向量加法',
              content: '平行四边形法则：→a+→b。坐标运算：(x₁,y₁)+(x₂,y₂)=(x₁+x₂,y₁+y₂)。',
              example: '(1,2)+(3,4)=(4,6)',
            },
            {
              id: 'h1p3-2-2',
              title: '向量减法',
              content: '→a-→b=→a+(-→b)。坐标运算：(x₁,y₁)-(x₂,y₂)=(x₁-x₂,y₁-y₂)。',
              example: '(5,6)-(2,3)=(3,3)',
            },
            {
              id: 'h1p3-2-3',
              title: '数乘向量',
              content: 'λ→a，λ为实数。λ>0时方向相同，λ<0时方向相反，||λ→a||=|λ|·||。',
              example: '3·(2,1)=(6,3)；-2·(1,2)=(-2,-4)',
            },
            {
              id: 'h1p3-2-4',
              title: '向量数量积',
              content: '→a·→b=||·||·cosθ。坐标：(x₁,y₁)·(x₂,y₂)=x₁x₂+y₁y₂。',
              example: '(1,2)·(3,4)=1×3+2×4=11',
            },
          ],
        },
      ],
    },
  ],
}

// 高二数学知识点数据
export const grade11Data = {
  name: '高二数学',
  chapters: [
    {
      id: 'h2ch1',
      name: '数列',
      icon: '🔢',
      sections: [
        {
          id: 'h2ch1-1',
          name: '数列的概念',
          points: [
            {
              id: 'h2p1-1-1',
              title: '数列的定义',
              content: '按一定次序排列的一列数叫做数列。数列的一般形式：a₁,a₂,a₃,...,aₙ,...',
              example: '1,3,5,7,9,... 是一个数列，通项公式aₙ=2n-1',
            },
            {
              id: 'h2p1-1-2',
              title: '数列的通项公式',
              content: '数列第n项aₙ与n之间的关系式叫做数列的通项公式。',
              example: 'aₙ=n²的数列为1,4,9,16,...',
            },
            {
              id: 'h2p1-1-3',
              title: '数列的分类',
              content: '有穷数列与无穷数列。递增数列、递减数列、常数列。',
              example: 'aₙ=n²是递增数列；aₙ=1/n是递减数列',
            },
          ],
        },
        {
          id: 'h2ch1-2',
          name: '等差数列',
          points: [
            {
              id: 'h2p1-2-1',
              title: '等差数列定义',
              content: '从第2项起，每一项与它的前一项的差等于同一个常数d，这个数列叫等差数列。',
              example: '1,4,7,10,...是等差数列，d=3',
            },
            {
              id: 'h2p1-2-2',
              title: '等差数列通项公式',
              content: 'aₙ=a₁+(n-1)d',
              example: 'a₁=2,d=3时，a₁₀=2+9×3=29',
            },
            {
              id: 'h2p1-2-3',
              title: '等差数列前n项和',
              content: 'Sₙ=n(a₁+aₙ)/2 或 Sₙ=na₁+n(n-1)d/2',
              example: '求1+2+3+...+100=100×(1+100)/2=5050',
            },
          ],
        },
        {
          id: 'h2ch1-3',
          name: '等比数列',
          points: [
            {
              id: 'h2p1-3-1',
              title: '等比数列定义',
              content: '从第2项起，每一项与它的前一项的比等于同一个常数q，这个数列叫等比数列。',
              example: '2,6,18,54,...是等比数列，q=3',
            },
            {
              id: 'h2p1-3-2',
              title: '等比数列通项公式',
              content: 'aₙ=a₁·qⁿ⁻¹',
              example: 'a₁=3,q=2时，a₅=3×2⁴=48',
            },
            {
              id: 'h2p1-3-3',
              title: '等比数列前n项和',
              content: 'q≠1时，Sₙ=a₁(1-qⁿ)/(1-q)；q=1时，Sₙ=na₁',
              example: '求2+4+8+...+2¹⁰=2×(2¹⁰-1)/(2-1)=2046',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch2',
      name: '立体几何',
      icon: '🧊',
      sections: [
        {
          id: 'h2ch2-1',
          name: '空间几何体',
          points: [
            {
              id: 'h2p2-1-1',
              title: '棱柱',
              content: '有两个面互相平行，其余各面都是四边形，且相邻四边形的公共边都互相平行的多面体。',
              example: '长方体、正方体都是棱柱',
            },
            {
              id: 'h2p2-1-2',
              title: '棱锥',
              content: '有一个面是多边形，其余各面是有一个公共顶点的三角形的多面体。',
              example: '金字塔是四棱锥',
            },
            {
              id: 'h2p2-1-3',
              title: '圆柱、圆锥、球',
              content: '圆柱：矩形绕一边旋转。圆锥：直角三角形绕直角边旋转。球：圆绕直径旋转。',
              example: '圆柱体积V=πr²h；球体积V=4/3πr³',
            },
          ],
        },
        {
          id: 'h2ch2-2',
          name: '空间位置关系',
          points: [
            {
              id: 'h2p2-2-1',
              title: '线面平行',
              content: '直线与平面无公共点。判定：平面外一条直线与平面内一条直线平行，则该直线与此平面平行。',
              example: '长方体中，上底面的边平行于下底面',
            },
            {
              id: 'h2p2-2-2',
              title: '线面垂直',
              content: '直线与平面内任意一条直线都垂直。判定：一条直线与平面内两条相交直线垂直，则该直线垂直于这个平面。',
              example: '长方体的侧棱垂直于底面',
            },
            {
              id: 'h2p2-2-3',
              title: '面面平行',
              content: '两个平面无公共点。判定：一个平面内的两条相交直线与另一个平面平行。',
              example: '长方体的上下底面互相平行',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch3',
      name: '解析几何',
      icon: '📈',
      sections: [
        {
          id: 'h2ch3-1',
          name: '直线与圆',
          points: [
            {
              id: 'h2p3-1-1',
              title: '直线方程',
              content: '点斜式：y-y₁=k(x-x₁)；斜截式：y=kx+b；一般式：Ax+By+C=0',
              example: '过点(1,2)，斜率3的直线：y-2=3(x-1)',
            },
            {
              id: 'h2p3-1-2',
              title: '两条直线的位置关系',
              content: '平行：k₁=k₂且b₁≠b₂；垂直：k₁·k₂=-1；夹角：tanθ=|k₁-k₂|/|1+k₁k₂|',
              example: 'y=2x+1与y=2x-3平行；y=2x+1与y=-x/2+3垂直',
            },
            {
              id: 'h2p3-1-3',
              title: '圆的方程',
              content: '标准式：(x-a)²+(y-b)²=r²；一般式：x²+y²+Dx+Ey+F=0',
              example: '圆心(3,4)，半径5的圆：(x-3)²+(y-4)²=25',
            },
            {
              id: 'h2p3-1-4',
              title: '直线与圆的位置关系',
              content: '相离：d>r；相切：d=r；相交：d<r（d为圆心到直线距离）',
              example: '圆x²+y²=1与直线y=2的位置关系：d=2>1，相离',
            },
          ],
        },
        {
          id: 'h2ch3-2',
          name: '椭圆、双曲线、抛物线',
          points: [
            {
              id: 'h2p3-2-1',
              title: '椭圆',
              content: '标准方程：x²/a²+y²/b²=1 (a>b>0)。焦点在x轴上，c²=a²-b²。',
              example: 'x²/25+y²/9=1，a=5，b=3，c=4',
            },
            {
              id: 'h2p3-2-2',
              title: '双曲线',
              content: '标准方程：x²/a²-y²/b²=1。焦点在x轴上，c²=a²+b²。渐近线：y=±(b/a)x。',
              example: 'x²/9-y²/16=1，a=3，b=4，c=5',
            },
            {
              id: 'h2p3-2-3',
              title: '抛物线',
              content: '标准方程：y²=2px (p>0)。焦点(p/2,0)，准线x=-p/2。',
              example: 'y²=4x，焦点(1,0)，准线x=-1',
            },
          ],
        },
      ],
    },
    {
      id: 'h2ch4',
      name: '概率统计',
      icon: '📊',
      sections: [
        {
          id: 'h2ch4-1',
          name: '计数原理',
          points: [
            {
              id: 'h2p4-1-1',
              title: '分类加法计数原理',
              content: '完成一件事有n类方案，在第1类方案中有m₁种方法...则共有m₁+m₂+...+mₙ种方法。',
              example: '从甲地去乙地，汽车3种、火车2种、飞机1种，共6种',
            },
            {
              id: 'h2p4-1-2',
              title: '分步乘法计数原理',
              content: '完成一件事需要n个步骤，第1步有m₁种方法...则共有m₁×m₂×...×mₙ种方法。',
              example: '甲3件衬衫、乙2条裤子，可搭配3×2=6种',
            },
            {
              id: 'h2p4-1-3',
              title: '排列组合',
              content: '排列Aₙᵐ=n!/(n-m)!；组合Cₙᵐ=n!/[m!(n-m)!]',
              example: '5人中选3人排成一列：A₅³=60；只选3人：C₅³=10',
            },
          ],
        },
        {
          id: 'h2ch4-2',
          name: '概率',
          points: [
            {
              id: 'h2p4-2-1',
              title: '古典概型',
              content: 'P(A)=A包含的基本事件数/基本事件总数',
              example: '掷骰子，点数大于4的概率：P=2/6=1/3',
            },
            {
              id: 'h2p4-2-2',
              title: '几何概型',
              content: 'P(A)=A区域长度(面积、体积)/总区域长度(面积、体积)',
              example: '在[0,1]区间随机取一点，大于0.5的概率=0.5',
            },
            {
              id: 'h2p4-2-3',
              title: '条件概率',
              content: 'P(B|A)=P(AB)/P(A)，事件A发生的条件下B发生的概率。',
              example: '袋中2白3黑，不放回取两次，两次都是白球的概率',
            },
          ],
        },
      ],
    },
  ],
}

// 高三数学知识点数据
export const grade12Data = {
  name: '高三数学',
  chapters: [
    {
      id: 'h3ch1',
      name: '导数及其应用',
      icon: '📈',
      sections: [
        {
          id: 'h3ch1-1',
          name: '导数的概念',
          points: [
            {
              id: 'h3p1-1-1',
              title: '导数的定义',
              content: 'f\'(x)=lim(Δx→0)[f(x+Δx)-f(x)]/Δx，几何意义是切线斜率。',
              example: 'f(x)=x²的导数：f\'(x)=2x',
            },
            {
              id: 'h3p1-1-2',
              title: '常见函数的导数',
              content: '(xⁿ)\'=nxⁿ⁻¹；(sinx)\'=cosx；(cosx)\'=-sinx；(eˣ)\'=eˣ；(lnx)\'=1/x',
              example: 'f(x)=x³+2x，则f\'(x)=3x²+2',
            },
            {
              id: 'h3p1-1-3',
              title: '导数的运算法则',
              content: '(u±v)\'=u\'±v\'；(uv)\'=u\'v+uv\'；(u/v)\'=(u\'v-uv\')/v²',
              example: 'f(x)=x·sinx，f\'(x)=sinx+x·cosx',
            },
          ],
        },
        {
          id: 'h3ch1-2',
          name: '导数的应用',
          points: [
            {
              id: 'h3p1-2-1',
              title: '函数的单调性',
              content: 'f\'(x)>0则f(x)递增；f\'(x)<0则f(x)递减。',
              example: 'f(x)=x²-4x，f\'(x)=2x-4>0时x>2，递增',
            },
            {
              id: 'h3p1-2-2',
              title: '函数的极值',
              content: 'f\'(x)=0的点是可疑极值点。左侧f\'>0、右侧f\'<0则为极大值点；反之为极小值点。',
              example: 'f(x)=x³-3x，f\'(x)=3(x²-1)，极值点x=±1',
            },
            {
              id: 'h3p1-2-3',
              title: '函数的最值',
              content: '闭区间上连续函数必有最大值和最小值，比较极值点和端点函数值。',
              example: '求f(x)=x²-4x在[0,3]上的最值：最小值f(2)=-4，最大值f(0)=0',
            },
          ],
        },
      ],
    },
    {
      id: 'h3ch2',
      name: '复数',
      icon: '➕',
      sections: [
        {
          id: 'h3ch2-1',
          name: '复数的概念与运算',
          points: [
            {
              id: 'h3p2-1-1',
              title: '复数的定义',
              content: '形如a+bi(a,b∈R)的数叫复数。i²=-1。a叫实部，b叫虚部。',
              example: '3+4i，实部3，虚部4',
            },
            {
              id: 'h3p2-1-2',
              title: '复数的分类',
              content: 'b=0时为实数；b≠0时为虚数；a=0且b≠0时为纯虚数。',
              example: '3是实数；3+4i是虚数；3i是纯虚数',
            },
            {
              id: 'h3p2-1-3',
              title: '复数的运算',
              content: '(a+bi)+(c+di)=(a+c)+(b+d)i；(a+bi)(c+di)=(ac-bd)+(ad+bc)i',
              example: '(1+2i)(3+i)=3+i+6i+2i²=1+7i',
            },
            {
              id: 'h3p2-1-4',
              title: '复数的模',
              content: '|a+bi|=√(a²+b²)',
              example: '|3+4i|=√(9+16)=5',
            },
          ],
        },
      ],
    },
    {
      id: 'h3ch3',
      name: '排列组合与二项式定理',
      icon: '🔢',
      sections: [
        {
          id: 'h3ch3-1',
          name: '排列组合',
          points: [
            {
              id: 'h3p3-1-1',
              title: '排列数公式',
              content: 'Aₙᵐ=n(n-1)(n-2)...(n-m+1)=n!/(n-m)!；Aₙⁿ=n!',
              example: 'A₅³=5×4×3=60',
            },
            {
              id: 'h3p3-1-2',
              title: '组合数公式',
              content: 'Cₙᵐ=Aₙᵐ/Aₘᵐ=n!/[m!(n-m)!]；性质：Cₙᵐ=Cₙⁿ⁻ᵐ；Cₙᵐ⁺¹=Cₙᵐ⁻¹+Cₙᵐ',
              example: 'C₅³=10，C₅²也等于10',
            },
          ],
        },
        {
          id: 'h3ch3-2',
          name: '二项式定理',
          points: [
            {
              id: 'h3p3-2-1',
              title: '二项式定理',
              content: '(a+b)ⁿ=ΣCₙᵏaⁿ⁻ᵏbᵏ=Cₙ⁰aⁿ+Cₙ¹aⁿ⁻¹b+...+Cₙⁿbⁿ',
              example: '(x+1)³=x³+3x²+3x+1',
            },
            {
              id: 'h3p3-2-2',
              title: '二项展开式的性质',
              content: '共有n+1项；第k+1项Tₖ₊₁=Cₙᵏaⁿ⁻ᵏbᵏ；各项二项式系数之和=2ⁿ。',
              example: '(1+2)⁴=1+8+24+32+16=81，C₄⁰+C₄¹+C₄²+C₄³+C₄⁴=16=2⁴',
            },
          ],
        },
      ],
    },
  ],
}
