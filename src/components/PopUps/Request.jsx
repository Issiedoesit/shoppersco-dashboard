import React from 'react'
import ApprovalBtn from './Buttons/ApprovalBtn'
import RejectBtn from './Buttons/RejectBtn'



const Request = ({buttons, reqName, paddingB, paddingT, handleApproval, showApprove, showReject, consumerType, handleReject, actionBtnText, secBtnText, actionBtnTextColor, secBtnTextColor, actionBtnBgColor, secBtnBgColor}) => {
  return (
    <div className={`${paddingT || 'pt-4'} ${paddingB || 'pb-2'} text-xs sm:text-sm  border-b-0.5 flex flex-wrap gap-5 sm:flex-nowrap items-center justify-between border-b-brandGray27x`}>
        <p className='font-avenirLight'>{reqName}</p>
        {buttons && 
          <div className='flex justify-end items-center gap-3 w-full sm:w-fit font-avenirBlack'>
          {consumerType == 'kyc' ? 
          <>
            {showApprove && <ApprovalBtn handleActionClick={handleApproval} actionBtnText={actionBtnText} actionBtnTextColor={actionBtnTextColor} actionBtnBgColor={actionBtnBgColor} />}
            {showReject && <RejectBtn handleSecClick={handleReject} secBtnText={secBtnText} secBtnTextColor={secBtnTextColor} secBtnBgColor={secBtnBgColor} />}
          </>
          :
          <>
            <ApprovalBtn handleActionClick={handleApproval} actionBtnText={actionBtnText} actionBtnTextColor={actionBtnTextColor} actionBtnBgColor={actionBtnBgColor} />
            <RejectBtn handleSecClick={handleReject} secBtnText={secBtnText} secBtnTextColor={secBtnTextColor} secBtnBgColor={secBtnBgColor} />
          </>
          }
      </div>
        }
    </div>
  )
}

export default Request