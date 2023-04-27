import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import UseAuth from './UseAuth'

const PrivateRoute = () => {

    const {token} = UseAuth()


    const location = useLocation()
    


  return (
    <div>
        {token ? <Outlet /> : <Navigate to={'/login'} state={{ from: location }} />}
    </div>
  )
}

export default PrivateRoute