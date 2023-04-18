import React from 'react'
import CopyButton from '../Buttons/CopyButton'
import dummyAvatar2 from './../../../assets/images/avatars/avatar-2.png'

const TableOrderPopUp = ({orderRequest, orderDateTime, orderStatus, orderQuantity, email, deliveryDate, contactPerson, contactInfo}) => {
  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Request</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderRequest || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Date and Time</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderDateTime  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Status</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderStatus  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Order Quantity</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{orderQuantity  || '---'} {orderQuantity && 'bags'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Email</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight flex items-center gap-2'>
                    <h4 className='copy-text'>{email  || '---'}</h4>
                    {email && <CopyButton copyText={email  || '---'} />}

                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Delivery Date</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>{deliveryDate  || '---'}</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Store Contact Person</h4>
                </td>
                <td className='py-2 pl-7 flex-wrap sm:flex-nowrap font-avenirLight flex flex-row items-center gap-3'>
                    <div className='flex flex-col sm:flex-row gap-3 items-end sm:items-center justify-end w-full sm:w-fit'>
                        <img src={dummyAvatar2} alt="store" className='h-9 w-9' />
                        <p className='font-avenirLight'>{contactPerson || '---'}</p>
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

export default TableOrderPopUp