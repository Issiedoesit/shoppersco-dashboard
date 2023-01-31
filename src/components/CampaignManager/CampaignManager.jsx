import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import Header from './../Header/Header'
import CampaignAside from './CampaignAside/CampaignAside'
import CampaignMain from './CampaignMain/InsightCampaign/InsightCampaign'


const CampaignManager = () => {
  useDocTitle('ShoppersBag | Campaign Manager')


  return (
    <div className='pb-7 h-screen overflow-hidden'>
      <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Campaign"/>
        <div className='pb-10 overflow-y-auto pt-3.5'>

          <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          <CampaignMain />
          <CampaignAside />
          </section>

        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default CampaignManager