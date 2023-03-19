import React from 'react'
import { useDocTitle } from '../../../customHooks/DocumentTitle'
import StateImpactAside from './StateImpactAside/StateImpactAside'
import InsightStateImpact from './InsightStateImpact/InsightStateImpact'
import TemplatePage from '../../Template'

const StateImpact = () => {
  useDocTitle(`ShoppersBag | Campaign Manager - Delta`)
 
  return (
    <TemplatePage headerTitle={'Impact'}>

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          <InsightStateImpact />
          <StateImpactAside />
        </section>

    </TemplatePage>
  )
}

export default StateImpact