import React from 'react'
import ActiveTag from '../../StatusTags/ActiveTag'
import UnverifiedTag from '../../StatusTags/UnverifiedTag'
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'

const KYCPopUpTable = ({fullName, utilityBillLink, bizRegLink, imageLink}) => {
  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Full Name</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{fullName || '----'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirBlack'>
                    <h4>Means of Identification</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Utility Bill</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <a href={utilityBillLink || "#"} className='underline text-brandBlue6x hover:text-brandBlue6x/80'>view pdf</a>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Business Registration Doc</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <a href={bizRegLink || "#"} className='underline text-brandBlue6x hover:text-brandBlue6x/80'>view pdf</a>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirBlack'>
                    <h4>Valid ID</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Voter Card</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <a href={imageLink || '#'} className='underline text-brandBlue6x hover:text-brandBlue6x/80'>view image (2)</a>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default KYCPopUpTable