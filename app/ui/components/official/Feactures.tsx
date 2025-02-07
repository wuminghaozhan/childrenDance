import { Heart, Star, Users, Clock, Smile, Award } from "lucide-react"

export function Features() {
  return (
    <div className="py-16 bg-pink-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">教学特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Heart className="h-12 w-12 text-pink-500" />}
            title="充满爱的环境"
            description="我们为每个孩子创造温暖、友善的学习氛围"
          />
          <FeatureCard
            icon={<Star className="h-12 w-12 text-yellow-500" />}
            title="专业的指导"
            description="经验丰富的老师们悉心指导每一个舞步"
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-500" />}
            title="小班教学"
            description="小班授课，确保每个孩子都得到充分关注"
          />
          <FeatureCard
            icon={<Clock className="h-12 w-12 text-green-500" />}
            title="灵活的课程安排"
            description="根据孩子的年龄和能力制定合适的课程计划"
          />
          <FeatureCard
            icon={<Smile className="h-12 w-12 text-purple-500" />}
            title="快乐学习"
            description="寓教于乐，让孩子在欢乐中成长"
          />
          <FeatureCard
            icon={<Award className="h-12 w-12 text-red-500" />}
            title="定期汇报演出"
            description="展示学习成果，增强自信心"
          />
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-orange-700 mb-2">{title}</h3>
      <p className="text-orange-600">{description}</p>
    </div>
  )
}

