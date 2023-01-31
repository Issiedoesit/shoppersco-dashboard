import React from 'react'

const ActionWithImage = ({id, keyprop, img, altImg, text, bgColor, textColor, secTextColor, fontSize, fontWeight }) => {
  return (
    <div id={id} key={keyprop} className={`relative z-10 ${bgColor ? bgColor : 'bg-white'} ${textColor ? textColor : 'text-brandGreen4x'} ${fontSize ? fontSize : 'text-base sm:text-2xl md:text-base'} ${fontWeight ? fontWeight : 'font-avenirRegular'} pl-4 lg:pl-8 py-9 rounded-ten w-full w-305px  h-40 sm:h-48 lg:h-auto lg:min-w-0 `}>
        <div className='w-fiftyPercent z-30 relative'>
            {altImg && <img src={altImg} alt="alt" className='w-24 sm:w-auto' />}
            <h1 className={`${altImg ? 'pl-4 pt-2' : 'pl-0'}`}>{text}</h1>
        </div>
        <img src={img} alt="main" className={`absolute ${keyprop === 0 ? 'h-[110%]' : 'h-full'} z-20 right-0 bottom-0  object-cover`}/>
    </div>
  )
}

export default ActionWithImage