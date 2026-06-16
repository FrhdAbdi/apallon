import { Link } from "react-router-dom";

const aboutText = `I'm Farhad Abdi, a backend developer with a passion for clean architecture, open-source, and building things that last. 
I believe in writing code that reads like a story — maintainable, testable, and elegant.`;

const work = [
  {
    title: "Backend Developer",
    company: "Saman madar pars",
    period: "June 2023 – Present",
    description:
      "mplementing new APIs with .NET and maintaining legacy codebases in .NET Framework.",
  },
];

const education = [
  {
    degree: "B.S. in Computer Engineering",
    school: "IAU South Tehran Branch",
    year: "2021 - 2025",
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/FrhdAbdi", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/farhad-abdi-626154236",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thefarhadabdi?igsh=amptemNwMnVya3B2",
    icon: "instagram",
  },
  { name: "Email", url: "mailto:apallondev@gmail.com", icon: "email" },
];

const interests = {
  games: [
    "The Last of Us Part I & II",
    "Red Dead Redemption 2",
    "God of War",
    "Halo",
  ],
  books: [
    "The Catcher in the Rye",
    "Zero to One",
    "The Lean Startup",
    "Atomic Habits",
  ],
  tech: [
    "Artificial Intelligence",
    "Game Development",
    "Cloud Architecture",
    "Distributed Systems",
    "Backend Engineering",
  ],
  other: [
    "Getting lost in bookstores",
    "Basketball (watching & debating)",
    "Coffee snobbery",
  ],
};

const Icon = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    github: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    email: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  };
  return icons[type] || null;
};

const AboutPage = () => {
  return (
    <section className="flex flex-col">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.25]
                     [background-image:radial-gradient(theme(colors.gray.300)_1px,transparent_1px)]
                     dark:[background-image:radial-gradient(theme(colors.gray.700)_1px,transparent_1px)]
                     [background-size:24px_24px]
                     [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />

        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div>
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl">
                  <img
                    src="/farhad-abdi.jfif"
                    alt="Farhad Abdi"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      aria-label={s.name}
                    >
                      <Icon type={s.icon} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 w-full space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Experience
                </h3>
                {work.map((job) => (
                  <div
                    key={job.company}
                    className="border-l-2 border-purple-200 dark:border-purple-800 pl-4 py-1"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">
                      {job.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.company} — {job.period}
                    </p>
                  </div>
                ))}
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pt-2">
                  Education
                </h3>
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="border-l-2 border-purple-200 dark:border-purple-800 pl-4 py-1"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.school}, {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutText}
              </p>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not writing code, you'll find me exploring indie games,
                reading sci-fi, or tinkering with new tech stacks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full pb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          What I Love
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Games
            </h3>
            <ul className="space-y-2">
              {interests.games.map((game) => (
                <li
                  key={game}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {game}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Books
            </h3>
            <ul className="space-y-2">
              {interests.books.map((book) => (
                <li
                  key={book}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {book}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Tech & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-200/60 dark:ring-purple-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Other Interests
            </h3>
            <ul className="space-y-2">
              {interests.other.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
