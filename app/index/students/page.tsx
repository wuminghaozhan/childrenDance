// filepath: /Users/eeo/personal/myNext/childrenDance/app/index/students/page.tsx
import React from 'react';

const Students: React.FC = () => {
  const students = [
    { name: "小明", achievement: "优秀学员", image: "/images/student1.jpg" },
    { name: "小红", achievement: "优秀学员", image: "/images/student2.jpg" },
    { name: "小刚", achievement: "优秀学员", image: "/images/student3.jpg" },
  ];

  const awards = [
    { title: "全国舞蹈比赛一等奖", image: "/images/award1.jpg", video: "/videos/award1.mp4" },
    { title: "市级舞蹈比赛二等奖", image: "/images/award2.jpg", video: "/videos/award2.mp4" },
    { title: "校级舞蹈比赛三等奖", image: "/images/award3.jpg", video: "/videos/award3.mp4" },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">教学成果展示</h1>
      </header>

      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">优秀学员</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <img src={student.image} alt={student.name} className="mb-4 w-full h-48 object-cover rounded" />
              <h3 className="text-2xl font-bold mb-2">{student.name}</h3>
              <p>{student.achievement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">比赛获奖</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <img src={award.image} alt={award.title} className="mb-4 w-full h-48 object-cover rounded" />
              <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
              <video controls className="w-full h-48 rounded">
                <source src={award.video} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;