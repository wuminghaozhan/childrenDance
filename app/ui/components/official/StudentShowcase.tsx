import Image from "next/image"

export function StudentShowcase() {
  return (
    <div className="py-16 bg-pink-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">学生风采</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShowcaseImage src="/placeholder.svg?height=300&width=400" alt="学生表演 1" />
          <ShowcaseImage src="/placeholder.svg?height=300&width=400" alt="学生表演 2" />
          <ShowcaseImage src="/placeholder.svg?height=300&width=400" alt="学生表演 3" />
        </div>
      </div>
    </div>
  )
}

interface ShowcaseImageProps {
  src: string;
  alt: string;
}

function ShowcaseImage({ src, alt }: ShowcaseImageProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image src={src || "/placeholder.svg"} alt={alt} width={400} height={300} className="w-full h-auto" />
    </div>
  )
}

