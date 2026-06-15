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

const HomePage = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center items-center text-center px-4 py-16">
        <div className="w-24 h-24 rounded-full bg-purple-600/20 dark:bg-purple-400/10 flex items-center justify-center mb-8">
          <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">A</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Apallon
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          The Digital Diary of a Developer
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/blog"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition shadow-lg shadow-purple-600/20"
          >
            Read the Blog
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 hover:bg-purple-600/10 font-medium rounded-lg transition"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full pb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Latest from the Blog
          </h2>
          <Link
            to="/blog"
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            View all posts →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/60 backdrop-blur-sm hover:border-purple-600/50 dark:hover:border-purple-400/50 transition-all shadow-sm hover:shadow-md dark:hover:shadow-purple-500/10"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {post.excerpt}
              </p>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;