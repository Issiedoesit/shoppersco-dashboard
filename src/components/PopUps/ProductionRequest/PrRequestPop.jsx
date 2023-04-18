import React, { useState } from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import InnerPopPrRequest from './InnerPopPrRequest'


const PrRequestPop = ({modalState, allRequests, closeModal, modalData, dataLength, currentIndex, setCurrentIndex, moveToModal}) => {
   
    const [ecoBagProducer, setEcoBagProducer] = useState(false)

  return (
    <PopUpWrap id={'PrRequestPopUp'} modalState={modalState} closeModal={closeModal}>
        {ecoBagProducer ? 
            <>
                {modalData && modalData.map((data, index)=>{
                    return <InnerPopPrRequest id={data.id} index={currentIndex} setCurrentIndex={setCurrentIndex} allRequests={allRequests} moveToModal={moveToModal} dataLength={dataLength} key={'prModalDetail'+index} user={data.name} address={data.address} handleNext={()=>handleNext(index)} handlePrev={()=>handlePrev(index)} state={data.state} avatar={data.logoUrl ? data.logoUrl : data.coverImageUrl} orderRequest={data.orderRequest} orderDateTime={data.orderDateTime} orderStatus={data.orderStatus} orderQuantity={data.orderQuantity} email={data.email} deliveryDate={data.deliveryDate} contactPerson={data.contactPerson} contactInfo={data.contactInfo} />
                })}
            </>
            :
            <>
                {modalData && modalData.map((data, index)=>{
                    return <InnerPopPrRequest id={data.id} index={currentIndex} setCurrentIndex={setCurrentIndex} allRequests={allRequests} moveToModal={moveToModal} dataLength={dataLength} key={'prModalDetail'+index} user={data.name} address={data.address} handleNext={()=>handleNext(index)} handlePrev={()=>handlePrev(index)} state={data.state} avatar={data.logoUrl ? data.logoUrl : data.coverImageUrl} fullName={data.fullName} bagType={data.bagType} phoneNo={data.phone} agentName={data.agentName} email={data.email} deliveryDate={data.deliveryDate} orderDate={data.orderDate} contactInfo={data.contactInfo} orderQuantity={data.orderQuantity} availableProducers={data.availableProducers} />
                })}
            </>
        }
    </PopUpWrap>
  )
}

export default PrRequestPop