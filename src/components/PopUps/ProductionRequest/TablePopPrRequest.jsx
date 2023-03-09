import React from 'react'
import CopyButton from '../Buttons/CopyButton';
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'



const TablePopPrRequest = () => {



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
                    <h4>Bag Type</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>Branded Paper Eco-Friendly Bag</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Date</h4>
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
                    <h4>Order Quantity</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>3,423,234</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Email</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight flex items-center gap-2'>
                    <h4 className='copy-text'>richkid2023@gmail.com</h4>
                    <CopyButton copyText={'richkid2023@gmail.com'} />

                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Expected Delivery Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>August 30th, 2022</h4>
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
                     <button type='button' className='text-brandGray27x text-right'>Contact</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default TablePopPrRequest