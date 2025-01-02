import { useEffect, useState } from "react"
import { TbShoppingBag } from "react-icons/tb";

const NavBar = () => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setNavBg(true)
            }
            else{
                setNavBg(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
        

    }, [])


  return (
    <div className={`fixed  w-full top-0 left-0 z-50 transition-all duration-200  ${navBg ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg' : 'bg-transparent text-white'}`}>
      <div className="max-container py-2 flex items-center justify-between">
        <div>
            <h1 className="cursor-pointer font-cursive text-5xl font-bold">burgrill</h1>
        </div>
            <ul className={`flex text-xl font-medium justify-end font-oswald gap-[3rem]  `}>
                <li><a href="/about" className={`${navBg ? "hover:text-black" : "hover:text-yellow-500 "} transition-all duration-200`}>Home</a></li>
                <li><a href="#" className={`${navBg ? "hover:text-black hover:scale-105" : "hover:text-yellow-500 "} transition-all duration-200`}>Our Menu</a></li>
                <li><a href="#" className={`${navBg ? "hover:text-black hover:scale-105" : "hover:text-yellow-500 "} transition-all duration-200`}>Blog</a></li>
                <li><a href="#" className={`${navBg ? "hover:text-black hover:scale-105" : "hover:text-yellow-500 "} transition-all duration-200`}>Shop</a></li>
                <li><a href="#" className={`${navBg ? "hover:text-black hover:scale-105" : "hover:text-yellow-500 "} transition-all duration-200`}>About</a></li>
                <li><a href="#" className={`${navBg ? "hover:text-black hover:scale-105" : "hover:text-yellow-500 "} transition-all duration-200`}>Contact</a></li>
                <li className="text-[1.5rem] mt-[0.1rem]"><TbShoppingBag width={20} height={20}/></li>
            </ul>
      </div>
    </div>
  )
}

export default NavBar
