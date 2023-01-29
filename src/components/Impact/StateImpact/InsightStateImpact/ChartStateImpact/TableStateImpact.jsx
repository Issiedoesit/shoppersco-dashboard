import React from 'react'
import dummyAvatar2 from './../../../../../assets/images/avatars/avatar-2.png'

const TableStateImpact = () => {
  return (
    <table className='text-sm'>
        <tbody>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>State Point</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4><span>323,434,556</span> Pts</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Bags in Circulation</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>362,345,343</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Single-use plastic reduction</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>321,323,455</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Bags Recollection</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>44,833,922</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Bags Recollection Center</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>652,547,006</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Registered Store</h4>
                </td>
                <td className='py-2 pl-7 font-avenirLight'>
                    <h4>August 30th, 2022</h4>
                </td>
            </tr>
            <tr>
                <td className='py-2 font-avenirMedium'>
                    <h4>Regional Agent </h4>
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

export default TableStateImpact