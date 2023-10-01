import List from './List';
import { useState } from 'react';

function App() {
  const data =[
    {
      id:1,
      name:'Tom Holland',
      age:20,
      image:'logo192.png'
    },
    {
      id:2,
      name:'Will Smith',
      age:27,
      image:'logo192.png'
    },
    {
      id:3,
      name:'Hester Hogan',
      age:23,
      image:'logo192.png'
    },
    {
      id:4,
      name:'Bertie Yates',
      age:33,
      image:'logo192.png'
    },
    {
      id:5,
      name:'Larry Little',
      age:22,
      image:'logo192.png'
    },
  ]
  const [people,setPeople] = useState(data)
  return (
    <div className=" text-center">
      <h1>Reminder Project</h1>
      <section>
        <h3>{people.length} birthdays Today</h3>
        <div className=' flex justify-center'>
        <List people={people}/>
        </div>
        <button onClick={()=>setPeople([])} className=' font-bold py-1 px-5 text-white bg-black rounded '> Clear all</button>
      </section>
    </div>
  );
}

export default App;
