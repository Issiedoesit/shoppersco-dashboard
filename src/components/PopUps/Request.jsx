import React from 'react'

const Request = ({reqName, actionBtn, secBtn, actionBtnColor, secBtnColor}) => {
  return (
    <div className='py-4 text-xs sm:text-sm  border-b-0.5 flex flex-wrap gap-5 sm:flex-nowrap items-center justify-between border-b-brandGray27x'>
        <p className='font-avenirLight'>Requesting account verification</p>
        <div className='flex justify-end items-center gap-3 w-full sm:w-fit font-avenirBlack'>
            <button type='button' className='xs:px-4 xs:text-xxs text-white px-6 py-2 rounded-ten bg-brandGreen4x'>Approve</button>
            <button type='button' className='xs:px-4 xs:text-xxs text-brandGray27x border border-brandGray27x px-6 py-2 rounded-ten bg-transparent'>Reject</button>
        </div>
    </div>
  )
}

export default Request