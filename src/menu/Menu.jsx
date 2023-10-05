import React from 'react'

const Menu = ({items}) => {
  
  return (
    <div className=' w-full flex flex-wrap justify-center'>
      {items.map(menu=>{
        const {id,title,img,info,price} = menu
        return(
            <article key={id} className=' border rounded-md overflow-hidden shadow-gray-500 bg-white w-80 md:w-96 h-40 m-3 flex'>
                <img src={img} className='w-32 md:w-40' alt="" />
                <div className='mx-3 md:my-5'>
                    <header className=' flex items-center justify-between my-2 pr-2 py-1 border-b border-black'>
                        <h4 className=' text-sm font-bold capitalize'>{title}</h4>
                        <h4 className=' text-sm font-bold text-yellow-500'>${price}</h4>
                    </header>
                    <p className=' text-[13px]'>{info}</p>
                </div>
            </article>
        )
      })}
    </div>
  )
}

export default Menu
