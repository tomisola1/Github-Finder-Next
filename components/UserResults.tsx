import { useGlobalContext } from '@/Context/context'
import { UserProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface UserResultProps {
    user: UserProps
}

const UserResults = ({user}:UserResultProps) => {
    const { setUser } = useGlobalContext();
   const router = useRouter()
   const handleClick = () => {
    setUser(user)
    router.push(`users/${user?.login}`)
   }
  return (
    <div onClick={handleClick} className='mt-6 px-10 py-6 bg-white rounded shadow-md w-full md:w-80 flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
        <div>
            <Image src={user.avatar_url} alt='user-image' width={40} height={40} className='rounded-full mr-4 w-auto h-auto'/>
        </div>
        <p className='text-[#0064EB] text-lg sm:text-2xl'>{user.login}</p>
        
    </div>
  )
}

export default UserResults