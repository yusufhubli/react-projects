import React from 'react'
import { Link } from 'react-router-dom'


const card = [
  { id: 1, name: 'Cart', img: 'display/cart.png', link: '/cart' },
  { id: 2, name: 'Cocktail', img: 'display/cocktail.png', link: '/cock' },
  { id: 3, name: 'Menu', img: 'display/menu.png', link: '/menu' },
  { id: 4, name: 'Tour', img: 'display/tours.png', link: '/tour' },
  { id: 5, name: 'Todo List', img: 'display/todo.png', link: '/todo' },
  { id: 6, name: 'Jobs', img: 'display/jobs.png', link: '/jobs' },
  { id: 7, name: 'Reviews', img: 'display/reviews.png', link: '/reviews' },
  { id: 8, name: 'Questions', img: 'display/question.png', link: '/question' },
  { id: 9, name: 'Reminder', img: 'display/reminder.png', link: '/reminder' },
  { id: 10, name: 'Text Generator', img: 'display/text-generator.png', link: '/text-generator' },
]

const Card = ({ item }) => {
  const { id, name, img, link } = item
  return (
    <div className=' w-72 h-52 lg:w-96 lg:h-64 border overflow-hidden m-4 lg:m-7 shadow-lg bg-yellow-100' key={id}>
      <div className='w-72 h-40 lg:w-96 lg:h-48 overflow-hidden'>
        <img src={img} className='w-72 h-40 lg:w-96 lg:h-48 object-center ' alt="" />
      </div>
      <h1 className=' w-full mx-auto font-bold text-center py-2 lg:py-5 text-xl hover:text-[22px] '><Link to={link}>{name}</Link></h1>

    </div>
  )
}

const Home = () => {
  return (
    <div className='  bg-yellow-400'>
      <h1 className=' font-bold py-4 text-center italic text-3xl'>Small Projects</h1>
      <div className=' h-[1.5px] bg-white mx-10'></div>
      <div className=' w-full flex flex-wrap justify-center py-5'>
        {card.map(cards => <Card item={cards} />)}
      </div>
    </div>

  )
}

export default Home
