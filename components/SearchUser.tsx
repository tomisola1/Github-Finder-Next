import { GlobalContext, useGlobalContext } from '@/Context/context';
import { getSearchedUser } from '@/utils';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react'

const SearchUser = () => {
    const [text, setText] = useState('')
    const { setUsers } = useContext(GlobalContext)
    const router = useRouter()

    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)

        
        if (text === ''){
            setUsers([]);
        }else{
            try {
                const users = await getSearchedUser(text) 
                console.log(users);
                setUsers(users.items)
                setText('')
    
            } catch (error) {
                console.log(error);
                router.push('/404')
            }
        }
    }

  return (
    <div>
        <input 
        type="search" 
        placeholder="Enter Github username" 
        onChange={handleChange}
        className="pl-11 pr-5 w-[500px] rounded h-10" 
        />
    </div>
  )
}

export default SearchUser