import { useEffect, useState } from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa'
function App() {  
  const role = [
    {
      id:1,
      title:'full stack developer',
      order:'1',
      date:'Dec 2015 - now',
      company:'amazon',
      duties:['react is a library used for front end development it is a single page appliction react is a library used for front end development',
            ' adipisicing elit. Et ut maiores ea sint obcaecati hhhhh Lorem ipsum dolor sit amet, consectetur nostrum ipsum inventore harum aut nam.',
            'reprehenderit distinctio temporibus iure debitis accusamus ipsum natus dolor! Ad, alias blanditiis. Necessitatibus, quaerat?'
        ]
    },
    {
      id:2,
      title:'back end developer',
      order:'2',
      date:'Jun 2017 - now',
      company:'meta',
      duties:['react is a library used for front end development it is a single page appliction react is a library used for front end development',
            'Lorem ipsum dolor sit amet, consectetur adipisicing hhhhh Lorem ipsum dolor sit amet, consectem ipsum inventore harum aut nam.',
            ' ipsum dolor sit amet, consectetur temporibus iure debitis accusamus ipsum natus dolor! Ad, alias blanditiis. Necessitatibus, quaerat?'
        ]
    },   
    {
      id:3,
      title:'front end developer',
      order:'3',
      date:'Aug 2021 - now',
      company:'google',
      duties:['react is a library used for front end development it is a single page appliction react is a library used for front end development',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ut maiores ea sint obcaecati nostrum ipsum inventore harum aut nam.',
            ' voluptate maiores reprehenderit distinctio temporibus iure debitis accusamus ipsum natus dolor! Ad, alias blanditiis. Necessitatibus, quaerat?'
        ]
    },      
  ]
 const [load,setLoad] = useState(true)
 const [jobs,setjobs] = useState([])
 const [value,setValue] = useState(0)

 const fatchjobs =()=>{
  setjobs(role)
  setLoad(false)
 }

 useEffect(()=>{
  fatchjobs()
 },[])

 if(load){
  return(
    <section>
      <h1>loading...</h1>
    </section>
  )
 }
const {title,duties,company,date} = jobs[value]
 return (
    <main className=' flex justify-center items-center h-[570px]'>
      <section className='ml-5 bg-white p-8'>
        <div className=' my-5'>
          <h2 className=' font-bold text-2xl text-center my-2'>Experience</h2>
          <div className=' h-[2px] bg-cyan-500 w-20 mx-auto'></div>
        </div>
        <div className='lg:flex'>
          <div className=' my-2 lg:block lg:w-36 lg:mx-16 flex justify-center items-center '>
            {jobs.map((item,index)=>{
              return <button key={item.id}
              className={`font-bold py-1 outline-none mx-4 uppercase lg:pl-7 ${index === value && 'text-cyan-500 border-b-2 lg:border-b-white lg:border-l-2 border-cyan-500'}`}
              onClick={()=>setValue(index)}>{item.company}</button>
            })}
          </div>
          <article className=' w-[450px] lg:w-[600px]'>
            <h3 className=' capitalize font-medium text-lg'>{title}</h3>
            <h4 className=' py-1 bg-gray-300 w-20 text-center rounded-md my-1 uppercase text-sm font-medium'>{company}</h4>
            <p className=' text-sm font-medium text-gray-500 my-1'>{date}</p>
            {duties.map((duty,index)=>{
              return <div key={index} className=' flex items-center my-3'>
                <FaAngleDoubleRight className=' text-cyan-500 mr-3 text-2xl'/>
                <p className=' text-sm font-serif italic'>{duty}</p>
              </div>
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
