import React, { useState } from 'react'
import UserInsightTable from './UserInsightTable'
import SearchTable from '../../Elements/Search/SearchTable'





const UserInsight = ({data}) => {
  
  const [rows, setRows] = useState(8)
  const [listLength] = useState(data.length)


  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)
  }



  
  return (
    <div className='col-span-3 bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-10 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy whitespace-nowrap'>User Insight</h4>
            <div className='w-full sm:w-sixtyPercent'>
              <SearchTable searchId={'userInsightSearch'} searchPlaceHolder={'Search by name. date, location or status'} searchName={'user-insight-search'} classToSearch={'user-insight-row'} />
            </div>
      </div>
      {/* {listLength} */}
      <div className='overflow-x-auto w-full'>
      <UserInsightTable data={data} rows={rows} />
      </div>
      
      {
        listLength > 8 
        &&
        <div className='w-full pt-5 flex justify-center'>
          <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
            See more
          </button>
        </div>
      }
    </div>
  )
}

export default UserInsight