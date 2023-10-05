import React, { useEffect, useState } from 'react'
import List from './List'
import Alert from './Alert'

const localstore = () =>{
  let item = localStorage.getItem('list')
  if(item){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

const App = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState(localstore())
  const [editing, setEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true,'danger' ,'please enter value')
    }
    else if (name && editing) {
      setList(list.map(item=>{
        if(item.id === editID){
          return{...item,title:name}
        }
        return item
      }))
      setName('')
      setEditID(null)
      setEditing(false)
      showAlert(true,'success','item update is successful')
    } else {
      showAlert(true,'success','item added to list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      console.log(list)
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = ()=>{
    showAlert(true,'danger','empty list')
    setList([])
  }

  const removeItem = (id)=>{
    showAlert(true,'danger','item removed')
    setList(list.filter(item=>item.id !== id))
  }

  const editItem = (id) =>{
    const item = list.find(itm=>itm.id === id)
    setEditing(true)
    setEditID(id)
    setName(item.title)

  }

  useEffect(()=>{
   localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return (
    <div className=' w-full flex justify-center'>
       <section className=' md:w-[800px] bg-white border border-blue-500 h-auto p-5 m-5'>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 className=' text-center font-bold text-xl my-3'>Todo List</h3>
        <div>
          <input type="text" className=' w-[68%] md:w-[80%] lg:w-[85%] outline-none py-1 px-2 border border-blue-600 m-2' 
          value={name} onChange={e => setName(e.target.value)} placeholder='eg:sam' />
          <button className=' px-2 md:px-5 py-1 bg-blue-500 text-white hover:bg-blue-600 ' type='submit'>
            {editing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className=' text-center'>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button onClick={clearList} className=' px-10 py-1 bg-blue-500 text-white hover:bg-blue-600'>Clear All</button>
        </div>
      )}
    </section>
    </div>
   
  )
}

export default App
