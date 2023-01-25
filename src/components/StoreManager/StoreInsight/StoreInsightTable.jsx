import React from 'react'
import StoreInsightData from '../../../data/StoreManager/StoreInsightData'
import StoreInsightRow from './StoreInsightRow'


const StoreInsightTable = ({rows}) => {

    let slicedRows = StoreInsightData.slice(0, rows)

  return (
    <table id='storeInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <th className='py-2'>
                <input type="checkbox" name="master-check-store-insight" id="masterCheckStoreInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </th>
            <th className='py-2'>
            </th>
            <th className='py-2'>
            Name
            </th>
            <th className='py-2'>
            Status
            </th>
            <th className='py-2'>
            KYC Status
            </th>
            <th className='py-2'>
            Badge
            </th>
            <th className='py-2'>
            Location
            </th>
            <th className='py-2'>
            Date
            </th>
            <th className='py-2'>
            Orders
            </th>
            <th className='py-2'>
            </th>
            <th className='py-2'>
            </th>
        </thead>
        <tbody>

            {slicedRows.map((data, index)=>{
                return <StoreInsightRow id={'storeInsight'+(index+1)} key={index} name={data.name} points={data.points} rate={data.rate} status={data.status} kyc={data.kyc} badge={data.badge} location={data.location} date={data.date} orders={data.orders} approval={data.approval} />
            })}
            
        </tbody>
    </table>
  )
}

export default StoreInsightTable