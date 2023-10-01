import React from 'react'
import {FaBars,FaTwitter,FaGoogle,FaInstagram,FaLinkedin} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className=''>
      <nav className=' md:flex bg-green-300'>
        <div className=' flex items-center w-full justify-between md:w-96 p-4'>
          <h1 className=' font-bold text-2xl'>Responsive Navbar</h1>
          <button className=' text-2xl md:hidden'><FaBars/></button>
        </div>
        <div className=' md:flex justify-between w-full'>
          <ul className=' md:flex items-center md:justify-between italic w-[45%] md:mx-auto font-medium text-[16px]'>
            <li className=' ml-5 my-1'><a href="#">Home</a></li>
            <li className=' ml-5 my-1'><a href="#">Category</a></li>
            <li className=' ml-5 my-1'><a href="#">Profile</a></li>
            <li className=' ml-5 my-1'><a href="#">About us</a></li>
          </ul>
        <ul className=' flex items-center text-2xl w-[50%] md:w-[20%] justify-between mx-auto md:mx-8 py-4'>
          <li><a href="#"><FaTwitter/></a></li>
          <li><a href="#"><FaGoogle/></a></li>
          <li><a href="#"><FaInstagram/></a></li>
          <li><a href="#"><FaLinkedin/></a></li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
