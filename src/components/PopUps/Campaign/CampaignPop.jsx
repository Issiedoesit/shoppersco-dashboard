import React, { useEffect, useMemo } from 'react'
import useCampaignStore from '../../../customHooks/Stores/campaignStateStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import PopUpWrap from '../Wraps/PopUpWrap';
import CampaignPopUpInner from './CampaignPopUpInner';






const CampaignPopUp = ({isModalOpen, closeModal}) => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)


    
    useEffect(() =>         
        setModalDetailState(StoreInsightData, 'storeInsight1')
    , [])

    

  return (
    <PopUpWrap id={'campaignModalDetail'} modalState={isModalOpen} closeModal={closeModal}>
        {modalDetailState.map((data, index)=>{
            return <CampaignPopUpInner key={'campaignModalDetail'+index} />
        })}
    </PopUpWrap>
  )
}

export default CampaignPopUp