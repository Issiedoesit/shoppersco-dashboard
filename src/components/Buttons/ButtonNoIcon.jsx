import React, { useState } from 'react'

const ButtonNoIcon = ({text, handleClick, bgColor, paddingX, font, border, borderColor, textColor, fontSize}) => {

    const [first, setFirst] = useState('')

  return (
    <button onClick={handleClick} type='button' className={`py-2 ${paddingX} ${border} ${borderColor} ${bgColor} hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five ${textColor} ${font} ${fontSize}`}>{text}</button>
  )
}

export default ButtonNoIcon