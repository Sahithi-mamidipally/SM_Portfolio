import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Education
            </a>
          </li>
          {/* <li>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

