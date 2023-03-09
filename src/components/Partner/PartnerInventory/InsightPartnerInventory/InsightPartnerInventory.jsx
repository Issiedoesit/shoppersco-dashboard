import React from 'react'
import { useSearchTables } from '../../../../customHooks/SearchTables'
import CampaignPopUp from '../../../PopUps/Campaign/CampaignPop'
import TableInsightPartnerInventory from './TableInsightPartnerInventory'

const InsightPartnerInventory = () => {

    const [ handleSearch, handleBlur ] = useSearchTables('', 'partner-inventory-insight-row')


  return (
    <div className='rounded-ten bg-white col-span-4 py-9 px-6'>
      
       <div className='pb-3 flex flex-col sm:flex-row sm:items-center gap-5 justify-between w-full'>
            <h1 className='font-avenirBlack whitespace-nowrap w-fit'>Inventory Insight</h1>
              <label htmlFor="campaignInsightSearch" className='rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 border-brandGray4x sm:w-sixtyPercent sm:max-w-md'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="search" onChange={handleSearch} onBlur={handleBlur} name="campaign-insight-search" id="campaignInsightSearch" placeholder='Search by name. date, location or status' className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
            </label>
        </div>


        <section>
            <div className='pt-6 overflow-x-auto w-full'>
              <TableInsightPartnerInventory />
            </div>
        </section>

        <CampaignPopUp />
    </div>
  )
}

export default InsightPartnerInventory