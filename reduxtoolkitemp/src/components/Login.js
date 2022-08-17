import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from "../features/user"
/*
Both are hooks
useSelector - used to access the state
useDispatch - used to manage/update the state
*/
const Login = () => {
    const dispatch = useDispatch()
    const values = {name:"shakthi",age:"98",email:"s@g.in"}
    const handleClick = ()=>{
        dispatch(login(values)) //values are the payLoad and login is the action(fn)
        //or dispatch(login({name:"shakthi",age:"98",email:"s@g.in"}))
    }
  return (
    <>
    <button onClick={handleClick}>Login</button>
    </>
  )
}

export default Login