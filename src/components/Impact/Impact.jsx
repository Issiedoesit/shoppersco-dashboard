import React from 'react'
import TemplatePage from '../Template'
import {useDocTitle} from './../../customHooks/DocumentTitle'
import ImpactAside from './ImpactAside/ImpactAside'
import InsightImpact from './InsightImpact/InsightImpact'



const Impact = () => {
  useDocTitle('ShoppersBag | Impact')


  return (
    <TemplatePage headerTitle={'Impact'}>

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          <InsightImpact />
          <ImpactAside />
        </section>

    </TemplatePage>
  )
}

export default Impact