import React from 'react'

const StatsCard = ({id, bgColor, header, stat, statTextColor, paddingX, paddingY}) => {
  return (
    <div id={id} className={`${bgColor ? bgColor : 'bg-white'} mx-auto rounded-ten space-y-1 px-7 sm:px-4 lg:px-7 ${ paddingY ? paddingY : 'py-2.5'} w-full max-w-sm`}>
        <h4 className='text-sm lg:text-base'>{header}</h4>
        <p className={`font-avenirBlack text-xl md:text-2xl lg:text-3xl ${statTextColor ? statTextColor : 'text-brandGreen4x '} break-words`}>{stat}</p>
    </div>
  )
}

export default StatsCard