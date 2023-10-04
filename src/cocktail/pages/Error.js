import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className=' text-center my-10'>
        <h1 className=' font-medium my-2'>oops! it's a dead end</h1>
        <Link className=' px-5 py-1 my-2 bg-emerald-400  font-bold italic rounded-md' to={'/'}>Back Home</Link>
      </section>
    </div>
  )
}

export default Error
