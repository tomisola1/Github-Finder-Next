import { useGlobalContext } from '@/Context/context'
import { UserProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface UserResultProps {
    user: UserProps
}

const UserResults = ({user}:UserResultProps) => {
    const { setUser } = useGlobalContext();
   const router = useRouter()
   const handleClick = () => {
    setUser(user)
    router.push('/profile')
   }
  return (
    <div className='mt-6 ml-6 px-10 py-6 bg-white rounded shadow-md w-80 flex'>
        <Image src={user.avatar_url} alt='user-image' width={40} height={40} className='rounded-full mr-4 '/>
        <p className='text-[#0064EB] text-2xl' onClick={handleClick}>{user.login}</p>
        
    </div>
  )
}

export default UserResults