import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    "https://api.github.com/users/josepedrolorenzini/repos",
    {
      headers: {
        "User-Agent": "nextjs-app",
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60},
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const data = await response.json();
  return data;
 
}

export default async function ReposPages() {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>

      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              {repo.description && <p>{repo.description}</p>}

              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
