import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

async function fetchRepo(name: string): Promise<GitHubRepo[]> {
    const response = await fetch( `https://api.github.com/repos/josepedrolorenzini/${name}`, 
        {
        headers:{
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "User-Agent": "nextjs-app",
            Accept: "application/vnd.github+json",
        },
        next: { revalidate: 60},
    }
    );
      const repo = await response.json();
      return repo;
};



const Repo = async ({name}: {name: string}) => {
    const repo = await fetchRepo(name);
    console.log(repo);
  return (
    <>
       <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  )
}

export default Repo








// async function fetchRepos(): Promise<GitHubRepo[]> {
//   const response = await fetch(
//     "https://api.github.com/users/josepedrolorenzini/repos",
//     {
//       headers: {
//         "User-Agent": "nextjs-app",
//         Accept: "application/vnd.github+json",
//       },
//       next: { revalidate: 60},
//     }
//   );