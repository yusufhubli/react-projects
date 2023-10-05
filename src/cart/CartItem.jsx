import React from 'react'
import { useGlobalContext } from './context'
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'

const CartItem = ({id,price,title,img,amount}) => {
  const {remove,increase,decrease} = useGlobalContext()
  return (
    <article key={id} className=' w-96 md:w-96 lg:w-[40%] flex bg-white items-center border shadow-md m-2 md:m-4'>
        <img src={img} className=' w-28 h-28 md:w-36 md:h-36' alt="" />
        <div className=' grow mx-4 my-4 md:m-4 '>
            <h4 className='text-sm md:text-lg font-medium'>{title}</h4>
            <h4 className=' font-bold'>${price}</h4>
            <button className='text-xs md:text-sm px-3 pb-1 my-2 font-bold bg-blue-200 text-blue-600 rounded-md' onClick={()=>remove(id)}>remove</button>
        </div>
        <div className='mx-3 md:mx-6 text-lg md:text-xl font-bold text-center'>
            <button onClick={()=>increase(id)}><FaCaretUp/></button>
            <p>{amount}</p>
            <button onClick={()=>decrease(id)}><FaCaretDown/></button>
        </div>
    </article>
  )
}

export default CartItem
