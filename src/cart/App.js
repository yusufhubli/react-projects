import React from 'react'
import NavBar from './NavBar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'


const App = () => {
  const {loading} = useGlobalContext()
  if(loading){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
    <div className=' w-full flex justify-center '>
      <div className=' w-full'>
      <NavBar/>
     <CartContainer/>

      </div>
    </div>
  )
}

export default App
