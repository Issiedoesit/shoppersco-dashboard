import React from 'react'
import StoreInsightData from '../../../data/StoreManager/StoreInsightData'
import formatDate from '../../../utils/Dates/FormatDate'
import StoreInsightRow from './StoreInsightRow'


const StoreInsightTable = ({rows, data, handleKYCModal}) => {

    let slicedRows = data.slice(0, rows)
    

  return (
    <table id='storeInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium'>
        <tr tr className='border-b-0.5 border-b-brandGray27x'>
           <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                <input type="checkbox" name="master-check-store-insight" id="masterCheckStoreInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Name
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Status
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            KYC Status
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Badge
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
              Location
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
              Date
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
              Orders
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            </td>
           </tr>
          <tr className=''>
            <td className='py-2'></td>
          </tr>
        </thead>
        <tbody>

            {slicedRows.map((insight, index)=>{
                const partner = insight.partner
                const user = partner.user
                const kyc = partner.kyc
                return <StoreInsightRow key={index} id={insight.id} avatar={insight.logoUrl || insight.coverImageUrl } name={insight.name} status={insight.status} kyc={kyc.status} badge={insight.badge} location={insight.city} date={formatDate(insight.createdAt)} orders={insight.orders} approval={insight.approval} handleKYCModal={()=>handleKYCModal(insight.id)} />
            })}
            
        </tbody>
    </table>
  )
}

export default StoreInsightTable