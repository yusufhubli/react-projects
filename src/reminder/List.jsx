import React from 'react'

const List = ({people}) => {
  return (
    <div>
      {
        people.map(person=>{
            const { id,name,age,image} = person
            return <article key={id} className=' rounded flex items-center justify-start w-72 bg-white pl-5 py-3 my-3'>
                <img src={image} className=' w-12 h-12 rounded-full' alt="" />
                <div className=' ml-8'>
                    <h4 className=' font-medium'>{name}</h4>
                    <p className=' text-left text-sm'>{age} years</p>
                </div>
            </article>
        })
      }
    </div>
  )
}

export default List
