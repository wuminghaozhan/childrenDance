import { Button } from "@/components/ui/button"
import { Input} from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactUs() {
  return (
    <div className="py-16 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">联系我们</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="您的姓名" />
            <Input type="email" placeholder="您的邮箱" />
            <Input type="tel" placeholder="您的电话" />
            <Textarea placeholder="您的留言" />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">发送消息</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

