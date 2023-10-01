import React from 'react'

const List = ({people}) => {
  return (
    <div>
      {
        people.map(person=>{
            const { id,name,age,image} = person
            return <article key={id} className=' flex items-center justify-start w-72 bg-pink-400 pl-5 py-3 my-2'>
                <img src={image} width={50} height={40} alt="" />
                <div className=' ml-8'>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        })
      }
    </div>
  )
}

export default List
