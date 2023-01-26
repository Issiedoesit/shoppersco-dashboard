import React from 'react'

const UnverifiedTag = ({borderRadius}) => {
  return (
    <div className={`text-xxs text-white bg-brandGray27x/60 py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
    Unverified
    </div>
  )
}

export default UnverifiedTag