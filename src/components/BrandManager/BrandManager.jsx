import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import BrandMetricsData from '../../data/BrandManager/BrandCardsMetricsData'
import ButtonIcon from '../Buttons/ButtonIcon'
import NumbersCards from '../Cards/NumbersCards'
import NumberCardsSwiper from '../Swipers/NumberCardsSwiper'
import TemplatePage from '../Template'
import BrandInsight from './BrandInsight/InsightBrand'
import axios from 'axios'
import useSWR from 'swr'
import Loading from '../Elements/Loaders/Loading'
import FetchErrorPage from '../Elements/Sections/FetchError/FetchErrorPage'




const BrandManager = () => {
  useDocTitle('ShoppersBag | Brand Manager')

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${import.meta.env.VITE_BEARER_TOKEN}`}})
  const fetchedBrandStats = useSWR(`${import.meta.env.VITE_BASE_URL}admin/brands/stats`, fetcher)
  const fetchedBrandInsights = useSWR(`${import.meta.env.VITE_BASE_URL}admin/brands/insights`, fetcher)

  if (fetchedBrandStats.error || fetchedBrandInsights.error) return <FetchErrorPage />
  if (!fetchedBrandStats.data  || !fetchedBrandInsights.data) return <Loading />
  console.log("BrandStats  => ", fetchedBrandStats.data);
  console.log("fetchedBrandInsights  => ", fetchedBrandInsights.data);

  const brandStatsData = fetchedBrandStats.data.data.data
  const brandInsightsData = fetchedBrandInsights.data.data.data
  console.log(brandInsightsData);


  return (
    <TemplatePage headerTitle={'Brand Manager'}>

      <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>

          {BrandMetricsData.map((data, index)=>{
            return <NumbersCards id={`brandMetric${index+1}`} key={index} header={data.header} metric={data.metric} amount={brandStatsData ? brandStatsData[data.id] : data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
          })}

        </div>

        {/* to swipe cards on mobile  */}

          <NumberCardsSwiper cardDataSet={BrandMetricsData} fetchedStats={brandStatsData} cardType={'brandMetric'} />

        {/* to swipe cards on mobile  */}

        <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
          <ButtonIcon text={'Production Request'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
        </div>

        <section className=''>
          <BrandInsight data={brandInsightsData} />
        </section>


        {/* Pop Up */}
        {/* <UserPopUp /> */}

      </TemplatePage>
  )
}

export default BrandManager