using Apallon.Application.Features.Blog.Queries.GetBlogPostBySlug;
using Apallon.Application.Features.Blog.Queries.GetBlogPosts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Apallon.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class BlogController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = await mediator.Send(new GetBlogPostsQuery());
        return Ok(posts);
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetPost(string slug)
    {
        var post = await mediator.Send(new GetBlogPostBySlugQuery(slug));
        if (post is null)
            return NotFound();
        return Ok(post);
    }
}