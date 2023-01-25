import React from 'react'
import UserInsightData from '../../../data/Overview/UserInsightData'
import UserInsightRow from './UserInsightRow'


const UserInsightTable = ({rows}) => {

    let slicedRows = UserInsightData.slice(0, rows)

  return (
    <table id='userInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <th className='py-2'>
                <input type="checkbox" name="master-check-user-insight" id="masterCheckUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
            </th>
            <th className='py-2'>
            </th>
            <th className='py-2'>
            Name
            </th>
            <th className='py-2'>
            Status
            </th>
            <th className='py-2'>
            Location
            </th>
            <th className='py-2'>
            Date
            </th>
            <th className='py-2'>
            </th>
            <th className='py-2'>
            </th>
        </thead>
        <tbody className=''>

            {slicedRows.map((data, index)=>{
                return <UserInsightRow id={'userInsight'+(index+1)} key={index} name={data.name} points={data.points} rate={data.rate} status={data.status} location={data.location} date={data.date} />
            })}
            
        </tbody>
    </table>
  )
}

export default UserInsightTable