import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useMobileNav from '../../customHooks/Stores/useMobileNav'
import Logo from './../../assets/images/logos/logo.png'



const UserNavBar = ({ isAuthPage }) => {
  const navState = useMobileNav(state => state.showMobileNav)
  const [visibility, setVisibility] = useState(true)
  const navRef = useRef()

  


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
                <NavLink exact end={true} to='/' className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M9 13.4924V11.2424" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className='whitespace-nowrap'>Home</p>
                </NavLink>
                <NavLink exact to='/community' className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x xs:px-2 px-6 py-sixPixel flex flex-row gap-tenPixel items-center' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M15.4416 16.5C15.4416 13.5975 12.5541 11.25 8.99914 11.25C5.44414 11.25 2.55664 13.5975 2.55664 16.5" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <p className='whitespace-nowrap'>Community</p>

                </NavLink>
                <NavLink exact to='/activities' className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x xs:px-2 px-6 py-sixPixel flex flex-row gap-tenPixel items-center' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M9.27734 6.66016H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M4.78516 6.66016L5.34766 7.22266L7.03516 5.53516" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M9.27734 11.9102H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M4.78516 11.9102L5.34766 12.4727L7.03516 10.7852" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <p className='whitespace-nowrap'>Activities</p>
                  </NavLink>
                <NavLink exact to='/store'  className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x xs:px-2 px-6 py-sixPixel flex flex-row gap-tenPixel items-center' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.37406 16.5003H3.05906C2.18906 16.5003 1.47656 15.8028 1.47656 14.9478V3.81776C1.47656 1.85276 2.93906 0.960262 4.73156 1.83776L8.06156 3.47276C8.78156 3.82526 9.37406 4.76276 9.37406 5.55776V16.5003Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4775 11.2954V14.1304C16.4775 15.7504 15.7275 16.5004 14.1075 16.5004H9.375V7.81543L9.7275 7.89043L13.1025 8.64793L14.625 8.98543C15.615 9.20293 16.425 9.71293 16.47 11.1529C16.4775 11.1979 16.4775 11.2429 16.4775 11.2954Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M4.125 6.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M4.125 9.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.1016 8.64764V11.0626C13.1016 11.9926 12.3441 12.7501 11.4141 12.7501C10.4841 12.7501 9.72656 11.9926 9.72656 11.0626V7.89014L13.1016 8.64764Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4691 11.1529C16.4241 12.0379 15.6891 12.7504 14.7891 12.7504C13.8591 12.7504 13.1016 11.9929 13.1016 11.0629V8.64795L14.6241 8.98545C15.6141 9.20295 16.4241 9.71295 16.4691 11.1529Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <p className='whitespace-nowrap'>Store</p>
                </NavLink>
                <NavLink exact to='/inventory'  className={({isActive}) =>(isActive ? 'font-avenirBlack text-brandGreen4x active--icon bg-brandGray15x xs:px-2 px-6 py-sixPixel flex flex-row gap-tenPixel items-center' : 'font-satoshi-regular hover:text-brandGreen4x/80 hover:bg-brandGray15x/80 not--active--icon flex flex-row gap-tenPixel items-center xs:px-2 px-6 py-sixPixel text-brandGray27x transition ease-in-out duration-400')}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.34" d="M9.11328 12.375V13.95" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.36328 16.5H12.8633V15.75C12.8633 14.925 12.1883 14.25 11.3633 14.25H6.86328C6.03828 14.25 5.36328 14.925 5.36328 15.75V16.5V16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M4.61328 16.5H13.6133" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12C6.0975 12 3.75 9.6525 3.75 6.75V4.5C3.75 2.8425 5.0925 1.5 6.75 1.5H11.25C12.9075 1.5 14.25 2.8425 14.25 4.5V6.75C14.25 9.6525 11.9025 12 9 12Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M4.1018 8.7377C3.5393 8.5577 3.0443 8.2277 2.6543 7.8377C1.9793 7.0877 1.5293 6.1877 1.5293 5.1377C1.5293 4.0877 2.3543 3.2627 3.4043 3.2627H3.8918C3.7418 3.6077 3.6668 3.9902 3.6668 4.3877V6.6377C3.6668 7.3877 3.8243 8.0927 4.1018 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M13.8984 8.7377C14.4609 8.5577 14.9559 8.2277 15.3459 7.8377C16.0209 7.0877 16.4709 6.1877 16.4709 5.1377C16.4709 4.0877 15.6459 3.2627 14.5959 3.2627H14.1084C14.2584 3.6077 14.3334 3.9902 14.3334 4.3877V6.6377C14.3334 7.3877 14.1759 8.0927 13.8984 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <p className='whitespace-nowrap'>Inventory</p>
                  </NavLink>

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

export default UserNavBar