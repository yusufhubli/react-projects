
import './App.css'
import Home from './Home'
import Homes from './cocktail/pages/Home'
import About from './cocktail/pages/About'
import SingleCocktail from './cocktail/pages/SingleCocktail'
import Cart from './cart/App'
import Cocktail from './cocktail/App'
import Menu from './menu/App'
import Jobs from './jobs/App'
import Tour from './tour/App'
import Reviews from './reviews/App'
import Question from './question/App'
import Todo from './grocery-bud/App'
import Reminder from './reminder/App'
import Text from './text-generator/App'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

const MyApp = () =>{
  return(
    <div className=''>
     <BrowserRouter>
     <nav className=' h-16 flex items-center bg-yellow-700 px-10'>
       <h1 className=' font-bold text-2xl text-white'><Link to={'/'}>Projects</Link></h1>
     </nav>
     <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/cart' Component={Cart} />
        <Route exact path='/cock' Component={Cocktail} />
        {/* <Route exact path='/cock/home' Component={Homes} /> */}
        <Route exact path='/cock/about' Component={About}/>
        <Route exact path='/cocktail/:id' Component={SingleCocktail}/>
        <Route exact path='*' Component={Error}/>
        <Route exact path='/menu' Component={Menu} />
        <Route exact path='/tour' Component={Tour} />
        <Route exact path='/todo' Component={Todo} />
        <Route exact path='/jobs' Component={Jobs} />
        <Route exact path='/reviews' Component={Reviews} />
        <Route exact path='/question' Component={Question} />
        <Route exact path='/reminder' Component={Reminder} />
        <Route exact path='/text-generator' Component={Text} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default MyApp