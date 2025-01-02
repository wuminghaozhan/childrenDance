// filepath: /Users/eeo/personal/myNext/childrenDance/app/index/about/page.tsx
import './about.module.css'
const About = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">关于我们</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">我们的使命</h2>
                <p>
                    我们致力于为孩子们提供一个安全、快乐和富有创意的舞蹈学习环境。我们的目标是通过舞蹈教育，培养孩子们的自信心、团队合作精神和艺术素养。
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">我们的团队</h2>
                <p>
                    我们的团队由一群充满激情和经验丰富的舞蹈教师组成，他们不仅在舞蹈领域有着深厚的造诣，还热爱教育和孩子们的成长。
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">我们的课程</h2>
                <p>
                    我们提供多种舞蹈课程，包括芭蕾、现代舞、爵士舞和街舞，适合不同年龄和水平的孩子。我们的课程设计注重技术训练和艺术表现，帮助孩子们全面发展。
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">联系我们</h2>
                <p>
                    如果您有任何问题或需要更多信息，请随时联系我们。我们期待与您和您的孩子一起探索舞蹈的美妙世界。
                </p>
            </section>
        </div>
    );
}

export default About;