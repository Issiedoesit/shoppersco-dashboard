import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LinkNoIcon = ({text, link, bgColor, paddingX, font, border, borderColor, textColor, fontSize}) => {

    const [first, setFirst] = useState('')

  return (
    <NavLink to={link || '#'} className={`py-2 ${paddingX} ${border} ${borderColor} ${bgColor} hover:shadow-md transition-shadow duration-500 ease-in-out rounded-five ${textColor} ${font} ${fontSize}`}>{text}</NavLink>
  )
}

export default LinkNoIcon