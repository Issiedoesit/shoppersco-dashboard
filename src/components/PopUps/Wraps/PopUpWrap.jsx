import React, { useEffect } from 'react'

const PopUpWrap = ({id, children, modalStoreState, handleModal}) => {

    useEffect(() => {
      const body = document.querySelector('body');
      const scrollPosition = window.pageYOffset;
      if (modalStoreState) {
        body.style.overflow = 'hidden';
        body.style.height = '100vh';
      } else {
        body.style.overflow = '';
        body.style.height = '';
      }
      window.scrollTo(0, scrollPosition);
    }, [modalStoreState]);

    
  return (
    <div id={id} className={`z-50 ${modalStoreState ? 'flex' : 'hidden'} modal flex-col fixed top-0 col-span-12 left-0 w-full h-screen backdrop-blur-sm bg-black/30 py-20 overflow-y-auto items-center z-50`}>
        <div onClick={handleModal} className='overlay cursor-pointer pop-up-closer w-full h-full z-20 fixed top-0 left-0 '></div>
        {children}
    </div>
  )
}

export default PopUpWrap