import React from 'react'
import { useDocTitle } from '../../../../customHooks/DocumentTitle'
import Header from '../../../Header/Header'
import ActivityAside from './ActivityAside/ActivityAside'
import ActivityInsight from './ActivityInsight/ActivityInsight'



const CampaignActivity = () => {
    useDocTitle(`ShoppersBag | Campaign Activity - Mother Earth Campaign`)
 
    return (
      <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
        <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
        <Header page="Campaign Activity"/>
        <div className='pb-10 overflow-y-auto pt-3.5'>
  
          <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
            <ActivityInsight />
            <ActivityAside />
          </section>
  
          </div>
        </div>
      </div>
    )
}

export default CampaignActivity