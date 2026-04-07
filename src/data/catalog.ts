// 知识目录（首页加载，几KB）
export interface CatalogNode {
  id: string
  label: string
  type: 'grade' | 'subject' | 'chapter'
  icon?: string
  grade?: 'primary' | 'middle' | 'high'
  gradeNum?: number
  subject?: string
  children?: CatalogNode[]
  dataFile?: string // 数据文件路径
}

// 完整的知识目录结构
export const knowledgeCatalog: CatalogNode[] = [
  // 小学
  {
    id: 'primary',
    label: '小学',
    type: 'grade',
    icon: '🏫',
    grade: 'primary',
    children: [
      {
        id: 'primary-math',
        label: '数学',
        type: 'subject',
        subject: '数学',
        dataFile: '/data/primary-math.json',
        children: [
          { id: 'g1', label: '一年级', type: 'grade', gradeNum: 1 },
          { id: 'g2', label: '二年级', type: 'grade', gradeNum: 2 },
          { id: 'g3', label: '三年级', type: 'grade', gradeNum: 3 },
          { id: 'g4', label: '四年级', type: 'grade', gradeNum: 4 },
          { id: 'g5', label: '五年级', type: 'grade', gradeNum: 5 },
          { id: 'g6', label: '六年级', type: 'grade', gradeNum: 6 },
        ],
      },
      {
        id: 'primary-chinese',
        label: '语文',
        type: 'subject',
        subject: '语文',
        dataFile: '/data/primary-chinese.json',
        children: [
          { id: 'g1', label: '一年级', type: 'grade', gradeNum: 1 },
          { id: 'g2', label: '二年级', type: 'grade', gradeNum: 2 },
          { id: 'g3', label: '三年级', type: 'grade', gradeNum: 3 },
          { id: 'g4', label: '四年级', type: 'grade', gradeNum: 4 },
          { id: 'g5', label: '五年级', type: 'grade', gradeNum: 5 },
          { id: 'g6', label: '六年级', type: 'grade', gradeNum: 6 },
        ],
      },
      {
        id: 'primary-english',
        label: '英语',
        type: 'subject',
        subject: '英语',
        dataFile: '/data/primary-english.json',
        children: [
          { id: 'g3', label: '三年级', type: 'grade', gradeNum: 3 },
          { id: 'g4', label: '四年级', type: 'grade', gradeNum: 4 },
          { id: 'g5', label: '五年级', type: 'grade', gradeNum: 5 },
          { id: 'g6', label: '六年级', type: 'grade', gradeNum: 6 },
        ],
      },
    ],
  },
  // 初中
  {
    id: 'middle',
    label: '初中',
    type: 'grade',
    icon: '🏢',
    grade: 'middle',
    children: [
      {
        id: 'middle-math',
        label: '数学',
        type: 'subject',
        subject: '数学',
        dataFile: '/data/middle-math.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-chinese',
        label: '语文',
        type: 'subject',
        subject: '语文',
        dataFile: '/data/middle-chinese.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-english',
        label: '英语',
        type: 'subject',
        subject: '英语',
        dataFile: '/data/middle-english.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-physics',
        label: '物理',
        type: 'subject',
        subject: '物理',
        dataFile: '/data/middle-physics.json',
        children: [
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-chemistry',
        label: '化学',
        type: 'subject',
        subject: '化学',
        dataFile: '/data/middle-chemistry.json',
        children: [
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-biology',
        label: '生物',
        type: 'subject',
        subject: '生物',
        dataFile: '/data/middle-biology.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
        ],
      },
      {
        id: 'middle-history',
        label: '历史',
        type: 'subject',
        subject: '历史',
        dataFile: '/data/middle-history.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
      {
        id: 'middle-geography',
        label: '地理',
        type: 'subject',
        subject: '地理',
        dataFile: '/data/middle-geography.json',
        children: [
          { id: 'g7', label: '七年级', type: 'grade', gradeNum: 7 },
          { id: 'g8', label: '八年级', type: 'grade', gradeNum: 8 },
          { id: 'g9', label: '九年级', type: 'grade', gradeNum: 9 },
        ],
      },
    ],
  },
  // 高中
  {
    id: 'high',
    label: '高中',
    type: 'grade',
    icon: '🎓',
    grade: 'high',
    children: [
      {
        id: 'high-math',
        label: '数学',
        type: 'subject',
        subject: '数学',
        dataFile: '/data/high-math.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-chinese',
        label: '语文',
        type: 'subject',
        subject: '语文',
        dataFile: '/data/high-chinese.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-english',
        label: '英语',
        type: 'subject',
        subject: '英语',
        dataFile: '/data/high-english.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-physics',
        label: '物理',
        type: 'subject',
        subject: '物理',
        dataFile: '/data/high-physics.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-chemistry',
        label: '化学',
        type: 'subject',
        subject: '化学',
        dataFile: '/data/high-chemistry.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-biology',
        label: '生物',
        type: 'subject',
        subject: '生物',
        dataFile: '/data/high-biology.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-history',
        label: '历史',
        type: 'subject',
        subject: '历史',
        dataFile: '/data/high-history.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-geography',
        label: '地理',
        type: 'subject',
        subject: '地理',
        dataFile: '/data/high-geography.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
      {
        id: 'high-politics',
        label: '政治',
        type: 'subject',
        subject: '政治',
        dataFile: '/data/high-politics.json',
        children: [
          { id: 'h1', label: '高一', type: 'grade', gradeNum: 10 },
          { id: 'h2', label: '高二', type: 'grade', gradeNum: 11 },
          { id: 'h3', label: '高三', type: 'grade', gradeNum: 12 },
        ],
      },
    ],
  },
]

// 数据缓存管理器
class DataCacheManager {
  private cache: Map<string, any> = new Map()
  private localStorageKey = 'xiaoxiaoshu_data_cache'
  private cacheVersion = 'v1'

  constructor() {
    this.loadFromLocalStorage()
  }

  // 从localStorage加载缓存
  private loadFromLocalStorage() {
    try {
      const cached = localStorage.getItem(this.localStorageKey)
      if (cached) {
        const { version, data } = JSON.parse(cached)
        if (version === this.cacheVersion) {
          this.cache = new Map(Object.entries(data))
        }
      }
    } catch (error) {
      console.error('Failed to load cache:', error)
    }
  }

  // 保存到localStorage
  private saveToLocalStorage() {
    try {
      const data = Object.fromEntries(this.cache)
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify({ version: this.cacheVersion, data })
      )
    } catch (error) {
      console.error('Failed to save cache:', error)
    }
  }

  // 获取数据
  async get(key: string): Promise<any | null> {
    // 先从内存缓存获取
    if (this.cache.has(key)) {
      return this.cache.get(key)
    }
    return null
  }

  // 设置数据
  set(key: string, data: any) {
    this.cache.set(key, data)
    this.saveToLocalStorage()
  }

  // 清除缓存
  clear() {
    this.cache.clear()
    localStorage.removeItem(this.localStorageKey)
  }

  // 获取缓存大小
  size(): number {
    return this.cache.size
  }
}

// 导出单例
export const dataCacheManager = new DataCacheManager()

// 动态加载数据
export async function loadSubjectData(dataFile: string): Promise<any> {
  // 先从缓存获取
  const cached = await dataCacheManager.get(dataFile)
  if (cached) {
    return cached
  }

  // 缓存未命中，从API加载
  try {
    const response = await fetch(`/api/data${dataFile}`)
    if (!response.ok) {
      throw new Error('Failed to load data')
    }
    const data = await response.json()
    // 保存到缓存
    dataCacheManager.set(dataFile, data)
    return data
  } catch (error) {
    console.error('Failed to load subject data:', error)
    throw error
  }
}

// 预加载（可选）
export function preloadSubjectData(dataFile: string) {
  return loadSubjectData(dataFile)
}
