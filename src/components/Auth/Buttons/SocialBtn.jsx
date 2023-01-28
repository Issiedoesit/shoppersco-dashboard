import React from 'react'

const GoogleBtn = ({ text, imgSrc, type, bgColor, textColor, id, handleClick, font }) => {
  return (
    <button type='button' onClick={handleClick} id={id} key={id} className={`${bgColor ? bgColor : 'bg-brandGray28x'} hover:shadow-md text-sm sm:text-base ${font ? font :'font-avenirMedium'} rounded-thirty w-full h-fit mx-auto px-8 md:px-10 flex flex-row items-center gap-2 py-4 md:py-5 ${textColor ? textColor : ''}`}>
        <img src={imgSrc} alt={type} />
        <p className='text-center w-full'>{text}</p>
    </button>
  )
}

export default GoogleBtn