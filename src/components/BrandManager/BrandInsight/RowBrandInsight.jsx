import React, { useEffect, useState } from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import usePrRequestStore from './../../../customHooks/Stores/PRequestModalStore'

const BrandInsightRow = (props) => {
    const setIsPrRequestModalOpen = usePrRequestStore(state => state.changeIsPrRequestModalOpen)


    let badge;
    
    if(props.badge.toLowerCase() === 'eco-friendly'){
        badge =  <EcoFriendlyTag />
     }else{
        badge = ''
    }

    const handlePrModalOpen =() => { 
        setIsPrRequestModalOpen()
     }

    
  return (
    <tr id={props.id} key={props.keyprop} className='odd:bg-brandGray28x brand-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-brand-insight" id="checkBrandInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
        <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div>
                <h5 className="text-xs">{props.name}</h5>
                <p className='text-xxs text-brandGray27x'>{props.owner}</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button' onClick={handlePrModalOpen} className="text-xs text-brandBlue1x hover:text-brandBlue2x font-avenirLight">Production Request</button>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {badge}
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className='text-xs'>{props.location}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-brandGray29x text-xs">{props.date}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-xs font-avenirLight">{props.orders}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
        <button type='button' className="text-xs text-brandGreen1x capitalize">Accept</button>        
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button' className="text-xs text-brandGray31x capitalize">Reject</button>
        </td>
    </tr>
  )
}

export default BrandInsightRow