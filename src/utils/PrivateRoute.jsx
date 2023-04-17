import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoute = () => {
    const [user, setUser] = useState(true)

    const location = useLocation()
  return (
    <div>
        {user ? <Outlet /> : <Navigate to={'/login'} state={{ from: location }} />}
    </div>
  )
}

export default PrivateRoute