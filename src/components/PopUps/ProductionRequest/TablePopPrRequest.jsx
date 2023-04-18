import React from 'react'
import CopyButton from '../Buttons/CopyButton';
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'



const TablePopPrRequest = ({fullName, bagType, phoneNo, agentName, email, deliveryDate,  orderDate, contactInfo, orderQuantity}) => {



  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Full Name</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{fullName || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Bag Type</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{bagType || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderDate || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Phone Number</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{phoneNo || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Quantity</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderQuantity || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Email</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight flex items-center gap-2'>
                    <h4 className='copy-text'>{email || '---'}</h4>
                    {email && <CopyButton copyText={email || '---'} />}

                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Expected Delivery Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{deliveryDate || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Agent</h4>
                </td>
                <td className='py-2 pl-7 flex-wrap sm:flex-nowrap font-avenirLight flex flex-row items-center gap-3'>
                    <div className='flex flex-col sm:flex-row gap-3 items-end sm:items-center justify-end w-full sm:w-fit'>
                        <img src={dummyAvatar2} alt="agent" className='h-9 w-9' />
                        <p className='font-avenirLight'>{agentName || '---'}</p>
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