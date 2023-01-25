import React from 'react'
import avatar from './../../assets/images/avatars/avatar-1.png'

const Header = ({page}) => {
  return (
    <div className='bg-brandGray28x w-full py-7 sticky top-0 right-10'>
        <div className='rounded-ten py-3.5 px-8 bg-white flex flex-row w-full items-center justify-between'>
            <h1 className='font-avenirHeavy text-xl'>{page}</h1>
            <div className='flex flex-row items-center font-avenirHeavy gap-3 w-fit'>
                <img src={avatar} alt="avatar" className='h-10 w-10'/>
                <h2>Etia Nwaenang</h2>
                <button type='button'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.28 5.96655L8.93333 10.3132C8.42 10.8266 7.58 10.8266 7.06667 10.3132L2.72 5.96655" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className="hidden">Dropdown</p>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Header