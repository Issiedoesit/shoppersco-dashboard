import React from 'react'

const ApprovalBtn = ({actionBtnText, actionBtnTextColor, actionBtnBgColor}) => {
  return (
    <button type='button' className={`xs:px-4 xs:text-xxs ${actionBtnTextColor ? actionBtnTextColor : 'text-white'} px-6 py-2 rounded-ten ${actionBtnBgColor ? actionBtnBgColor : 'bg-brandGreen4x'}`}>{actionBtnText}</button>
  )
}

export default ApprovalBtn