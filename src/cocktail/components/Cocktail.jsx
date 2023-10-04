import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, info, img, glass,tag }) => {
  return (
    <div className=''>
      <section className=' w-60 h-[340px] overflow-hidden border m-3 bg-white shadow-lg' key={id}>
        <div className='w-60 h-56 '>
          <img src={`/${img}`} className=' w-60 h-56 object-fill' alt="" />
        </div>
        <div className=' ml-5'>
          <h1 className=' font-bold text-[17px]'>{name}</h1>
          <h3 className=' font-medium text-xs my-1 text-gray-500 uppercase'>{glass}</h3>
          <p className=' text-xs mb-2'>{tag}</p>
          <Link to={`/cocktail/${id}`} className=' px-5 font-medium italic text-sm py-1 bg-emerald-500 '>Details</Link>
        </div>
      </section>
    </div>
  )
}

export default Cocktail
