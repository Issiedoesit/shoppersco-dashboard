import React from 'react'
import { Outlet } from 'react-router-dom'
import CampaignManager from './CampaignManager'



const WrapCampaigns = () => {
  return (
    <div>
        {/* <CampaignManager /> */}

        <Outlet />
    </div>
  )
}

export default WrapCampaigns