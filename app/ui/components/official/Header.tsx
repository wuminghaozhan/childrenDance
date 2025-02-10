import Link from "next/link"
import { Music4Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-orange-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/index/home" className="flex items-center space-x-2">
          <Music4Icon className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold text-orange-700">舞动童年</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/index/home" className="text-orange-700 hover:text-orange-500">
                首页
              </Link>
            </li>
            <li>
              <Link href="/index/teachers" className="text-orange-700 hover:text-orange-500">
                教师简介
              </Link>
            </li>
            <li>
              <Link href="/index/students" className="text-orange-700 hover:text-orange-500">
                学员风采
              </Link>
            </li>
            <li>
              <Link href="/index/teachPlan" className="text-orange-700 hover:text-orange-500">
                教学计划
              </Link>
            </li>
            <li>
              <Link href="/index/teachFeatures" className="text-orange-700 hover:text-orange-500">
                教学特色
              </Link>
            </li>
            <li>
              <Link href="/index/blessing" className="text-orange-700 hover:text-orange-500">
                小舞祝福墙
              </Link>
            </li>
          </ul>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            登录
          </Button>
        </nav>
      </div>
    </header>
  )
}

