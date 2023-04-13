import React, {useState} from 'react'
import StatsCard from '../Cards/StatsCard'
import TemplatePage from '../Template'
import {useDocTitle} from './../../customHooks/DocumentTitle'
import AppChart from './Charts/AppChart'
import ImpactAside from './ImpactAside/ImpactAside'
// import InsightImpact from './InsightImpact/InsightImpact'



const Impact = () => {
  useDocTitle('ShoppersBag | Impact')
  const [chart, setChart] = useState('totalAppDownload')
  const [chartTitle, setChartTitle] = useState('Total App Downloads')
  const stats = [
    {
      title:'Total App Downloads',
      stat:'21,345,134',
      id:"totalAppDownload",
      element:<AppChart />
    },
    {
      title:'Website Visitors',
      stat:'120,345,134',
      id:"websiteVisitors",
      element:""
    },
    {
      title:'Number of Shoppers',
      stat:'320,345,134',
      id:"numOfShoppers",
      element:""
    },
    {
      title:'Total Number of Bags in Circulation',
      stat:'21,345,134',
      id:"numOfBagsInCirculation",
      element:""
    },
    {
      title:'Total Number of ShoppersBag Branded',
      stat:'120,345,134',
      id:"numOfShoppersBagBranded",
      element:""
    },
    {
      title:'Total Number of ShoppersBag Tracked',
      stat:'320,345,134',
      id:"numOfShoppersBagTracked",
      element:""
    },
    {
      title:'Total Number of Campaigns',
      stat:'120,345,134',
      id:"numOfCampaigns",
      element:""
    },
    {
      title:'Total Number of Rewards',
      stat:'320,345,134',
      id:"numOfRewards",
      element:""
    },
  ]

  const handleChart = (id, title) => {
    setChart(id)
    setChartTitle(title)
      const chartWrap = document.getElementById('chartWrap')
      chartWrap.focus()

      const chartScroll = document.querySelector('.chart-scroll')
      
      
  }


  return (
    <TemplatePage headerTitle={'Impact'}>

        <section className='flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten'>
          {/* <InsightImpact /> */}
          {/* <ImpactAside /> */}

          <div id='chartWrap' tabindex="-1" className="col-span-4 focus:outline-none self-start flex flex-col w-full xl:chart-scroll bg-white px-5 py-10 md:p-10 rounded-ten">
            <div className='flex justify-between gap-10 flex-col md:flex-row items-start pb-10 '>
              <h2 className='text-black font-avenirBlack text-xl'>{chartTitle}</h2>
              <div className='self-end'>
                <label htmlFor="filter" className='flex gap-3 items-center self-end'>
                  <span className='text-xs font-avenirHeavy whitespace-nowrap'>Filter by month</span>
                  <select name="filter" id="filter" className='rounded-fifty pr-2 sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 h-11 border-0.5 pl-2 border-brandGray34x'>
                      <option value="6 months" selected>6 month ago</option>
                  </select>
                </label>
              </div>
            </div>
            
            <div>
              {stats.filter(stat => stat.id === chart).map((stat, idx)=>{
                return <div key={idx}>
                    {stat.element}
                </div>
              })}
            </div>
          </div>
          
          <div className="col-span-2 flex flex-col bg-white gap-5 rounded-ten py-5 px-4">
            {stats.map((stat, idx)=>{
              return <button key={idx} title={`View Chart For ${stat.title}`} aria-label={`View Chart For ${stat.title}`} className="rounded-ten focus:outline-none" onClick={()=>{handleChart(stat.id, stat.title)}}>
                <StatsCard key={idx} header={stat.title} maxWidth={'max-w-none'} stat={stat.stat} paddingY={'py-1 text-left'} bgColor={`${chart == stat.id ? 'border-0.5 border-brandGreen4x bg-brandLightGreen2x' : 'bg-white hover:bg-white/80 border-0.5 border-white hover:border-brandGreen4x/20'} transition-all ease-in-out duration-200`}  />
              </button>
            })}
          </div>
        </section>

    </TemplatePage>
  )
}

export default Impact