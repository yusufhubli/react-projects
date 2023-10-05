import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

const List = ({items,removeItem,editItem}) => {
  return (
    <div className=' w-full'>
      {items.map(item=>{
      //  console.log(item)
      const {id,title} = item
        return <article key={id} className=' flex items-center  justify-between px-3 m-3 h-10 ml-[7px] mr-[6px] bg-blue-100 shadow-gray-300 rounded-md'>
            <p className=' md:hidden lg:hidden font-medium italic capitalize'>{`${ title.length <= 15 ? title :`${title.substring(0,15)}...`}`}</p>
            <p className='hidden md:block lg:hidden font-medium italic capitalize'>{`${ title.length <= 55 ? title :`${title.substring(0,55)}...`}`}</p>
            <p className='hidden md:hidden lg:block font-medium italic capitalize'>{`${ title.length <= 75 ? title :`${title.substring(0,75)}...`}`}</p>
            <div>
                <button className='p-1 mx-1' onClick={()=>editItem(id)}><FaEdit/></button>

                <button className='p-1 mx-1' onClick={()=>removeItem(id)}><FaTrash/></button>
            </div>
        </article>
      })}
    </div>
  )
}

export default List
