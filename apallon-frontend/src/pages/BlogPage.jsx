import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../api/blogService";

// Remove the posts array entirely

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!search.trim()) return true;
    const query = search.toLowerCase().trim();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  return (
    <section className="flex flex-col">
      {/* Hero — same as before */}
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
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Notes on code, creativity, and everything in between.
          </p>
          {/* Search bar — same */}
          <div className="relative max-w-md mx-auto">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-4 w-full pb-20">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            Loading posts...
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
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
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12">
                No posts found for "{search}".
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
