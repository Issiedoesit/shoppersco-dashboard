import React from 'react'

const StatsCard = ({bgColor, header, stat, statTextColor}) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-white'} rounded-ten space-y-1 px-7 sm:px-4 lg:px-7 py-2.5`}>
        <h4 className='text-sm lg:text-base'>{header}</h4>
        <p className={`font-avenirBlack text-xl md:text-2xl lg:text-3xl ${statTextColor ? statTextColor : 'text-brandGreen4x '} break-words`}>{stat}</p>
    </div>
  )
}

export default StatsCard