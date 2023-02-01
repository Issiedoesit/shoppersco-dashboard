import React from 'react'
import AdImg1 from './../../assets/images/pngs/adBag.png'

const AdCards = () => {
  return (
    <div className='py-5 px-6 bg-white rounded-ten w-full flex gap-4'>
        <div>
            <img src={AdImg1} alt="ad" className='h-28 w-28 min-w-[112px] rounded-five' />
        </div>

        <div className='space-y-2'>
            <h2 className='text-lg font-avenirBlack'>New bag design on Jumia</h2>
            <p className='text-xs text-brandGray45x'>I made an online order a few days ago and it came in this new biodegradable bag from Jumia, I love what shoppersbag.co is trying to do about our environment...</p>
        </div>
    </div>
  )
}

export default AdCards