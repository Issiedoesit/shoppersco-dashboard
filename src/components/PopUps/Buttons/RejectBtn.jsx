import React from 'react'

const RejectBtn = ({secBtnText, secBtnTextColor, secBtnBgColor}) => {
  return (
    <button type='button' className={`xs:px-4 xs:text-xxs ${secBtnTextColor ? secBtnTextColor : 'text-brandGray27x'} border border-brandGray27x px-6 py-2 rounded-ten ${secBtnBgColor ? secBtnBgColor : 'bg-transparent'}`}>{secBtnText}</button>
    )
}

export default RejectBtn