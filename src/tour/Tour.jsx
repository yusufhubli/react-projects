import React, { useState } from 'react'

const Tour = ({id,name,info,image,price, removeTour}) => {
    const [readMore,setReadMore] = useState(false)
  return (
    <div className=' w-96 bg-white shadow-md pb-4 m-4'>
        <img className=' bg-black w-full h-52' src={image} width={100} height={50} alt="" />
        <footer>
            <div className=' flex items-center font-bold justify-between mx-8 my-2'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <p className='py-2 px-3 text-sm'>{readMore ? info :`${info.substring(0,144)}...`}
            <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>
            </p>
            <button onClick={()=>removeTour(id)} className=' capitalize py-1 bg-emerald-400 rounded my-2 px-4 font-medium'>not interested</button>
        </footer>
    </div>
    
  )
}

export default Tour
