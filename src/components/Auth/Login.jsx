import React, { useLayoutEffect, useState } from 'react'
import AuthForm from './AuthForm'
import useIsAuthPage from '../../customHooks/Stores/useIsAuthPage'
import $ from 'jquery'


const Login = () => {
  const setAuthPage = useIsAuthPage(state => state.setIsAuthPage)
  const [authPageType] = useState('login')

  const handleAuth = () =>{
    setAuthPage()
  }

  useLayoutEffect(() => {
    handleAuth()
  }, [])

  const handleSkeleton = () => {
    $(this).removeClass('skeleton')
  }
  

  return (
    <div className='col-span-12 flex py-20 md:py-0 md:grid grid-cols-12 min-h-screen'>
        <AuthForm authHeaderText={'Welcome back to ShoppersBag!'} authPageType={authPageType} />
        <section className="absolute md:static top-0 left-0 login--img--sect col-span-4 lg:col-span-7 xl:col-span-8 h-full">
            <img src="src/assets/images/pngs/loginImg.png" alt="hand with oranges" onLoad={handleSkeleton}  className='object-cover skeleton min-h-screen h-full' />
        </section>
    </div>
  )
}

export default Login