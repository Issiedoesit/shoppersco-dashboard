import React, { useState } from 'react'
import { useSearchTables } from '../../../customHooks/SearchTables'
import ButtonIcon from './../../Buttons/ButtonIcon'
import TableImpactInsight from './TableImpactInsight'

const InsightImpact = () => {

  const [ handleSearch, handleBlur ] = useSearchTables('', 'impact-insight-row')


  
  return (
    <div className='rounded-ten bg-white col-span-4 py-9 px-6 min-h-screen lg:min-h-0'>
      
    <div className='pb-3 flex flex-col sm:flex-row md:items-center gap-5 sm:gap-10'>
         <h1 className='font-avenirBlack whitespace-nowrap'>Impact Insight</h1>
         <div className='flex flex-col md:flex-row w-full gap-3 items-end'>
           <ButtonIcon text={'New Campaign'} bgColor={'bg-brandGreen4x'} textColor={'text-white'} borderColor={'rounded-ten'} paddingX={'px-2 sm:px-5'} fontSize={'text-sm'} />
           <label htmlFor="impactInsightSearch" className='rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 border-brandGray4x w-full sm:w-sixtyPercent max-w-md'>
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
             <input onChange={handleSearch} onBlur={handleBlur} type="search" name="impact-insight-search" id="impactInsightSearch" placeholder='Search by name. date, location or status' className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
         </label>
         </div>
    </div>


    <div className='overflow-x-auto w-full'>
      <TableImpactInsight />
    </div>
  </div>
  )
}

export default InsightImpact