import React from 'react'
import RowInsightPartnerInventory from './RowInsightPartnerInventory'

const TableInsightPartnerInventory = () => {
  return (
    <table id='campaignInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 px-2 whitespace-nowrap'>
                    <input type="checkbox" name="master-check-state-insight" id="masterCheckStateInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Order
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Order Data
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Order Quantity
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Generate Tag
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Track Order
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Track Order
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>

        <tbody>

            <RowInsightPartnerInventory id={'partnerInventoryInsight1'} keyprop={'0'} name={'Mk'} state={'Rivers State'} orderData={'4,000g'} orderQuantity={'231,231,342'} generateTag={'231,231,342'} startDate={'08-10-2022'} endDate={'08-12-2022'} trackOrder={'Raffle'}/>
            <RowInsightPartnerInventory id={'partnerInventoryInsight2'} keyprop={'1'} name={'Mk'} state={'Rivers State'} orderData={'4,000g'} orderQuantity={'231,231,342'} generateTag={'231,231,342'} startDate={'08-10-2022'} endDate={'08-12-2022'} trackOrder={'Discount'}/>

        </tbody>
        
    </table>
  )
}

export default TableInsightPartnerInventory