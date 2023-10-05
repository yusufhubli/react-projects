import React, { useState } from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const Review = () => {
  const people = [
    {
        id:1,
        name:'Deren Bravo',
        job:'web developer',
        image:'profile/p1.jpg',
        text:"temporibus doloremque ipsum iste accusamus. Inventore dolores consequatur accusamus atque quibusdam magnam nostrum ipsum optio? Numquam labore vero natus asperiores!"
    },
    {
        id:2,
        name:'Steve Smith',
        job:'application developer',
        image:'profile/p2.jpg',
        text:" labore vero natus asperiores! temporibus doloremque ipsum iste accusamus. Inventore dolores consequatur accusamus atque quibusdam magnam nostrum ipsum optio? Numquam"
    },
    {
        id:3,
        name:'Eoin Morgan',
        job:'Software Engineer',
        image:'profile/p3.jpg',
        text:"temporibus doloremque ipsum iste accusamus.  vero natus asperiores! Inventore dolores consequatur accusamus atque quibusdam magnam nostrum ipsum optio? Numquam labore"
    },
    {
        id:4,
        name:'David Warner',
        job:'web designer',
        image:'profile/p4.jpg',
        text:"consequatur accusamus atque quibusdam magnam nostrum temporibus doloremque ipsum iste accusamus. Inventore dolores ipsum optio? Numquam labore vero natus asperiores!"
    },
    {
        id:5,
        name:'Mitchell Starc',
        job:'backend developer',
        image:'profile/p5.jpg',
        text:"temporibus doloremque  dolores consequatur accusamus atqueipsum iste accusamus. Inventore quibusdam magnam nostrum ipsum optio? Numquam labore vero natus asperiores!"
    },
  ]
  const [index,setIndex] = useState(0)
  const {name,job,text,image} = people[index]

  const randomPerson = () =>{
   let random = Math.floor(Math.random()*people.length)
   if(random === index){
    random = index + 1
   }
   setIndex(Check(random));
  }

  const Check = (num) =>{
    if(num>people.length-1){
        return 0
    }
    if(num < 0){
        return people.length-1
    }
    return num
  }

  const nextPerson = () =>{
    setIndex((index)=>{

        let newIndex = index +1
        return Check(newIndex)
    })
  }

  const prevPerson = () =>{
    setIndex((index)=>{
        let newIndex = index - 1
        return Check(newIndex)
    })
  }
  return (
    <article className=' w-[320px] md:w-[560px] bg-white text-center pb-5 border border-blue-400 rounded-md mx-auto'>
        <div className=' h-24 md:h-28 mx-32 md:mx-60 pt-5'>
            <img src={image} className='absolute bg-slate-300 w-16 h-16 md:w-20 md:h-20 rounded-full' alt="" />
            <span className='relative text-white bg-blue-400 rounded-full'>
                <FaQuoteRight className=' bg-blue-400 rounded-full p-[5px] text-xl'/>
            </span>
        </div>
        <h4 className=' font-sans text-sm font-bold'>{name}</h4>
        <p className=' uppercase text-sm text-blue-500'>{job}</p>
        <p className=' text-sm px-4 md:px-6 py-2 italic'>{text}</p>
        <div className=''>
            <button onClick={prevPerson} className=' text-blue-500 mx-4 my-2'><FaChevronLeft/></button>
            <button  onClick={nextPerson} className=' text-blue-500 mx-4 my-2'><FaChevronRight/></button>
        </div>
        <button onClick={randomPerson} className='my-2 px-5 py-1 bg-blue-100 text-blue-600 rounded-md text-sm'>Surprise Me</button>
    </article>
  )
}

export default Review
