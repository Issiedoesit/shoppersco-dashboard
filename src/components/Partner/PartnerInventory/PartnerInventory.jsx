import React from 'react'
import TemplatePage from '../../Template'
import Greeting from '../../Header/Greeting'
import InsightPartnerInventory from './InsightPartnerInventory/InsightPartnerInventory'

const PartnerInventory = () => {
  return (
    <TemplatePage headerTitle={'Inventory'}>

        <Greeting salutation={'Manage the Inventory'} salutationFontBigger={true} manageInventoryBtn={true} />

        <InsightPartnerInventory />

    </TemplatePage>
  )
}

export default PartnerInventory