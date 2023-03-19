import React from 'react'

const FilterBy = () => {
  return (
    <div className='pb-5 text-sm flex flex-col lg:flex-row items-center gap-5'>
        <p className='whitespace-nowrap w-fit self-start'>Filter by:</p>

        <div className='flex flex-col md:flex-row items-center gap-5 justify-between w-full'>
        <div className='flex flex-row gap-5 self-start overflow-x-auto w-full'>
            <label htmlFor="selectCampaignCountry">
            <select name="select-campaign-country" id="selectCampaignCountry" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-11 border-0.5 pl-2 border-brandGray34x'>
                <option value="Select country" selected disabled>Select country</option>
            </select>
            </label>
            <label htmlFor="selectCampaignCity">
            <select name="select-campaign-city" id="selectCampaignCity" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-11 border-0.5 pl-2 border-brandGray34x'>
                <option value="Select City" selected disabled>Select City</option>
            </select>
            </label>
            <label htmlFor="selectCampaignDuration">
            <select name="select-campaign-duration" id="selectCampaignDuration" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-11 border-0.5 pl-2 border-brandGray34x'>
                <option value="Select Duration" selected disabled>Select Duration</option>
            </select>
            </label>
        </div>
        </div>
    </div>
  )
}

export default FilterBy