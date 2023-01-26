import React from 'react'
import dummyUserAvatar1 from './../../../assets/images/avatars/userAvatar1.png'
import dummyUserAvatar2 from './../../../assets/images/avatars/userAvatar2.png'
import dummyUserAvatar3 from './../../../assets/images/avatars/userAvatar3.png'
import dummyUserAvatar4 from './../../../assets/images/avatars/userAvatar4.png'

const CampainLeaderBoard = () => {
  return (
    <div className='rounded-ten bg-white p-5'>
        <div className='pb-3'>
            <h1 className='font-avenirBlack'>Leaderboard</h1>
        </div>
        <table className='text-sm w-full'>
            <tbody>
                <tr>
                    <td className='px-2 py-1 flex items-start'>
                        <img src={dummyUserAvatar1} alt='user' className='h-5 w-5 min-w-5 max-w-5' />
                    </td>
                    <td className='px-2 py-1'>
                        <div>
                            <h2>Favour | favourpat</h2>
                            <p className='text-xs text-brandGray40x'>Member since 2022</p>
                        </div>
                    </td>
                    <td className='px-2 py-1 flex items-start'>
                        <p className='text-brandBlue1x'>158Pts</p>
                    </td>
                </tr>
                <tr>
                    <td className='px-2 py-1 flex items-start'>
                        <img src={dummyUserAvatar2} alt='user' className='h-5 w-5 min-w-5 max-w-5' />
                    </td>
                    <td className='px-2 py-1'>
                        <div>
                            <h2>Atim | aasexy</h2>
                            <p className='text-xs text-brandGray40x'>Member since 2010</p>
                        </div>
                    </td>
                    <td className='px-2 py-1 flex items-start'>
                        <p className='text-brandBlue1x'>149Pts</p>
                    </td>
                </tr>
                <tr>
                    <td className='px-2 py-1 flex items-start'>
                        <img src={dummyUserAvatar3} alt='user' className='h-5 w-5 min-w-5 max-w-5' />
                    </td>
                    <td className='px-2 py-1'>
                        <div>
                            <h2>Katerine | katiperry</h2>
                            <p className='text-xs text-brandGray40x'>Member since 2006</p>
                        </div>
                    </td>
                    <td className='px-2 py-1 flex items-start'>
                        <p className='text-brandBlue1x'>145Pts</p>
                    </td>
                </tr>
                <tr>
                    <td className='px-2 py-1 flex items-start'>
                        <img src={dummyUserAvatar4} alt='user' className='h-5 w-5 min-w-5 max-w-5' />
                    </td>
                    <td className='px-2 py-1'>
                        <div>
                            <h2>Uwem | uwamme</h2>
                            <p className='text-xs text-brandGray40x'>Member since 2020</p>
                        </div>
                    </td>
                    <td className='px-2 py-1 flex items-start'>
                        <p className='text-brandBlue1x'>127Pts</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CampainLeaderBoard