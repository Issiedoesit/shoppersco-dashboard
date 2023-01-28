import React from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import VerifiedTag  from './../../StatusTags/VerifiedTag'
import EcoFriendlyTag from './../../StatusTags/EcoFriendlyTag'
import useKYCModalStore from '../../../customHooks/Stores/KYCModalStore'



const RowEcoBagProducerInsight = (props) => {
    const setIsKYCModalOpen = useKYCModalStore(state => state.changeIsKYCModalOpen)

    const handleIsKYCModalOpen = () => {
        setIsKYCModalOpen()
    }


  return (
    <tr id={props.id} key={props.keyprop} className='even:bg-brandGray28x ecobag-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-ecobag-insight" id="checkEcoBagInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
        <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div>
                <h5 className="text-xs">{props.name}</h5>
                <p className='text-xxs text-brandGray27x'>Eco-friendly bag producer</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button' onClick={handleIsKYCModalOpen} className="text-xs text-brandBlue1x font-avenirLight">Order details</button>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {props.kycStatus === 'verified' ? <VerifiedTag /> : ''}
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <EcoFriendlyTag />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-brandGray29x text-xs">{props.location}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="text-xs font-avenirLight">{props.orders}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {props.kycStatus === 'verified' 
            ? ''
            : <button type='button' className="text-xs text-brandGreen1x capitalize">Approve</button>        
            }
            
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {props.kycStatus === 'verified' 
            ? ''
            : <button type='button' className="text-xs text-brandRed1x capitalize">Reject</button>
            }
        </td>
    </tr>
  )
}

export default RowEcoBagProducerInsight