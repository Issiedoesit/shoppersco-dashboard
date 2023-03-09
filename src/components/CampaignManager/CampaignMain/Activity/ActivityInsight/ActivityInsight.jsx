import React from 'react'
import dummyAvatar from './../../../../../assets//images/avatars/avatar-1.png'



const ActivityRow = () => {
    return(
        <tr className='border-b-0.5 border-brandGray43x last:border-b-0'>
            <td className="py-3 px-2 whitespace-nowrap">
                <div className='flex items-center'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M15.71 15.1798L12.61 13.3298C12.07 13.0098 11.63 12.2398 11.63 11.6098V7.50977" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </td>
            <td className="py-3 px-2 whitespace-nowrap">
                <div>
                    <h5 className="text-sm sm:text-base font-avenirMedium">Fountain Mall, Egbeda, Lagos.</h5>
                    <p className='text-xs text-brandGray27x'>Sat. 20 Feb 2021. 01:22:33 GMT</p>
                </div>
            </td>
            <td className='py-3 px-2'>
                <div className='flex items-center'>
                    <p className='text-brandBlue1x'>2Pts</p>
                </div>
            </td>
        </tr>
 )
}



const ActivityInsight = () => {
  return (
    <div className='rounded-ten bg-white col-span-4 py-9 px-6'>
        <div className='sm:px-4 space-y-4 pb-10'>
            <div className='flex flex-row gap-4 items-center pb-4 border-b-0.5 border-brandGray27x'>
                <img src={dummyAvatar} alt="user" className='h-10 w-10 min-w-8 min-h-8'/>
                <h2 className='font-avenirBlack'>Mother Earth Campaign</h2>
            </div>


            <div className='w-full px-2 overflow-x-auto'>
                <table className='w-full'>
                    <thead></thead>
                    <tbody>
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                       <ActivityRow />
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default ActivityInsight