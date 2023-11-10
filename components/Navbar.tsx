import Image from "next/image"
import SearchUser from "./SearchUser"

const Navbar = () => {
  return (
    <div className="p-4 pl-5 sm:pl-11 bg-[#0064EB] flex gap-6">
        <Image src={"/assets/Vector.png"} alt={"github logo"} width={41} height={40}/>
        <div className="flex relative">
            <Image src={"/assets/search.svg"} alt={"search icon"} width={25} height={25} className="object-contain absolute left-4 top-2"/>
            <SearchUser/>
        </div>
    </div>
  )
}

export default Navbar