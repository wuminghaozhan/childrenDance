import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Music4Icon, BookOpenIcon, UsersIcon } from "lucide-react"

const About = () => {
  return (
    <main className="container mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">关于舞动童年</h1>

    <Mission />
    <Team />
    <Courses />
    </main>
  )
}

function Mission() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-orange-700 mb-6">我们的使命</h2>
      <p className="text-orange-600 text-lg mb-4">
        在舞动童年，我们致力于通过舞蹈艺术培养孩子们的创造力、自信心和团队精神。我们相信，每个孩子都是独一无二的艺术家，都有潜力在舞台上绽放光彩。
      </p>
      <p className="text-orange-600 text-lg">
        我们的目标是创造一个充满爱、欢乐和激情的学习环境，让孩子们在探索舞蹈世界的同时，发现自我、建立友谊，并培养终身受益的技能。
      </p>
    </section>
  )
}

function Team() {
  const teamMembers = [
    { name: "王丽", role: "创始人 & 芭蕾舞导师", avatar: "/placeholder.svg" },
    { name: "李明", role: "现代舞导师", avatar: "/placeholder.svg" },
    { name: "张华", role: "中国古典舞导师", avatar: "/placeholder.svg" },
    { name: "刘芳", role: "儿童心理学专家", avatar: "/placeholder.svg" },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-orange-700 mb-6">我们的团队</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4 text-xl text-orange-700">{member.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-600">{member.role}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Courses() {
  const courses = [
    {
      title: "芭蕾舞基础",
      description: "培养优雅姿态和基本技巧，适合5-12岁的孩子。",
      icon: <Music4Icon className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "中国古典舞",
      description: "传承中华文化，展现东方之美，适合6-15岁的孩子。",
      icon: <BookOpenIcon className="h-8 w-8 text-red-500" />,
    },
    {
      title: "现代舞启蒙",
      description: "激发创意，培养自我表达能力，适合7-16岁的孩子。",
      icon: <UsersIcon className="h-8 w-8 text-purple-500" />,
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-semibold text-orange-700 mb-6">我们的课程</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                {course.icon}
                <CardTitle className="text-xl text-orange-700">{course.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-600">{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


export default About;