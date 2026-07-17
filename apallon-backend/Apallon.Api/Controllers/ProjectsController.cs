using Apallon.Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Apallon.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ProjectsController(
    IApplicationDbContext context, 
    IGitHubService gitHubService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetProjects()
    {
        var profile = context.SiteProfiles.FirstOrDefault();
        if (profile is null || string.IsNullOrEmpty(profile.GitHubUsername))
            return Ok(new List<object>());

        var repos = await gitHubService.GetPublicReposAsync(profile.GitHubUsername);
        return Ok(repos);
    }
}