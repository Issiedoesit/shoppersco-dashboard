import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useMobileNav from '../../customHooks/Stores/useMobileNav'
import Logo from './../../assets/images/logos/logo.png'
import NavData from '../../data/Nav/NavData'




const NavBar = ({ isAuthPage, userType }) => {
  const navState = useMobileNav(state => state.showMobileNav)
  const [visibility, setVisibility] = useState(true)
  const navRef = useRef()

  const { typedNavData } = NavData(userType)
  // console.log( typedNavData )


  useLayoutEffect(() => {
    setVisibility(isAuthPage)
  }, [isAuthPage])

 

  return (
    <div ref={navRef} id="navBar" className={`fixed top-0 ${visibility && 'hidden'} h-full xl:h-screen left-0 z-50 ${navState ? '' : '-translate-x-oneFiftyPercent'} shadow-md xl:shadow-none xl:-translate-x-0 transition-transform duration-500 ease-in-out xl:static lg:col-span-3 2xl:col-span-2 xs:max-w-171px w-64`}>
      <div  className='transition-transform duration-500 ease-in-out bg-white h-full max-h-screen font-avenirRegular max-w-sm flex flex-col w-full'>
          <NavLink to="/" className='xs:px-4 px-9 pt-10'>
            <img src={Logo} alt='logo' className='xs:w-32 w-44' />
          </NavLink>
          <div className='h-full flex flex-col justify-between pb-5 xs:pt-5 pt-10 overflow-y-auto xs:text-xs'>

            <div className='flex flex-col gap-5 h-fit xs:pt-5 pt-10 xs:px-2 px-4 overflow-y-auto'>
                {typedNavData.map((data, idx)=>
                    <NavLink key={idx} exact end={data.end && 'true'} to={data.link} className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                      {data.icon}
                      <p className='whitespace-nowrap'>{data.pageName}</p>
                    </NavLink>
                )}
            </div>

          </div>

          <div className='bg-brandLightRed1x text-brandRed1x xs:pl-4 pl-16 pr-9 2xl:pl-12 xs:py-2 py-5 justify-self-end'>
            <NavLink to="/logout" className="flex flex-row gap-10 items-center">
              <p>Logout</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M17.4395 14.62L19.9995 12.06L17.4395 9.5" stroke="#FF3A44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.75977 12.0596H19.9298" stroke="#FF3A44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke="#FF3A44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default NavBar