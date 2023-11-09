import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserResults from '@/components/UserResults'
import { useRouter } from 'next/navigation'
import { UserProps } from '@/types'
import { useGlobalContext } from '@/Context/context'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const { users } = useGlobalContext();

  const router = useRouter()

  return (
    <>
      <Navbar/>
      <main className={inter.className}>
        
        {
          users?.length > 0 ? (
              <div className='grid grid-cols-4'>
                {users?.map((user:UserProps)=>(
                <UserResults key={user.id} user={user}/> 
                ))}
              </div>
          
          )
         : (
            <div className='w-60 flex flex-col gap-6 justify-center items-center text-center h-[90vh] m-auto'>
              <Image src={"/assets/search.svg"} alt='search icon' width={110} height={110}/>
              <p className='text-2xl text-[#808080] font-light'>Start with searching a GitHub user</p>
            </div>
          )
        } 
      </main>
    </>
  )
}
