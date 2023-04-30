import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import useCampaignStore from '../../../../customHooks/Stores/campaignStateStore'
import FilterBy from '../../../Elements/Sections/FilterBy'
import TemplatePage from '../../../Template'
import CampaignAside from '../../CampaignAside/CampaignAside'
import InsightMainCampaign from './InsightMainCampaign/InsightMainCampaign'
import axios from 'axios'
import useSWR from 'swr'
import UseAuth from '../../../../utils/UseAuth'
import FetchErrorPage from '../../../Elements/Sections/FetchError/FetchErrorPage'
import Loading from '../../../Elements/Loaders/Loading'

const MainCampaign = () => {
    const campaignState = useCampaignStore(state => state.currentCampaignState)
    useDocTitle(`ShoppersBag | Campaign Manager - ${campaignState.charAt(0).toUpperCase() + campaignState.slice(1)}`)
    const {token} = UseAuth()
    const location = useLocation()



    
    const fetcher = async (url) => axios.get(url, {headers: {"Authorization":`Bearer ${token}`}})
    const fetchedCampaignData = useSWR(`${import.meta.env.VITE_BASE_URL}admin/campaigns/insights`, fetcher)

    if (fetchedCampaignData.error) return <FetchErrorPage />
    if (!fetchedCampaignData.data) return <Loading />



    const campaignData = fetchedCampaignData.data.data.data
  
    console.log("fetchedCampaignData => ", fetchedCampaignData.data.data.data)

    console.log(location);

  return (
    <TemplatePage headerTitle={'Campaign'}>

        <FilterBy />

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
        <InsightMainCampaign campaignData={campaignData} />
        <CampaignAside />
        </section>
    </TemplatePage>
  )
}

export default MainCampaign