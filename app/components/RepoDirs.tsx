import Link from 'next/link';

type RepoContent = {
  name: string;
  path: string;
  type: 'file' | 'dir';
};

async function fetchRepoContents(name: string): Promise<RepoContent[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    {   headers:{
            "User-Agent": "nextjs-app",
            Accept: "application/vnd.github+json",
        },
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = await response.json();

  if (!Array.isArray(contents)) {
    return [];
  }

  return contents;
}

type RepoDirsProps = {
  name: string;
};

const RepoDirs = async ({ name }: RepoDirsProps) => {
  const contents = await fetchRepoContents(name);

  const dirs = contents.filter(
    (content) => content.type === 'dir'
  );

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
