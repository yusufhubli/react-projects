import List from './List';
import { useState } from 'react';

function App() {
  const data =[
    {
      id:1,
      name:'Tom Holland',
      age:20,
      image:'profile/p1.jpg'
    },
    {
      id:2,
      name:'Will Smith',
      age:27,
      image:'profile/p2.jpg'
    },
    {
      id:3,
      name:'Hester Hogan',
      age:23,
      image:'profile/p3.jpg'
    },
    {
      id:4,
      name:'Bertie Yates',
      age:33,
      image:'profile/p4.jpg'
    },
    {
      id:5,
      name:'Larry Little',
      age:22,
      image:'profile/p5.jpg'
    },
  ]
  const [people,setPeople] = useState(data)
  return (
    <div className=" text-center h-[562px]  bg-lime-300">
      <section>
        <h3 className=' font-bold uppercase py-4'>{people.length} birthdays Today</h3>
        <div className=' flex justify-center'>
        <List people={people}/>
        </div>
        <button onClick={()=>setPeople([])} className=' font-bold py-1 px-5 text-white bg-black rounded '> Clear all</button>
      </section>
    </div>
  );
}

export default App;
