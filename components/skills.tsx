import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 90 },
    { name: "Java", level: 75 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 75 },
    { name: "Power BI", level: 60 },
    { name: "ETL", level: 90 },
  ]

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

