import React, { useState } from 'react'
import formatDateMonthText from '../../../utils/Dates/FormatDateMonthText'
import PopUpWrap from '../Wraps/PopUpWrap'
import InnerPopPrRequest from './InnerPopPrRequest'


const PrRequestPop = ({modalState, allRequests, closeModal, modalData, dataLength, currentIndex, setCurrentIndex, moveToModal}) => {
   

  return (
    <PopUpWrap id={'PrRequestPopUp'} modalState={modalState} closeModal={closeModal}>
        {modalData && modalData.map((data, index)=>{
            const partner = data.partner
            const producer = data.producer
            return <InnerPopPrRequest id={data.id} index={currentIndex} setCurrentIndex={setCurrentIndex} allRequests={allRequests} moveToModal={moveToModal} dataLength={dataLength} key={'prModalDetail'+index} user={partner.name} address={producer.address} handleNext={()=>handleNext(index)} handlePrev={()=>handlePrev(index)} state={producer.state} avatar={data.logoUrl ? data.logoUrl : data.coverImageUrl} fullName={data.fullName} bagType={data.bagType} phoneNo={data.phone} agentName={data.agentName} email={producer.email} deliveryDate={data.deliveryDate} orderDate={formatDateMonthText(data.createdAt)} contactInfo={data.contactInfo} orderQuantity={data.quantity} availableProducers={data.availableProducers} />
        })}
    </PopUpWrap>
  )
}

export default PrRequestPop