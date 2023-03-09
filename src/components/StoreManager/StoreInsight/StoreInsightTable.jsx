import React from 'react'
import StoreInsightData from '../../../data/StoreManager/StoreInsightData'
import StoreInsightRow from './StoreInsightRow'


const StoreInsightTable = ({rows}) => {

    let slicedRows = StoreInsightData.slice(0, rows)
    

  return (
    <table id='storeInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium'>
        <tr tr className='border-b-0.5 border-b-brandGray27x'>
           <td className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-store-insight" id="masterCheckStoreInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Name
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Status
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            KYC Status
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Badge
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
              Location
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
              Date
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
              Orders
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
           </tr>
          <tr className=''>
            <td className='py-2'></td>
          </tr>
        </thead>
        <tbody>

            {slicedRows.map((data, index)=>{
                return <StoreInsightRow id={data.id} keyprop={data.id} name={data.name} points={data.points} rate={data.rate} status={data.status} kyc={data.kyc} badge={data.badge} location={data.location} date={data.date} orders={data.orders} approval={data.approval} />
            })}
            
        </tbody>
    </table>
  )
}

export default StoreInsightTable