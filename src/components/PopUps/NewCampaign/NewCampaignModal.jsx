import React from 'react'
import PopUpWrap from '../Wraps/PopUpWrap'
import NewCampaignModalInner from './NewCampaignModalInner'

const NewCampaignModal = ({isModalOpen, closeModal}) => {
  return (
    <PopUpWrap id={'newCampaignModal'} modalStoreState={isModalOpen} handleModal={closeModal}>
        <NewCampaignModalInner />
    </PopUpWrap>
  )
}

export default NewCampaignModal