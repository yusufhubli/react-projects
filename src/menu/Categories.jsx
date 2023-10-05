import React from 'react'

const Categories = ({categories,filterItem}) => {
  return (
    <div className=' w-full flex justify-center items-center my-2'>
     {categories.map((cate,index)=>{
      return(
        <button className=' text-xs md:text-lg py-1 px-3 md:px-5 mx-1 md:mx-4 bg-white font-bold rounded-md border-[1.5px] capitalize border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600' onClick={()=>filterItem(cate)} key={index}>{cate}</button>
      )
     })}
    </div>
  )
}

export default Categories
