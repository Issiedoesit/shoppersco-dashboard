import React from 'react'

const BannedTag = ({borderRadius}) => {
  return (
    <div>
        <div className={`text-xxs text-brandRed1x bg-brandLightRed2x py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
            Banned
        </div>
    </div>
  )
}

export default BannedTag