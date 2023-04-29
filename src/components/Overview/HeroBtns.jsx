import React from 'react'
import ButtonIcon from '..//Buttons/ButtonIcon'
import ButtonNoIcon from '../Buttons/ButtonNoIcon'

const HeroBtns = ({btn1Action, btn2Action, btn3Action}) => {
  return (
    <>
        <ButtonNoIcon handleClick={btn1Action} text={'Order Bags'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandOrange1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
        {/* <ButtonNoIcon handleClick={btn2Action} text={'Start a raffle draw'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandBlue1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/> */}
        <ButtonIcon handleClick={btn2Action}  text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
    </>
  )
}

export default HeroBtns