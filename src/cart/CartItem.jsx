import React from 'react'
import { useGlobalContext } from './context'
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'

const CartItem = ({id,price,title,img,amount}) => {
  const {remove,increase,decrease} = useGlobalContext()
  return (
    <article key={id} className=' w-full lg:w-[40%] flex items-center border shadow-md m-4'>
        <img src={img} className=' w-36 h-36 p-4' alt="" />
        <div className=' grow m-4 '>
            <h4 className=' font-medium'>{title}</h4>
            <h4 className=' font-bold'>${price}</h4>
            <button className=' px-3 pb-1 my-2 font-bold bg-blue-200 text-blue-600 rounded-md' onClick={()=>remove(id)}>remove</button>
        </div>
        <div className=' mx-6 text-xl font-bold text-center'>
            <button onClick={()=>increase(id)}><FaCaretUp/></button>
            <p>{amount}</p>
            <button onClick={()=>decrease(id)}><FaCaretDown/></button>
        </div>
    </article>
  )
}

export default CartItem
