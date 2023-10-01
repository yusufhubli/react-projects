import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
        let colors = new Values(color).all(10)
        console.log(colors)
        setList(colors)
    } catch (error) {
        setError(true)
        console.log(error)
    }
   
  }
  return (
    <div className=' block w-full'>
    <section className=' h-20 flex items-center justify-center my-5 bg-slate-300 '>
        <h1 className=' font-bold'>Color Generator</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className={`mx-4 outline-none p-1 border-2 ${error ? 'border-red-600':null}`} value={color} onChange={e=>setColor(e.target.value)} placeholder='#fff123' />
            <button className=' hover:bg-blue-700 px-5 py-1 bg-blue-500 text-white rounded-md' type='submit'>Submit</button>
        </form>
    </section>
    <div className=' flex flex-wrap justify-center '>
        {list.map((color,index)=>{
            return(
                <SingleColor key={index} {...color} hexColor={color.hex} index={index}/>
            )
        })}
    </div>
    </div>
  )
}

export default App
