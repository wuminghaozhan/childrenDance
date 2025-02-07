import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Courses() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">我们的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard title="芭蕾舞基础" description="培养优雅姿态和基本技巧" />
          <CourseCard title="中国古典舞" description="传承中华文化，展现东方之美" />
          <CourseCard title="现代舞启蒙" description="激发创意，培养自我表达能力" />
        </div>
      </div>
    </div>
  )
}

interface CourseCardProps {
  title: string;
  description: string;
}

function CourseCard({ title, description }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-orange-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-orange-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

