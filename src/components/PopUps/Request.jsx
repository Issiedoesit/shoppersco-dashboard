import React from 'react'

const Request = ({reqName, actionBtn, secBtn, actionBtnColor, secBtnColor}) => {
  return (
    <div className='py-4 border-b-0.5 flex items-center justify-between border-b-brandGray27x'>
        <p className='text-sm font-avenirLight'>Requesting account verification</p>
        <div className='flex items-center gap-3'>
            <button type='button' className='text-white px-6 py-2 rounded-ten bg-brandGreen4x text-sm font-avenirBlack'>Approve</button>
            <button type='button' className='text-brandGray27x border border-brandGray27x px-6 py-2 rounded-ten bg-transparent text-sm font-avenirBlack'>Reject</button>
        </div>
    </div>
  )
}

export default Request