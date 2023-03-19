import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import ButtonNoIcon from '../Buttons/ButtonNoIcon'
import Greeting from '../Header/Greeting'
import TemplatePage from '../Template'
import PhoneInput from './PhoneInput'


const Profile = () => {
    
useDocTitle('ShoppersBag | Profile')
  
  return (
    <TemplatePage headerTitle={'Profile'}>
        <Greeting salutation={'Welcome to your profile'} salutationFontBigger={true} />

        <div className="rounded-forty flex flex-col w-full border-0.5 border-brandGray48x mt-8">
            <div  className="py-6 bg-brandGray4x px-6 rounded-t-forty  sm:px-12 w-full border-b border-b-brandDashGray2x">
                <h1 className="text-black font-avenirBlack text-2xl md:text-3xl">Your Profile</h1>
            </div> 
            <form id="updateProfile" action="#" method="post" className="w-full px-4 md:px-12 h-fit pb-6 flex flex-col items-center pt-6 md:pt-12 gap-6 md:gap-4">
                <div className='w-full'>
                    <label id="profile_media_wrap" for="profile_media" data-img-input="profile_media" data-img-text="profile_media_text"  className="image-upload-wrap bg-no-repeat bg-cover bg-center rounded-ten cursor-pointer h-20 w-full border bg-brandGray49x border-dashed border-black  self-center flex flex-col items-center justify-center">
                        <p className="" id="profile_media_text"><span className="mr-4">+</span> Click to update your profile photo</p>
                            <input  type="file" name="business-settings-media" id="profile_media" className="cursor-pointer hidden" /> 
                    </label>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-end gap-4 sm:gap-6 pt-6 md:pt-4">
                    <div className="col-span-1">
                        <label for="profile_full_name" className="text-sm font-avenirMedium text-black">Full name</label>
                        <input type="text" name="fullName" className="placeholder:text-brandGray50x placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base rounded-five border border-brandGray48x form-input focus:outline focus:outline-0.5 focus:outline-brandGreen4x px-6 w-full py-2 mt-2" id="profile_full_name" placeholder="Your full name*" /> 
                    </div>
                    <div className="col-span-1">
                        <label for="profile_email" className="text-sm font-avenirMedium text-black">Email Address</label>
                        <input type="email" name="email" className="placeholder:text-brandGray50x placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base rounded-five border border-brandGray48x form-input focus:outline focus:outline-0.5 focus:outline-brandGreen4x px-6 w-full py-2 mt-2" id="profile_email" placeholder="Enter your email address*" /> 
                    </div>
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                        <label for="phone" className="text-sm font-avenirMedium text-black">Phone Number</label>
                        <PhoneInput 
                        name="phone"
                        className="placeholder:text-brandGray50x placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base rounded-five border border-brandGray48x form-input focus:outline focus:outline-0.5 focus:outline-brandGreen4x px-6 w-full py-2 mt-2"
                        />
                    </div>
                    <div className="col-span-1">
                        <label for="profile_state" className="text-sm font-avenirMedium text-black">Select State</label>
                        <select name="state" id="profile_state" className='text-brandGray50x text-xs sm:text-sm lg:text-base rounded-five border border-brandGray48x form-select focus:outline focus:outline-0.5 focus:outline-brandGreen4x bg-white h-11 px-6 w-full py-2 mt-2'>
                            <option value="Select State*" >Select State*</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label for="profile_city" className="text-sm font-avenirMedium text-black">Select City</label>
                        <select name="city" id="profile_city" className='text-brandGray50x text-xs sm:text-sm lg:text-base rounded-five border border-brandGray48x form-select focus:outline focus:outline-0.5 focus:outline-brandGreen4x bg-white h-11 px-6 w-full py-2 mt-2'>
                            <option value="Select City*" >Select City*</option>
                        </select>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label for="profile_address" className="text-sm font-avenirMedium text-black">Enter Business Address</label>
                        <input type="text" name="address" className="placeholder:text-brandGray50x placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base rounded-five border border-brandGray48x form-input focus:outline focus:outline-0.5 focus:outline-brandGreen4x px-6 w-full py-2 mt-2" id="profile_address" placeholder="Business Address*" /> 
                    </div>
                    

                </div>
                <ButtonNoIcon id={'updateProfileBTN'} type={'button'} text={'Update Profile'} textColor={'text-white'} paddingX={'px-8 sm:px-10 lg:px-16'} bgColor={'bg-brandGreen4x'} font={'font-avenirMedium'} fontSize={'text-base'}/>
            </form>
        </div>

    </TemplatePage>
  )
}

export default Profile