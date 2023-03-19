import React, { useLayoutEffect, useRef, useState } from 'react'
import AuthForm from './AuthForm'
import useIsAuthPage from '../../customHooks/Stores/useIsAuthPage'
import $ from 'jquery'



const SignUp = () => {

    const setAuthPage = useIsAuthPage(state => state.setIsAuthPage)
    const [authPageType] = useState('signup')
    const containerRef = useRef(null)

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
        <AuthForm authHeaderText={'Create your ShoppersBag account'} authPageType={authPageType} />
        <section ref={containerRef} className="absolute md:relative top-0 left-0 login--img--sect col-span-4 lg:col-span-7 xl:col-span-8 h-full">
            <img src="src/assets/images/pngs/signUpImg.png" alt="hand with oranges" onLoad={handleSkeleton} className='object-cover skeleton min-h-screen h-full' />
            <div className='absolute top-0 left-0 w-full h-full bg-white/20'></div>
            <div id='auto_radius' className='flex justify-center font-avenirLight overflow-hidden w-full absolute top-8 sm:top-5 md:top-auto md:bottom-60 left-0 text-brandGray41x'>
                <div className='items-center gap-4 mx-auto hidden lg:flex text-center'>
                    <h1 className='text-[4vw] xl:text-[5vw] '>REDUCE</h1>
                    <div className='p-1 sm:p-2 rounded-fiftyPercent  border-2 border-brandGray41x'></div>
                    <h1 className='text-[4vw] xl:text-[5vw] '>REUSE</h1>
                    <div className='p-1 sm:p-2 rounded-fiftyPercent  border-2 border-brandGray41x'></div>
                    <h1 className='text-[4vw] xl:text-[5vw] '>RECYCLE</h1>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SignUp