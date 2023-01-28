import React from 'react'

const ActionWithImage = ({id, keyprop, img, altImg, text, bgColor, textColor, secTextColor, fontSize, fontWeight }) => {
  return (
    <div id={id} key={keyprop} className={`relative z-10 ${bgColor ? bgColor : 'bg-white'} ${textColor ? textColor : 'text-brandGreen4x'} ${fontSize ? fontSize : 'text-base'} ${fontWeight ? fontWeight : 'font-avenirRegular'} pl-4 lg:pl-8 py-9 rounded-ten w-full`}>
        <div className='w-fiftyPercent'>
            {altImg ? <img src={altImg} alt="alt" /> : ''}
            <h1 className={`${altImg ? 'pl-4' : 'pl-00'}`}>{text}</h1>
        </div>
        <img src={img} alt="main" className='absolute h-full z-20 right-0 bottom-0 max-w-[45%] object-cover'/>
    </div>
  )
}

export default ActionWithImage