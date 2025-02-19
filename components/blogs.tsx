import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Blog() {
  const posts = [
    {
      title: "Optimizing ETL Pipelines: Best Practices",
      description: "Learn how to improve your ETL processes for better efficiency and scalability.",
      date: "2023-05-15",
    },
    {
      title: "The Future of Data Engineering",
      description: "Exploring emerging trends and technologies in the field of data engineering.",
      date: "2023-06-22",
    },
    {
      title: "Python vs. SQL: When to Use Each for Data Analysis",
      description: "A comprehensive guide on choosing the right tool for your data analysis tasks.",
      date: "2023-07-10",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 dark:text-gray-300">{post.description}</p>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

