import React from 'react'
import useCampaignStore from '../../../../../customHooks/Stores/campaignStateStore'
import dummyAvatar from './../../../../../assets/images/avatars/avatar-1.png'

const StateRows = (props) => {

    const setIsCampaignModalOpen = useCampaignStore(state => state.changeCampaignModalState)

    const handleCampaignModal = () =>{
        setIsCampaignModalOpen()
    }


  return (
    <tr id={props.id} key={props.key} className='odd:bg-brandGray28x font-avenirLight text-sm state-insight-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-state-insight" id="checkStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
        <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <div className=''>
                <button onClick={handleCampaignModal} type='button' className="text-xs underline hover:text-brandGreen7x">Mother Earth Campaign</button>
                <p className='text-xxs text-brandBlue1x'>{props.state}</p>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className='text-center'>{props.performance}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className='text-center'>{props.participants}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-center">{props.startDate}</p>
            <p className="text-center">{props.endDate}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-center">{props.rewardType}</p>
        </td>
    </tr>
  )
}

export default StateRows