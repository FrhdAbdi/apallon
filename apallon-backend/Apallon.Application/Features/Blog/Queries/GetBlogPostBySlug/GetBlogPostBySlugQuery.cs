using Apallon.Application.DTOs;
using MediatR;

namespace Apallon.Application.Features.Blog.Queries.GetBlogPostBySlug;


public record GetBlogPostBySlugQuery(string Slug) 
    : IRequest<BlogPostDetailDto?>;