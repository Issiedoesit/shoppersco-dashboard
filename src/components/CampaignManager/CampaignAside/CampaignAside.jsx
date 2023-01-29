import React from 'react'
import CampaignActionsData from '../../../data/CampaignManager/CampaignActionsData'
import ActionWithImage from '../../Cards/ActionWithImage'
import CampaignLeaderBoard from './CampaignLeaderBoard'

const CampaignAside = () => {
  return (
    <section className='col-span-2 space-y-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 gap-5 auto-rows-fr auto-cols-fr'>
            {CampaignActionsData.map((data, index)=>{
                return <ActionWithImage id={data.id} key={index} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} />
            })}
        </div>
        <CampaignLeaderBoard />
    </section>
  )
}

export default CampaignAside