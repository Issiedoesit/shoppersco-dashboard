import React from 'react'
import { NavLink } from 'react-router-dom'
import TemplatePage from '../../../Template'

const FetchErrorPage = ({id, message}) => {
  return (
    <TemplatePage>
        <div id={id} className='m-auto min-h-screen py-40 flex flex-col items-center justify-center'>
            <h2 className='text-9xl font-avenirBlack'>404</h2>
            <p className='text-30 py-5'>Almost :(</p>
            <NavLink to={''} className={`py-2 px-5 sm:px-8 lg:px-12 bg-brandGreen4x hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five text-white font-avenirMedium text-base`}>{message || 'Tried refreshing?'}</NavLink>
            {/* {networkState && <div>No Network</div>} */}
        </div>
    </TemplatePage>
  )
}

export default FetchErrorPage