import React from 'react'
import TableImpactInsight from '../../InsightImpact/TableImpactInsight'
import ButtonIcon from './../../../Buttons/ButtonIcon'
import ChartStateImpact from './ChartStateImpact/ChartStateImpact'
import TableStateImpact from './ChartStateImpact/TableStateImpact'

const InsightStateImpact = () => {

  return (
    <div className='rounded-ten bg-white col-span-4 py-9 px-6 min-h-screen lg:min-h-0'>
      
    <div className='pb-4'>
         <h1 className='font-avenirMedium text-2xl whitespace-nowrap'>Delta State</h1>
    </div>


    <div className='space-y-4'>
      <ChartStateImpact />
      <TableStateImpact />
    </div>
  </div>
  )
}

export default InsightStateImpact