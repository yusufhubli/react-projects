import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
import Error from './pages/Error'

const App = () => {
  return (
    <div className=' w-full'>
      <Navbar/>
      <Home/>
    </div>
  //   <BrowserRouter>
  //   <Navbar/>
  //  <Routes>
  //       <Route exact path='/' Component={Home}/>
  //       <Route exact path='/about' Component={About}/>
  //       <Route exact path='/cocktail/:id' Component={SingleCocktail}/>
  //       <Route exact path='*' Component={Error}/>
  //  </Routes>
  //  </BrowserRouter>
  )
}

export default App
