import React from 'react'
import Logo from '../../components/Navbar/Logo'
import Navs from '../../components/Navbar/Navs'
import UserProfile from '../../components/Navbar/UserProfile'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>
        <nav className=''>
        <Logo/>
        <Navs/>
        <UserProfile/>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar