import React from 'react'
import UserInsightData from '../../../data/Overview/UserInsightData'
import UserInsightRow from './UserInsightRow'


const UserInsightTable = ({data, rows}) => {

    let slicedRows = data.slice(0, rows)
    // console.log("data =>", data);
    
    // let slicedRows = UserInsightData.slice(0, rows)

    const formatDate = (date) => {
      // 1. Create a new Date object from the timestamp string
      const timestamp = new Date(date);

      // 2. Extract the day, month, and year from the Date object
      const day = timestamp.getUTCDate();
      const month = timestamp.getUTCMonth() + 1; // Months are zero-indexed, so add 1 to get the actual month number
      const year = timestamp.getUTCFullYear();

      // 3. Format the date string in the desired format
      const dateStr = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
      return dateStr
    }

  return (
    <table id='userInsightTable' key='userInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium'>
        <tr className='border-b-0.5 border-b-brandGray27x'>
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
        <tr className=''>
            <td className='py-2'></td>
          </tr>
        </thead>
        <tbody className=''>

            {slicedRows.map((data, index)=>{
                return <UserInsightRow id={`userInsight${index+1}`} avatar={data.avatarUrl} name={data.name} points={data.points} rate={data.rate} status={data.status} location={data.city} date={formatDate(data.createdAt)} />
            })}
            
        </tbody>
    </table>
  )
}

export default UserInsightTable