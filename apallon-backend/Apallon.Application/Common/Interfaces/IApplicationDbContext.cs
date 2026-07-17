using Apallon.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Apallon.Application.Common.Interfaces;


public interface IApplicationDbContext
{
    DbSet<BlogPost> BlogPosts { get; }
    DbSet<SiteProfile> SiteProfiles { get; }
    DbSet<ContactMessage> ContactMessages { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}