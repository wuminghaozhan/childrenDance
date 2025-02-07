import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-pink-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">让每个孩子绽放舞蹈的魅力</h1>
        <p className="text-xl text-orange-700 mb-8">在充满爱与欢乐的环境中探索舞蹈的世界</p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">了解我们的课程</Button>
      </div>
    </div>
  )
}

