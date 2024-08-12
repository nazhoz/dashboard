import React from 'react'
import { Link } from 'react-router-dom'

const Navs = () => {
  return (
    <div className=''>
        <Link to='/'>Overview</Link>
        <Link to='analytics'>Analytics</Link>
        <Link to='finance'>Finance</Link>
    </div>
  )
}

export default Navs