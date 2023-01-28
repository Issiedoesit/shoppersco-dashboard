import React from 'react'
import BrandInsightData from '../../../data/BrandManager/BrandInsightData'
import BrandInsightRow from './RowBrandInsight'


const BrandInsightTable = ({rows}) => {

    let slicedRows = BrandInsightData.slice(0, rows)

  return (
    <table id='brandInsightTable' key={'brandInsightTable'} className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr>
            <td className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-brand-insight" id="masterCheckBrandInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Name
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

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

            Order QTY
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            </tr>
        </thead>
        <tbody>

            {slicedRows.map((data, index)=>{
                return <BrandInsightRow id={`brandInsight${index+1}`} keyprop={`brandSight${index+1}`} name={data.name} owner={data.owner} badge={data.badge} location={data.location} date={data.date} orders={data.orders} />
            })}
            
        </tbody>
    </table>
  )
}

export default BrandInsightTable