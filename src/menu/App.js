import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';



function App() {  
  const menus = [
    {
      id:1,
      title:'franch frey',
      category:'lunch',
      price:15.99,
      img:'menuimg/p1.jpeg',
      info:'Lorem ipsum dolor sit amet consecte adipisicing elit. Saepe praes entiuium, qui perferendis veroon inner prasses consequatur'
    },
    {
      id:2,
      title:'pasta double',
      category:'breakfast',
      price:13.99,
      img:'menuimg/p2.jpeg',
      info:'Lorem ipsum dolor sit amet consecte adipisicing elit. Saepe praes entiuium, qui perferendis veroon inner prasses consequatur'
    },
    {
      id:3,
      title:'pan cake',
      category:'breakfast',
      price:25.99,
      img:'menuimg/p3.jpeg',
      info:'Lorem ipsum dolor sit amet consecte adipisicing elit. Saepe praes entiuium, qui perferendis veroon inner prasses consequatur'
    },
    {
      id:4,
      title:'manchurian with chilli',
      category:'lunch',
      price:10.99,
      img:'menuimg/p4.jpeg',
      info:'Lorem ipsum dolor sit amet consecte adipisicing elit. Saepe praes entiuium, qui perferendis veroon inner prasses consequatur'
    },
    {
      id:5,
      title:'noddles night',
      category:'dinner',
      price:16.99,
      img:'menuimg/p5.jpeg',
      info:'Lorem ipsum dolor sit amet consecte adipisicing elit. Saepe praes entiuium, qui perferendis veroon inner prasses consequatur'
    },
    {
      id:6,
      title:'pasta & chicken',
      category:'dinner',
      price:19.99,
      img:'menuimg/p7.jpeg',
      info:'react is a library used for front end development it is a single page appliction react is a library used for front end development'
    },
   
  ]
  const allCategories = ['all',...new Set(menus.map(item=>item.category))]
  const [menuItem,setMenuItem] =useState(menus)
  const [categories,setCatagory] = useState(allCategories)

  const filterItem = (category) => {
    if(category === 'all'){
      setMenuItem(menus)
      return
    }
    const newItem = menus.filter(item=>item.category === category)
    setMenuItem(newItem)
  }
  return (
    <main className=' flex justify-center'>
      <section>
        <div className=' text-center'>
          <h1 className=' font-bold my-5 text-2xl'>Our Menu</h1>
          
        </div>
        <Categories categories={categories} filterItem={filterItem}/>
        <Menu items={menuItem}/>
      </section>
    </main>
  );
}

export default App;
