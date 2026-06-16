import { Link } from 'react-router-dom';

const featuredPosts = [
  {
    title: "How I Structure .NET Minimal APIs",
    excerpt: "A clean pattern for bootstrapping projects without getting lost in boilerplate.",
    slug: "dotnet-minimal-apis",
    date: "2026-05-20",
    tags: [".NET", "Architecture"],
  },
  {
    title: "Dark Mode with Tailwind & React",
    excerpt: "Simple theme toggling that looks great and respects system preferences.",
    slug: "dark-mode-tailwind-react",
    date: "2026-04-10",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Why I Chose SQLite for My Personal Site",
    excerpt: "The surprising power of a single-file database for production workloads.",
    slug: "sqlite-personal-site",
    date: "2026-03-02",
    tags: ["SQLite", "Backend"],
  },
  {
    title: "Building a GitHub Projects Page with Octokit",
    excerpt: "Automatically showcase your open-source repos with live data from the GitHub API.",
    slug: "github-projects-octokit",
    date: "2026-02-14",
    tags: [".NET", "GitHub"],
  },
  {
    title: "EF Core Migrations in a Team Environment",
    excerpt: "How to avoid conflicts and keep your database schema in sync across branches.",
    slug: "ef-core-migrations-team",
    date: "2026-01-22",
    tags: ["EF Core", "DevOps"],
  },
  {
    title: "Markdown Rendering in React with Syntax Highlighting",
    excerpt: "Turn plain text into rich, code-colored blog posts using react-markdown and Prism.",
    slug: "markdown-react-highlighting",
    date: "2025-12-05",
    tags: ["React", "Markdown"],
  },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const HomePage = () => {
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

        <div className="max-w-6xl mx-auto px-4 w-full py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col">              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Hi, I'm Farhad —{' '}
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                  a developer
                </span>{' '}
                who writes.
              </h1>

              <p className="mt-5 max-w-md text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I create, I learn, and I share. 
                Welcome to my digital diary.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/blog"
                  className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  Read the Blog
                </Link>
                <Link
                  to="/projects"
                  className="px-5 py-2.5 rounded-full border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 font-medium text-sm hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all hover:-translate-y-0.5"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="group relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/20 blur-2xl" />
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl">
                  <img
                    src="/farhad-abdi.jfif"
                    alt="Farhad Abdi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Latest from the Blog
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Thoughts, tutorials, and notes from the field.
            </p>
          </div>
          <Link
            to="/blog"
            className="group hidden sm:inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-medium whitespace-nowrap"
          >
            View all posts
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group relative flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 dark:hover:border-purple-400/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-purple-500/10"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-200/60 dark:ring-purple-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;