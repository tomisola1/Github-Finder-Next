import Navbar from '@/components/Navbar'
import RepositoryList from '@/components/RepositoryList'
import Image from 'next/image'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

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

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex gap-24'>
            <div className='w-[293px] h-[431px] mt-10 ml-14 flex flex-col gap-5'>
                <Image src={'/assets/image 1.png'} alt='profile-image' width={280} height={280} className='rounded-full'/>
                <div className='flex flex-col gap-3'>
                    <span className='text-[26px] font-semibold'>Dan Abramov</span>
                    <span className='text-[#0064EB] text-lg font-light'>gaearon</span>
                </div>
                <div className='flex gap-4'>
                    <div className='flex gap-3'>
                        <Image src={"/assets/followers.svg"} alt='followers icon' width={24} height={24}/>
                        <span className='text-base'>65.8k followers</span>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={"/assets/following.svg"} alt='followers icon' width={24} height={24}/>
                        <span className='text-base'>171 following</span>
                    </div>
                </div>
            </div>
            <div className='mt-10 h-[80vh]'>
                <h1 className='text-3xl font-semibold'>Repositories(246)</h1>
                <RepositoryList/>
                <RepositoryList/>
                <RepositoryList/>
                <RepositoryList/>
               <ThemeProvider theme={theme}>
                    <div className='flex items-end justify-end'>
                        <Typography color={grey[500]}>
                            5-8 of 249 items
                        </Typography>
                        <Stack spacing={2} mt={2}>
                            <Pagination count={10} shape="rounded" color={'primary'}/>
                        </Stack>
                    </div> 
               </ThemeProvider>
                
            </div>
        </div> 
    </div>
  )
}

export default Profile