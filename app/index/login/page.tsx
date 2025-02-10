"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Music4Icon } from "lucide-react"

function LoginForm() {
  const [loginMethod, setLoginMethod] = useState("phone")
  const [isSignUp, setIsSignUp] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login/signup logic
    toast({
      title: isSignUp ? "账号创建成功" : "登录成功",
      description: "欢迎来到舞动童年！",
    })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <Music4Icon className="h-12 w-12 text-orange-500" />
        </div>
        <CardTitle className="text-2xl text-center">{isSignUp ? "创建新账号" : "登录到舞动童年"}</CardTitle>
        <CardDescription className="text-center">
          {isSignUp ? "请填写以下信息创建您的账号" : "选择您喜欢的方式登录"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {isSignUp ? (
            <SignUpFields />
          ) : (
            <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="phone">手机号</TabsTrigger>
                <TabsTrigger value="account">账号</TabsTrigger>
                <TabsTrigger value="email">邮箱</TabsTrigger>
              </TabsList>
              <TabsContent value="phone">
                <PhoneLoginFields />
              </TabsContent>
              <TabsContent value="account">
                <AccountLoginFields />
              </TabsContent>
              <TabsContent value="email">
                <EmailLoginFields />
              </TabsContent>
            </Tabs>
          )}
          <Button className="w-full mt-6" type="submit">
            {isSignUp ? "创建账号" : "登录"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "已有账号？点击登录" : "没有账号？创建新账号"}
        </Button>
      </CardFooter>
    </Card>
  )
}

function PhoneLoginFields() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone">手机号</Label>
        <Input id="phone" placeholder="请输入手机号" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="smsCode">验证码</Label>
        <div className="flex space-x-2">
          <Input id="smsCode" placeholder="请输入验证码" required />
          <Button type="button" variant="outline">
            获取验证码
          </Button>
        </div>
      </div>
    </div>
  )
}

function AccountLoginFields() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="account">账号</Label>
        <Input id="account" placeholder="请输入账号" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountPassword">密码</Label>
        <Input id="accountPassword" type="password" placeholder="请输入密码" required />
      </div>
    </div>
  )
}

function EmailLoginFields() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">邮箱</Label>
        <Input id="email" type="email" placeholder="请输入邮箱" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="emailPassword">密码</Label>
        <Input id="emailPassword" type="password" placeholder="请输入密码" required />
      </div>
    </div>
  )
}

function SignUpFields() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="signUpUsername">用户名</Label>
        <Input id="signUpUsername" placeholder="请输入用户名" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signUpEmail">邮箱</Label>
        <Input id="signUpEmail" type="email" placeholder="请输入邮箱" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signUpPassword">密码</Label>
        <Input id="signUpPassword" type="password" placeholder="请输入密码" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signUpConfirmPassword">确认密码</Label>
        <Input id="signUpConfirmPassword" type="password" placeholder="请再次输入密码" required />
      </div>
    </div>
  )
}

export default LoginForm