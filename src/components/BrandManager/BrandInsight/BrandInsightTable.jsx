import React from 'react'
import BrandInsightData from '../../../data/BrandManager/BrandInsightData'
import BrandInsightRow from './BrandInsightRow'


const BrandInsightTable = ({rows}) => {

    let slicedRows = BrandInsightData.slice(0, rows)

  return (
    <table id='brandInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <th className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-brand-insight" id="masterCheckBrandInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            Name
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

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

            Order QTY
            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
            <th className='py-2 px-2 whitespace-nowrap'>

            </th>
        </thead>
        <tbody>

            {slicedRows.map((data, index)=>{
                return <BrandInsightRow id={'brandInsight'+(index+1)} keyProp={index} name={data.name} owner={data.owner} badge={data.badge} location={data.location} date={data.date} orders={data.orders} />
            })}
            
        </tbody>
    </table>
  )
}

export default BrandInsightTable