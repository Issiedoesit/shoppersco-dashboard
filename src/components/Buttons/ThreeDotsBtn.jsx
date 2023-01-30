import React from 'react'

const ThreeDotsBtn = () => {
  return (
    <button type='button' className='flex items-center gap-0.5'>
        <div className='border border-brandBlue1x rounded-fiftyPercent p-0.5'></div>
        <div className='border border-brandBlue1x/40 rounded-fiftyPercent p-0.5'></div>
        <div className='border border-brandBlue1x rounded-fiftyPercent p-0.5'></div>
    </button>
  )
}

export default ThreeDotsBtn