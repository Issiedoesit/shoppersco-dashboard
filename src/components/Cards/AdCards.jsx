import React from 'react'

const AdCards = ( {img, header, text, index, id} ) => {
  return (
    <div id={id} key={index} className='py-5 px-6 bg-white rounded-ten w-full flex items-center sm:items-start gap-4 h-full lg:h-auto lg:max-w-md xl:max-w-none'>
        <div>
            <img src={img} alt="ad" className='h-20 w-20 min-w-[80px] sm:h-28 sm:w-28 sm:min-w-[112px] rounded-five' />
        </div>

        <div className='space-y-2'>
            <h2 className='text-base lg:text-lg font-avenirBlack'>{header}</h2>
            <p className='text-xxs lg:text-xs text-brandGray45x'>{text}</p>
        </div>
    </div>
  )
}

export default AdCards