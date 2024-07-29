"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Search from '../components/Search';

export default function Navbar() 
{
    const name = 'Trevon';
    const home = 'Blog';
    const about = 'Sobre';
    const contact = 'Contato';

    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreensNavigation = () =>
    {
        setIcon( !menuIcon );
    }

  return (
    <header className="bg-[#0268b5] pb-3 pt-3 text-[#f0f2f3] w-full ease-in duration-300 fixed top-0 left-0 z-10 border-b border-sky-300 border-opacity-20">
        <nav className="max-w-[1366px] mx-auto h-[60px] flex justify-between items-center p-4 lg:pl-20 lg:pr-20 ">

           <div>
                <p>
                    <Link legacyBehavior href='/'>
                        <a onClick={handleSmallerScreensNavigation}>
                            <Image width="172" height="32" alt={name} src="/logo-big.png" className="items-center mr-2"/>
                        </a>
                    </Link>
                </p>
            </div> 

            <Search/>

            {/* <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[16px] text-white">
                
                <li className="mr-4 lg:mr-8 hover:text-[#b2ddea]">
                    <Link href="/">{home}</Link>
                </li>

                <li className="mr-4 lg:mr-8 hover:text-[#b2ddea]">
                    <Link href="/about">{about}</Link>
                </li>

            </ul>

            <div className="hidden md:flex lg:text-[16px]">
                <div className="flex">
                    <Link href="/login">
                        <button className="mr-4 bg-sky-300 text-slate-800 hover:bg-slate-800  hover:text-sky-300 rounded-full uppercase font-bold px-8 py-2">Login</button>
                    </Link>

                    <Link href="/signup">
                        <button className="border-2 border-sky-300 hover:bg-slate-800 text-white rounded-full uppercase font-bold px-8 py-2">Sign Up</button>
                    </Link>
                </div>
            </div>

            <div onClick={handleSmallerScreensNavigation}
                className="flex md:hidden">
                    {menuIcon 
                    ? 
                    < AiOutlineClose size={25} className="text-[#CEFF00]"/>
                    :
                    < AiOutlineMenu size={25} className="text-[#CEFF00]"/>}
            </div>

            <div className={menuIcon ?
                            'md:hidden absolute top-[82px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
                            :
                            'md"hidden absolute top-[82px] right-0 left-[100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'}>
                <div className="w-full">

                    <ul className="uppercase font-bold text-2xl">
                    
                        <li onClick={handleSmallerScreensNavigation} 
                            className="py-5 hover:text-[#CEFF00] cursor-pointer">
                            <Link href="/">{home}</Link>
                        </li>

                        <li onClick={handleSmallerScreensNavigation} 
                            className="py-5 hover:text-[#CEFF00] cursor-pointer">
                            <Link href="/about">{about}</Link>
                        </li>

                    </ul>

                    <div className="flex flex-col justify-center items-center m-16">
                        <Link href="/login">
                            <button className="bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] px-8 mb-5">Login</button>
                        </Link>

                        <Link href="/signup">
                            <button className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold py-3 w-[250px] px-8 mb-5 ">Sign Up</button>
                        </Link>
                    </div>


                </div>
            </div> */}

        </nav>
    </header>
  )
}
