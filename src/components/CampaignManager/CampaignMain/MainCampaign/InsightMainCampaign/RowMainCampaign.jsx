import React from 'react'
import dummyAvatar from '../../../../../assets/images/avatars/avatar-1.png'

const RowMainCampaign = ({id, avatar, performance, participants, startDate, endDate, rewardType, campaign, location, handleModalOpen}) => {


  return (
    <tr id={id} className='odd:bg-brandGray28x font-avenirLight text-sm campaign-insight-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-campaign-insight" id="checkCampaignInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
        <img src={avatar || dummyAvatar} alt="avatar" className='rounded-full h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <div className=''>
                <button onClick={handleModalOpen} type='button' className="text-xs underline hover:text-brandGreen7x capitalize">{campaign || '----'}</button>
                <p className='text-xxs text-brandBlue1x'>{location || '----'}</p>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className='text-center'>{performance}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className='text-center'>{participants}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-center">{startDate}</p>
            <p className="text-center">{endDate}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-center">{rewardType}</p>
        </td>
    </tr>
  )
}

export default RowMainCampaign