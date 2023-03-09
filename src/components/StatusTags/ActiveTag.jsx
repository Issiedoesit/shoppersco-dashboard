import React from 'react'

const ActiveTag = ({ bgColor, borderRadius }) => {
  return (
    <div className={`text-xxs text-brandGreen5x ${bgColor ? bgColor : 'bg-brandLightGreen1x'} py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
      Active
    </div>
  )
}

export default ActiveTag