import React, { useState } from 'react'
import BrandInsightTable from './TableBrandInsight'
import {useDocTitle} from '../../../customHooks/DocumentTitle'
import OrderPopUp from '../../PopUps/Order/OrderPopUp'
import SearchTable from '../../Elements/Search/SearchTable'






const BrandInsight = ({data}) => {
  useDocTitle('ShoppersBag | Brand Manager')

  const [rows, setRows] = useState(8)
  const [listLength] = useState(data.length)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  


  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)

  }


  const handleModalOpen = (id) => {
    setIsModalOpen(true)
    const tempData = data.filter(insight => insight.id == id)
    setModalData(tempData)
  }
  

 
  
  return (
    <div className='col-span-3 bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-10 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy'>Brand Insight</h4>
            <div className='sm:w-sixtyPercent sm:max-w-md'>
              <SearchTable searchId={'brandInsightSearch'} searchName={'brand-insight-search'} searchPlaceHolder={'Search by name. date, location or status'} classToSearch={'brand-insight-row'} />
            </div>
            
      </div>

      <div className='overflow-x-auto w-full'>
        <BrandInsightTable rows={rows} data={data} handleModalOpen={handleModalOpen} />
      </div>
      <div className='w-full pt-5 flex justify-center'>
        <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
          See more
        </button>
      </div>

      {/* pop up */}
      <OrderPopUp modalData={modalData} modalState={isModalOpen} closeModal={()=>setIsModalOpen(false)} />

    </div>
  )
}

export default BrandInsight;