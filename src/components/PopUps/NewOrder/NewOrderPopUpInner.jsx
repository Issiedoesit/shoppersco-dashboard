import React, { useEffect, useState } from 'react'
import ButtonNoIcon from '../../Buttons/ButtonNoIcon'

const NewOrderPopUpInner = () => {

    const dummyCatalogue = [
        {
            name:"This is Bag Name 1",
            id:"bagType1",
            price:"100000",
            image:"/src/assets/images/bags/bagType1.png"
        },
        {
            name:"This is Bag Name 2",
            id:"bagType2",
            price:"200000",
            image:"/src/assets/images/bags/bagType2.png"
        },
        {
            name:"This is Bag Name 3",
            id:"bagType3",
            price:"300000",
            image:"/src/assets/images/bags/bagType3.png"
        },
        {
            name:"This is Bag Name 4",
            id:"bagType4",
            price:"400000",
            image:"/src/assets/images/bags/bagType1.png"
        },
        {
            name:"This is Bag Name 5",
            id:"bagType5",
            price:"500000",
            image:"/src/assets/images/bags/bagType2.png"
        },
        {
            name:"This is Bag Name 6",
            id:"bagType6",
            price:"600000",
            image:"/src/assets/images/bags/bagType3.png"
        },
        {
            name:"This is Bag Name 7",
            id:"bagType7",
            price:"700000",
            image:"/src/assets/images/bags/bagType1.png"
        },
        {
            name:"This is Bag Name 8",
            id:"bagType8",
            price:"800000",
            image:"/src/assets/images/bags/bagType2.png"
        },
        {
            name:"This is Bag Name 9",
            id:"bagType9",
            price:"900000",
            image:"/src/assets/images/bags/bagType3.png"
        },
    ]

    const [formData, setFormData] = useState({
        quantity:0,
        type:"",
        amountPerOne:0,
        amountTotal:0
    })


    useEffect(()=>{
        if(formData.type && formData.quantity){
            const tempCatalogue = dummyCatalogue.filter(cat => cat.id === formData.type)[0]
            const tempAmount = new Intl.NumberFormat('en', {maximumFractionDigits:2}).format(tempCatalogue.price)
            const tempTotal = tempCatalogue.price * parseFloat(formData.quantity)
            const total = new Intl.NumberFormat('en', {maximumFractionDigits:2}).format(tempTotal)
            setFormData({...formData, ["amountPerOne"]:tempAmount})
            setFormData({...formData, ["amountTotal"]:total})
        }
    },[formData.type, formData.quantity])


    const handleChange = (e) => {
        console.log(e);
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

  return (
    <div className='bg-white mx-auto lg:m-auto rounded-ten z-50 w-ninetyFivePercent sm:w-seventyFivePercent max-h-ninetyPercent md:max-h-ninetyFivePercent overflow-hidden'>
        <div className='bg-brandGreen4x rounded-t-ten py-2.5 px-5 sm:px-10 md:px-14 w-full'>
            <h2 className='text-white font-avenirBlack text-2xl md:text-3xl'>Bag Catalogue</h2>
        </div>
        <form method='post' onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-3 overflow-hidden h-full rounded-b-ten'>
            
            <div className='pb-5 px-5 md:pl-10 lg:pr-5 pt-10 lg:py-10 col-span-1 lg:border-r-0.5 border-r-brandGray52x'>
                <div>
                    <fieldset className='gap-2.5 flex flex-col col-span-1 last:mds:col-span-2 last:sm:col-span-2'>
                        <label htmlFor="quantity" className='text-sm font-avenirHeavy'>Quantity of Bag</label>
                        <input onChange={handleChange} type="number" required name='quantity' id='quantity' placeholder='e.g 1' className='px-4 py-2.5 text-xs rounded-five border-0.5 border-brandGray32x' />
                    </fieldset>
                </div>
                <div className='flex py-5 justify-between gap-10 text-xs font-avenirHeavy'>
                    <p>Total Amount of Order: </p>
                    <p>NGN {formData.amountTotal}</p>
                </div>

                <div className='flex justify-end'>
                    <ButtonNoIcon type={'submit'} text={'Proceed to Payment'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} font={'font-avenirMedium'} fontSize={'text-sm md:text-base'}/>
                </div>
            </div>

            <div className='pt-5 px-5 md:pr-10 lg:pl-5 pb-20 lg:max-h-ninetyPercent lg:py-10 col-span-1 lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-5 h-full overflow-y-auto'>
                {dummyCatalogue.map((item, idx)=>{
                    return <fieldset key={idx}>
                        <label htmlFor={item.id} className={`${formData.type == item.id ? 'text-brandGreen4x' : 'text-black'} cursor-pointer`}>
                            <div className={`rounded-ten h-36`}>
                                <img className={`rounded-ten h-36 w-full skeleton ${formData.type == item.id ? 'border-brandGreen4x' : 'border-brandGray52x'} border object-cover`} src={item.image} alt={item.name} /> 
                            </div>
                            <div className={`pt-3`}>
                                <p className='font-avenirBlack'>{item.name}</p>
                                <p className='text-xs'>NGN {new Intl.NumberFormat('en', {maximumFractionDigits:2}).format(item.price)}</p>
                            </div>
                        </label>
                        <input required onChange={handleChange} type="checkbox" name="type" value={item.id} id={item.id} className={`hidden`} />
                    </fieldset>
                })}
            </div>

        </form>
    </div>
  )
}

export default NewOrderPopUpInner