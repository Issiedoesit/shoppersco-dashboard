import React from 'react'


const Greeting = ({useBtns, headBtns, salutation, salutationFontBigger}) => {

    
  
    return (
    <div>
        <div className='pb-5 flex flex-col xl:flex-row xl:items-end gap-5 justify-between'>

            <div className='space-y-1'>
                <h2 className={`${salutationFontBigger || 'text-2xl'} font-avenirHeavy`}>Hi Etia 👋🏽,</h2>
                <p className={`${salutationFontBigger && 'text-2xl'} font-avenirLight`}>{salutation || 'Welcome to Shoppersbag Admin Panel'}</p>
            </div>

            { useBtns &&
                <div className='flex flex-wrap flex-row items-center gap-3 justify-end'>
                    {headBtns}
                </div>
            }
            
        </div>
    </div>
  )
}

export default Greeting