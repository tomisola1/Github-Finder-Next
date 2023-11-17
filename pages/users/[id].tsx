import Navbar from '@/components/Navbar'
import RepositoryList from '@/components/RepositoryList'
import Image from 'next/image'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useGlobalContext } from '@/Context/context';
import { getUserAndRepo } from '@/utils';
import { useEffect, useState } from 'react';
import { RepoProps, UserProps } from '@/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserResults from '@/components/UserResults';
import Loader from '@/components/Loader';

let theme = createTheme({
    palette:{
     primary:{
        main: '#0064EB'
     } 
    }
})

theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.primary.main,
      },
    }
});

interface UserDetailProps {
    userDetail: UserDetailProps
}

let numberOfRepos = 4


const Profile = () => {
    const { user, users, loading, setUser, setUsers, repos, setRepos, setLoading, text, setText } = useGlobalContext();
    const router = useRouter()
    const [page, setPage] = useState(1);
    const [sliceEndValue, setSliceEndValue] = useState(page * numberOfRepos);
    const [sliceStartValue, setSliceStartValue] = useState(sliceEndValue - numberOfRepos);


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        let indexOfLastMovie = value * numberOfRepos;
        let indexOfFirstMovie = indexOfLastMovie - numberOfRepos;

        setSliceEndValue(indexOfLastMovie);
        setSliceStartValue(indexOfFirstMovie);
        setPage(value);
    };

    useEffect(() => { 
        setUsers([])
    }, [user.login]);
    
    let myUrl;
    if (typeof window !== "undefined"){
        myUrl = window.location.pathname
    }
    const url = myUrl?.split('/')[2];

    useEffect(() => {
        const getUserData = async() => {
              
            try {
                setLoading(true)
                const useR = await getUserAndRepo(String(url)) 
                setUser(useR.user)
                setRepos(useR.repos) 
                setLoading(false)
                setText('')
            } catch (error) {
                console.log(error)
                router.push('/404')
            } 
        } 
        getUserData()
    }, [url]);

    const totalRepos = repos.length
    let numberOfPages = Math.ceil(totalRepos / numberOfRepos) 
    
  return (
      <div>
        <Navbar />
        {
          (
             users?.length > 0 ? (
                loading ? <Loader/> :
                <div className='grid grid-cols-4'>
                  {
                  users?.map((user:UserProps)=>(
                  <UserResults key={user.id} user={user}/> 
                  ))}
                </div>
            ) : (
                <div className='flex flex-col md:flex-row lg:gap-10 px-10 max-lg:gap-8'>
                <div className='w-[293px] h-[431px] mt-10 lg:ml-10 flex flex-col gap-5'>
                    <Image src={user.avatar_url} alt='profile-image' width={280} height={280} className='rounded-full'/>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[26px] font-semibold'>{user.name}</span>
                        <Link href={`https://github.com/${user.login}`} target='_blank'>
                            <span className='text-[#0064EB] text-lg font-light hover:underline'>{user.login}</span>
                        </Link>
                    </div>
                    <div className='flex gap-4 md:flex-col lg:flex-row'>
                        <div className='flex gap-3'>
                            <Image src={"/assets/followers.svg"} alt='followers icon' width={24} height={24}/>
                            <span className='text-base'>{user.followers} followers</span>
                        </div>
                        <div className='flex gap-3'>
                            <Image src={"/assets/following.svg"} alt='followers icon' width={24} height={24}/>
                            <span className='text-base'>{user.following} following</span>
                        </div>
                    </div>
                </div>
                <div className='md:mt-10 h-[85vh] mb-10 md:w-[70%]'>
                    {loading ? (<Loader/>) :
                    repos.length === 0 ?
                     (<div className='flex flex-col gap-6 justify-center items-center text-center h-[85vh] m-auto'>
                        <Image src={"/assets/cancel.svg"} alt='cancel icon' width={110} height={110}/>
                        <p className='text-2xl text-[#808080] font-light'>Repository list is empty</p>
                     </div> 
                     ):(
                     <>
                        <h1 className='text-3xl font-semibold'>Repositories({totalRepos})</h1>
                        {repos.slice(sliceStartValue, sliceEndValue).map((repo:RepoProps)=>(
                            <RepositoryList key={repo.id} repo={repo} user={user.login}/>
                        ))}
                        <ThemeProvider theme={theme}>
                            <div className='flex items-end justify-end'>
                                <Typography color={grey[500]}>
                                    {sliceStartValue + 1}-{sliceEndValue} of {totalRepos} items
                                </Typography>
                                <Stack spacing={2} mt={2}>
                                    <Pagination count={numberOfPages} page={page} shape="rounded" color={'primary'} onChange={handleChange}/>
                                </Stack>
                            </div> 
                        </ThemeProvider>
                     </>
                   )
                  }
                </div>
            </div> 
            )
        )
      }

    </div>
  )
}

export default Profile