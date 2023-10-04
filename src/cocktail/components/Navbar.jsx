import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className=' w-full h-14 flex items-center bg-emerald-400'>
    <div className=' flex w-full mx-20 lg:mx-48 justify-between font-sans font-bold'>
      <Link className=' text-2xl italic font-bold' to={'/cock'}>CockTails</Link>
      <ul className=' flex  justify-between text-sm items-center'>
        <li className=' hover:text-gray-600 mr-10'><Link to={'/cock'}>Home</Link></li>
        <li className=' hover:text-gray-600'><Link to={'/cock/about'}>About</Link></li>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
