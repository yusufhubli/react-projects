import React, { useState } from 'react'

const Tour = ({id,name,info,image,price, removeTour}) => {
    const [readMore,setReadMore] = useState(false)
  return (
    <div className=' bg-cyan-300 m-4'>
        <img className=' bg-black w-full h-40 py-4 px-10' src={image} width={100} height={50} alt="" />
        <footer>
            <div className=' flex items-center font-bold justify-between mx-8 my-2'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <p className=' p-2'>{readMore ? info :`${info.substring(0,144)}...`}
            <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>
            </p>
            <button onClick={()=>removeTour(id)} className=' border-2 border-black rounded my-2 px-4 font-medium'>not interested</button>
        </footer>
    </div>
    
  )
}

export default Tour
