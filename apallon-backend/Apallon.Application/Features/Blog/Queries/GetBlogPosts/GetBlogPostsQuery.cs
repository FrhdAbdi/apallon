using Apallon.Application.DTOs;
using MediatR;

namespace Apallon.Application.Features.Blog.Queries.GetBlogPosts;


public record GetBlogPostsQuery : 
    IRequest<List<BlogPostDto>>;