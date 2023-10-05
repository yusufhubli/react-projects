import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'

const CartContainer = () => {
  const { cart,total,clearCart} = useGlobalContext()
  if(cart.length === 0){
    return(
      <section>
        <header className=' text-center font-bold text-2xl'>
          <h2>your bag</h2>
          <h4 className=' text-lg my-2 font-medium'>is currently empty</h4>
        </header>
      </section>
    )
  } 
  return (
   <section className=' py-5 w-full'>
     <header className=' text-center font-bold text-xl md:text-2xl'>
      <h2>Your Cart</h2>
     </header>
     <div className=' flex flex-wrap justify-center'>
      {cart.map(item=>{
        return <CartItem key={item.id} {...item}/>
      })}
     </div>
     <footer className=' bg-gray-200 py-4 mx-4'>
     <div className=' h-[1px] bg-blue-700 m-4'></div>
      <div>
        <h4 className=' flex justify-between mx-10 font-bold'>Total
          <span>${total}</span>
        </h4>
      </div>
      <div className=' mx-auto w-28'>
      <button className=' px-5 py-1 bg-red-200 rounded-md text-red-600 font-bold' onClick={clearCart}>clear cart</button>
      </div>
     </footer>
   </section>
  )
}

export default CartContainer
