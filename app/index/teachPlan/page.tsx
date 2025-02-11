"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Star, Heart, Brain, Music, Users, Trophy } from "lucide-react"

const ageGroups = [
  { id: "kids", label: "儿童班 (4-6岁)" },
  { id: "juniors", label: "少年班 (7-12岁)" },
  { id: "teens", label: "青少年班 (13-16岁)" },
]

interface Curriculum {
  level: string;
  duration: string;
  focus: string;
  skills: { name: string; progress: number }[];
  activities: string[];
}

const curriculumData: { [key: string]: Curriculum[] } = {
  kids: [
    {
      level: "启蒙级",
      duration: "3个月",
      focus: "培养兴趣，基本协调性",
      skills: [
        { name: "身体协调性", progress: 30 },
        { name: "节奏感", progress: 40 },
        { name: "基本舞蹈动作", progress: 20 },
      ],
      activities: ["音乐游戏", "简单舞蹈模仿", "肢体协调练习"],
    },
    {
      level: "基础级",
      duration: "6个月",
      focus: "培养基本舞蹈技能，增强自信",
      skills: [
        { name: "身体灵活性", progress: 50 },
        { name: "基本舞蹈步伐", progress: 60 },
        { name: "表演自信", progress: 40 },
      ],
      activities: ["基础芭蕾动作", "简单舞蹈组合", "小型表演活动"],
    },
    // 可以添加更多级别...
  ],
  juniors: [
    // 为少年班添加相应的课程计划
  ],
  teens: [
    // 为青少年班添加相应的课程计划
  ],
}

function CurriculumPlan() {
  const [selectedAge, setSelectedAge] = useState("kids")
  console.log(selectedAge)
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">舞动童年教学计划</h1>
        <p className="text-xl text-orange-700 text-center mb-12">量身定制，稳步提升，快乐成长</p>

        <Tabs defaultValue="kids" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            {ageGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                onClick={() => setSelectedAge(group.id)}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {ageGroups.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <CurriculumLevels levels={curriculumData[group.id]} />
            </TabsContent>
          ))}
        </Tabs>

        <CoreValues />
      </main>
    </div>
  )
}

function CurriculumLevels({ levels }: { levels: Level[] }) {
  return (
    <div className="space-y-8">
      {levels.map((level, index: number) => (
        <CurriculumLevel key={index} level={level} />
      ))}
    </div>
  )
}

interface Level {
  level: string;
  duration: string;
  focus: string;
  skills: { name: string; progress: number }[];
  activities: string[];
}

function CurriculumLevel({ level }: { level: Level }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-orange-700">{level.level}</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        <CardDescription className="text-orange-600">
          课程时长: {level.duration} | 重点: {level.focus}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold text-orange-700 mb-2">技能提升</h4>
        {level.skills.map((skill: { name: string; progress: number }, index: number) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-orange-600">{skill.name}</span>
              <span className="text-sm font-medium text-orange-600">{skill.progress}%</span>
            </div>
            <Progress value={skill.progress} className="h-2" />
          </div>
        ))}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-orange-700 mt-4 mb-2">课程活动</h4>
            <ul className="list-disc list-inside text-orange-600">
              {level.activities.map((activity: string, index: number) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

function CoreValues() {
  const values = [
    { icon: Star, title: "专业指导", description: "经验丰富的教师团队，因材施教" },
    { icon: Heart, title: "快乐学习", description: "寓教于乐，激发舞蹈热情" },
    { icon: Brain, title: "全面发展", description: "培养艺术素养，提升个人气质" },
    { icon: Music, title: "艺术熏陶", description: "感受音乐魅力，培养艺术感知" },
    { icon: Users, title: "社交能力", description: "团队合作，培养社交技能" },
    { icon: Trophy, title: "自信表现", description: "舞台展示，建立自信" },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">我们的核心价值</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <value.icon className="w-12 h-12 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-semibold text-orange-700">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-orange-600">{value.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CurriculumPlan
