using Apallon.Domain.Entities;

namespace Apallon.Infrastructure.Data;


public static class DbSeeder
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        if (context.BlogPosts.Any())
            return;

        var posts = new List<BlogPost>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Title = "How I Structure .NET Minimal APIs",
                Slug = "dotnet-minimal-apis",
                Excerpt = "A clean pattern for bootstrapping projects without getting lost in boilerplate.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2026, 5, 20),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { ".NET", "Architecture" }
            },
            new()
            {
                Id = Guid.NewGuid(),
                Title = "Dark Mode with Tailwind & React",
                Slug = "dark-mode-tailwind-react",
                Excerpt = "Simple theme toggling that looks great and respects system preferences.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2026, 4, 10),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { "React", "Tailwind" }
            },
            new()
            {
                Id = Guid.NewGuid(),
                Title = "Why I Chose SQLite for My Personal Site",
                Slug = "sqlite-personal-site",
                Excerpt = "The surprising power of a single-file database for production workloads.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2026, 3, 2),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { "SQLite", "Backend" }
            },
            new()
            {
                Id = Guid.NewGuid(),
                Title = "Building a GitHub Projects Page with Octokit",
                Slug = "github-projects-octokit",
                Excerpt = "Automatically showcase your open-source repos with live data from the GitHub API.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2026, 2, 14),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { ".NET", "GitHub" }
            },
            new()
            {
                Id = Guid.NewGuid(),
                Title = "EF Core Migrations in a Team Environment",
                Slug = "ef-core-migrations-team",
                Excerpt = "How to avoid conflicts and keep your database schema in sync across branches.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2026, 1, 22),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { "EF Core", "DevOps" }
            },
            new()
            {
                Id = Guid.NewGuid(),
                Title = "Markdown Rendering in React with Syntax Highlighting",
                Slug = "markdown-react-highlighting",
                Excerpt = "Turn plain text into rich, code-colored blog posts using react-markdown and Prism.",
                Content = "Full content here...",
                IsPublished = true,
                PublishedAt = new DateTime(2025, 12, 5),
                CreatedAt = DateTime.UtcNow,
                Tags = new List<string> { "React", "Markdown" }
            },
        };

        context.BlogPosts.AddRange(posts);

        var profile = new SiteProfile
        {
            Id = Guid.NewGuid(),
            FullName = "Farhad Abdi",
            Title = "Backend Developer",
            AboutMarkdown = "I'm Farhad Abdi, a backend developer...",
            GitHubUsername = "FrhdAbdi",
            Email = "apallondev@gmail.com",
            LinkedInUrl = "https://www.linkedin.com/in/farhad-abdi-626154236",
            InstagramUrl = "https://www.instagram.com/thefarhadabdi",
        };

        context.SiteProfiles.Add(profile);

        await context.SaveChangesAsync();
    }
}