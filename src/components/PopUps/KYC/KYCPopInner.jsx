import React from 'react'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import dummyAvatar from '../../../assets/images/avatars/avatar-1.png';
import ActiveTag from '../../StatusTags/ActiveTag';
import KYCPopUpTable from './TableKYCPopUp';
import Restrict from '../User/Restrict';
import Request from './../Request'



const KYCPopUpInner = ({id, index, allRequests, dataLength, moveToModal, setCurrentIndex, kycID, avatar, user, location, address, fullName, utilityBillLink, bizRegLink, imageLink, handleApprove, handleReject, kycStatus, handleRestrict}) => {



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
               <div className='flex items-center flex-wrap 2xl:flex-nowrap gap-2 text-xs'>
                    <button type='button' aria-label={index == 0 ? "You're on the first request" : `Go to request ${(index - 1)+1} of ${dataLength}`} title={index == 0 ? "You're on the first request" : `Go to request ${(index - 1)+1} of ${dataLength}`} disabled={index == 0} onClick={()=>index == 0 ? null : moveBack(index)} className={`group cursor-pointer`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={`group-disabled:fill-brandGray20x`} d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z" fill="white"/>
                        </svg>
                        <p className='hidden'>{index == 0 ? "You're on the first request" : `Go to request ${(index - 1)+1} of ${dataLength}`}</p>
                    </button>
                    <button type='button' aria-label={index == (dataLength - 1) ? "You're on the last request" : `Go to request ${(index + 1)+1} of ${dataLength}`} title={index == (dataLength - 1) ? "You're on the last request" : `Go to request ${(index + 1)+1} of ${dataLength}`} disabled={index == (dataLength - 1)} onClick={()=>index == (dataLength - 1) ? null : moveForward(index)} className={`group cursor pointer`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={`group-disabled:fill-brandGray20x`} d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z" fill="white"/>
                        </svg>
                        <p className='hidden'>{index == (dataLength - 1) ? "You're on the last request" : `Go to request ${(index + 1)+1} of ${dataLength}`}</p>

                    </button>
                    <p className='hidden lg:block pr-10 lg:pr-0'>Use arrows to navigate user list forward or backward</p>
               </div>
                <p className='text-xs sm:text-sm xs:flex xs:flex-col xs:items-end block  w-fit sm:whitespace-nowrap'><span className=''>5:50 pm,</span> <span className='whitespace-nowrap'>15th December,</span> 2022</p>
            </div>

            <div className='rounded-b-ten px-5 sm:px-10 md:px-14 py-5 sm:py-10'>
                
                <div className='flex flex-col-reverse sm:flex-row w-full sm:w-auto gap-5 border-b-0.5 border-b-brandGray27x py-2.5 justify-between sm:items-center'>
                    <div className='space-y-3'>
                        <h1 className='text-2xl md:text-4xl font-avenirBlack'>{user}</h1>
                        <p className='font-avenirLight text-sm'>{address}</p>
                        <div className='flex xs:flex-col xs:items-start items-center text-sm font-avenirMedium gap-3'>
                            <p>{location}</p>
                            <div className='flex flex-row flex-wrap gap-3'>
                                <ActiveTag borderRadius={'rounded-eight'} />
                                {kycStatus == 'verified' && <VerifiedTag borderRadius={'rounded-eight'} />}
                                <EcoFriendlyTag borderRadius={'rounded-eight'} />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2 flex flex-col items-start sm:items-end w-full sm:w-fit'>
                        <img src={avatar || dummyAvatar} alt="avatar" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto'/>
                    </div>
                </div>
                
                <div className='py-5 border-b-0.5 border-b-brandGray27x overflow-x-auto'>
                    <KYCPopUpTable fullName={fullName} utilityBillLink={utilityBillLink} bizRegLink={bizRegLink} imageLink={imageLink} />
                </div>
                
                <Request handleApproval={()=>handleApprove(kycID)} handleReject={()=>handleReject(kycID)} consumerType={'kyc'} showApprove={(kycStatus == 'pending' || kycStatus == 'rejected')} showReject={(kycStatus == 'pending' || kycStatus == 'verified' || kycStatus == 'rejected')} buttons={true} paddingB={'pb-16'} reqName={'Eco-friendly bag production request'} actionBtnText={'Approve KYC'} secBtnText={'Reject'} secBtnTextColor={'text-brandRed1x'} actionBtnBgColor={'bg-brandGreen6x'} />
                

                <div className='pt-5'>
                    <Restrict handleRestrict={()=>handleReject(kycID)} text={'Restrict user for violating company policy'} />
                </div>
            </div>
    </section>
  )
}

export default KYCPopUpInner