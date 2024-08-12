import React from 'react'
import Logo from '../../components/Navbar/Logo'
import Navs from '../../components/Navbar/Navs'
import UserProfile from '../../components/Navbar/UserProfile'
import { Outlet } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex'>
        <nav className='bg-[#0D0D0D] h-[98.5vh] text-white mt-1 ml-1 w-[20%] rounded-md'>
        <div className='flex justify-between px-2 py-3'>
            <div className='flex'>
                <GoDotFill size={20} color='#F47874'/>
                <GoDotFill size={20} color='#565656'/>
                <GoDotFill size={20} color='#31E22F'/>
            </div>
            <div className='flex gap-6'>
                <MdChevronLeft size={25}/>
                <MdChevronRight size={25}/>
            </div>
        </div>
        <div className='px-3'>
        <Logo/>
        <UserProfile/>
        <div className='flex flex-col h-[67vh] justify-between'>
        <Navs/>
        <div className='text-white flex justify-between items-center'>
            <div className='w-10 h-10 border-[1px] flex justify-center items-center rounded-full'>
            <RiLogoutBoxLine />
            </div>
            <div className='w-10 h-10 border-[1px] flex justify-center items-center rounded-full'>
            <IoShareOutline/>
            </div>
        </div>
        </div>
        </div>
        </nav>   
        <Outlet/>
    </div>
  )
}

export default Navbar