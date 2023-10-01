import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {
    useEffect(()=>{
       const timeout = setTimeout(()=>{
        removeAlert()
       },3000)
       return ()=>clearTimeout(timeout)
    },[list])
  return (
    <div className={` text-xs py-1 text-center italic ${type === 'success' ? ' bg-green-100 text-green-700':' bg-red-100 text-red-700'}`}>
      <p>{msg}</p>
    </div>
  )
}

export default Alert
