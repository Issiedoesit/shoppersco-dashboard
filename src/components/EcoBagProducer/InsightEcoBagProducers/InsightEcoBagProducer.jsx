import React, { useState } from 'react'
import TableEcoBagProducerInsight from './TableEcoBagProducerInsight'
import KYCPopUp from '../../PopUps/KYC/KYCPop'
import axios from 'axios'
import UseAuth from '../../../utils/UseAuth'
import SearchTable from '../../Elements/Search/SearchTable'





const EcoBagProducerInsight = ({data}) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  const [rows, setRows] = useState(8)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [listLength] = useState(data.length)
  const [modalDataIndex, setModalDataIndex] = useState(0)

  const moreRows = (add) =>{
    setRows((prevRows) => prevRows + add)

  }

  const handleModalOpen = (id, index) => {
    setIsModalOpen(true)
    const tempData = data.filter(insight => insight.id == id)
    setModalData(tempData)
    setModalDataIndex(index)
    // console.log('PRmodalData =>', modalData);
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

  const {token} = UseAuth()


  const handleApprove = (kycID) => {
    console.log(kycID);

    // null because put request usually requires data and would read the header as the data if null isn't placed there
    axios.put(`${import.meta.env.VITE_BASE_URL}admin/partner/kyc/${kycID}/accept`, null, {headers : {"Authorization":`Bearer ${token}`}})
    .then(response => {
      console.log(response);
      window.requestAnimationFrame(() => {})
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleReject = (kycID) => {
    console.log(kycID);
    axios.put(`${import.meta.env.VITE_BASE_URL}admin/partner/kyc/${kycID}/reject`, null, {headers : {"Authorization":`Bearer ${token}`}})
    .then(response => {
      console.log(response);
      window.requestAnimationFrame(() => {})
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  return (
    <div className='col-span-3 min-h-screen bg-white rounded-ten p-7'>
      <div className='flex flex-col sm:flex-row pb-10 justify-between sm:items-center gap-5'>
            <h4 className='font-avenirHeavy'>Eco-Bag Producer Manager</h4>
            <div className='w-full sm:w-sixtyPercent max-w-md'>
              <SearchTable searchId={'ecoBagInsightSearch'} searchName={'ecobag-insight-search'} classToSearch={'ecobag-insight-row'} />
            </div>
      </div>


      <div className={`overflow-x-auto w-full ${isDropDownOpen ? 'pb-40' : ''} transition-all ease-in-out duration-200 overflow-y-hidden`}>
        <TableEcoBagProducerInsight isAdmin={isAdmin} data={data} rows={rows} handleApprove={handleApprove} handleReject={handleReject} setIsDropDownOpen={setIsDropDownOpen} handleModalOpen={handleModalOpen} handleBadgeAssign={handleBadgeAssign} handleProfileView={handleProfileView} handleQRCodeView={handleQRCodeView} historyView={historyView} cancelOrder={cancelOrder} />
      </div>
      <div className='w-full pt-5 flex justify-center'>
        <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
          See more
        </button>
      </div>

      <KYCPopUp modalState={isModalOpen} closeModal={()=>setIsModalOpen(false)} modalData={modalData} allRequests={data} handleApprove={handleApprove} handleReject={handleReject} setCurrentIndex={setModalDataIndex} moveToModal={setModalData} dataLength={listLength} currentIndex={modalDataIndex} />
    </div>
  )
}

export default EcoBagProducerInsight;