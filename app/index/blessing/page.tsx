"use client"
import { useState } from "react";

const Blessing = () => {
    const [messages, setMessages] = useState<string[]>([
        "祝你生日快乐！",
        "愿你每天都充满阳光和笑容！",
        "祝你事业蒸蒸日上！",
        "愿你和家人幸福安康！"
      ]);
    
      const [newMessage, setNewMessage] = useState<string>("");
    
      const handleAddMessage = () => {
        if (newMessage.trim() !== "") {
          setMessages([...messages, newMessage]);
          setNewMessage("");
        }
      };
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">祝福墙</h1>
          <div className="mb-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border p-2 mr-2"
              placeholder="输入你的祝福语"
            />
            <button
              onClick={handleAddMessage}
              className="bg-blue-500 text-white p-2"
            >
              添加祝福
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messages.map((message, index) => (
              <div key={index} className="border p-4 rounded shadow">
                {message}
              </div>
            ))}
          </div>
        </div>
      );
}

export default Blessing;