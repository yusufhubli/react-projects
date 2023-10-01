import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title,info}) => {
  const [show,setShow] = useState(false)
  return (
    <article className=' w-96 border bg-white border-black rounded-sm shadow-md shadow-gray-400 m-2'>
      <header className=' flex items-center justify-between py-2 px-5'>
        <h4 className=' text-xs font-bold'>{title}</h4>
        <button onClick={()=>setShow(!show)} className=' bg-gray-300 p-[2px] '>
          {show ? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {
        show && <p className=' text-xs text-left pb-3 px-4'>{info}</p>
 
      }
   </article>
  )
}

export default SingleQuestion
