// filepath: /Users/eeo/personal/myNext/childrenDance/app/index/home/page.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">欢迎来到儿童舞蹈学校</h1>
        <p className="text-lg">我们致力于为孩子们提供一个安全、快乐和富有创意的舞蹈学习环境。</p>
      </header>

      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">我们的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">芭蕾舞</h3>
            <p>适合所有年龄段的孩子，培养优雅的姿态和舞蹈技巧。</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">现代舞</h3>
            <p>通过自由的舞蹈动作，激发孩子们的创造力和表现力。</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">爵士舞</h3>
            <p>充满活力和节奏感的舞蹈，适合喜欢动感音乐的孩子。</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">街舞</h3>
            <p>学习酷炫的街舞动作，增强孩子们的自信心和团队合作精神。</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">我们的教师团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">李老师</h3>
            <p>拥有10年以上的芭蕾舞教学经验，深受学生喜爱。</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">王老师</h3>
            <p>现代舞专家，擅长激发孩子们的舞蹈创意。</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">张老师</h3>
            <p>爵士舞和街舞的双料教师，教学风格生动有趣。</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">联系我们</h2>
        <p>地址：1234 舞蹈街，城市，国家</p>
        <p>电话：+123 456 7890</p>
        <p>邮箱：info@danceschool.com</p>
      </section>
    </div>
  );
};

export default Home;