import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import TemplatePage from '../Template'
import CampaignAside from './CampaignAside/CampaignAside'
import CampaignMain from './CampaignMain/InsightCampaign/InsightCampaign'


const CampaignManager = () => {
  useDocTitle('ShoppersBag | Campaign Manager')


  return (
    <TemplatePage headerTitle={'Campaign'}>

          <div className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
            <CampaignMain />
            <CampaignAside />
          </div>

    </TemplatePage>
  )
}

export default CampaignManager