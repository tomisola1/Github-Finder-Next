import { GlobalContext, useGlobalContext } from '@/Context/context';
import { getSearchedUser } from '@/utils';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react'

const SearchUser = () => {
    const { setUsers, setError, setSearched, setLoading, text, setText } = useContext(GlobalContext)
    const router = useRouter()

    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        let myText = e.target.value;
        
        if (myText  === ''){
            setUsers([]);
            setSearched(false)
        }
        setText(myText)
        
        try {
            setSearched(true)
            setLoading(true)
            const users = await getSearchedUser(myText) 
            setUsers(users.items)
            setLoading(false)
        
        } catch (error) {
            console.log(error);
            setError("No users found")
        }
    }
  return (
    <div className='w-full'>
        <input 
        type="search" 
        placeholder="Enter Github username" 
        onChange={handleChange}
        value={String(text)}
        className="pl-11 pr-5 sm:w-[500px] rounded h-10 w-full" 
        />
    </div>
  )
}

export default SearchUser