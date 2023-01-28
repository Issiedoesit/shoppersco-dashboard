import React from 'react'
import dummyAvatar from './../../../../../assets/images/avatars/avatar-1.png'

const StateRows = (props) => {
  return (
    <tr id={props.id} key={props.keyprop} className='even:bg-brandGray28x font-avenirLight text-sm state-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-state-insight" id="checkStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
        <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div className=''>
                <h5 className="text-xs underline">Mother Earth Campaign</h5>
                <p className='text-xxs text-brandBlue1x'>{props.state}</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-center'>{props.performance}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-center'>{props.participants}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-center">{props.startDate}</p>
            <p className="text-center">{props.endDate}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-center">{props.rewardType}</p>
        </td>
    </tr>
  )
}

export default StateRows