import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { useGlobalContext } from './context'

const NavBar = () => {
  const {amount} = useGlobalContext()
  return (
    <div className=' bg-blue-600 flex justify-center py-4 mb-4'>
      <nav className=' w-[40%] flex justify-between items-center'>
        <h3 className=' text-2xl font-bold text-white'>UseReducer</h3>
        <div className=''>
          <div className=' absolute bg-white text-2xl p-2 rounded-full -mt-2'>
          <FiShoppingCart/>
          </div>
        <p className=' relative z-10 left-7 -top-3 bg-black text-white py-[4px] px-[6px] font-bold rounded-full text-xs'>{amount}</p>
         </div>
      </nav>
    </div>
  )
}

export default NavBar
