import React from 'react'
import StoreInsightData from '../../../data/StoreManager/StoreInsightData'
import StoreInsightRow from './StoreInsightRow'


const StoreInsightTable = ({rows}) => {

    let slicedRows = StoreInsightData.slice(0, rows)
    

  return (
    <table id='storeInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
           <tr>
           <th className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-store-insight" id="masterCheckStoreInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Name
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Status
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            KYC Status
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Badge
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Location
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Date
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Orders
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
           </tr>
        </thead>
        <tbody>

            {slicedRows.map((data, index)=>{
                return <StoreInsightRow id={data.id} keyProp={index} name={data.name} points={data.points} rate={data.rate} status={data.status} kyc={data.kyc} badge={data.badge} location={data.location} date={data.date} orders={data.orders} approval={data.approval} />
            })}
            
        </tbody>
    </table>
  )
}

export default StoreInsightTable