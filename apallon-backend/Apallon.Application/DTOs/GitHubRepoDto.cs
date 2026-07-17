namespace Apallon.Application.DTOs;


public class GitHubRepoDto
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public int Stars { get; set; }

    public GitHubRepoDto() { }

    public GitHubRepoDto(string name, string description, string url, int stars)
    {
        Name = name;
        Description = description;
        Url = url;
        Stars = stars;
    }
}