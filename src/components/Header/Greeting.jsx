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
                <ButtonNoIcon text={'Generate Tag'} textColor={'white'} paddingX={'8'} bgColor={'brandOrange1x'} font={'avenirMedium'} fontSize={'base'}/>
                <ButtonNoIcon text={'Start a raffle draw'} textColor={'white'} paddingX={'8'} bgColor={'brandBlue1x'} font={'avenirMedium'} fontSize={'base'}/>
                <ButtonIcon text={'New Campaign'} textColor={'white'} paddingX={'8'} bgColor={'brandGreen4x'} flexDirection={'row'} fontSize={'base'} />
            </div>
            :
            ''
            }
        </div>
    </div>
  )
}

export default Greeting