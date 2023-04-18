import React, { useEffect, useState } from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'

const BrandInsightRow = ({id, avatar, badge, name, owner, location, date, orders, handlePrModalOpen, handleAccept, handleReject }) => {


    let badgeTag;
    
    if(badge){
        if(badge.toLowerCase() === 'eco-friendly'){
            badgeTag =  <EcoFriendlyTag />
         }else{
            badgeTag = ''
        }
    }



    
  return (
    <tr id={id} className='odd:bg-brandGray28x brand-insight-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-brand-insight" id="checkBrandInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
        <img src={avatar ? avatar : dummyAvatar} alt={name} className='rounded-full skeleton object-cover h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <div>
                <h5 className="text-xs">{name  || '---'}</h5>
                <p className='text-xxs text-brandGray27x'>{owner  || '---'}</p>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <button type='button' onClick={handlePrModalOpen} className="text-xs text-brandBlue1x hover:text-brandBlue2x font-avenirLight">Production Request</button>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            {badgeTag || '---'}
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className='text-xs'>{location  || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-brandGray29x text-xs">{date  || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-xs font-avenirLight">{orders  || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
        <button type='button' onClick={()=>handleAccept(id)} className="text-xs text-brandGreen1x capitalize">Accept</button>        
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <button type='button' onClick={()=>handleReject(id)} className="text-xs text-brandGray31x capitalize">Reject</button>
        </td>
    </tr>
  )
}

export default BrandInsightRow