import React from 'react'

const VerifiedTag = ({ borderRadius }) => {
  return (
    <div className={`text-xxs text-brandBlue6x bg-brandLightBlue1x py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
    Verified
    </div>
  )
}

export default VerifiedTag