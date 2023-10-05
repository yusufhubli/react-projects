import React,{useState} from 'react'

const App = () => {
    const data = [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, minus tempore, laudantium fugit quibusdam, commodi eius doloribus aliquam dicta recusandae dignissimos possimus minima numquam. Odit ab ipsa obcaecati asperiores aliquid tenetur itaque quis, aliquam culpa corrupti molestiae deserunt possimus eum in temporibus. Nulla numquam quod dignissimos nesciunt magnam rem, vel alias. Quae natus officiis quia officia! Veniam eos repudiandae sunt voluptatibus quaerat id, similique ex laudantium hic est adipisci iusto perferendis maxime odio accusantium voluptate fugiat. Voluptatum, vel eaque saepe numquam delectus tempore ut rem sit alias eos, recusandae rerum? Odit at laudantium quibusdam voluptatum, magni officiis maiores molestias!`
      ]
      const [text,setText] = useState([])
      const [count,setCount] =useState(0)
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = parseInt(count)
        if(amount<= 0){
            amount = 1
        }
        if(amount>8){
            amount =8
        }
        setText(data.slice(0,amount))
      }
  return (
    <div className=' w-full flex justify-center'>
        <section className=' w-full md:w-[900px] bg-purple-200 m-6 rounded-md'>
        <h3 className=' text-center my-2 font-bold text-lg md:text-2xl'>Text Generator</h3>
        <form className=' my-4 pb-5 text-center' onSubmit={handleSubmit}>
            {/* <label htmlFor="amount" className=' font-bold'> Paragraghs:</label> */}
            <input className=' outline-none w-[47%] mx-2 p-1 px-2 border border-purple-600 rounded-md' type="number" name="amount" id="amount" value={count} onChange={e=>setCount(e.target.value)} />
            <button className=' px-5 py-1 font-bold bg-purple-700 text-white rounded-md mx-2 hover:bg-purple-600' type="submit">Generate</button>
        </form>
        <div>
            {text.map((item,index)=>{
                return <p className=' text-lg italic font-medium m-3 p-5 bg-white' key={index}>{item}</p>
            })}
        </div>
    </section>
    </div>
    
  )
}

export default App
