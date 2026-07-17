namespace Apallon.Domain.Entities;


public class SiteProfile
{
    public Guid Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string AboutMarkdown { get; set; } = string.Empty;
    public string ResumeUrl { get; set; } = string.Empty;
    public string GitHubUsername { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string LinkedInUrl { get; set; } = string.Empty;
    public string InstagramUrl { get; set; } = string.Empty;
}