'use client'

import React, { useCallback, useMemo, useState } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  Panel,
  ReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { mathKnowledgeTree, treeToGraph, getNodeColor } from '@/data/knowledgeTree'
import { useRouter } from 'next/navigation'

export default function KnowledgeTreePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  // 将树形结构转换为图表数据
  const graphData = useMemo(
    () => treeToGraph(mathKnowledgeTree),
    []
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(graphData.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphData.edges)

  // 自定义节点组件
  const nodeTypes = useMemo(
    () => ({
      treeNode: TreeNodeComponent,
    }),
    []
  )

  // 搜索功能
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setNodes(graphData.nodes)
      setSelectedNode(null)
      return
    }

    const matchedNode = graphData.nodes.find(
      (node) =>
        node.data.label.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (matchedNode) {
      setSelectedNode(matchedNode.id)
      // 高亮匹配节点
      setNodes(
        graphData.nodes.map((node) => ({
          ...node,
          style: {
            ...node.style,
            opacity: node.id === matchedNode.id ? 1 : 0.3,
            transform: node.id === matchedNode.id ? 'scale(1.2)' : 'scale(1)',
            transition: 'all 0.3s ease',
          },
        }))
      )
    }
  }

  // 重置视图
  const handleReset = () => {
    setNodes(graphData.nodes)
    setEdges(graphData.edges)
    setSearchQuery('')
    setSelectedNode(null)
  }

  // 展开/收起全部
  const [expanded, setExpanded] = useState(true)
  const handleToggleExpand = () => {
    setExpanded(!expanded)
    // 这里可以添加展开/收起逻辑
  }

  return (
    <main className="w-full h-screen bg-gray-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={2}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls />
        <MiniMap
          nodeColor={(node) => getNodeColor(node.data)}
          maskColor="rgba(0, 0, 0, 0.5)"
        />

        {/* 顶部工具栏 */}
        <Panel position="top-center" className="bg-gray-800 p-4 rounded-xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="text-3xl">🌳</div>
            <div>
              <h1 className="text-white text-xl font-bold">数学知识图谱</h1>
              <p className="text-gray-400 text-sm">点击节点查看详情，缩放/拖拽浏览</p>
            </div>
          </div>

          {/* 搜索框 */}
          <form onSubmit={handleSearch} className="mt-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索知识点..."
                className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none w-64"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
              >
                🔍
              </button>
            </div>
          </form>

          {/* 操作按钮 */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-semibold"
            >
              🔄 重置视图
            </button>
            <button
              onClick={handleToggleExpand}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-sm font-semibold"
            >
              {expanded ? '📂 收起全部' : '📁 展开全部'}
            </button>
          </div>
        </Panel>

        {/* 图例 */}
        <Panel position="bottom-left" className="bg-gray-800 p-4 rounded-xl shadow-2xl">
          <div className="text-white font-bold mb-2">图例</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-400"></div>
              <span className="text-gray-300">小学数学</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-400"></div>
              <span className="text-gray-300">初中数学</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-400"></div>
              <span className="text-gray-300">高中数学</span>
            </div>
          </div>
        </Panel>

        {/* 统计信息 */}
        <Panel position="bottom-right" className="bg-gray-800 p-4 rounded-xl shadow-2xl">
          <div className="text-white font-bold mb-2">统计</div>
          <div className="space-y-1 text-sm text-gray-300">
            <div>📚 总知识点: {nodes.length}</div>
            <div>🔗 知识关联: {edges.length}</div>
          </div>
        </Panel>
      </ReactFlow>
    </main>
  )
}

// 自定义节点组件
function TreeNodeComponent({ data }: any) {
  const router = useRouter()

  const handleClick = () => {
    // 如果有详情页URL，跳转到详情页
    if (data.data?.url) {
      router.push(data.data.url)
    }
  }

  const iconSize = data.type === 'grade' ? 'text-3xl' : 'text-xl'
  const fontSize = data.type === 'grade' ? 'text-base' : 'text-sm'
  const padding = data.type === 'grade' ? 'p-4' : 'p-3'

  return (
    <div
      onClick={handleClick}
      className={`
        ${padding} rounded-xl shadow-lg cursor-pointer
        transition-all duration-300 hover:shadow-xl hover:scale-105
        border-2
        ${data.data?.url ? 'hover:border-green-400' : ''}
      `}
      style={{
        background: `linear-gradient(135deg, ${data.color}40, ${data.color}20)`,
        borderColor: data.color,
        minWidth: data.type === 'grade' ? '200px' : '150px',
      }}
    >
      <div className="flex items-center gap-2">
        <span className={iconSize}>{data.icon}</span>
        <span className={`font-bold ${fontSize} text-white drop-shadow-md`}>
          {data.label}
        </span>
      </div>
      {data.type === 'point' && data.data?.url && (
        <div className="text-xs text-green-300 mt-1 flex items-center gap-1">
          <span>🔗</span>
          <span>点击学习</span>
        </div>
      )}
    </div>
  )
}
