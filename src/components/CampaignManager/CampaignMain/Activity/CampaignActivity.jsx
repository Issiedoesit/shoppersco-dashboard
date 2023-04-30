import axios from 'axios'
import React, { useState } from 'react'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import UseAuth from '../../../../utils/UseAuth'
import Header from '../../../Header/Header'
import ActivityAside from './ActivityAside/ActivityAside'
import ActivityInsight from './ActivityInsight/ActivityInsight'
import useSWR from 'swr'
import { useLocation } from 'react-router-dom'
import Loading from '../../../Elements/Loaders/Loading'


const CampaignActivity = () => {
    useDocTitle(`ShoppersBag | Campaign Activity - Mother Earth Campaign`)


    const location = useLocation()
    const campaignID = new URLSearchParams(location.search).get('id')
    console.log(campaignID);


    const {token} = UseAuth()
    const fetcher = async (url) => axios.get(url, {headers: {'Authorization':`Bearer ${token}`}})
    const {data, error} = useSWR(`${import.meta.env.VITE_BASE_URL}admin/campaigns/insights`, fetcher)

    if (!data) return <Loading />
    if(error) return <FetchErrorPage />

    const currentCampaign = data.data.data.filter(campaign => campaign.id == campaignID)
    console.log(currentCampaign);

 
    return (
      <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
        <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
        <Header page="Campaign Activity"/>
        <div className='pb-10 overflow-y-auto pt-3.5'>
  
          <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
            <ActivityInsight activityData={currentCampaign} />
            <ActivityAside activityData={currentCampaign} />
          </section>
  
          </div>
        </div>
      </div>
    )
}

export default CampaignActivity