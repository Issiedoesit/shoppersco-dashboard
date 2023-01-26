import React from 'react'
import CardMetricsData from '../../data/Overview/CardMetricsData'
import NumbersCards from '../Cards/NumbersCards'
import Greeting from '../Header/Greeting'
import Header from '../Header/Header'
import {useDocTitle} from "./../../customHooks/DocumentTitle"
import CountryInsight from './CountryInsight'
import UserInsight from './userInsight/UserInsight'





const Overview = () => {
  useDocTitle('ShoppersBag | Overview')

  

  return (
    <div className='pb-7 h-screen overflow-hidden'>
       <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
        <Header page="Overview"/>
          <div className='pb-10 overflow-y-auto'>

            <Greeting headBtns={true} />

            <div className='grid grid-cols-5 pb-5 gap-2 2xl:gap-5'>
              
              {CardMetricsData.map((item, index)=>{
                return <NumbersCards keyProp={index} id={"metricCard"+(index+1)} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent}/>
              }) }

            </div>

            <section className='flex flex-col-reverse lg:grid grid-cols-5 gap-5'>
                <UserInsight />
                <CountryInsight />
            </section>

          </div>
       </div>

    </div>
  )
}

export default Overview