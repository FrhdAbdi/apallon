using Apallon.Application.Common.Interfaces;
using Apallon.Application.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Apallon.Application.Features.Blog.Queries.GetBlogPosts;


public class GetBlogPostsHandler(IApplicationDbContext context) 
    : IRequestHandler<GetBlogPostsQuery, List<BlogPostDto>>
{
    public async Task<List<BlogPostDto>> Handle(
        GetBlogPostsQuery request,
        CancellationToken cancellationToken)
    {
        return await context.BlogPosts
            .Where(p => p.IsPublished)
            .OrderByDescending(p => p.PublishedAt)
            .Select(p => new BlogPostDto
            {
                Id = p.Id,
                Title = p.Title,
                Slug = p.Slug,
                Excerpt = p.Excerpt,
                PublishedAt = p.PublishedAt,
                Tags = p.Tags
            })
            .ToListAsync(cancellationToken);
    }
}