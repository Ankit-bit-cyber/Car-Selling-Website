import React, {useState} from "react";
import {GiSteeringWheel} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import {RiMenuUnfoldFill} from "react-icons/ri"
import {Link} from "react-router-dom";

const Navbar =()=>{

    const [menu, setMenu] = useState(false);

    const handleChange = ()=>{
        setMenu(!menu)
    }
    return (
        <header className="fixed w-full z-10 bg-black text-white py-4">
            <nav className="container flex justify-between items-center">
                <div className="flex items-center gap-2 rounded-br-xl transition-transform duration-300">
                    <GiSteeringWheel size={35} className="text-red-500" />
                    <Link to="/" className="font-bold text-2xl">WheelsDeal</Link>
                </div>
                <div className="flex items-center gap-9 font-medium text-xl">
                    <Link
                     to="/"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Home
                    </Link>
                    <Link
                     to="/about"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        About us
                    </Link>
                    <Link
                     to="/cars"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Our Cars
                    </Link>
                    <Link
                     to="/services"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Services
                    </Link>

                    <button className="flex border-2 border-red-500 text-xl px-4 rounded-md hover:bg-red-500  transition duration-200 ease-linear">
                        Sign In
                    </button>
                    
                </div>
                <div className="md:hidden flex items-center">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />

                    ):(
                        <RiMenuUnfoldFill size={25} onClick={handleChange}/>
                    )}
                </div>
            </nav>
            <div className= {`${menu ? "translate-x-0" :"-translate-x-full"} md: hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 rounded-br-xl transition-transform duration-300`}>
                    <Link
                     to="/"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Home
                    </Link>
                    <Link
                     to="/about"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        About us
                    </Link>
                    <Link
                     to="/cars"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Our Cars
                    </Link>
                    <Link
                     to="/services"
                      className="hover:text-red-400 transition duration-200 ease-linear"
                    >
                        Services
                    </Link>

                    <div>
                        <button className="border-2 border-red-500 py-1 px-4 rounded-md cursor-pointer">
                            Sign In
                        </button>
                    </div>

                    
            </div>
        </header>
    )
}
export default Navbar