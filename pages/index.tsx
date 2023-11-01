import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={inter.className}>  
        <div className='w-60 flex flex-col gap-6 justify-center items-center text-center h-[90vh] m-auto'>
          <Image src={"/assets/search.svg"} alt='search icon' width={110} height={110}/>
          <p className='text-2xl text-[#808080] font-light'>Start with searching a GitHub user</p>
        </div>
      </main>
    </>
  )
}
