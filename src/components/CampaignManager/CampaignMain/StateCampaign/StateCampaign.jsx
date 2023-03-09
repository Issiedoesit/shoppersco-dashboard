import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'
import ButtonIcon from '../../../Buttons/ButtonIcon'
import FilterBy from '../../../Elements/Sections/FilterBy'
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

        <FilterBy />

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
        <CampaignStateMain />
        <CampaignAside />
        </section>
    </TemplatePage>
  )
}

export default StateCampaign