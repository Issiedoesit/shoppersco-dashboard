import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TemplatePage from './Template'
import Logo from '../assets/images/logos/logo.png'
import useIsAuthPage from '../customHooks/Stores/useIsAuthPage'

const NoMatchPage = ({networkState}) => {

  const isAuthPage = useIsAuthPage(state => state.isAuthPage)
  const setAuthPage = useIsAuthPage(state => state.setIsAuthPage)
  const changeIsAuthPage = useIsAuthPage(state => state.changeIsAuthPage)

  const handleAuth = () =>{
    setAuthPage()
  }

  useLayoutEffect(() => {
    handleAuth()
  
    return () => {
      changeIsAuthPage()
    };
  }, [])
  

  
  return (
    <TemplatePage headerLogo={Logo}>
        <div className='m-auto py-40 flex flex-col items-center justify-center'>
           <h2 className='text-9xl font-avenirBlack'>404</h2>
           <p className='text-30 py-5'>Almost :(</p>
           <NavLink type='button' className={`py-2 px-5 sm:px-8 lg:px-12 bg-brandGreen4x hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five text-white font-avenirMedium text-base`}>Return to home page</NavLink>
           {/* {networkState && <div>No Network</div>} */}
        </div>
    </TemplatePage>
  )
}

export default NoMatchPage