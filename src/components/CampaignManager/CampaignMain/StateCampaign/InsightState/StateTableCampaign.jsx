import React from 'react'
import CampaignStateRow from './StateRowCampaign'

const CampaignStateTable = () => {
  return (
    <table id='campaignInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 px-2 whitespace-nowrap'>
                    <input type="checkbox" name="master-check-state-insight" id="masterCheckStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Campaign
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                 Performance
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Participants
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Start - End Date
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Reward Type
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>

        <tbody>

            <CampaignStateRow id={'stateCampaign1'} keyprop={'0'} name={'Mk'} state={'Rivers State'} performance={'4,000g'} participants={'231,231,342'} startDate={'08-10-2022'} endDate={'08-12-2022'} rewardType={'Raffle'}/>
            <CampaignStateRow id={'stateCampaign2'} keyprop={'1'} name={'Mk'} state={'Rivers State'} performance={'4,000g'} participants={'231,231,342'} startDate={'08-10-2022'} endDate={'08-12-2022'} rewardType={'Discount'}/>

        </tbody>
        
    </table>
  )
}

export default CampaignStateTable