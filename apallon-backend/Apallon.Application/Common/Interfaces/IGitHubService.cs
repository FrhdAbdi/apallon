using Apallon.Application.DTOs;

namespace Apallon.Application.Common.Interfaces;


public interface IGitHubService
{
    Task<List<GitHubRepoDto>> GetPublicReposAsync(string username);
}