/*

App Router (app/ directory)
Assuming your route is http://localhost:3000/code/repos/[name] and your file is:

app/code/repos/[name]/page.jsx (or .tsx)

'use client';

import { useParams } from 'next/navigation';

const RepoPage = () => {
  const params = useParams(); // { name: 'async_await' }

  return (
    <div>{params.name}</div>
  );
};

export default RepoPage;
*/


/*

Pages Router (pages/ directory)
If you are still on the old router, with a file like:

pages/code/repos/[name].jsx



import { useRouter } from 'next/router';

const RepoPage = () => {
  const router = useRouter();
  const { name } = router.query; // 'async_await'

  return (
    <div>{name}</div>
  );
};

export default RepoPage;

// app/code/repos/[name]/page.tsx
*/