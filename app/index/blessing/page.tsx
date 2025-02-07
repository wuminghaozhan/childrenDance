"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, Heart, Music, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const blessings = [
  { id: 1, text: "希望在舞蹈中找到自信和快乐！", author: "小明的妈妈" },
  { id: 2, text: "梦想有一天能在大舞台上表演！", author: "小红" },
  { id: 3, text: "愿每一个动作都充满激情和优雅。", author: "李老师" },
  { id: 4, text: "跳出自己的精彩人生！", author: "小华的爸爸" },
  { id: 5, text: "在舞蹈中感受生命的律动。", author: "张教练" },
  // 添加更多祝福...
]

const icons = [Star, Heart, Music, Sparkles]

export function Blessing() {
  const [newBlessing, setNewBlessing] = useState("")
  const [newAuthor, setNewAuthor] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-orange-100">
      
      
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">小舞祝福墙</h1>

        <div className="relative h-[600px] mb-12 overflow-hidden rounded-lg shadow-lg bg-white/30 backdrop-blur-sm">
          {blessings.map((blessing, index) => (
            <FloatingBlessing key={blessing.id} blessing={blessing} index={index} />
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">添加你的祝福</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Textarea
              placeholder="写下你的祝福或梦想..."
              value={newBlessing}
              onChange={(e) => setNewBlessing(e.target.value)}
              className="bg-white/50"
            />
            <Input
              type="text"
              placeholder="你的名字"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="bg-white/50"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">发送祝福</Button>
          </form>
        </div>
      
      
    </div>
  )
}

function FloatingBlessing({ blessing, index }: { blessing: { id: number; text: string; author: string }; index: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const Icon = icons[index % icons.length]

  useEffect(() => {
    const x = Math.random() * 80 + 10 // 10% to 90% of width
    const y = Math.random() * 80 + 10 // 10% to 90% of height
    setPosition({ x, y })
  }, [])

  return (
    <motion.div
      className="absolute p-4 bg-white/80 rounded-lg shadow-md max-w-[200px]"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-6 h-6 text-orange-500 mb-2" />
      <p className="text-orange-700 mb-2">{blessing.text}</p>
      <p className="text-orange-600 text-sm italic">- {blessing.author}</p>
    </motion.div>
  )
}


export default Blessing;