import React, { useEffect, useRef } from 'react'
import AdCards from '../../../Cards/AdCards'
import AdCardsSwiper from '../../../Swipers/AdCardsSwiper'

const CommunityAside = ({offset}) => {

  const ads = [
    {
      id:'ad1',
      header:'New bag design on Jumia',
      text:'I made an online order a few days ago and it came in this new biodegradable bag from Jumia, I love what shoppersbag.co is trying to do about our environment... ',
      img:'src/assets/images/pngs/adBag.png'
    },
    {
      id:'ad2',
      header:'New Eco-friendly market bags',
      text:'I made an online order a few days ago and it came in this new biodegradable bag from Jumia, I love what shoppersbag.co is trying to do about our environment... ',
      img:'src/assets/images/pngs/adPaperBag.png'
    },
    {
      id:'ad3',
      header:'2022 Nike Marathon PHC',
      text:'I made an online order a few days ago and it came in this new biodegradable bag from Jumia, I love what shoppersbag.co is trying to do about our environment... ',
      img:'src/assets/images/pngs/adShoes.png'
    },
    {
      id:'ad4',
      header:'New Eco-friendly market bags',
      text:'I made an online order a few days ago and it came in this new biodegradable bag from Jumia, I love what shoppersbag.co is trying to do about our environment... ',
      img:'src/assets/images/pngs/adPaperBag.png'
    }
  ]

  const sideRef = useRef(null)

 
  

  return (
    <div ref={sideRef} className={`col-span-3 pb-10 overflow-y-auto xl:fixed  ${offset} lg:items-end  xl:w-thirtyTwoPercent right-8 h-eightyPercent`}>
     
        <div className='hidden xl:block space-y-5'>
            {ads.map((ad, index)=>{
              return <AdCards id={ad.id} img={ad.img} header={ad.header} text={ad.text} index={index} /> 
          })}
        </div>

        <AdCardsSwiper cardDataSet={ads} />
     
    </div>
  )
}

export default CommunityAside