import React from 'react'
import StatsCard from '../../Cards/StatsCard'
import ImpactLeaderBoard from './ImpactLeaderBoard'


const ImpactAside = () => {
  return (
    <section className='col-span-2 space-y-5'>
        <div className='grid sm:grid-cols-3  lg:grid-rows-3 lg:grid-cols-1 gap-5 auto-rows-fr auto-cols-fr bg-white rounded-ten'>
            {/* {CampaignActionsData.map((data, index)=>{
                return <ActionWithImage id={data.id} key={index} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} />
            })} */}
            <StatsCard stat={'21,345,134'} header={'Total App Download'} />
            <StatsCard stat={'120,345,134'} header={'Total Website Visits'} />
            <StatsCard stat={'320,345,134'} header={'Total Active Users'} />
        </div>
        <ImpactLeaderBoard showSelectMonth={true} />
    </section>
  )
}

export default ImpactAside