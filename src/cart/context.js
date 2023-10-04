import React, { useContext, useEffect, useReducer} from 'react'
import reducer from './reducer'

export const phone = [
    {
      id:1,
      title:'Redmi note 10',
      price:199.99,
      img:'phone/sp1.jpeg',
      amount:1
    },
    {
      id:2,
      title:'iphone 15 pro max',
      price:699.99,
      img:'phone/sp2.jpeg',
      amount:1
    },
    {
      id:3,
      title:'samsung galaxy S1',
      price:799.99,
      img:'phone/sp3.jpeg',
      amount:1
    },
    {
      id:4,
      title:'realme pro max',
      price:159.99,
      img:'phone/sp4.jpeg',
      amount:1
    },
    {
      id:5,
      title:'infinix S4',
      price:139.99,
      img:'phone/sp5.jpeg',
      amount:1
    },
    {
      id:6,
      title:'vivo A17 pro ',
      price:179.99,
      img:'phone/sp5.jpeg',
      amount:1
    },
  ]
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart:phone,
  total:0,
  amount:0
}

const AppProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
  }
  const remove = (id)=>{
    dispatch({type:'REMOVE',payload:id})
  }
  const increase = (id)=>{
    dispatch({type:'INCREASE',payload:id})
   }

   const decrease = (id)=>{
    dispatch({type:'DECREASE',payload:id})
   }
  
   useEffect(()=>{
    dispatch({type:'GET-TOTAL'})
   },[state.cart])

  return (
    <AppContext.Provider value={{...state,clearCart,remove,increase,decrease}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
