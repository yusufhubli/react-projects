import { useState } from 'react';

import SingleQuestion from './SingleQuestion';


function App() {  
  const data = [
    {
      id:1,
      title:'what is react',
      info:'react is a library used for front end development it is a single page appliction react is a library used for front end development it is a single page appliction'
    },
    {
      id:2,
      title:'what is angular',
      info:'angular is a library used for front end development it is a single page appliction react is a library used for front end development it is a single page appliction'
    },
    {
      id:1,
      title:'what is javascript',
      info:'javascript is a programming language used in web development it is a single page appliction react is a library used for front end development it is a single page appliction'
    },
    {
      id:1,
      title:'what is HTML',
      info:'HTML is a hypertext markup language used for creating structures for web pages react is a library used for front end development it is a single page appliction'
    },
    {
      id:1,
      title:'what is Tailwindcss',
      info:'tailwindcss is a design framework which is used for design the web pages react is a library used for front end development it is a single page appliction'
    },
  ]
  const [question,setQuestion] = useState(data)
  return (
    <div className="flex justify-center ">
     
      <section className=' mx-auto'>
      <h3 className=' text-2xl font-bold my-4 text-center'>Question and Answers</h3>
        {question.map(qus=>{
          return <SingleQuestion key={qus.id} {...qus}/>
        })}
      </section>
    </div>
  );
}

export default App;
