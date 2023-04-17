import React, { useState } from 'react'
import useMobileNav from '../../customHooks/Stores/useMobileNav'
import CardMetricsData from '../../data/Overview/CardMetricsData'
import NumbersCards from '../Cards/NumbersCards'
import Greeting from '../Header/Greeting'
import NumberCardsSwiper from '../Swipers/NumberCardsSwiper'
import TemplatePage from '../Template'
import {useDocTitle} from "./../../customHooks/DocumentTitle"
import CountryInsight from './CountryInsight'
import UserInsight from './userInsight/UserInsight'
import HeroBtns from './HeroBtns'
import NewCampaignModal from '../PopUps/NewCampaign/NewCampaignModal'
import axios from 'axios'
import useSWR from 'swr'
import { FadeLoader, ScaleLoader } from 'react-spinners'
import FetchErrorPage from '../Elements/Sections/FetchError/FetchErrorPage'



const Overview = () => {
  useDocTitle('ShoppersBag | Overview')
  const mobileNavState = useMobileNav(state => state.showMobileNav)
  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${import.meta.env.VITE_BEARER_TOKEN}`}})
  const stats = useSWR(`${import.meta.env.VITE_BASE_URL}admin/overview/stats`, fetcher)
  const userStats = useSWR(`${import.meta.env.VITE_BASE_URL}admin/overview/users`, fetcher)
  
  if (stats.error || userStats.error) return <FetchErrorPage />
  if (!stats.data || !userStats.data) return <div className='h-full min-h-screen flex flex-col items-center justify-center text-center gap-4 text-brandGreen1x font-avenirMedium'><ScaleLoader color="#009933" /> loading...</div>

  console.error("stats.data", "=>", stats);
  console.error("userStats.error", "=>", userStats);
  stats.data && console.log("stats.data", "=>", stats.data);
  userStats.data && console.log("userStats.data", "=>", userStats.data);
  const statData = stats.data.data.data
  const userStatsData = userStats.data.data.data

  return (
    <TemplatePage headerTitle={'Overview'}>
        <Greeting useBtns={true} headBtns={<HeroBtns btn3Action={handleModalOpen} />} />

      {stats.data.status == 200 && stats.data && statData && <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
        
        {CardMetricsData.map((item, index)=>{
          return <NumbersCards extraClasses={'h-full'} keyprop={`overviewMetric${index+1}`} id={`overviewMetric${index+1}`} header={item.header} metric={item.metric} amount={statData[item.id]} trend={item.trend} percent={item.percent}/>
        }) }

      </div>}

      {/* to swipe cards on mobile  */}

      {statData && <NumberCardsSwiper cardDataSet={CardMetricsData} fetchedStats={statData} cardType={'overviewMetric'} />}

      {/* to swipe cards on mobile  */}

      <section className='flex flex-col-reverse lg:grid grid-cols-5 gap-5'>
          <UserInsight data={userStatsData} />
          <CountryInsight />
      </section>

      <NewCampaignModal isModalOpen={openModal} closeModal={handleModalClose} />

    </TemplatePage>

  )
}

export default Overview