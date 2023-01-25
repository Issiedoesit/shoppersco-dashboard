import React, { useState } from 'react'

const ButtonNoIcon = ({text, bgColor, paddingX, font, border, borderColor, textColor, fontSize}) => {

    const [first, setFirst] = useState('')

  return (
    <button type='button' className={`py-2 px-${paddingX} ${border} border-${borderColor} bg-${bgColor} hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five text-${textColor} font-${font} text-${fontSize}`}>{text}</button>
  )
}

export default ButtonNoIcon