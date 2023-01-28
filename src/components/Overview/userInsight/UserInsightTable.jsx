import React from 'react'
import UserInsightData from '../../../data/Overview/UserInsightData'
import UserInsightRow from './UserInsightRow'


const UserInsightTable = ({rows}) => {

    let slicedRows = UserInsightData.slice(0, rows)

  return (
    <table id='userInsightTable' key='userInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
        <tr>
            <td className='py-2 px-2 whitespace-nowrap'>

                <input type="checkbox" name="master-check-user-insight" id="masterCheckUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
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

            Location
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            Date
            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
            <td className='py-2 px-2 whitespace-nowrap'>

            </td>
        </tr>
        </thead>
        <tbody className=''>

            {slicedRows.map((data, index)=>{
                return <UserInsightRow id={`userInsight${index+1}`} keyprop={`userInsight${index}`} name={data.name} points={data.points} rate={data.rate} status={data.status} location={data.location} date={data.date} />
            })}
            
        </tbody>
    </table>
  )
}

export default UserInsightTable