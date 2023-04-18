import React from 'react'
import CampaignInsightRow from './RowCampaignInsight'


const CampaignInsightTable = () => {
  return (
    <table id='campaignInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    <input type="checkbox" name="master-check-campaign-insight" id="masterCheckCampaignInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    State
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Active Campaign
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Active Participants
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    Start Date
                </td>
                <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                    End Date
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>
        <tbody>

            <CampaignInsightRow id={'state1'} key={'0'} state={'Abuja'} activeCampaigns={'231,231'} activeParticipants={'231,231,342'} startDate={'08-12-2022'} endDate={'24-12-2022'} />
            <CampaignInsightRow id={'state2'} key={'1'} state={'Delta'} activeCampaigns={'231,231'} activeParticipants={'231,231,342'} startDate={'08-12-2022'} endDate={'24-12-2022'} />
            
        </tbody>
    </table>
  )
}

export default CampaignInsightTable