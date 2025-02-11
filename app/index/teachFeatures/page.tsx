"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Music, Heart, Brain, Users, Zap, Palette } from "lucide-react"

const features = [
  {
    id: "customized",
    title: "量身定制的课程",
    description: "根据每个孩子的兴趣、能力和性格特点，制定个性化的学习计划。",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    image: "/placeholder.svg",
  },
  {
    id: "funLearning",
    title: "寓教于乐",
    description: "通过游戏、故事和互动活动，让孩子们在欢笑中掌握舞蹈技巧。",
    icon: Music,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    image: "/placeholder.svg",
  },
  {
    id: "happyEducation",
    title: "快乐教育理念",
    description: "营造轻松愉快的学习氛围，让孩子们爱上舞蹈，享受学习过程。",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100",
    image: "/placeholder.svg",
  },
  {
    id: "danceGrowth",
    title: "全面的舞蹈成长",
    description: "从基本功到高级技巧，系统化培养孩子的舞蹈能力和艺术素养。",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    image: "/placeholder.svg",
  },
  {
    id: "personality",
    title: "开朗性格培养",
    description: "通过舞蹈表演和团队合作，培养孩子自信、开朗的性格。",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-100",
    image: "/placeholder.svg",
  },
  {
    id: "initiative",
    title: "主动能力加强",
    description: "鼓励孩子自主创作和表达，培养他们的创造力和主动学习能力。",
    icon: Brain,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
    image: "/placeholder.svg",
  },
]

function TeachingFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">我们的教学特色</h1>
        <p className="text-xl text-orange-700 text-center mb-12">
          在舞动童年，我们致力于为每个孩子创造一个充满欢乐、激发潜能的舞蹈世界
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} onClick={() => setSelectedFeature(feature)} />
          ))}
        </div>

        <AnimatePresence>
          {selectedFeature && <FeatureDetail feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
        </AnimatePresence>

        <DanceJourney />
      </main>
    </div>
  )
}

function FeatureCard({ feature, onClick }: { feature: Feature; onClick: () => void }) {
  return (
    <Card className="cursor-pointer transition-all hover:shadow-lg" onClick={onClick}>
      <CardHeader>
        <feature.icon  aria-hidden="true" />
        <CardTitle className="text-xl font-semibold text-orange-700">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-orange-600">{feature.description}</CardDescription>
      </CardContent>
    </Card>
  )
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  color: string;
  bgColor: string;
  image: string;
}

function FeatureDetail({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div className="bg-white rounded-lg p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <h2 className={`text-3xl font-bold mb-4 ${feature.color}`}>{feature.title}</h2>
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-6">{feature.description}</p>
        <Button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white">
          关闭
        </Button>
      </motion.div>
    </motion.div>
  )
}

function DanceJourney() {
  const steps = [
    { title: "启蒙阶段", description: "激发兴趣，培养节奏感" },
    { title: "基础培养", description: "掌握基本舞蹈动作" },
    { title: "技巧提升", description: "增强灵活性和协调性" },
    { title: "艺术表现", description: "培养舞台表现力" },
    { title: "创意发展", description: "鼓励自主创作" },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-12">舞蹈成长之旅</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-300"></div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">{step.title}</h3>
                <p className="text-orange-600">{step.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


export default TeachingFeatures