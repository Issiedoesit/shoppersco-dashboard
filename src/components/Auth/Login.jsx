import React, { useLayoutEffect, useState } from 'react'
import AuthForm from './AuthForm'
import useIsAuthPage from '../../customHooks/Stores/useIsAuthPage'



const Login = () => {
  const setAuthPage = useIsAuthPage(state => state.setIsAuthPage)
  const [authPageType] = useState('login')

  const handleAuth = () =>{
    setAuthPage()
  }

  useLayoutEffect(() => {
    handleAuth()
  }, [])
  

  return (
    <div className='col-span-12 flex py-20 md:py-0 md:grid grid-cols-12 min-h-screen'>
        <AuthForm authHeaderText={'Welcome back!'} authPageType={authPageType} />
        <section className="absolute md:static top-0 left-0 login--img--sect col-span-4 lg:col-span-7 xl:col-span-8 h-full">
            <img src="src/assets/images/pngs/loginImg.png" alt="hand with oranges" className='object-cover min-h-screen h-full' />
        </section>
    </div>
  )
}

export default Login