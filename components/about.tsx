export default function About() {
    return (
      <section id="about" className="py-20 scroll-mt-16">
        {" "}
        {/* Add scroll-mt-16 to offset the fixed header */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Data Engineer with about 2 years of experience optimizing ETL pipelines, automating data workflows,
            and creating impactful Power BI dashboards. Skilled in Python, SQL, and collaboration to deliver data-driven
            solutions. Currently pursuing a Master's in Computer Science at the University of North Texas, with a strong
            foundation in Information Technology from my Bachelor's degree.
          </p>
        </div>
      </section>
    )
  }
  
  