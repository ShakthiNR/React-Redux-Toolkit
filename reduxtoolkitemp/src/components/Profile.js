import React from 'react'
import {useSelector} from 'react-redux'

//UseSelector - used to select the state
//state.user --> user is name of slice
const Profile = () => {
    const user = useSelector((state)=>state.user.value) //user - reducerName which set in index.js nd value - initialState
    const themeColor = useSelector((state)=>state.theme.value)
  return (
    
    <div style={{color:themeColor}}>
       
    <h1>Profile Page </h1> 
    <p>Name: {user.name}</p>
    <p>Age: {user.age} </p>
    <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile