import React, { useEffect, useMemo } from 'react'
import useCampaignStore from '../../../customHooks/Stores/campaignStateStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import formatDate from '../../../utils/Dates/FormatDate';
import PopUpWrap from '../Wraps/PopUpWrap';
import CampaignPopUpInner from './CampaignPopUpInner';






const CampaignPopUp = ({isModalOpen, closeModal, modalData, allCampaigns, dataLength, currentIndex, setCurrentIndex, moveToModal}) => {
    

    

  return (
    <PopUpWrap id={'campaignModalDetail'} modalState={isModalOpen} closeModal={closeModal}>
        {modalData.map((data, index)=>{
            const campaign = data.campaign
            const partner = data.partner
            return <CampaignPopUpInner key={'campaignModalDetail'+index} id={data.id} allCampaigns={allCampaigns} campaign={campaign.title} index={currentIndex} moveToModal={moveToModal} dataLength={dataLength} setCurrentIndex={setCurrentIndex} avatar={campaign.featuredPhotoUrl && campaign.featuredPhotoUrl} partner={partner.name} location={campaign.location} startDate={formatDate(campaign.startDate)} endDate={formatDate(campaign.endDate)} campaignDescription={campaign.content} />
        })}
    </PopUpWrap>
  )
}

export default CampaignPopUp