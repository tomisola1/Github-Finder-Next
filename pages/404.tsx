import Navbar from "@/components/Navbar";
import Image from "next/image";

const Custom404 = () => {
  return (
    <>
        <Navbar/>
        <div className='w-60 flex flex-col gap-6 justify-center items-center text-center h-[90vh] m-auto'>
           <Image src={"/assets/profile.svg"} alt="" width={110} height={110}/> 
           <p className='text-2xl text-[#808080] font-light'>User not found</p>
        </div>
    </>
  )
}

export default Custom404;