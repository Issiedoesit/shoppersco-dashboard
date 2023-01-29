import React from 'react'
import CampaignActionsData from '../../../../data/CampaignManager/CampaignActionsData'
import ActionWithImage from '../../../Cards/ActionWithImage'
import ImpactLeaderBoard from '../../ImpactAside/ImpactLeaderBoard'


const StateImpactAside = () => {

    const cards = CampaignActionsData.slice(0, 2)

  return (
    <section className='col-span-2 space-y-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-1 gap-5 auto-rows-fr auto-cols-fr'>
          {cards.map((data, index)=>{
              return <ActionWithImage id={data.id} key={index} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} />
          })}
      </div>
        <ImpactLeaderBoard showSelectMonth={false} />
    </section>
  )
}

export default StateImpactAside