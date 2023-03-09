import React from 'react'

const InactiveTag = ({ borderRadius }) => {
  return (
    <div className={`text-xxs text-brandGray31x bg-brandGray27x py-1 px-2.5 ${borderRadius ? borderRadius : 'rounded-forty'} w-fit h-fit text-center`}>
        Inactive
  </div>
  )
}

export default InactiveTag