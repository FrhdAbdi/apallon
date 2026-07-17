using Apallon.Application.Common.Interfaces;
using Apallon.Application.DTOs;
using Apallon.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Apallon.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ContactController(IApplicationDbContext context) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> SendMessage([FromBody] ContactMessageDto dto)
    {
        var message = new ContactMessage
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            Email = dto.Email,
            Subject = dto.Subject,
            Body = dto.Body,
            SentAt = DateTime.UtcNow
        };

        context.ContactMessages.Add(message);
        await context.SaveChangesAsync();

        return Ok(new { message = "Message sent successfully" });
    }
}