import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';


export default async function RepoPage({ params,}: {
  params: Promise<{ name: string }>
}) {
    
  const { name } = await params; // unwrap the Promise

  return (
     <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
       <Repo name={name} />
    </div>

  );
}
