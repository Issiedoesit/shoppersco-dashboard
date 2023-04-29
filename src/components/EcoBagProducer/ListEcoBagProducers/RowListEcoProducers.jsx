import React, { useEffect, useRef, useState } from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import VerifiedTag  from './../../StatusTags/VerifiedTag'
import EcoFriendlyTag from './../../StatusTags/EcoFriendlyTag'
import ThreeDotsBtn from '../../Buttons/ThreeDotsBtn'
import useComponentVisible from '../../../customHooks/useHideOnClickOutside'
import $ from 'jquery'




const RowListEcoProducers = ({id, avatar, index, name, user, setIsDropDownOpen,  handleKYCModal, location, quantity, isAdmin, kycStatus, handleDelete, handleEdit, handleBadgeAssign, handleProfileView, handleQRCodeView, historyView, cancelOrder }) => {


    const handleSubMenuOpen = (n) =>{
        setIsDropDownOpen(true)
        $('.ecobag-drop-menu').not($(`#dropMenu${n}`)).removeClass('flex').addClass('hidden')
        $(`#dropMenu${n}`).toggleClass('flex hidden')
    }

    const closeSubMenu = () => {
        setIsDropDownOpen(false)
        $('.ecobag-drop-menu').removeClass('flex').addClass('hidden');
    }

    useComponentVisible('.ecobag-drop-btn', '.ecobag-drop-menu', ()=>closeSubMenu()) //hides dropdown on click outside



  return (
    <tr id={id} className='odd:bg-brandGray28x ecobag-insight-list-row'>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <input type="checkbox" name="check-ecobag-insight-lidt" id="checkEcoBagInsightList" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
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
            <button type='button' onClick={()=>handleKYCModal(id)} className="text-xs text-brandBlue1x font-avenirLight">Order details</button>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <EcoFriendlyTag />
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            {kycStatus === 'verified' ? <VerifiedTag /> : ''}
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-brandGray29x text-xs">{location || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <p className="text-xs font-avenirLight">{quantity || '---'}</p>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap relative">
            <div id={`dropBtn${index}`} onClick={()=>handleSubMenuOpen(index)} className='ecobag-drop-btn flex items-center peer'>
                <ThreeDotsBtn />
            </div>
            <div id={`dropMenu${index}`} className={`ecobag-drop-menu absolute top-eightyPercent z-20 right-0 hidden flex-col text-xs sm:text-sm text-brandBlue1x shadow border-0.5 border-brandGray44x`}>
                <button type='button' onClick={()=>handleBadgeAssign(id)} className='py-1 pl-4 pr-6 odd:bg-white hover:text-brandBlue2x transition-colors duration-300 ease-in-out even:bg-brandGray28x text-left'>Assign Badge</button>
                <button type='button' onClick={()=>handleProfileView(id)} className='py-1 pl-4 pr-6 odd:bg-white hover:text-brandBlue2x transition-colors duration-300 ease-in-out even:bg-brandGray28x text-left'>View Profile</button>
                <button type='button' onClick={()=>handleQRCodeView(id)} className='py-1 pl-4 pr-6 odd:bg-white hover:text-brandBlue2x transition-colors duration-300 ease-in-out even:bg-brandGray28x text-left'>View QR code</button>
                <button type='button' onClick={()=>historyView(id)} className='py-1 pl-4 pr-6 odd:bg-white hover:text-brandBlue2x transition-colors duration-300 ease-in-out even:bg-brandGray28x text-left'>History</button>
                <button type='button' onClick={()=>cancelOrder(id)} className='py-1 pl-4 pr-6 odd:bg-white hover:text-brandBlue2x transition-colors duration-300 ease-in-out even:bg-brandGray28x text-left'>Cancel Order</button>
            </div>
        </td>
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <button type='button' onClick={()=>handleDelete(id)} aria-label={`Delete ${name}`}>
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
        <td className="py-3 pl-1 pr-3 whitespace-nowrap">
            <button type='button' onClick={()=>handleEdit(id)} aria-label={`Edit ${name}`}>
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

export default RowListEcoProducers