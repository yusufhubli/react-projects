import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Navbar from '../components/Navbar'

const SingleCocktail = () => {
  const {id} = useParams()
  const {cocktail} = useGlobalContext()
  const single= cocktail.find(item=>item.id == id)
//  console.log(single)
  const {name,img,glass,tag,info} = single
  return (
    <div>
      <Navbar/>
        <div className=' flex justify-center'>
      <section className=' w-96 md:w-[70%] md:flex py-5 md:py-0 my-10 bg-white shadow-lg'>
         <div className=' w-72 mx-auto md:mx-0 md:w-96'>
          <img className=' w-72 h-72 md:w-96 md:h-96' src={`/${img}`} alt="" />
         </div>
         <div className=' md:w-[450px] ml-5 md:mt-10 '>
          <h1 className=' font-bold text-xl mt-5 italic'>{name}</h1>
          <p className=' font-medium text-lg uppercase text-gray-500'>{glass}</p>
          <p className=' text-sm font-bold'>{tag}</p>
          <p className=' text-sm font-medium my-5 pr-4'>{info}</p>
          </div>
      </section>
    </div>
    </div>
  
  )
}

export default SingleCocktail
