import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title,info}) => {
  const [show,setShow] = useState(false)
  return (
    <article className=' w-72 md:w-[600px] md:py-2 border bg-white rounded-sm shadow-sm m-2'>
      <header className=' flex items-center justify-between py-2 px-5'>
        <h4 className=' text-xs md:text-sm capitalize font-bold'>{title}</h4>
        <button onClick={()=>setShow(!show)} className=' bg-gray-300 p-[2px] '>
          {show ? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {
        show && <p className=' text-xs md:text-sm text-left pb-3 px-4'>{info}</p>
 
      }
   </article>
  )
}

export default SingleQuestion
