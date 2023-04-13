import React from 'react'
import useIsAuthPage from '../customHooks/Stores/useIsAuthPage'
import Header from './Header/Header'


const TemplatePage = ({headerTitle, headerLogo, children, levelTwoRef, paddingBottom }) => {

  const isAuthPage = useIsAuthPage(state => state.isAuthPage)

  return (
    <div className={`${paddingBottom ? 'pb-7' : ''} h-screen overflow-hidden bg-brandGray28x`}>
      <div ref={levelTwoRef} className={`overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 ${isAuthPage || 'xl:pl-0 xl:pr-10'}`}>
        <Header page={headerTitle} logo={headerLogo} />
        <div className='pb-28 lg:pb-10 pt-3.5'>

              {/* Main content here */}
              {children}

        </div>
      </div>
    </div>
  )
}

export default TemplatePage