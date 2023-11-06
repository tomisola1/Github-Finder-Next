import { GlobalContext, useGlobalContext } from '@/Context/context';
import { getSearchedUser } from '@/utils';
import { FormEvent, useContext, useState } from 'react'

const SearchUser = () => {
    const [text, setText] = useState('')
    const { setUsers } = useContext(GlobalContext)

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if (text === ''){
            alert('Please enter github username')
        }else{
            try {
                const users = await getSearchedUser(text) 
                console.log(users);
                setUsers(users.items)
                setText('')
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="search" 
            placeholder="Enter Github username" 
            onChange={(e)=> setText(e.target.value)}
            className="pl-11 pr-5 w-[500px] rounded h-10" 
            />
        </form>
        
    </div>
  )
}

export default SearchUser