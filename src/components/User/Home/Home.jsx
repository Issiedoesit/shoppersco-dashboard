import React from 'react'
import StatsCard from '../../Cards/StatsCard'
import Greeting from '../../Header/Greeting'
import StatCardSwiper from '../../Swipers/StatCardSwiper'
import TemplatePage from '../../Template'
import HomeAside from './HomeAside/HomeAside'
import HomeMain from './HomeMain/HomeMain'

const Home = () => {

  const stats = [
    {
      id:'homeStat1',
      header:'Your points',
      stat:'97 Points'
    },
    {
      id:'homeStat2',
      header:'Redeemable points',
      stat:'97 Points'
    },
    {
      id:'homeStat3',
      header:'Top leaderboard point',
      stat:'158 Points'
    }
  ]


  return (
    <TemplatePage headerTitle={'DashBoard'}>

            {/* main content here */}
            <Greeting headBtns={false} salutation={'Welcome to Shoppersbag'} />

            <div className='hidden lg:grid grid-cols-3 gap-5'>
              {stats.map((data, index)=>{
                return <StatsCard id={data.id} key={index} paddingY={'py-9'} stat={data.stat} header={data.header} />
              })}
            </div>
            <StatCardSwiper cardDataSet={stats} />

            <div className='py-10 flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten auto-cols-fr auto-rows-fr'>
              <HomeMain />
              <HomeAside />
            </div>

    </TemplatePage>
  )
}

export default Home