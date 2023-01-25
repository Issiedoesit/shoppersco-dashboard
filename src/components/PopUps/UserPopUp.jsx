import React, { useRef } from 'react'
import ActiveTag from './../StatusTags/ActiveTag'
import VerifiedTag from './../StatusTags/VerifiedTag'
import EcoFriendlyTag from './../StatusTags/EcoFriendlyTag'
import dummyAvatar from './../../assets/images/avatars/avatar-1.png';
import Request from './Request';

const UserPopUp = () => {

    const userRefPopUp = useRef('')

  return (
    <div ref={userRefPopUp} id='userPopUp' className='z-50 fixed top-0 col-span-12 left-0 w-full h-screen flex py-20 overflow-y-auto'>
        <div className='overlay cursor-pointer pop-up-closer bg-black/30 w-full h-full z-20 backdrop-blur-sm fixed top-0 left-0 '></div>
        <section className='bg-white z-50 rounded-ten w-sixtyPercent h-fit m-auto'>
            <div className='bg-brandGreen4x text-white flex items-center justify-between w-full rounded-t-ten py-2.5 px-14'>
               <div className='flex items-center gap-5 text-xs'>
                    <label htmlFor="">
                        <select name="" id="" className="border-0.5 rounded-fifty text-black bg-brandGray5x px-3 py-2 border-brandGray36x">
                            <option value="1 month ago">1 month ago</option>
                        </select>
                    </label>
                    <p>Filter this data by date</p>
               </div>
                <p className='text-sm'>5:50 pm, 15th December, 2022</p>
            </div>

            <div className='rounded-b-ten px-14 py-10'>
                
                <div className='flex border-b-0.5 border-b-brandGray27x py-2.5 justify-between items-center'>
                    <div className='space-y-3'>
                        <h1 className='text-4xl font-avenirBlack'>Angelique Jewelry</h1>
                        <p className='font-avenirLight text-sm'>672 Sabbath Street, Rukpokwu, Port Harcourt.</p>
                        <div className='flex items-center text-sm font-avenirMedium gap-3'>
                            <p>Rivers State</p>
                            <ActiveTag />
                            <VerifiedTag />
                            <EcoFriendlyTag />
                        </div>
                        <button type='button' className='text-xs text-brandGray27x'>Remove Eco-friendly badge</button>
                    </div>
                    <div className='space-y-2'>
                        <img src={dummyAvatar} alt="avatar" />
                        <p className='text-center font-avenirBlack text-xl text-brandGreen4x'>10,000,000 Pts</p>
                    </div>
                </div>

                <div>
                    <Request />
                </div>
            </div>
        </section>
    </div>
  )
}

export default UserPopUp