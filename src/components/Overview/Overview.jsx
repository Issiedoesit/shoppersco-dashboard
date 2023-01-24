import React from 'react'
import CardMetricsData from '../../data/Overview/CardMetricsData'
import NumbersCards from '../Cards/NumbersCards'
import Header from '../Header/Header'
import {useDocTitle} from "./../../customHooks/DocumentTitle"
import CountryInsight from './CountryInsight'
import UserInsight from './UserInsight'




const Overview = () => {
  useDocTitle('ShoppersBag | Overview')
  let metricCard =  CardMetricsData.map((item, index)=>{
    return <NumbersCards key={index} id={"metricCard"+(index+1)} header={item.header} metric={item.metric} amount={item.amount} growthDirection={item.growthDirection} percent={item.percent}/>
  }) 

  return (
    <div className='pb-7 h-screen overflow-hidden'>
       <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
        <Header page="Overview"/>
          <div className='pb-10 overflow-y-auto'>

            <div className='pb-5 flex flex-col xl:flex-row xl:items-end gap-5 justify-between'>

              <div className='space-y-1'>
                <h2 className='text-2xl font-avenirHeavy'>Hi Etia 👋🏽,</h2>
                <p className='font-avenirLight'>Welcome to Shoppersbag Admin Panel</p>
              </div>

              <div className='flex flex-row items-center gap-3'>
                <button type='button' className='py-2 px-8 bg-brandOrange1x rounded-five text-white font-avenirMedium'>Generate Tag</button>
                <button type='button' className='py-2 px-8 bg-brandBlue1x rounded-five text-white font-avenirMedium'>Start a raffle draw</button>
                <button type='button' className='py-2 px-8 bg-brandGreen4x rounded-five text-white font-avenirMedium flex items-center gap-4'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99992C14.6667 4.33325 11.6667 1.33325 8 1.33325C4.33333 1.33325 1.33333 4.33325 1.33333 7.99992C1.33333 11.6666 4.33333 14.6666 8 14.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <g opacity="0.4">
                    <path d="M5.33333 8H10.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 10.6666V5.33325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <p>New Campaign</p>
                </button>
              </div>
            </div>

            <div className='grid grid-cols-5 pb-5 gap-2 2xl:gap-5'>
              
              {metricCard}


            </div>

            <section className='grid grid-cols-5 gap-5'>
                <UserInsight />
                <CountryInsight />
            </section>

          </div>
       </div>
    </div>
  )
}

export default Overview