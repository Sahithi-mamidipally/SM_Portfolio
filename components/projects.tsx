import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Accessibility AI Bot",
      description:
        "Developed an AI-powered chatbot to provide assistance and support for individuals, focused on enhancing accessibility features.",
      link: "https://accessibility-bot-main.vercel.app/login",
      figma:
        "https://www.figma.com/design/hhO2XZYjmnAx3DEW6kvzJK/Accessibility_Bot_UI?node-id=0-1&p=f&t=qxw3jAxhOwmUJw72-0",
    },
    {
      title: "BugHuntArena",
      description:
        "Built an interactive platform for identifying and reporting bugs, aimed at improving software quality.",
      link: "https://bughunt-arena.vercel.app/",
    },
    {
      title: "Twitter-Based Sentiment Analysis of Pfizer COVID Vaccine",
      description:
        "Analyzed public sentiment on the Pfizer COVID-19 vaccine using Twitter data and machine learning techniques.",
    },
  ]

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 space-x-2">
                  {project.link && (
                    <Button asChild variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.figma && (
                    <Button asChild variant="outline">
                      <a href={project.figma} target="_blank" rel="noopener noreferrer">
                        Figma Design
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

