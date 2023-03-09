import React, {useState} from 'react'
import ButtonIcon from './../Buttons/ButtonIcon'
import ButtonNoIcon from './../Buttons/ButtonNoIcon'


const Greeting = ({headBtns, headBtns2, salutation, salutationFontBigger, manageInventoryBtn}) => {
    const [useHeadBtns] = useState(headBtns)
    const [useHeadBtns2] = useState(headBtns2)

    const gift = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3132 6.66699H2.64648V12.0003C2.64648 14.0003 3.31315 14.667 5.31315 14.667H10.6465C12.6465 14.667 13.3132 14.0003 13.3132 12.0003V6.66699Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.3332 4.66634V5.33301C14.3332 6.06634 13.9798 6.66634 12.9998 6.66634H2.99984C1.97984 6.66634 1.6665 6.06634 1.6665 5.33301V4.66634C1.6665 3.93301 1.97984 3.33301 2.99984 3.33301H12.9998C13.9798 3.33301 14.3332 3.93301 14.3332 4.66634Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M7.76018 3.33329H4.08018C3.85352 3.08663 3.86018 2.70663 4.10018 2.46663L5.04685 1.51996C5.29352 1.27329 5.70018 1.27329 5.94685 1.51996L7.76018 3.33329Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M11.9134 3.33329H8.2334L10.0467 1.51996C10.2934 1.27329 10.7001 1.27329 10.9467 1.51996L11.8934 2.46663C12.1334 2.70663 12.1401 3.08663 11.9134 3.33329Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M5.95996 6.66699V10.0937C5.95996 10.627 6.54663 10.9403 6.99329 10.6537L7.61996 10.2403C7.84663 10.0937 8.13329 10.0937 8.35329 10.2403L8.94663 10.6403C9.38663 10.9337 9.97996 10.6203 9.97996 10.087V6.66699H5.95996Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  
    return (
    <div>
        <div className='pb-5 flex flex-col xl:flex-row xl:items-end gap-5 justify-between'>

            <div className='space-y-1'>
                <h2 className={`${salutationFontBigger || 'text-2xl'} font-avenirHeavy`}>Hi Etia 👋🏽,</h2>
                <p className={`${salutationFontBigger && 'text-2xl'} font-avenirLight`}>{salutation || 'Welcome to Shoppersbag Admin Panel'}</p>
            </div>

            {useHeadBtns === true
                &&
                <div className='flex flex-wrap flex-row items-center gap-3 justify-end'>
                    <ButtonNoIcon text={'Generate Tag'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandOrange1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
                    <ButtonNoIcon text={'Start a raffle draw'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandBlue1x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
                    <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
                </div>
            }


            {
                manageInventoryBtn && 
                <div className='flex flex-wrap flex-row items-center gap-3 justify-end'>
                    <ButtonIcon icon={gift} text={'Manage products'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandBlue1x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
                    <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
                </div>
            }

                {useHeadBtns2 === true
                    &&
                    <div className='flex flex-wrap flex-row items-center gap-3 justify-end'>
                        <ButtonIcon text={'New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
                    </div>
                }
        </div>
    </div>
  )
}

export default Greeting