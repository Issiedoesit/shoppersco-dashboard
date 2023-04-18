import React, { useEffect, useMemo } from 'react'
import useCampaignStore from '../../../customHooks/Stores/campaignStateStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import CampaignPopUpInner from './CampaignPopUpInner';






const CampaignPopUp = () => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    const isCampaignModalOpen = useCampaignStore(state => state.isCampaignModalOpen)
    const setIsCampaignModalOpen = useCampaignStore(state => state.changeCampaignModalState)

    const handleCampaignModal = () =>{
        setIsCampaignModalOpen()
        console.warn(modalDetailState);
    }


    
    useEffect(() =>         
        setModalDetailState(StoreInsightData, 'storeInsight1')
    , [])

    

  return (
    <div id='CampaignPopUp' className={`z-50 ${isCampaignModalOpen ? 'flex' : 'hidden'} flex-col fixed top-0 col-span-12 left-0 w-full h-screen py-20 overflow-y-auto items-center `}>
        <div onClick={handleCampaignModal} className='overlay cursor-pointer pop-up-closer bg-black/30 w-full h-full z-20 backdrop-blur-sm fixed top-0 left-0 '></div>
        {modalDetailState.map((data, index)=>{
            return <CampaignPopUpInner key={'campaignModalDetail'+index} />
        })}
    </div>
  )
}

export default CampaignPopUp