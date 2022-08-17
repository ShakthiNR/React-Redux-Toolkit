import React from 'react'
import {useDispatch} from "react-redux"
import { logout } from '../features/user'

const Logout = () => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(logout()) //logout is the action of user Slice
    }
  return (
    <>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Logout