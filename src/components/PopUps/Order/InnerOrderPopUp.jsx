import React, { useEffect, useState } from 'react'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import dummyAvatar from '../../../assets/images/avatars/avatar-1.png';
import ActiveTag from '../../StatusTags/ActiveTag';
import Restrict from '../User/Restrict';
import Request from './../Request'
import $ from 'jquery'
import TableOrderPopUp from './TableOrderPopUp';

const InnerOrderPopUp = ({id, user, index, allRequests, dataLength, moveToModal, setCurrentIndex, address, state, avatar, handleAccept, handleReject, fullName, bagType, phoneNo, agentName, orderDate, availableProducers, handleRestrict, orderRequest, orderDateTime, orderStatus, orderQuantity, email, deliveryDate, contactPerson, contactInfo }) => {

    
    
    let checkMark = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1252_4118)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8H0ZM7.54347 11.424L12.1493 5.66613L11.3173 5.00053L7.38987 9.90827L4.608 7.5904L3.92533 8.4096L7.54347 11.4251V11.424Z" fill="#30C56B"/>
    </g>
    <defs>
    <clipPath id="clip0_1252_4118">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>


  useEffect(() => {
    $('.agent-list-item').each(function(){
        $(this).on('change', function(){
            $('.agent-list-item').children('input').not(this).prop('checked', false)
            $(this).children('input').prop('checked', true)
        })
    })
  }, [])
  
    const moveBack = (index) => {
        moveToModal([allRequests[index - 1]])
        setCurrentIndex(index - 1)
    }
    const moveForward = (index) => {
        moveToModal([allRequests[index + 1]])
        setCurrentIndex(index + 1)
    }
    

return (
    <section id={id} className='bg-white z-50 rounded-ten w-ninetyFivePercent sm:w-eightyPercent lg:w-sixtyPercent h-fit m-auto'>
        <div className='bg-brandBlue1x text-white flex items-center justify-between w-full rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14'>
            <p className='text-xs sm:text-sm xs:flex xs:flex-col xs:items-end block  w-fit sm:whitespace-nowrap'><span className=''>5:50 pm,</span> <span className='whitespace-nowrap'>15th December,</span> 2022</p>
        </div>
           {/* <div>
               <p>index = {index}</p>
               <p>dataLength = {dataLength}</p>
           </div> */}
        <div className='rounded-b-ten px-5 sm:px-10 md:px-14 py-5 sm:py-10'>
            
            <div className='flex flex-col-reverse sm:flex-row w-full sm:w-auto gap-5 border-b-0.5 border-b-brandGray27x py-2.5 justify-between sm:items-center'>
                <div className='space-y-3'>
                    <h1 className='text-2xl md:text-4xl font-avenirBlack'>{user}</h1>
                    <p className='font-avenirLight text-sm'>{address || '---'}</p>
                    <div className='flex xs:flex-col xs:items-start items-center text-sm font-avenirMedium gap-3'>
                        <p>{state || '---'}</p>
                        <div className='flex flex-row flex-wrap gap-3'>
                            <ActiveTag borderRadius={'rounded-eight'} />
                            <VerifiedTag borderRadius={'rounded-eight'} />
                            <EcoFriendlyTag borderRadius={'rounded-eight'} />
                        </div>
                    </div>
                </div>
                <div className='space-y-2 flex flex-col items-start sm:items-end w-full sm:w-fit'>
                    <img src={avatar ? avatar : dummyAvatar} alt={user} className='w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full object-cover skeleton'/>
                </div>
            </div>

            <Request handleApproval={()=>handleAccept(id)} handleReject={()=>handleReject(id)} buttons={false} paddingB={'pb-8'} paddingT={'pt-8'} reqName={'Eco-friendly bag production request'} actionBtnText={'Accept'} secBtnText={'Reject'} secBtnTextColor={''} actionBtnBgColor={'bg-brandBlue1x'} />

            
            <div className='py-5 border-b-0.5 border-b-brandGray27x overflow-x-auto'>
                <TableOrderPopUp orderRequest={orderRequest} orderDateTime={orderDateTime} orderStatus={orderStatus} orderQuantity={orderQuantity} email={email} deliveryDate={deliveryDate} contactPerson={contactPerson} contactInfo={contactInfo} />
            </div>
            

            <div className='pt-5'>
                <Restrict handleRestrict={()=>handleRestrict(id)} text={'Restrict user for violating company policy'} />
            </div>
        </div>
    </section>
  )
}

export default InnerOrderPopUp