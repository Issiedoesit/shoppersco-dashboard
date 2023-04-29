import React, { useEffect, useMemo } from 'react'
import PopUpWrap from '../Wraps/PopUpWrap';
import KYCPopUpInner from './KYCPopInner';




const KYCPopUp = ({modalState, allRequests, closeModal, modalData, dataLength, currentIndex, setCurrentIndex, moveToModal}) => {    

  return (
    <PopUpWrap modalState={modalState} closeModal={closeModal}>
        {modalData && modalData.map((data, index)=>{
            const partner = data.partner
            const user = partner.user
            const kyc = partner.kyc
            return <KYCPopUpInner key={'kycModal'+index} id={data.id} allRequests={allRequests} index={currentIndex} moveToModal={moveToModal} dataLength={dataLength} setCurrentIndex={setCurrentIndex} avatar={data.logoUrl ? data.logoUrl : data.coverImageUrl} user={data.name} location={data.city} address={data.address} fullName={user.name} imageLink={kyc.idCard} kycID={kyc.id} utilityBillLink={kyc.utilityBill} bizRegLink={kyc.businessRegistration} />
        })}
    </PopUpWrap>
  )
}

export default KYCPopUp