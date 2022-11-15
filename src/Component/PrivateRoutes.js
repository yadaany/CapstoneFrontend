import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedin } from './Auth'

const PrivateRoutes = ({}) => {


  return isLoggedin()?<Outlet />:<Navigate to="/" />
        
     
  
}

export default PrivateRoutes