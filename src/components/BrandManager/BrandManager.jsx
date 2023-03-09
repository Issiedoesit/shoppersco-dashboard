import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import BrandMetricsData from '../../data/BrandManager/BrandCardsMetricsData'
import ButtonIcon from '../Buttons/ButtonIcon'
import NumbersCards from '../Cards/NumbersCards'
import PrRequestPop from '../PopUps/ProductionRequest/PrRequestPop'
import UserPopUp from '../PopUps/User/UserPopUp'
import NumberCardsSwiper from '../Swipers/NumberCardsSwiper'
import TemplatePage from '../Template'
import BrandInsight from './BrandInsight/InsightBrand'




const BrandManager = () => {
  useDocTitle('ShoppersBag | Brand Manager')


  return (
    <TemplatePage headerTitle={'Brand Manager'}>

      <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>

          {BrandMetricsData.map((data, index)=>{
            return <NumbersCards id={`brandMetric${index+1}`} keyprop={index} header={data.header} metric={data.metric} amount={data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
          })}

        </div>

        {/* to swipe cards on mobile  */}

          <NumberCardsSwiper cardDataSet={BrandMetricsData} cardType={'brandMetric'} />

        {/* to swipe cards on mobile  */}

        <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
          <ButtonIcon text={'Production Request'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
        </div>

        <section className=''>
          <BrandInsight />
        </section>


        {/* Pop Up */}
        {/* <UserPopUp /> */}

        <PrRequestPop />
      </TemplatePage>
  )
}

export default BrandManager