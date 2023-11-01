import { getSearchedUser } from '@/utils';
import { FormEvent, useState } from 'react'

const SearchUser = () => {
    const [text, setText] = useState('')

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if (text === ''){
            alert('Please enter github username')
        }else{
            try {
                const user = await getSearchedUser(text) 
                console.log(user);
                setText('')
                return user
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
            className="pl-11 w-[500px] rounded h-10" 
            />
        </form>
        
    </div>
  )
}

export default SearchUser