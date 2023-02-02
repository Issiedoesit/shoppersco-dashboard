import React from 'react'
import VerifiedTag from '../../StatusTags/VerifiedTag'
import EcoFriendlyTag from '../../StatusTags/EcoFriendlyTag'
import dummyAvatar from '../../../assets/images/avatars/avatar-1.png';
import Request from '../Request';
import ActiveTag from '../../StatusTags/ActiveTag';
import UserPopUpTable from './UserPopUpTable';
import Restrict from './Restrict';

const UserPopUpInner = ({keyprop, user, location}) => {
  return (
    <section key={keyprop} className='bg-white z-50 rounded-ten w-ninetyFivePercent sm:w-eightyPercent lg:w-sixtyPercent h-fit m-auto'>
            <div className='bg-brandGreen4x text-white flex items-center justify-between w-full rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14'>
               <div className='flex items-center flex-wrap lg:flex-nowrap gap-5 text-xs'>
                    <label htmlFor="">
                        <select name="" id="" className="border-0.5 rounded-fifty text-black bg-brandGray5x px-3 py-2 border-brandGray36x">
                            <option value="1 month ago">1 month ago</option>
                        </select>
                    </label>
                    <p>Filter this data by date</p>
               </div>
                <p className='text-xs sm:text-sm flex flex-col items-end sm:block  w-fit sm:whitespace-nowrap'><span className=''>5:50 pm,</span> <span className='whitespace-nowrap'>15th December,</span> 2022</p>
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
                        <button type='button' className='text-xs text-brandGray27x'>Remove Eco-friendly badge</button>
                    </div>
                    <div className='space-y-2 flex flex-col items-start sm:items-end w-full sm:w-fit'>
                        <img src={dummyAvatar} alt="avatar" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto'/>
                        <p className='text-right lg:text-center font-avenirBlack sm:text-lg lg:text-xl text-brandGreen4x'>10,000,000 Pts</p>
                    </div>
                </div>

                <div>
                    <Request buttons={true} reqName={'Requesting account verification'} actionBtnText={'Approve'} secBtnText={'Reject'} />
                </div>
                
                <div className='py-5 border-b-0.5 border-b-brandGray27x overflow-x-auto'>
                    <UserPopUpTable />
                </div>

                <div className='pt-5'>
                    <Restrict text={'Restrict user for violating company policy'} />
                </div>
            </div>
    </section>
  )
}

export default UserPopUpInner