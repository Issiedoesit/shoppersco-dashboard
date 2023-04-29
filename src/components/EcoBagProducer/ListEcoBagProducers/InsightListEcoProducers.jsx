import React, { useState } from 'react'
import { useSearchTables } from '../../../customHooks/SearchTables'
import PrRequestPop from '../../PopUps/ProductionRequest/PrRequestPop'
import TableListEcoProducers from './TableListEcoProducers'
import axios from 'axios'
import useSWR from 'swr'
import Loading from '../../Elements/Loaders/Loading'
import FetchErrorPage from '../../Elements/Sections/FetchError/FetchErrorPage'
import UseAuth from '../../../utils/UseAuth'





const InsightListEcoProducers = ({data}) => {
  const [ handleSearch, handleBlur ] = useSearchTables('', 'ecobag-insight-list-row')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  const [tab, setTab] = useState('pending')
  const [rows, setRows] = useState(8)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [listLength] = useState(data.length)
  const [modalDataIndex, setModalDataIndex] = useState(0)

  const {token} = UseAuth()

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${token}`}})
  const fetchedProducers = useSWR(`${import.meta.env.VITE_BASE_URL}admin/producers/insights`, fetcher)

  if (fetchedProducers.error) return <FetchErrorPage />
  if (!fetchedProducers.data) return <Loading />
  console.log("fetchedProducers  => ", fetchedProducers.data);

  const producersData = fetchedProducers.data.data.data
  console.log(producersData);

  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)

  }

  const tabData = [
    {
      id:"pending",
      text:"Incoming Orders"
    },
    {
      id:"processed",
      text:"Processed Orders"
    },
    {
      id:"completed",
      text:"Completed Orders"
    }
  ]

  const handleModalOpen = (id, index) => {
    setIsModalOpen(true)
    const tempData = data.filter(insight => insight.id == id)
    setModalData(tempData)
    setModalDataIndex(index)
    console.log('PRmodalData =>', modalData);
  }


  const tabTogglers = document.querySelectorAll('.toggle-btn');

    tabTogglers && tabTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const currentTab = toggler.getAttribute('data-tab');

        // scroll to the active tab toggler's element horizontally
        const activeToggler = document.querySelector(`[data-tab="${currentTab}"]`);
        activeToggler.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    });

  const handleBadgeAssign = (id) => {

  }
  const handleProfileView = (id) => {

  }
  const handleQRCodeView = (id) => {

  }
  const historyView = (id) => {

  }
  const cancelOrder = (id) => {

  }
  
  return (
    <div className='col-span-3 min-h-screen bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-10 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy'>Eco-friendly Bag Producer List</h4>
            <label htmlFor="ecoBagInsightSearch" className='rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 border-brandGray4x sm:w-sixtyPercent max-w-md'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input onChange={handleSearch} onBlur={handleBlur} type="search" name="ecobag-insight-search" id="ecoBagInsightSearch" placeholder='Search by name. date, location or status' className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
            </label>
      </div>

      <div className=' w-full  overflow-auto'>
        <div className='w-fit flex mx-auto items-center pb-10'>
            {
              tabData.map((data, idx)=>{
                return <button key={idx} data-tab={data.id} onClick={()=>setTab(data.id)} className={`px-3 pb-1 ${tab == data.id ? 'border-b-brandGreen5x text-brandGreen5x' : 'border-b-brandGray27x hover:text-brandGreen5x/80 hover:border-brandGreen5x/80'} toggle-btn transition-all ease-in-out duration-500 whitespace-nowrap text-sm border-b-2 `} aria-label={`Switch to ${data.text}`}>{data.text}</button>
              })
            }
        </div>
      </div>


      <div className={`overflow-x-auto w-full ${isDropDownOpen ? 'pb-40' : ''} transition-all ease-in-out duration-200 overflow-y-hidden`}>
        <TableListEcoProducers data={data} rows={rows} filter={tab} setIsDropDownOpen={setIsDropDownOpen} handleModalOpen={handleModalOpen} handleBadgeAssign={handleBadgeAssign} handleProfileView={handleProfileView} handleQRCodeView={handleQRCodeView} historyView={historyView} cancelOrder={cancelOrder} />
      </div>
      <div className='w-full pt-5 flex justify-center'>
        <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
          See more
        </button>
      </div>

      <PrRequestPop modalState={isModalOpen} allRequests={data} setCurrentIndex={setModalDataIndex} moveToModal={setModalData} dataLength={listLength} currentIndex={modalDataIndex} closeModal={()=>setIsModalOpen(false)} modalData={modalData} /> 
      {/* <OrderPopUp modalState={isModalOpen} closeModal={()=>setIsModalOpen(false)} modalData={modalData}  /> */}
    </div>
  )
}

export default InsightListEcoProducers;