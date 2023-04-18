import React, { useState } from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import InnerOrderPopUp from './InnerOrderPopUp'


const OrderPopUp = ({modalState, allRequests, closeModal, modalData, dataLength, currentIndex, setCurrentIndex, moveToModal}) => {
   
  return (
    <PopUpWrap id={'OrderPopUpUp'} modalState={modalState} closeModal={closeModal}>
        {modalData && modalData.map((data, index)=>{
            return <InnerOrderPopUp id={data.id} index={currentIndex} setCurrentIndex={setCurrentIndex} allRequests={allRequests} moveToModal={moveToModal} dataLength={dataLength} key={'prModalDetail'+index} user={data.name} address={data.address} handleNext={()=>handleNext(index)} handlePrev={()=>handlePrev(index)} state={data.state} avatar={data.logoUrl ? data.logoUrl : data.coverImageUrl} orderRequest={data.orderRequest} orderDateTime={data.orderDateTime} orderStatus={data.orderStatus} orderQuantity={data.orderQuantity} email={data.email} deliveryDate={data.deliveryDate} contactPerson={data.contactPerson} contactInfo={data.contactInfo} />
        })}
    </PopUpWrap>
  )
}

export default OrderPopUp