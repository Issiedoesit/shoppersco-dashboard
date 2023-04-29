import React, { useState } from 'react'
import RowListEcoProducers from './RowListEcoProducers'


const TableListEcoProducers = ({isAdmin, filter, data, rows, setIsDropDownOpen, handleModalOpen, handleBadgeAssign, handleProfileView, handleQRCodeView, historyView, cancelOrder}) => {

    const filteredData = data.filter(insight => insight.status == filter)


  let slicedRows = filteredData.slice(0, rows)


  

  return (
    <table id='ecoBagInsightTable' className='table table-auto w-full text-left h-fit'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                <input type="checkbox" name="master-check-ecobag-insight" id="masterCheckEcoBagInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                Name
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>
                {/* modal */}
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                Badge
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                KYC Status
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                Location
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                Quantity
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

          {slicedRows.map((insight, idx)=>{
            const partner = insight.partner
            const producer = insight.producer
            const user = insight.partner.user
            return <RowListEcoProducers key={idx} setIsDropDownOpen={setIsDropDownOpen} index={idx} isAdmin={isAdmin} handleKYCModal={()=>handleModalOpen(insight.id, idx)} name={partner.name} quantity={insight.quantity} user={producer.name} handleBadgeAssign={handleBadgeAssign} handleProfileView={handleProfileView} handleQRCodeView={handleQRCodeView} historyView={historyView} cancelOrder={cancelOrder} kycStatus={'partner.kyc.status'} location={insight.city} />
          })}
            
        </tbody>
    </table>
  )
}

export default TableListEcoProducers