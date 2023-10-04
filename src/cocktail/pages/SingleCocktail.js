import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleCocktail = () => {
  const {id} = useParams()
  const {cocktail} = useGlobalContext()
  const single= cocktail.find(item=>item.id == id)
//  console.log(single)
  const {name,img,glass,tag,info} = single
  return (
    <div className=' flex justify-center'>
      <section className=' w-[70%] md:flex my-10 bg-white shadow-lg'>
         <div className='w-96'>
          <img className=' w-96 h-96' src={`/${img}`} alt="" />
         </div>
         <div className=' w-[450px] ml-5 md:mt-10 '>
          <h1 className=' font-bold text-xl mt-5 italic'>{name}</h1>
          <p className=' font-medium text-lg uppercase text-gray-500'>{glass}</p>
          <p className=' text-sm font-bold'>{tag}</p>
          <p className=' text-sm font-medium my-5'>{info}</p>
          </div>
      </section>
    </div>
  )
}

export default SingleCocktail
