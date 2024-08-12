import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
        <Link className='' to='/'><img src={require('../../Assets/navbar/icons8-logo-50.png')} alt="" /></Link>
    </div>
  )
}

export default Logo