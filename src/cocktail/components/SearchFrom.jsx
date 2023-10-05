import React from 'react'
import { useGlobalContext } from '../context'

const SearchFrom = () => {
  const { setSearch } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const searchCocktail = () => {
    setSearch(searchValue.current.value)
  }

  return (
    <div className=' w-full flex justify-center'>
      <form className=' w-[65%] my-2 md:my-5' onSubmit={handleSubmit}>
        <label className=' font-medium text-sm md:text-lg ml-1' htmlFor="name">Search your favorite Cocktail</label><br />
        <input className=' w-full px-3 py-1 md:py-2 my-2 border-[1.5px] border-teal-500 outline-none rounded-md' placeholder='Search' type="text" id='name' ref={searchValue} onChange={searchCocktail} />
      </form>
    </div>
  )
}

export default SearchFrom
