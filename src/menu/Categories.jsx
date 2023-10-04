import React from 'react'

const Categories = ({categories,filterItem}) => {
  return (
    <div className='flex justify-center items-center my-2'>
     {categories.map((cate,index)=>{
      return(
        <button className='py-1 px-5 mx-3 bg-white font-bold rounded-md border-[1.5px] capitalize border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600' onClick={()=>filterItem(cate)} key={index}>{cate}</button>
      )
     })}
    </div>
  )
}

export default Categories
