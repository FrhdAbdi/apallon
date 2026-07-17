namespace Apallon.Application.DTOs;


public class BlogPostDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
    public List<string> Tags { get; set; } = new();
}

public class BlogPostDetailDto : BlogPostDto
{
    public string Content { get; set; } = string.Empty;
}