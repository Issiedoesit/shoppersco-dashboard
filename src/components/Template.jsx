import React from 'react'
import Header from './Header/Header'


const TemplatePage = () => {
  return (
    <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
      <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Template"/>
        <div className='pb-10 overflow-y-auto pt-3.5'>

              {/* Main content here */}

        </div>
      </div>
    </div>
  )
}

export default TemplatePage