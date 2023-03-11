import React from 'react'
import ButtonIcon from '..//Buttons/ButtonIcon'
import ButtonNoIcon from '../Buttons/ButtonNoIcon'

const HeroBtns = () => {
  return (
    <>
        <ButtonNoIcon text={'Generate Tag'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandOrange1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
        <ButtonNoIcon text={'Start a raffle draw'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandBlue1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
        <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
    </>
  )
}

export default HeroBtns