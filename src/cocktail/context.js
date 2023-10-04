import React,{useContext, useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'


const AppContext = React.createContext()


const DataProvider = ({children}) => {
  const [loading,setLoading] = useState(true)
  const [search,setSearch] = useState('')
  const [cocktail,setCocktail] = useState([])
  const item = [
    {
      id:1,
      name:"Lemon juice",
      img:'cocktail/c1.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"plastic",
      tag:'Premium Cocktail'

    },
    {
      id:2,
      name:"Pineapple Juice",
      img:'cocktail/c2.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"v shape",
      tag:'Premium Cocktail'

    },
    {
      id:3,
      name:"Normal Juice",
      img:'cocktail/c3.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"classic",
      tag:'Premium Cocktail'

    },
    {
      id:4,
      name:"Soda",
      img:'cocktail/c9.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"veteran",
      tag:'Premium Cocktail'

    },
    {
      id:5,
      name:'Choco Juice',
      img:'cocktail/c5.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"plastic",
      tag:'Premium Cocktail'

    },
    {
      id:6,
      name:"Beetroot Juice",
      img:'cocktail/c6.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"plastic",
      tag:'Premium Cocktail'
    },
    {
      id:7,
      name:"Orange Juice",
      img:'cocktail/c10.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"plastic",
      tag:'Premium Cocktail'

    },
    {
      id:8,
      name:"Fruit Juice",
      img:'cocktail/c8.jpeg',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores eos dignissimos architecto voluptate exercitationem optio excepturi doloribus modi tenetur.',
      glass:"modern",
      tag:'Premium Cocktail'

    },
  ]
  console.log(search)
  const getItems = ()=>{
    try {
      if(search){
        const product = item.filter(items=>items.name.charAt() === search)
        console.log(product)
        setCocktail(product)
      }else{
        setCocktail(item)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getItems()
  },[search])
  return (
    <AppContext.Provider
    value={{loading,cocktail,setSearch}}>
        {children} 
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
} 

export {AppContext,DataProvider}
