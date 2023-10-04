import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const CocktailList = () => {
  const {cocktail,loading} = useGlobalContext()
  console.log('hello',cocktail)
  if(loading){
    return <Loading/>
  }

  if(cocktail.length <1){
    return(
      <div>
        <h1 className=' font-medium text-lg text-center'>no cocktail match your search criteria</h1>
      </div>
    )
  }
  return (
    <div>
      <section>
        <h1 className=' text-2xl font-medium text-center'>Cocktails</h1>
        <div className=' w-full flex flex-wrap justify-center my-4'>
          {
            cocktail.map((item)=>{
              return <Cocktail key={item.id} {...item}/>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default CocktailList
