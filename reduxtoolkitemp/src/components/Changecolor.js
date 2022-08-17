import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme' //-- it is action from theme slice


const Changecolor = () => {
    //this state is locally availabe
    const [color,setColor] = useState("")
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(changeColor(color))
    }
  return (
    <>
   
    <input type="text" onChange={(e)=>setColor(e.target.value)} />
    <button onClick={handleClick}>Change Color</button>
    </>
  )
}

export default Changecolor