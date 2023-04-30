import React, { useState } from 'react'
import PrRequestPop from '../../PopUps/ProductionRequest/PrRequestPop'
import TableListEcoProducers from './TableListEcoProducers'
import axios from 'axios'
import useSWR from 'swr'
import Loading from '../../Elements/Loaders/Loading'
import FetchErrorPage from '../../Elements/Sections/FetchError/FetchErrorPage'
import UseAuth from '../../../utils/UseAuth'
import SearchTable from '../../Elements/Search/SearchTable'





const InsightListEcoProducers = ({data}) => {
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
            <div className='w-full sm:w-sixtyPercent max-w-md'>
              <SearchTable searchId={'ecoBagProdOrdersInsightSearch'} searchName={'ecobag-insight-prod-orders-search'} classToSearch={'ecobag-insight-list-row'} />
            </div>
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