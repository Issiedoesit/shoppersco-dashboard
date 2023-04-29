import React from 'react'
import BrandInsightData from '../../../data/BrandManager/BrandInsightData'
import formatDate from '../../../utils/Dates/FormatDate'
import BrandInsightRow from './RowBrandInsight'


const BrandInsightTable = ({rows, data, handleModalOpen}) => {

    let slicedRows = data.slice(0, rows)

  return (
    <table id='brandInsightTable' key={'brandInsightTable'} className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                <input type="checkbox" name="master-check-brand-insight" id="masterCheckBrandInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Name
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

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

            Order QTY
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
                return <BrandInsightRow id={insight.id} avatar={insight.logoUrl ? insight.logoUrl : insight.coverImageUrl} key={index} name={insight.name} owner={insight.owner} badge={insight.badge} location={insight.city} date={formatDate(insight.createdAt)} orders={insight.orders} handlePrModalOpen={()=>handleModalOpen(insight.id)} />
            })}
            
        </tbody>
    </table>
  )
}

export default BrandInsightTable