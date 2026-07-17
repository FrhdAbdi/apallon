using Apallon.Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Apallon.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ProfileController(IApplicationDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetProfile()
    {
        var profile = context.SiteProfiles.FirstOrDefault();
        if (profile is null)
            return NotFound();
        return Ok(profile);
    }
}