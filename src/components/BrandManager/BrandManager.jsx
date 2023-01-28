import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import BrandMetricsData from '../../data/BrandManager/BrandCardsMetricsData'
import ButtonIcon from '../Buttons/ButtonIcon'
import NumbersCards from '../Cards/NumbersCards'
import Header from '../Header/Header'
import UserPopUp from '../PopUps/User/UserPopUp'
import BrandInsight from './BrandInsight/InsightBrand'




const BrandManager = () => {
  useDocTitle('ShoppersBag | Brand Manager')


  return (
    <div className='pb-7 h-screen overflow-hidden'>
      <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Brand Manager"/>
      <div className='pb-10 overflow-y-auto'>

      <div className='grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>

          {BrandMetricsData.map((data, index)=>{
            return <NumbersCards id={`brandMetric${index+1}`} keyprop={index} header={data.header} metric={data.metric} amount={data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
          })}

        </div>

        <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
          <ButtonIcon text={'Production Request'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
        </div>

        <section className=''>
          <BrandInsight />
        </section>


        {/* Pop Up */}
        {/* <UserPopUp /> */}


        
        </div>
      </div>
  </div>
  )
}

export default BrandManager