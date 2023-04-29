import React from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import VerifiedTag  from './../../StatusTags/VerifiedTag'
import EcoFriendlyTag from './../../StatusTags/EcoFriendlyTag'




const RowEcoBagProducerInsight = ({id, kycID, avatar, name, user,  handleKYCModal, handleApprove, handleReject, location, orders, kycStatus}) => {



  return (
    <tr id={id} className='odd:bg-brandGray28x ecobag-insight-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-ecobag-insight" id="checkEcoBagInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
        <img src={avatar ? avatar: dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <div>
                <h5 className="text-xs">{name || '---'}</h5>
                <p className='text-xxs text-brandGray27x'>{user || 'Eco-friendly bag producer'}</p>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <button type='button' onClick={()=>handleKYCModal(id)} className="text-xs text-brandBlue1x font-avenirLight">View KYC</button>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            {kycStatus === 'verified' ? <VerifiedTag /> : ''}
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <EcoFriendlyTag />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-brandGray29x text-xs">{location || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-xs font-avenirLight">{orders || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            {kycStatus == 'pending' && <button type='button' onClick={()=>handleApprove(kycID)} className="text-xs text-brandGreen1x capitalize">Approve</button>}
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            {kycStatus == 'pending' && <button type='button' onClick={()=>handleReject(kycID)} className="text-xs text-brandRed1x capitalize">Reject</button>}
        </td>
    </tr>
  )
}

export default RowEcoBagProducerInsight