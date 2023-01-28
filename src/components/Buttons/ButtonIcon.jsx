import React, { useState } from 'react'

const ButtonIcon = ({text, bgColor, paddingX, font, fontSize, border, borderColor, textColor, flexDirection}) => {

    const [first, setFirst] = useState('')

  return (
    <button type='button' className={`py-2 w-fit ${paddingX} ${bgColor} rounded-five ${textColor} ${font} ${border} ${borderColor} hover:shadow-md transition-shadow duration-500 ease-in-out flex ${flexDirection} items-center gap-4 ${fontSize}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99992C14.6667 4.33325 11.6667 1.33325 8 1.33325C4.33333 1.33325 1.33333 4.33325 1.33333 7.99992C1.33333 11.6666 4.33333 14.6666 8 14.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.4">
            <path d="M5.33333 8H10.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 10.6666V5.33325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <p className='whitespace-nowrap'>{text}</p>
    </button>
  )
}

export default ButtonIcon