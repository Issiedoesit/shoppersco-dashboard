import React from 'react'
import ActiveTag from '../../StatusTags/ActiveTag'
import UnverifiedTag from '../../StatusTags/UnverifiedTag'
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'

const UserPopUpTable = () => {
  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Full Name</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>Etai Essien</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>User ID</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>SHPG0000101</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Registered Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>August 24th, 2022</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Phone Number</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>+234 8134 483 3922</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Total Purchase</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>3,423,234</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Number of Bag Tracked</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>3,423,234</h4>
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
                        <img src={dummyAvatar2} alt="agent" className='h-9 w-9' />
                        <p className='font-avenirLight'>Babatunde Fashola</p>
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