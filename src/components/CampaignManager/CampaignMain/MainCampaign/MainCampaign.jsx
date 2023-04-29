import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'
import FilterBy from '../../../Elements/Sections/FilterBy'
import TemplatePage from '../../../Template'
import CampaignAside from '../../CampaignAside/CampaignAside'
import CampaignMain from '../InsightCampaign/InsightCampaign'
import InsightMainCampaign from './InsightMainCampaign/InsightMainCampaign'

const MainCampaign = () => {
    const campaignState = useCampaignStore(state => state.currentCampaignState)
    useDocTitle(`ShoppersBag | Campaign Manager - ${campaignState.charAt(0).toUpperCase() + campaignState.slice(1)}`)
    const location = useLocation()
    console.log(location);

  return (
    <TemplatePage headerTitle={'Campaign'}>

        <FilterBy />

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
        <InsightMainCampaign />
        <CampaignAside />
        </section>
    </TemplatePage>
  )
}

export default MainCampaign