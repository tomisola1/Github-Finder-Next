import Image from 'next/image'

const UserResults = () => {
  return (
    <div className='mt-6 px-10 py-6 bg-white rounded shadow-md w-[877px] flex'>
        <Image src={'/assets/image 1.png'} alt='user-image' width={20} height={20}/>
        <p className='text-[#0064EB] text-2xl'>Tweak React components in real time. (Deprecated: use Fast Refresh instead).</p>
    </div>
  )
}

export default UserResults