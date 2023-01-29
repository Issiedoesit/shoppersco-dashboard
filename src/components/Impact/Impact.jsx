import React from 'react'
import {useDocTitle} from './../../customHooks/DocumentTitle'
import Header from './../Header/Header'
import ImpactAside from './ImpactAside/ImpactAside'
import InsightImpact from './InsightImpact/InsightImpact'



const Impact = () => {
  useDocTitle('ShoppersBag | Impact')


  return (
    <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
      <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Impact"/>
        <div className='pb-10 overflow-y-auto'>

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          <InsightImpact />
          <ImpactAside />
        </section>

        </div>
      </div>
    </div>
  )
}

export default Impact