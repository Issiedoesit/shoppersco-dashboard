import React from 'react'
import CampaignActionsData from '../../../../data/CampaignManager/CampaignActionsData'
import ActionWithImage from '../../../Cards/ActionWithImage'
import ActionCardSwiper from '../../../Swipers/ActionCardSwiper'
import ImpactLeaderBoard from '../../ImpactAside/ImpactLeaderBoard'


const StateImpactAside = () => {

    const cards = CampaignActionsData.slice(0, 2)

  return (
    <section className='col-span-2 space-y-5'>

      <div className='hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-1 gap-5 auto-rows-fr auto-cols-fr'>
          {cards.map((data, index)=>{
              return <ActionWithImage id={data.id} keyprop={index} text={data.text} bgColor={data.bgColor} textColor={data.textColor} fontSize={data.fontSize} fontWeight={data.fontWeight} img={data.img} altImg={data.altImg} />
          })}
      </div>
      
        {/* to swipe cards on mobile  */}

        <ActionCardSwiper cardDataSet={cards} />

        {/* to swipe cards on mobile  */}

        <ImpactLeaderBoard showSelectMonth={false} />
    </section>
  )
}

export default StateImpactAside