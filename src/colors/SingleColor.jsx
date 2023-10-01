import React, { useEffect, useState } from 'react'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue =`#${hexColor}`

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
  },[alert])
  return (
    <div
     onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
     }}
     className={` w-44 h-28 shadow-inner font-bold p-5 ${index >12 && 'text-white'}`} style={{backgroundColor:`rgb(${bcg})`}}>
      <p className=''>{weight}</p>
      <p className=''>{hexValue}</p>
       {alert && <small>copied to clipboard</small>}
    </div>
  )
}

export default SingleColor
