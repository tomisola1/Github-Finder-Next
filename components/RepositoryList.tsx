import { RepoProps } from '@/types'
import React from 'react'

interface RepoDetailProps {
    repo: RepoProps
}

const RepositoryList = ({repo}:RepoDetailProps) => {
  return (
    <div className='mt-6 px-10 py-6 bg-white rounded shadow-sm w-full'>
        <h3 className='text-[#0064EB] text-2xl'>{repo.name}</h3>
        <p className='mt-4'>{repo.description}</p>
    </div>
  )
}

export default RepositoryList