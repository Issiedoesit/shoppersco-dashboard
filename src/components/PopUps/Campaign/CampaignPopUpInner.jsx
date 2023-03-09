import React from 'react'
import dummyAvatar from './../../../assets/images/avatars/avatar-1.png'
import ActiveTag from '../../StatusTags/ActiveTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import Restrict from '../User/Restrict'
import ApprovalBtn from '../Buttons/ApprovalBtn'
import RejectBtn from '../Buttons/RejectBtn'


const CampaignPopUpInner = ({keyprop}) => {
  return (
    <section key={keyprop} className='bg-white z-50 rounded-ten w-ninetyFivePercent sm:w-eightyPercent lg:w-sixtyPercent h-fit m-auto'>
            <div className='bg-brandBlue1x text-white flex items-center justify-between w-full rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14'>
               <div className='flex items-center flex-wrap 2xl:flex-nowrap gap-2 text-xs'>
                    <button type='button'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z" fill="white"/>
                        </svg>
                        <p className='hidden'>backward</p>
                    </button>
                    <button type='button'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z" fill="white"/>
                        </svg>
                        <p className='hidden'>forward</p>

                    </button>
                    <p className='hidden lg:block pr-10 lg:pr-0'>Use arrows to navigate user list forward or backward</p>
               </div>
                <p className='text-xs sm:text-sm xs:flex xs:flex-col xs:items-end block  w-fit sm:whitespace-nowrap'><span className=''>5:50 pm,</span> <span className='whitespace-nowrap'>15th December,</span> 2022</p>
            </div>

            <div className='rounded-b-ten px-5 sm:px-10 md:px-14 py-5 sm:py-10 space-y-3'>
                
                <div className='flex flex-col-reverse w-full sm:w-auto gap-5 py-2.5 justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-2xl md:text-4xl font-avenirBlack'>Mother Earth Campaign</h1>
                        <p className='text-lg md:text-xl'>Pandascrow Store</p>
                     
                        <div className='flex flex-row justify-between gap-5 items-end text-xs md:text-sm'>
                            <div className='text-sm font-avenirMedium space-y-3'>
                                <p className='font-avenirLight text-sm'>Rivers State</p>
                                <div className='flex flex-row flex-wrap gap-3'>
                                    <ActiveTag borderRadius={'rounded-eight'} />
                                    <VerifiedTag borderRadius={'rounded-eight'} />
                                    <EcoFriendlyTag borderRadius={'rounded-eight'} />
                                </div>
                            </div>

                            <div className='space-y-2 sm:space-y-1'>
                                <p className='font-avenirBlack'>Start Date: <span className='font-avenirLight whitespace-nowrap'>08-12-2023</span></p>
                                <p className='font-avenirBlack'>End Date: <span className='font-avenirLight whitespace-nowrap'>09-12-2024</span></p>
                            </div>
                        </div>

                    </div>
                    <div className='space-y-2 flex flex-col items-start sm:items-end w-full sm:w-fit'>
                        <img src={dummyAvatar} alt="avatar" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto'/>
                    </div>
                </div>

                <div className='space-y-3 text-xs md:text-sm'>
                    <h3 className='font-avenirBlack'>Campaign Type: <span className='font-avenirLight'>Gift</span></h3>
                    
                    <div className='space-y-5'>
                        <h3 className='font-avenirBlack'>Campaign Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                </div>
                
                {/* <div className='py-5 border-b-0.5 border-b-brandGray27x overflow-x-auto'>
                    <KYCPopUpTable />
                </div> */}
                
                <div className='flex flex-col sm:flex-row pt-10 gap-5'>
                    <ApprovalBtn actionBtnText={'Approve Campaign'} actionBtnBgColor={'bg-brandBlue1x'} />
                    <RejectBtn secBtnText={'Reject Campaign'} />
                </div>

                <div className=''>

                    <Restrict text={'Restrict user for violating company policy'} />
                </div>
            </div>
    </section>
  )
}

export default CampaignPopUpInner