import React, { useEffect, useMemo } from 'react'
import useKYCModalStore from '../../../customHooks/Stores/KYCModalStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import KYCPopUpInner from './KYCPopInner';




const KYCPopUp = () => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const storeId = useStoreInsightStore(state => state.storeId)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    const KYCModalStoreState = useKYCModalStore(state => state.isKYCModalOpen)
    const setIsKYCModalOpen = useKYCModalStore(state => state.changeIsKYCModalOpen)

    const handleKYCModal = () =>{
        setIsKYCModalOpen()
        console.warn(modalDetailState);
    }


    
    useEffect(() =>         
        setModalDetailState(StoreInsightData, 'storeInsight1')
    , [])

    

  return (
    <div id='KYCPopUp' className={`z-50  ${KYCModalStoreState ? 'flex' : 'hidden'} fixed top-0 col-span-12 left-0 w-full h-screen py-20 overflow-y-auto`}>
        <div onClick={handleKYCModal} className='overlay cursor-pointer pop-up-closer bg-black/30 w-full h-full z-20 backdrop-blur-sm fixed top-0 left-0 '></div>
        {modalDetailState.map((data, index)=>{
            return <KYCPopUpInner keyprop={'modalDetail'+index} user={data.name} location={data.location}/>
        })}
    </div>
  )
}

export default KYCPopUp