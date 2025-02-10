"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const teachers = [
  {
    id: 1,
    name: "王丽",
    title: "芭蕾舞首席教师",
    image: "/placeholder.svg",
    specialties: ["芭蕾舞", "现代舞"],
    experience: "15年教学经验",
    education: "北京舞蹈学院芭蕾舞系学士",
    achievements: ["全国青年舞蹈大赛金奖", "优秀教师奖"],
    description:
      "王丽老师拥有扎实的芭蕾舞功底和丰富的教学经验。她的教学方法注重培养学生的基本功和艺术表现力，深受学生和家长的喜爱。",
    courses: ["少儿芭蕾基础", "成人芭蕾入门", "芭蕾舞剧排练"],
  },
  {
    id: 2,
    name: "李明",
    title: "现代舞教师",
    image: "/placeholder.svg",
    specialties: ["现代舞", "爵士舞"],
    experience: "10年教学经验",
    education: "美国朱莉亚音乐学院舞蹈系硕士",
    achievements: ["纽约舞蹈节最佳编舞奖", "青年舞蹈教师培训优秀学员"],
    description:
      "李明老师擅长现代舞和爵士舞的教学，他的课堂充满活力和创意。他鼓励学生发掘自己的潜力，培养独特的舞蹈风格。",
    courses: ["现代舞技巧", "爵士舞入门", "舞蹈即兴创作"],
  },
  // 可以添加更多教师信息...
]

const TeacherProfiles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">我们的教师团队</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </main>
      
    </div>
  )
}

interface Teacher {
  id: number;
  name: string;
  title: string;
  image: string;
  specialties: string[];
  experience: string;
  education: string;
  achievements: string[];
  description: string;
  courses: string[];
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={teacher.image || "/placeholder.svg"}
              alt={teacher.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-2xl font-bold text-orange-700 mb-2">{teacher.name}</CardTitle>
            <CardDescription className="text-orange-600 mb-4">{teacher.title}</CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {teacher.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                  {specialty}
                </Badge>
              ))}
            </div>
            <p className="text-orange-600 mb-4">{teacher.experience}</p>
            {/* <DialogTrigger asChild onClick={() => setIsOpen(true)}> */}
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">查看详情</Button>
            {/* </DialogTrigger> */}
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-700">{teacher.name}</DialogTitle>
            <DialogDescription className="text-orange-600">{teacher.title}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={teacher.image || "/placeholder.svg"}
                alt={teacher.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">专业背景</h3>
              <p className="text-orange-600 mb-4">{teacher.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-orange-700">{teacher.education}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-orange-700">{teacher.experience}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">主要成就</h3>
            <ul className="list-disc list-inside text-orange-600">
              {teacher.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start mb-2">
                  <Award className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">授课课程</h3>
            <ul className="grid grid-cols-2 gap-2">
              {teacher.courses.map((course, index) => (
                <li key={index} className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-orange-600">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


export default TeacherProfiles