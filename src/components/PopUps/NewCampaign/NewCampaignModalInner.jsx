import React from 'react'
import ButtonNoIcon from '../../Buttons/ButtonNoIcon'

const NewCampaignModalInner = () => {

    const arrayOfNums = Array.from({length:7}, (_, i) => i)



  return (
    <div className='bg-white m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-sixtyFivePercent md:w-sixtyPercent lg:w-fiftyPercent h-fit'>
        <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
            <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>New Campaign</h2>
        </div>

        <form className='px-5 sm:px-10 md:px-14 py-10 space-y-6'>
            <div className='grid grid-cols-1 mds:grid-cols-2 sm:grid-cols-2 gap-x-9 gap-y-6'>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="title" className='text-sm font-avenirHeavy'>Title of Campaign</label>
                    <input type="text" id='title' name='title' placeholder='e.g Easter Campaign' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="description" className='text-sm font-avenirHeavy'>Description of Campaign</label>
                    <input type="text" id='description' name='description' placeholder='e.g Due to the Annual Celebration of Jesus Christ' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="duration" className='text-sm font-avenirHeavy'>Duration of Campaign</label>
                    <input type="text" id='duration' name='duration' placeholder='e.g 10 days' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="points" className='text-sm font-avenirHeavy'>Points Needed</label>
                    <input type="text" id='points' name='points' placeholder='e.g 2,500 pts' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="type" className='text-sm font-avenirHeavy'>Points Needed</label>
                    <select name="type" id="type" className='px-4 py-2.5 h-38px bg-white text-xs rounded-five border-0.5 border-brandGray32x'>
                        <option value="NIL">-- Select Raffle Type --</option>
                    </select>
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="noOfWinners" className='text-sm font-avenirHeavy'>Expected Number of Winners</label>
                    <input type="text" id='noOfWinners' name='noOfWinners' placeholder='e.g 20' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
                <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                    <label htmlFor="congratulationsText" className='text-sm font-avenirHeavy'>Insert Congratulatory Message for winners.</label>
                    <input type="text" id='congratulationsText' name='congratulationsText' placeholder="e.g Congratulations, You're among the lucky winners of Easter Campaign" className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                </fieldset>
            </div>

            <div className='flex justify-end'>
                <ButtonNoIcon type={'submit'} text={'Create New Campaign'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
            </div>

        </form>
    </div>
  )
}

export default NewCampaignModalInner