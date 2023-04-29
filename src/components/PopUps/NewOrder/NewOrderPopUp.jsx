import React from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import NewOrderPopUpInner from './NewOrderPopUpInner'

const NewOrderPopUp = ({isModalOpen, closeModal}) => {


  return (
    <PopUpWrap id={'newOrderPopUp'} paddingY={'py-10'} closeModal={closeModal} modalState={isModalOpen} >
        <NewOrderPopUpInner />
    </PopUpWrap>
  )
}

export default NewOrderPopUp