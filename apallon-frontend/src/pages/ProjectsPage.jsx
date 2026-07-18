import { useState, useEffect } from "react";
import { getProjects } from "../api/projectsService";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

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
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Open-source work and side projects I've built.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full pb-20">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            Loading projects...
          </p>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Make sure your GitHub username is set in the site profile.
            </p>
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No public repositories found.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm hover:border-purple-500/60 dark:hover:border-purple-400/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                    {project.name}
                  </h3>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed line-clamp-3">
                  {project.description || "No description"}
                </p>

                <div className="mt-auto text-xs font-medium text-purple-600 dark:text-purple-400 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  View on GitHub →
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
