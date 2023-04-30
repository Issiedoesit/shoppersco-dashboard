import React from 'react'
import formatDate from '../../../../../utils/Dates/FormatDate'
import RowMainCampaign from './RowMainCampaign'

const TableMainCampaign = ({handleModalOpen, campaignData}) => {
  return (
    <table id='campaignInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    <input type="checkbox" name="master-check-state-insight" id="masterCheckStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Campaign
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                 Performance
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Participants
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Start - End Date
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Reward Type
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>

        <tbody>
            
            {campaignData.map((data, idx)=>{
                const campaign = data.campaign
                const partner = data.partner
                return <RowMainCampaign handleModalOpen={()=>handleModalOpen(data.id, idx)} id={data.id} key={idx} campaign={campaign.title} avatar={campaign.featuredPhotoUrl && campaign.featuredPhotoUrl} location={campaign.location} performance={campaign.pointsAccrued} participants={campaign.participantCount} startDate={formatDate(campaign.startDate)} endDate={formatDate(campaign.endDate)} rewardType={'Raffle'}/>
            })}

        </tbody>
        
    </table>
  )
}

export default TableMainCampaign