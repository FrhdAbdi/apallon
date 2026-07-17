using Apallon.Application.Common.Interfaces;
using Apallon.Application.DTOs;
using Microsoft.Extensions.Configuration;
using Octokit;

namespace Apallon.Infrastructure.Services;


public class GitHubService : IGitHubService
{
    private readonly GitHubClient _client;

    public GitHubService(IConfiguration configuration)
    {
        _client = new GitHubClient(new ProductHeaderValue("Apallon"));
        var token = configuration["GitHub:Token"];
        if (!string.IsNullOrEmpty(token))
            _client.Credentials = new Credentials(token);
    }

    public async Task<List<GitHubRepoDto>> GetPublicReposAsync(string username)
    {
        var repos = await _client.Repository.GetAllForUser(username);
        return repos
            .Where(r => !r.Fork)
            .OrderByDescending(r => r.StargazersCount)
            .Select(r => new GitHubRepoDto(
                r.Name,
                r.Description ?? string.Empty,
                r.HtmlUrl,
                r.StargazersCount
            ))
            .ToList();
    }
}