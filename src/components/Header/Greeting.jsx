import React, {useState} from 'react'
import ButtonIcon from './../Buttons/ButtonIcon'
import ButtonNoIcon from './../Buttons/ButtonNoIcon'

const Greeting = ({headBtns}) => {
    const [useHeadBtns] = useState(headBtns)
  
    return (
    <div>
        <div className='pb-5 flex flex-col xl:flex-row xl:items-end gap-5 justify-between'>

            <div className='space-y-1'>
            <h2 className='text-2xl font-avenirHeavy'>Hi Etia 👋🏽,</h2>
            <p className='font-avenirLight'>Welcome to Shoppersbag Admin Panel</p>
            </div>

            {useHeadBtns === true
            ?
            <div className='flex flex-row items-center gap-3'>
                <ButtonNoIcon text={'Generate Tag'} textColor={'text-white'} paddingX={'px-8'} bgColor={'bg-brandOrange1x'} font={'font-avenirMedium'} fontSize={'text-base'}/>
                <ButtonNoIcon text={'Start a raffle draw'} textColor={'text-white'} paddingX={'px-8'} bgColor={'bg-brandBlue1x'} font={'font-avenirMedium'} fontSize={'text-base'}/>
                <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-base'} />
            </div>
            :
            ''
            }
        </div>
    </div>
  )
}

export default Greeting