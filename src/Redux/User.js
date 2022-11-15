import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name: 'user',
    initialState: {
        value:{
            username: '',
            password: '',
            name:'',
            selectTenure:'',
            emi:'',
            emi2:'',
            emi3:'',
            message: '',
            token:''

        }
    },
    reducers:{
        login: (state, action)=>{
            state.value = action.payload
        }

    }
})
export const {login}= userSlice.actions
export default userSlice.reducer