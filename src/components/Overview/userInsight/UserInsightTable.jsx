import React from 'react'
import formatDate from '../../../utils/Dates/FormatDate'
import UserInsightRow from './UserInsightRow'


const UserInsightTable = ({data, rows}) => {

    let slicedRows = data.slice(0, rows)
    // console.log("data =>", data);
    
    // let slicedRows = UserInsightData.slice(0, rows)

    

  return (
    <table id='userInsightTable' key='userInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium'>
        <tr className='border-b-0.5 border-b-brandGray27x'>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

                <input type="checkbox" name="master-check-user-insight" id="masterCheckUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
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

            Location
            </td>
            <td className='py-2 pl-2 pr-5 whitespace-nowrap'>

            Date
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
        <tbody className=''>

            {slicedRows.map((data, index)=>{
                return <UserInsightRow id={data.id} key={index} avatar={data.avatarUrl} name={data.name} points={data.points} rate={data.rate} status={data.status} location={data.city} date={formatDate(data.createdAt)} />
            })}
            
        </tbody>
    </table>
  )
}

export default UserInsightTable