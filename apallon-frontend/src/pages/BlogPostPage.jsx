import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug } from "../api/blogService";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error || "Post not found"}
        </p>
        <Link
          to="/blog"
          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
        >
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-8">
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none prose-lg prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-purple-600 dark:prose-a:text-purple-400">
        <div className="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-300">
          {post.content}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <Link
          to="/blog"
          className="text-purple-600 dark:text-purple-400 hover:underline font-medium inline-flex items-center gap-1"
        >
          ← Back to blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPage;
