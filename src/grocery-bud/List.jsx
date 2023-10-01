import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

const List = ({items,removeItem,editItem}) => {
  return (
    <div>
      {items.map(item=>{
      //  console.log(item)
      const {id,title} = item
        return <article key={id} className=' flex items-center  justify-between px-3 m-3 h-10 ml-[7px] mr-[6px] bg-blue-100 shadow-gray-300 rounded-md'>
            <p className=' font-medium italic capitalize'>{`${title.substring(0,20)}...`}</p>
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
