import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import BrandMetricsData from '../../data/BrandManager/BrandCardsMetricsData'
import ButtonIcon from '../Buttons/ButtonIcon'
import NumbersCards from '../Cards/NumbersCards'
import Header from '../Header/Header'
import UserPopUp from '../PopUps/UserPopUp'
import BrandInsight from './BrandInsight/BrandInsight'




const BrandManager = () => {
  useDocTitle('ShoppersBag | Brand Manager')


  return (
    <div className='pb-7 h-screen overflow-hidden'>
      <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Brand Manager"/>
      <div className='pb-10 overflow-y-auto'>

        <div className='grid grid-cols-5 pb-5 gap-2 2xl:gap-5'>
          
        
        {BrandMetricsData.map((data, index)=>{
          return <NumbersCards id={'brandMetric'+(index+1)} keyProp={index} header={data.header} metric={data.metric} amount={data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
        })}

        </div>

        <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
          <ButtonIcon text={'Production Request'} textColor={'white'} bgColor={'brandGreen4x'} fontSize={'xxs'} paddingX={'tenPixel'} font={'avenirMedium'}/>
        </div>

        <section className=''>
          <BrandInsight />
        </section>


        {/* Pop Up */}
        {/* <UserPopUp /> */}


        {/* to make sure tailwind loads dynamic classes, can be removed in build version ** I THINK??? */}
        <div className='px-tenPixel hidden text-brandGray35x bg-brandGreen4x text-white border border-brandGray32x'></div>
        </div>
      </div>
  </div>
  )
}

export default BrandManager