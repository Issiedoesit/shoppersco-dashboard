import React from 'react'

const DynamicClasses = ({bgColor, textColor}) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-green-500'} text-${textColor ? textColor : 'red-500'}`}>Hi</div>
    // <div className='hidden bg-brandLightGreen1x rounded-forty bg-brandLightGreen1x/60 rounded-ten rounded-eight px-tenPixel text-brandGray35x bg-brandGreen4x text-white border border-brandGray32x bg-brandOrange1x text-brandGray35x border-brandGray32x'></div>
  )
}

export default DynamicClasses