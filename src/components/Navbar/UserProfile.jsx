import React from 'react'
import { AiOutlineNotification } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className='flex py-4 justify-around items-center'>
       <Link to='/user'><img className='w-10 h-10 rounded-full object-cover  cursor-pointer' src={require('../../Assets/navbar/user.jpg')} alt="" /></Link> 
        <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full  cursor-pointer'>
        <AiOutlineNotification size={20} color='black' />
        </div>
        <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full  cursor-pointer'>
        <CiStar size={20} color='black' />
        </div>
        <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full  cursor-pointer'>
        <FiSearch size={20} color='black' />
        </div>
    </div>
  )
}

export default UserProfile