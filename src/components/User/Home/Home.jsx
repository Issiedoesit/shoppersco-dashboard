import React from 'react'
import StatsCard from '../../Cards/StatsCard'
import Greeting from '../../Header/Greeting'
import Header from './../../Header/Header'
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
    <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
      <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="DashBoard"/>

        <div className='pb-10 overflow-y-auto pt-3.5'>

            {/* main content here */}
            <Greeting headBtns={false} salutation={'Welcome to Shoppersbag'} />

            <div className='grid grid-cols-3 gap-5'>
              {stats.map((data, index)=>{
                return <StatsCard id={data.id} key={index} paddingY={'py-9'} stat={data.stat} header={data.header} />
              })}
            </div>

            <div className='py-10 flex flex-col-reverse lg:grid grid-cols-6 gap-5 rounded-ten auto-cols-fr auto-rows-fr'>
              <HomeMain />
              <HomeAside />
            </div>

        </div>

      </div>
    </div>
  )
}

export default Home