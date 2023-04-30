import React, { useState } from 'react'
import RowEcoBagProducerInsight from './RowEcoBagProducerInsight'


const TableEcoBagProducerInsight = ({isAdmin, data, rows, setIsDropDownOpen, handleApprove, handleReject, handleModalOpen, handleBadgeAssign, handleProfileView, handleQRCodeView, historyView, cancelOrder}) => {

  let slicedRows = data.slice(0, rows)
  

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
            Verify KYC
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            KYC Status
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Badges
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Location
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                Qty of total order
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
            const user = insight.partner.user
            const kyc = insight.partner.kyc
            return <RowEcoBagProducerInsight key={idx} setIsDropDownOpen={setIsDropDownOpen} kycID={kyc.id} index={idx} isAdmin={isAdmin} handleKYCModal={()=>handleModalOpen(insight.id, idx)} name={insight.name} user={user.name} handleBadgeAssign={handleBadgeAssign} handleProfileView={handleProfileView} handleQRCodeView={handleQRCodeView} historyView={historyView} cancelOrder={cancelOrder} kycStatus={partner.kyc.status} location={insight.city} handleApprove={handleApprove} handleReject={handleReject} />
          })}
            
        </tbody>
    </table>
  )
}

export default TableEcoBagProducerInsight