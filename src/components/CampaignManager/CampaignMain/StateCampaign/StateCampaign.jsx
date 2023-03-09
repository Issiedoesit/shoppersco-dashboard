import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'
import ButtonIcon from '../../../Buttons/ButtonIcon'
import TemplatePage from '../../../Template'
import CampaignAside from '../../CampaignAside/CampaignAside'
import CampaignStateMain from './InsightState/StateInsightCampaign'

const StateCampaign = () => {
    const campaignState = useCampaignStore(state => state.currentCampaignState)
    useDocTitle(`ShoppersBag | Campaign Manager - ${campaignState.charAt(0).toUpperCase() + campaignState.slice(1)}`)
    const location = useLocation()
    console.log(location);

  return (
    <TemplatePage headerTitle={'Campaign'}>

        <div className='pb-5 text-sm flex flex-col lg:flex-row items-center gap-5'>
          <p className='whitespace-nowrap w-fit self-start'>Filter by:</p>

          <div className='flex flex-col md:flex-row items-center gap-5 justify-between w-full'>
            <div className='flex flex-row gap-5 self-start overflow-x-auto w-full'>
              <label htmlFor="selectCampaignCountry">
                <select name="select-campaign-country" id="selectCampaignCountry" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-10 border-0.5 pl-2 border-brandGray34x'>
                  <option value="Select country" selected disabled>Select country</option>
                </select>
              </label>
              <label htmlFor="selectCampaignCity">
                <select name="select-campaign-city" id="selectCampaignCity" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-10 border-0.5 pl-2 border-brandGray34x'>
                  <option value="Select City" selected disabled>Select City</option>
                </select>
              </label>
              <label htmlFor="selectCampaignDuration">
                <select name="select-campaign-duration" id="selectCampaignDuration" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-10 border-0.5 pl-2 border-brandGray34x'>
                  <option value="Select Duration" selected disabled>Select Duration</option>
                </select>
              </label>
            </div>

            <div className='self-end'>
              <ButtonIcon text={'New Campaign'} bgColor={'bg-brandGreen4x'} textColor={'text-white'} borderColor={'rounded-ten'} paddingX={'px-2 sm:px-5'} fontSize={'text-sm'} />
            </div>
          </div>
        </div>

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
        <CampaignStateMain />
        <CampaignAside />
        </section>
    </TemplatePage>
  )
}

export default StateCampaign