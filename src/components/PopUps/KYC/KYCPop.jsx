import React, { useEffect, useMemo } from 'react'
import useKYCModalStore from '../../../customHooks/Stores/KYCModalStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import PopUpWrap from '../Wraps/PopUpWrap';
import KYCPopUpInner from './KYCPopInner';




const KYCPopUp = ({modalState, closeModal, modalData}) => {
    // const storeId = useStoreInsightStore(state => state.storeId)
    // const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    // const KYCModalStoreState = useKYCModalStore(state => state.isKYCModalOpen)
    // const setIsKYCModalOpen = useKYCModalStore(state => state.changeIsKYCModalOpen)

    // const handleKYCModal = () =>{
    //     setIsKYCModalOpen()
    //     console.warn(modalDetailState);
    // }


    
    // useEffect(() =>         
    //     setModalDetailState(StoreInsightData, 'storeInsight1')
    // , [])

    

  return (
    <PopUpWrap modalState={modalState} closeModal={closeModal}>
        {modalData && modalData.map((data, index)=>{
            return <KYCPopUpInner key={'modalDetail'+index} user={data.name} location={data.location}/>
        })}
    </PopUpWrap>
  )
}

export default KYCPopUp