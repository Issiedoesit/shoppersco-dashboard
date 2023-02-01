import React, {useState} from 'react'
import ButtonIcon from './../Buttons/ButtonIcon'
import ButtonNoIcon from './../Buttons/ButtonNoIcon'


const Greeting = ({headBtns, salutation}) => {
    const [useHeadBtns] = useState(headBtns)

    
  
    return (
    <div>
        <div className='pb-5 flex flex-col xl:flex-row xl:items-end gap-5 justify-between'>

            <div className='space-y-1'>
                <h2 className='text-2xl font-avenirHeavy'>Hi Etia 👋🏽,</h2>
                <p className='font-avenirLight'>{salutation || 'Welcome to Shoppersbag Admin Panel'}</p>
            </div>

            {useHeadBtns === true
                &&
                <div className='flex flex-wrap flex-row items-center gap-3 justify-end'>
                    <ButtonNoIcon text={'Generate Tag'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandOrange1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
                    <ButtonNoIcon text={'Start a raffle draw'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandBlue1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
                    <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
                </div>
            }
        </div>
    </div>
  )
}

export default Greeting