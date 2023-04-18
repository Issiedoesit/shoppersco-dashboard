import React from 'react'
import { NavLink } from 'react-router-dom'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'



const CampaignInsightRow = (props) => {
    const newCampaignState = useCampaignStore((state)=> state.currentCampaignState)
    const setCampaignState = useCampaignStore((state)=> state.setCurrentCampaignState)

    const handleCampaignStateChange = (val) =>{
        setCampaignState(val)
    }


  return (
    <tr id={props.id} key={props.key} className='text-sm font-avenirLight odd:bg-brandGray28x campaign-insight-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-campaign-insight" id="checkCampaignInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <div>
                <NavLink onClick={()=> handleCampaignStateChange(props.state.toLowerCase())} to={`./state/${props.state.toLowerCase()}`} className="text-brandBlue1x">{props.state}</NavLink>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className=''>{props.activeCampaigns}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className=''>{props.activeParticipants}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-brandGray29x ">{props.startDate}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-brandGray29x ">{props.endDate}</p>
        </td>
    </tr>
  )
}

export default CampaignInsightRow