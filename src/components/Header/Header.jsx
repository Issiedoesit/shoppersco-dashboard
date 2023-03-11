import React, { useEffect, useRef } from 'react'
import useMobileNav from '../../customHooks/Stores/useMobileNav'
import avatar from './../../assets/images/avatars/avatar-1.png'
import $ from 'jquery';
import { NavLink } from 'react-router-dom';


const Header = ({page, logo}) => {
  const navState = useMobileNav(state => state.showMobileNav)
  const toggleNav = useMobileNav(state => state.toggleMobileNav)
  const menuRef = useRef('')

  const closeNav = useMobileNav(state => state.closeMobileNav)


  const handleNav = () =>{
    toggleNav()
  }

  const handleClickOutside = (e) => {
    if(!(navState || ($(e.target).closest('#menu').length > 0))){
        closeNav()
    }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
  }, []);

  return (
    <div className='bg-brandGray28x mx-auto flex gap-2 items-center xl:block w-full pt-7 pb-3.5 sticky top-0 right-10 z-30'>
        <div className='rounded-ten py-3.5 xs:px-2 px-4 md:px-8 bg-white flex flex-row w-full items-center justify-between'>
            {page && 
              <h1 className='font-avenirHeavy xs:text-sm sm:text-lg md:text-xl uppercase'>{page}</h1>
            }
            {logo && 
              <NavLink to="/">
                <img src={logo} alt='logo' className='w-40' />
              </NavLink>
            }
            
            {/* user details */}
           <div className='flex items-center gap-4'>
           <NavLink to='/profile' className='flex flex-row items-center font-avenirHeavy gap-3 w-fit'>
                <img src={avatar} alt="avatar" className='xs:h-7 xs:w-7 h-10 w-10'/>
                <div className='hidden sm:flex items-center gap-3'>
                  <h2>Etia Nwaenang</h2>
                </div>
            </NavLink>

            {/* nav control */}

            <button ref={menuRef} id='menu' onClick={handleNav} className={ `h-full ${navState && ''} transition-all duration-300 space-y-1 xl:hidden group`}>
              <div className={`bg-brandBlack1x xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten group-hover:bg-brandGreen4x ${navState ? 'rotate-45 origin-center xs:translate-y-0.75 translate-y-[3.5px]' : ''} transition-all duration-300 ease-in-out`}></div>
              <div className={`bg-brandBlack1x xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten  ${navState ? 'hidden transition-all duration-100 ease-in-out' : 'transition-all duration-300 ease-in-out group-hover:bg-brandGreen4x'}`}></div>
              <div className={`bg-brandBlack1x xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten group-hover:bg-brandGreen4x ${navState ? '-rotate-45 origin-center  xs:-translate-y-0.75 -translate-y-[3.5px]' : ''} transition-all duration-300 ease-in-out`}></div>
              <p className="hidden">Menu</p>
            </button>
           </div>

        </div>

       

       

    </div>
  )
}

export default Header