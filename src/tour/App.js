
import { useEffect, useState } from 'react';
import Tours from './Tours';

function App() {
  const tourist =[
    {
      id:1,
      name:'Matharaja Hotel',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:'tour/t1.jpeg',
      price:'2,999'
    },
    {
      id:2,
      name:'woodland Hotel',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:'tour/t2.jpeg',
      price:'1,995'
    },
    {
      id:3,
      name:'Rome Hotel ',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:'tour/t3.jpeg',
      price:'2,095'
    },
    {
      id:4,
      name:'hfhffhfjjffkkfjfj',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:"tour/t4.jpeg",
      price:'1,995'
    },
    {
      id:5,
      name:'Violet Hotel',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:'tour/t5.jpeg',
      price:'1,995'
    },
    {
      id:6,
      name:'Roeffs Duhnwku',
      info:'hellp world Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate? Blanditiis sapiente id necessitatibus adipisci, ex numquam odit optio velit dolorum laudantium assumenda nulla quo, in quas accusamus corrupti reiciendis! Quidem recusandae quaerat reiciendis saepe, numquam magnam cupiditate libero similique laborum placeat error odio, nam magni atque. Quod, tempore architecto excepturi neque dolore totam dolor repellendus beatae, dicta sapiente velit voluptatem nostrum eius non. Beatae incidunt quaerat architecto iure. Ad, facilis animi nam eos accusantium dicta nostrum provident mollitia consequatur doloremque, perferendis aliquam nobis, assumenda cum possimus nesciunt expedita dolores inventore a culpa! Quisquam perferendis magnam, architecto molestias accusamus amet?',
      image:'tour/t6.jpeg',
      price:'1,595'
    },
  ]
  const [loading,setLoading] = useState(true)
  const [tour,setTour] = useState([])
 
  const removeTour = (id) =>{
    const newtour = tour.filter(tour=>tour.id !== id)
    setTour(newtour)
  }

  const fetchTour = () =>{
    try {
      setLoading(false)
      setTour(tourist)  
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchTour()
  },[])
 
  if(loading){
    return(
      <div>
        Loading...
      </div>
    )
  }

  if(tour.length === 0){
    return(
      <main>
        <div className=' my-16 text-center'>
          <h2 className=' font-medium text-xl text-center'>No Tours left</h2>
          <button className=' px-10 py-1 rounded bg-emerald-400 font-bold my-3 capitalize' onClick={()=>fetchTour()}>refresh</button>
        </div>
      </main>
    )
  } 
  return (
    <div className="App ">
      <Tours tours={tour} removeTour={removeTour}/>
    </div>
  );
}

export default App;
