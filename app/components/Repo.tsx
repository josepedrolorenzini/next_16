import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
async function fetchRepo(name: string): Promise<String> {
    const response = await fetch( `https://api.github.com/repos/josepedrolorenzini/${name}`, 
        {
        headers:{
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
    <div>Repo: {name}</div>
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