import React from 'react'

const EcoFriendlyTag = ({ borderRadius }) => {
  return (
    <div className={`text-xxs text-brandOrange1x bg-brandLightOrange1x py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
    Eco-friendly
    </div>
  )
}

export default EcoFriendlyTag