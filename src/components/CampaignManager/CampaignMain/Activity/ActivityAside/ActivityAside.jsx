import React from 'react'
import CampaignActionsData from '../../../../../data/CampaignManager/CampaignActionsData'
import StatsCard from '../../../../Cards/StatsCard'
import CampaignLeaderBoard from '../../../CampaignAside/CampaignLeaderBoard'

const ActivityAside = ({activityData}) => {
  
    const cards = CampaignActionsData.slice(0, 2)

  return (
    <section className='col-span-2 space-y-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-1 gap-5 auto-rows-fr auto-cols-fr'>
            <StatsCard stat={`${activityData[0].campaign.pointsAccrued} Points`} header={'Your points'} />
            <StatsCard stat={'1,234,567'} header={'Your  Eco-friendly Sales'} />
      </div>
        <CampaignLeaderBoard />
    </section>
  )
}

export default ActivityAside