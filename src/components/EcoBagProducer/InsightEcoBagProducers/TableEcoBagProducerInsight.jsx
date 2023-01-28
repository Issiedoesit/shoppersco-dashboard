import React from 'react'
import RowEcoBagProducerInsight from './RowEcoBagProducerInsight'


const TableEcoBagProducerInsight = () => {
  return (
    <table id='ecoBagInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr>
            <td className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-ecobag-insight" id="masterCheckEcoBagInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Name
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>
            Verify KYC
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            KYC Status
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Badges
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Location
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

                Qty of total order
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            </tr>
        </thead>
        <tbody>

        <RowEcoBagProducerInsight id={'ecoBagInsight1'} keyprop={'0'} name={'data.name'} kycStatus={'verified'} badge={'Eco-friendly'} location={'data.location'} orders={'data.orders'} />
        <RowEcoBagProducerInsight id={'ecoBagInsight2'} keyprop={'1'} name={'data.name'} kycStatus={'unverified'} badge={'Eco-friendly'} location={'data.location'} orders={'data.orders'} />
            
        </tbody>
    </table>
  )
}

export default TableEcoBagProducerInsight