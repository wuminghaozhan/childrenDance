"use client"
// filepath: /Users/eeo/personal/myNext/childrenDance/app/index/contact/page.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // 清空表单
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">联系我们</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">联系信息</h2>
        <p>地址：1234 舞蹈街，城市，国家</p>
        <p>电话：+123 456 7890</p>
        <p>邮箱：info@danceschool.com</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">发送消息</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">消息</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              发送
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;