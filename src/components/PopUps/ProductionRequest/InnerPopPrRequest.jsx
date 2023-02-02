import React, { useEffect, useState } from 'react'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import dummyAvatar from '../../../assets/images/avatars/avatar-1.png';
import ActiveTag from '../../StatusTags/ActiveTag';
import Restrict from '../User/Restrict';
import Request from './../Request'
import TablePopPrRequest from './TablePopPrRequest';
import $ from 'jquery'
import TableEcoBagPop from './TableEcoBagPop';

const InnerPopPrRequest = ({keyprop, user, location}) => {

    const [ecoBagProducer, setEcoBagProducer] = useState(false)
    
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
  
    
    

return (
    <section key={keyprop} className='bg-white z-50 rounded-ten w-ninetyFivePercent sm:w-eightyPercent lg:w-sixtyPercent h-fit m-auto'>
        <div className='bg-brandBlue1x text-white flex items-center justify-between w-full rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14'>
           {ecoBagProducer || 
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
           }
            <p className='text-xs sm:text-sm xs:flex xs:flex-col xs:items-end block  w-fit sm:whitespace-nowrap'><span className=''>5:50 pm,</span> <span className='whitespace-nowrap'>15th December,</span> 2022</p>
        </div>

        <div className='rounded-b-ten px-5 sm:px-10 md:px-14 py-5 sm:py-10'>
            
            <div className='flex flex-col-reverse sm:flex-row w-full sm:w-auto gap-5 border-b-0.5 border-b-brandGray27x py-2.5 justify-between sm:items-center'>
                <div className='space-y-3'>
                    <h1 className='text-2xl md:text-4xl font-avenirBlack'>{user}</h1>
                    <p className='font-avenirLight text-sm'>672 Sabbath Street, Rukpokwu, Port Harcourt.</p>
                    <div className='flex xs:flex-col xs:items-start items-center text-sm font-avenirMedium gap-3'>
                        <p>{location}</p>
                        <div className='flex flex-row flex-wrap gap-3'>
                            <ActiveTag borderRadius={'rounded-eight'} />
                            <VerifiedTag borderRadius={'rounded-eight'} />
                            <EcoFriendlyTag borderRadius={'rounded-eight'} />
                        </div>
                    </div>
                </div>
                <div className='space-y-2 flex flex-col items-start sm:items-end w-full sm:w-fit'>
                    <img src={dummyAvatar} alt="avatar" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto'/>
                </div>
            </div>

            <Request buttons={ecoBagProducer ? false : true} paddingB={'pb-8'} paddingT={'pt-8'} reqName={'Eco-friendly bag production request'} actionBtnText={'Accept'} secBtnText={'Reject'} secBtnTextColor={''} actionBtnBgColor={'bg-brandBlue1x'} />

            
            {ecoBagProducer 
            ?
                <div className='py-5 border-b-0.5 border-b-brandGray27x overflow-x-auto'>
                    <TableEcoBagPop />
                </div>
            :
                <div className='grid grid-cols-1 sm:grid-cols-5 border-b-0.5 border-b-brandGray27x divide-y divide-x-0 sm:divide-x sm:divide-y-0 divide-brandGray27x overflow-x-auto'>
                    <div className='col-span-1 sm:col-span-3 py-5 sm:pr-2'>
                        <TablePopPrRequest />
                    </div>
                    <div className='col-span-1 sm:col-span-2 space-y-3 text-sm py-5 sm:pl-2'>
                        <h3 className='font-avenirBlack'>Available Bag Producers</h3>
                        <div className='space-y-2.5 text-brandGray47x text-xs'>
                            <label htmlFor="agent1" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent1" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Babatunde Fashola</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent2" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent2" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Precious Tom</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent3" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent3" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Uko Johnny</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent4" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent4" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Kingsley Ekpe</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent5" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent5" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Princess Ekpa</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent6" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent6" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Simon Daniel</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                            <label htmlFor="agent7" className='flex flex-row agent-list-item items-center gap-5 md:gap-20'>
                                <input type="checkbox" name="" id="agent7" className='peer hidden' />
                                <p className='peer-checked:text-brandBlack1x cursor-pointer peer-checked:text-sm w-eightyPercent'>Kain James</p>
                                <span className='hidden peer-checked:block'>{checkMark}</span>
                            </label>
                        </div>
                    </div>
                </div>
            }
            
            

            <div className='pt-5'>
                <Restrict text={'Restrict user for violating company policy'} />
            </div>
        </div>
    </section>
  )
}

export default InnerPopPrRequest