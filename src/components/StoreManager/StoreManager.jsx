import React from 'react'
import StoreMetricsData from '../../data/StoreManager/StoreCardsMetricData'
import NumbersCards from '../Cards/NumbersCards'
import Header from '../Header/Header'
import ButtonIcon from './../Buttons/ButtonIcon'
import ButtonNoIcon from './../Buttons/ButtonNoIcon'
import StoreInsight from './StoreInsight/StoreInsight'
import {useDocTitle} from './../../customHooks/DocumentTitle'
import UserPopUp from '../PopUps/User/UserPopUp'







const StoreManager = () => {
  useDocTitle('ShoppersBag | Store Manager')
 

  return (
    <div className='pb-7 h-screen overflow-hidden'>
    <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
     <Header page="Store Manager"/>
       <div className='pb-10 overflow-y-auto'>

         <div className='grid grid-cols-5 pb-5 gap-2 2xl:gap-5'>
           
          
          {StoreMetricsData.map((data, index)=>{
            return <NumbersCards id={'storeMetric'+(index+1)} keyProp={index} header={data.header} metric={data.metric} amount={data.amount} trend={data.trend} percent={data.percent} link={data.link} linkText={data.linkText} />
          })}

         </div>

         <div className='flex flex-row gap-5 pb-5 items-center justify-end'>
            <ButtonNoIcon text={'Download CSV'} fontSize={'text-xxs'} textColor={'text-brandGray35x'} border={'border'} borderColor={'border-brandGray32x'} paddingX={'px-tenPixel'}/>
            <ButtonIcon text={'Add Store'} textColor={'text-white'} bgColor={'bg-brandGreen4x'} fontSize={'text-xxs'} paddingX={'px-tenPixel'} font={'font-avenirMedium'}/>
         </div>

          
         <section className=''>
            <StoreInsight />
         </section>


       </div>
    </div>

    {/* Pop Up */}
    <UserPopUp />
 </div>
  )
}

export default StoreManager