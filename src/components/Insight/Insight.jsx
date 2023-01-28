import React, { useState, useMemo } from 'react'
import $ from 'jquery'
import InsightMetricsData from '../../data/Insight/InsightCardsMetricData'
import NumbersCards from '../Cards/NumbersCards'
import Greeting from '../Header/Greeting'
import Header from '../Header/Header'
import {useDocTitle} from './../../customHooks/DocumentTitle'


const Insight = () => {
  useDocTitle('ShoppersBag | Insight')
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  useMemo(() => {
    return $('.insight-cards').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(query.toLowerCase()) > -1)
    })
  }, [query])

  return (
    <div className='pb-7 h-screen overflow-hidden'>
      <div className='overflow-y-auto h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Insight"/>
      <div className='pb-10 overflow-y-auto'>
        <Greeting headBtns={false} />

        <div>
          <label htmlFor="searchInsights" className='flex items-center gap-7 py-3 px-18px border-0.5 border-brandGray37x bg-brandGray38x rounded-fifty'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4584 22.7501C18.1423 22.7501 22.75 18.1423 22.75 12.4584C22.75 6.77448 18.1423 2.16675 12.4584 2.16675C6.77442 2.16675 2.16669 6.77448 2.16669 12.4584C2.16669 18.1423 6.77442 22.7501 12.4584 22.7501Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M23.8334 23.8334L21.6667 21.6667" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input onChange={handleSearch} type="search" name="search-insights" id="searchInsights" placeholder='Search Insights by keyword' className="w-full bg-transparent focus:outline-none focus:ring-none text-sm font-avenirLight text-brandGray39x"/>
          </label>
        </div>


        <div className='grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 auto-cols-fr gap-y-5 2xl:gap-5 pt-10 auto-rows-fr'>
              
            {InsightMetricsData.map((item, index)=>{
              return <NumbersCards keyprop={`${index+1}`} id={`metricCard${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent} extraClasses={'insight-cards'} />
            }) }

        </div>
      </div>
    </div>
    </div>
  )
}

export default Insight