import { RepoProps, UserProps } from '@/types'
import Link from 'next/link'
import React from 'react'

interface Props {
    repo: RepoProps,
    user: string
}

const RepositoryList = ({repo, user}:Props) => {
  return (
    <div className='mt-6 px-10 py-6 bg-white rounded shadow-sm w-full'>
        <Link href={`https://github.com/${user}/${repo.name}`}>
          <h3 className='text-[#0064EB] text-2xl hover:underline'>{repo.name}</h3>
        </Link>
        <p className='mt-4'>{repo.description}</p>
        
    </div>
  )
}

export default RepositoryList