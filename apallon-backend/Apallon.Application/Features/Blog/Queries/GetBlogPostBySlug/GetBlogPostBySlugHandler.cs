using Apallon.Application.Common.Interfaces;
using Apallon.Application.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Apallon.Application.Features.Blog.Queries.GetBlogPostBySlug;


public class GetBlogPostBySlugHandler(IApplicationDbContext context) 
    : IRequestHandler<GetBlogPostBySlugQuery, BlogPostDetailDto?>
{
    public async Task<BlogPostDetailDto?> Handle(
        GetBlogPostBySlugQuery request,
        CancellationToken cancellationToken)
    {
        return await context.BlogPosts
            .Where(p => p.Slug == request.Slug && p.IsPublished)
            .Select(p => new BlogPostDetailDto
            {
                Id = p.Id,
                Title = p.Title,
                Slug = p.Slug,
                Excerpt = p.Excerpt,
                Content = p.Content,
                PublishedAt = p.PublishedAt,
                Tags = p.Tags
            })
            .FirstOrDefaultAsync(cancellationToken);
    }
}