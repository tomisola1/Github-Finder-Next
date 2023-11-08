import { useGlobalContext } from "@/Context/context";
import Navbar from "@/components/Navbar";
import UserResults from "@/components/UserResults";
import { UserProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Custom404 = () => {
  const { users } = useGlobalContext();
  const router = useRouter();

  return (
    <>
        <Navbar/>
        {
          users?.length > 0 ? (
            <div className='grid grid-cols-4'>
              {users?.map((user:UserProps)=>(
              <UserResults key={user.id} user={user}/> 
              ))}
            </div>
        
        ):(
            <div className='w-60 flex flex-col gap-6 justify-center items-center text-center h-[90vh] m-auto'>
              <Image src={"/assets/profile.svg"} alt="" width={110} height={110}/> 
              <p className='text-2xl text-[#808080] font-light'>User not found</p>
              <Image src={"/assets/arrow_left_alt.svg"} alt="" width={70} height={70} className="text-[#808080]" onClick={()=>router.push('/')}/> 
            </div>
          )
        }
        
    </>
  )
}

export default Custom404;