import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  return (
    <div className='mx-auto'>
       <div>
        <h2 className=' text-xl md:text-2xl font-bold italic my-4'>Ours Tours</h2>
        <div className=' h-[1.5px] mx-6 my-2 bg-black'></div>
       </div>
       <div className=' flex flex-wrap justify-center my-5'>
        { tours.map(tour=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/> 
        })}
       </div>
    </div>
  )
}

export default Tours
