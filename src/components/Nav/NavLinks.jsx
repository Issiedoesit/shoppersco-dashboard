import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = ({index, path, icon, title}) => {
  return (
    <NavLink id={'link'+index} exact end={true} to={path} className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x flex flex-row gap-tenPixel items-center px-6 py-sixPixel' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
        <img src={icon} alt="icon" />
        <p className='whitespace-nowrap'>{title}</p>
  </NavLink>
  )
  
}

export default NavLinks