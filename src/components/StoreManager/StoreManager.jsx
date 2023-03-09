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







const StoreManager = () => {
  useDocTitle('ShoppersBag | Store Manager')
 

  return (
   <TemplatePage headerTitle={'Store Manager'}>

        <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
        
            {StoreMetricsData.map((data, index)=>{
              return <NumbersCards id={`storeMetric${index}`} keyprop={`storeMetric${index}`} header={data.header} metric={data.metric} amount={data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
            })}

         </div>

         {/* to swipe cards on mobile  */}

          <NumberCardsSwiper cardDataSet={StoreMetricsData} cardType={'storeMetric'} />

        {/* to swipe cards on mobile  */}

         <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
            <ButtonNoIcon text={'Download CSV'} fontSize={'text-xxs'} textColor={'text-brandGray35x'} border={'border'} borderColor={'border-brandGray32x'} paddingX={'px-tenPixel'}/>
            <ButtonIcon text={'Add Store'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
         </div>

          
         <section className=''>
            <StoreInsight />
         </section>


      {/* Pop Up */}
      <UserPopUp />
    </TemplatePage>
  )
}

export default StoreManager