import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Education from '@/components/education'
import Achievements from '@/components/achievements'
import Blog from '@/components/blogs'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}