import React from 'react'
import formatDate from '../../../utils/Dates/FormatDate';
import formatDateMonthText from '../../../utils/Dates/FormatDateMonthText';
import PopUpWrap from '../Wraps/PopUpWrap';
import UserPopUpInner from './UserPopUpInner';



const UserPopUp = ({modalState, closeModal, modalData}) => {


  return (
    <PopUpWrap id={'userPopUp'} closeModal={closeModal} modalState={modalState}>
        {modalData && modalData.map((data, index)=>{
            const user = data.partner.user
            const partner = data.partner
            return <UserPopUpInner id={'userModalDetail'+index} user={data.name} address={data.address} state={data.state} userAvatar={data.logoUrl} fullName={user.name} userId={user.id} registeredDate={formatDateMonthText(user.createdAt)} />
        })}
    </PopUpWrap>
  )
}

export default UserPopUp