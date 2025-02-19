// import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-yellow-600 text-white py-20 scroll-mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Sahithi Mamidipally</h1>
          <p className="text-xl mb-8"> UX/UI | Software Developer</p>
          <Button asChild>
            <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-100 text-black">
              Get in Touch
            </a>
          </Button>
        </div>
        {/* <div className="md:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Sahithi Mamidipally"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div> */}
      </div>
    </section>
  )
}

