import React from 'react'
import ActiveTag from '../../StatusTags/ActiveTag'
import UnverifiedTag from '../../StatusTags/UnverifiedTag'
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'

const UserPopUpTable = ({fullName, userId, registeredDate, phoneNo, totalPurchase, noOfBagsTracked, agent, agentAvatar}) => {
  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Full Name</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{fullName  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>User ID</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{userId  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Registered Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{registeredDate  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Phone Number</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{phoneNo  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Total Purchase</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{totalPurchase  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Number of Bag Tracked</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{noOfBagsTracked  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Status</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight flex flex-row items-center gap-3'>
                    <ActiveTag bgColor={'bg-brandLightGreen1x/60'} borderRadius={'rounded-ten'} />
                    <UnverifiedTag borderRadius={'rounded-ten'} />
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Agent</h4>
                </td>
                <td className='py-2 pl-7 flex-wrap sm:flex-nowrap font-avenirLight flex flex-row items-center gap-3'>
                    <div className='flex flex-col sm:flex-row gap-3 items-end sm:items-center justify-end w-full sm:w-fit'>
                        <img src={agentAvatar ? agentAvatar : dummyAvatar2} alt="agent" className='h-9 w-9' />
                        <p className='font-avenirLight'>{agent  || '---'}</p>
                    </div>
                    <div className='w-full sm:w-fit flex justify-end'>
                     <button type='button' className='text-brandGray27x text-right'>Change</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default UserPopUpTable