import React from 'react'
import ButtonIcon from '../../Buttons/ButtonIcon'
import CampaignStateMain from '../../CampaignManager/CampaignMain/StateCampaign/InsightState/StateInsightCampaign'
import FilterBy from '../../Elements/Sections/FilterBy'
import Greeting from '../../Header/Greeting'
import TemplatePage from '../../Template'

const Campaign = () => {
  return (
    <TemplatePage headerTitle={'Campaign'}>
        <Greeting headBtns2={true} salutation={' Welcome to Shoppersbag\'s Campaigns'} salutationFontBigger={true} />

        <FilterBy />

        <CampaignStateMain />
    </TemplatePage>
  )
}

export default Campaign