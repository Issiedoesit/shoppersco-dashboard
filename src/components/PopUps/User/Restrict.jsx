import React from 'react'

const Restrict = ({ text, handleRestrict }) => {
  return (
    <button type='button' onClick={handleRestrict}>
        <p className='text-sm font-avenirLight text-brandRed1x'>{text}</p>
    </button>
  )
}

export default Restrict