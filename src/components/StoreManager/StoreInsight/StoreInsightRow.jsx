import React, { useEffect, useState } from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import ActiveTag from '../../StatusTags/ActiveTag'
import InactiveTag from '../../StatusTags/InactiveTag'
import BannedTag from '../../StatusTags/BannedTag'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore'
import useModalStore from '../../../customHooks/Stores/modalStore'



const StoreInsightRow = (props) => {
    // const [tag, setTag] = useState('')
    // const [kyc, setKyc] = useState('')
    // const [badge, setBadge] = useState('')
    const setStoreId = useStoreInsightStore(state => state.setStoreId)
    const setModalStoreState = useModalStore(state => state.changeIsModalOpen)

    let tag;

    if(props.status.toLowerCase() === 'active'){
       tag =  <ActiveTag borderRadius={'rounded-forty'}  bgColor={'bg-brandLightGreen1x'} />
    }else if(props.status.toLowerCase() === 'inactive'){
       tag =  <InactiveTag />
    }else if(props.status.toLowerCase() === 'banned'){
       tag =  <BannedTag />
    }

    let kyc;
    if(props.kyc.toLowerCase() === 'verified'){
       kyc =  <VerifiedTag />
    }else if(props.kyc.toLowerCase() === 'inactive'){
       kyc =  <InactiveTag />
    }
  
    let badge;

    if(props.badge.toLowerCase() === 'eco-friendly'){
        badge = <EcoFriendlyTag />
     }else{
        badge = ''
     }

    //  fetches the store details based on the id
    const handleStoreId = (id) => {
        setStoreId(id)
    }

    // sets the modal to open or close
    const handleModal = () => {
        setModalStoreState()
    }

    // uses the handleStoreId and handleModal functions on btn click
    const handleBtnClick = (id) => {
        handleStoreId(id)
        handleModal()
    }



  return (
    <tr id={props.id} key={props.keyprop} className=' odd:bg-brandGray28x store-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-store-insight" id="checkStoreInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <img src={dummyAvatar} alt="avatar" className='h-8 w-8 min-w-8 aspect-square min-h-8' />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div>
                <button type='button' onClick={()=>handleBtnClick(props.id)} className="text-xs hover:text-brandBlue1x transition-color duration-300 ease-in-out">{props.name}</button>
                <p className='text-xxs text-brandGray27x'>Points: {props.points} . Rate: {props.rate}</p>
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {tag}
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            {kyc}
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
            {
                props.approval.toLowerCase() === 'approved'
                ?
                <p className="text-xs text-brandGreen1x capitalize">{props.approval}</p>
                :
                <p className="text-xs text-brandGray31x capitalize">{props.approval}</p>
            }
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4.48665C11.78 4.26665 9.54667 4.15332 7.32 4.15332C6 4.15332 4.68 4.21999 3.36 4.35332L2 4.48665" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M5.66667 3.81325L5.81334 2.93992C5.92001 2.30659 6 1.83325 7.12667 1.83325H8.87334C10 1.83325 10.0867 2.33325 10.1867 2.94659L10.3333 3.81325" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5667 6.59326L12.1333 13.3066C12.06 14.3533 12 15.1666 10.14 15.1666H5.86C4 15.1666 3.94 14.3533 3.86667 13.3066L3.43333 6.59326" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M6.88667 11.5H9.10667" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M6.33333 8.83325H9.66666" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='hidden'>Delete</p>
            </button>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <button type='button'>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M7.33333 1.83325H5.99999C2.66666 1.83325 1.33333 3.16659 1.33333 6.49992V10.4999C1.33333 13.8333 2.66666 15.1666 5.99999 15.1666H9.99999C13.3333 15.1666 14.6667 13.8333 14.6667 10.4999V9.16658" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6933 2.51326L5.44 7.76659C5.24 7.96659 5.04 8.35992 5 8.64659L4.71333 10.6533C4.60666 11.3799 5.12 11.8866 5.84666 11.7866L7.85333 11.4999C8.13333 11.4599 8.52666 11.2599 8.73333 11.0599L13.9867 5.80659C14.8933 4.89992 15.32 3.84659 13.9867 2.51326C12.6533 1.17992 11.6 1.60659 10.6933 2.51326Z" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M9.94 3.2666C10.3867 4.85993 11.6333 6.1066 13.2333 6.55993" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='hidden'>Edit</p>
            </button>
        </td>
    </tr>
  )
}

export default StoreInsightRow