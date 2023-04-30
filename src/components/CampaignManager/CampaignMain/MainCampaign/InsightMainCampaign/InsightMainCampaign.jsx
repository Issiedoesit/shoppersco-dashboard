import React, { useState } from 'react'
import CampaignPopUp from '../../../../PopUps/Campaign/CampaignPop'
import TableMainCampaign from './TableMainCampaign'
import SearchTable from '../../../../Elements/Search/SearchTable'


const InsightMainCampaign = ({campaignData}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  const [currentModalIndex, setCurrentModalIndex] = useState(0)
  const [dataLength ,setDataLength] = useState(campaignData.length)

 

  const handleModalOpen = (id, index) => {
    setIsModalOpen(true)
    let tempData = campaignData.filter(data => data.id == id)
    setModalData(tempData)
    setCurrentModalIndex(index)
  }




  return (
    <div className='rounded-ten bg-white col-span-4 py-9 px-6'>
      
       <div className='pb-3 flex flex-col sm:flex-row sm:items-center gap-5 justify-between w-full'>
            <h1 className='font-avenirBlack whitespace-nowrap w-fit'>Campaign Insight</h1>
              <div className='sm:w-sixtyPercent sm:max-w-md'>
                <SearchTable searchId={'campaignInsightSearch'} searchName={'campaign-insight-search'} searchPlaceHolder={'Search by name. date, location or status'} classToSearch={'campaign-insight-row'} />
              </div>
        </div>

        <section>
            <div className='pt-6 overflow-x-auto w-full'>
              <TableMainCampaign handleModalOpen={handleModalOpen} campaignData={campaignData} />
            </div>
        </section>

        <CampaignPopUp isModalOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)} currentIndex={currentModalIndex} modalData={modalData} dataLength={dataLength} moveToModal={setModalData} allCampaigns={campaignData && campaignData} setCurrentIndex={setCurrentModalIndex} />
    </div>
  )
}

export default InsightMainCampaign