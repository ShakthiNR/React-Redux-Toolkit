import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Changecolor from './components/Changecolor'

//Login and Profile are components. They are siblings.
// App component is parent for login, profile
//Under parent(App) have two components(Login, Profile)--> As they are next to each other it is siblings


const App = () => {
  return (
    <div className='center'>
    <Login/>
    <Profile />
    <Logout />
    <Changecolor />
    </div>
  )
}

export default App