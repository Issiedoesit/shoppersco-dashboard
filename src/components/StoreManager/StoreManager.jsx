import React from 'react'
import StoreMetricsData from '../../data/StoreManager/StoreCardsMetricData'
import NumbersCards from '../Cards/NumbersCards'
import ButtonIcon from './../Buttons/ButtonIcon'
import ButtonNoIcon from './../Buttons/ButtonNoIcon'
import StoreInsight from './StoreInsight/StoreInsight'
import {useDocTitle} from './../../customHooks/DocumentTitle'
import UserPopUp from '../PopUps/User/UserPopUp'
import NumberCardsSwiper from '../Swipers/NumberCardsSwiper'
import TemplatePage from '../Template'
import axios from 'axios'
import useSWR from 'swr'
import Loading from '../Elements/Loaders/Loading'
import FetchErrorPage from '../Elements/Sections/FetchError/FetchErrorPage'
import UseAuth from '../../utils/UseAuth'







const StoreManager = () => {
  useDocTitle('ShoppersBag | Store Manager')

  const {token} = UseAuth()
 

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${token}`}})
  const fetchedStoreStats = useSWR(`${import.meta.env.VITE_BASE_URL}admin/stores/stats`, fetcher)
  const fetchedStoreInsights = useSWR(`${import.meta.env.VITE_BASE_URL}admin/stores/insights`, fetcher)

  if (fetchedStoreStats.error || fetchedStoreInsights.error) return <FetchErrorPage />
  if (!fetchedStoreStats.data  || !fetchedStoreInsights.data) return <Loading />
  console.log("StoreStats  => ", fetchedStoreStats.data);
  console.log("fetchedStoreInsights  => ", fetchedStoreInsights.data);

  const storeStatsData = fetchedStoreStats.data.data.data
  const storeInsightsData = fetchedStoreInsights.data.data.data
  console.log(storeInsightsData);

  return (
   <TemplatePage headerTitle={'Store Manager'}>

        <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
        
            {StoreMetricsData.map((data, index)=>{
              return <NumbersCards id={`storeMetric${index}`} key={`storeMetric${index}`} header={data.header} metric={data.metric} amount={storeStatsData ? storeStatsData[data.id] : data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
            })}

         </div>

         {/* to swipe cards on mobile  */}

          <NumberCardsSwiper cardDataSet={StoreMetricsData} fetchedStats={storeStatsData} cardType={'storeMetric'} />

        {/* to swipe cards on mobile  */}

         <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
            <ButtonNoIcon text={'Download CSV'} fontSize={'text-xxs'} textColor={'text-brandGray35x'} border={'border'} borderColor={'border-brandGray32x'} paddingX={'px-tenPixel'}/>
            <ButtonIcon text={'Add Store'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
         </div>

          
         <section className=''>
            <StoreInsight data={storeInsightsData} />
         </section>


    </TemplatePage>
  )
}

export default StoreManager