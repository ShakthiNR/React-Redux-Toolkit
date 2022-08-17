import { createSlice } from "@reduxjs/toolkit"

/* 
1. user is the name of the slice
2. it can have initialState
3. it have actions(function) -  login,logout,profile to update the state using reducers
4. In reducers function have state,action parameter
            a. state - hold current initialstate\
            b. action - have payload to update the state 
5. 1 state can have 1 createSlice and 1 intialValues with n actions(fn) to update the state
            
*/

const initialStateValue = {name:"",age:"0",email:""}
export const userSlice = createSlice({
        name:"user",
        initialState: { value: initialStateValue }, // value is object
        reducers:{
            login : (state,action)=>{
                state.value = action.payload; // update value with payload
            },
            logout: (state,action)=>{
                state.value = initialStateValue
            }
          

        }
})

//inside everySlice we have reducers - export that.. then import it on index.js
// export the actions
export default userSlice.reducer 
export const {login,logout} = userSlice.actions 