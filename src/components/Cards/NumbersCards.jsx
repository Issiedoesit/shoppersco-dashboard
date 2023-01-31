import React from 'react'

const NumbersCards = ({keyprop, id, header, metric, amount, link, linkText, percent, trend, extraClasses}) => {
  return (
    <div key={keyprop} id={id} className={`bg-white py-3 rounded-eight ${extraClasses} pl-18px pr-3 flex flex-col justify-between h-full lg:h-auto`}>
        <div>
            <p className='text-xxs sm:text-xs'>{header}</p>
            <h3 className='font-avenirHeavy text-xs sm:text-sm'>{metric}</h3>
        </div>

        <div className='pt-3 flex flex-row items-end justify-between text-brandGreen4x'>
            <h4 className='font-avenirBlack sm:text-xl'>{amount}</h4>
           
           {trend 
           ?  
           <div className='flex items-end gap-2'>
                {trend.toLowerCase() === 'up' ?
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99998 10.5H5.44248C3.51164 10.5 2.71831 9.12919 3.68664 7.45502L4.46831 6.10752L5.24998 4.76002C6.21831 3.08585 7.79914 3.08585 8.76747 4.76002L9.54914 6.10752L10.3308 7.45502C11.2991 9.12919 10.5058 10.5 8.57497 10.5H6.99998Z" stroke="#029834" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                :
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.82397 3.49998H6.26647C4.33564 3.49998 3.54231 4.87081 4.51064 6.54498L5.29231 7.89248L6.07397 9.23998C7.04231 10.9141 8.62314 10.9141 9.59147 9.23998L10.3731 7.89248L11.1548 6.54498C12.1231 4.87081 11.3298 3.49998 9.39897 3.49998H7.82397Z" stroke="#FF3A44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
                <p className={`${trend.toLowerCase() === 'up' ? 'text-brandGreen4x' : 'text-brandRed1x'} text-xxs sm:text-xs`}>{percent}</p>
            </div>
            :
            <a href={link} className='text-xs sm:text-sm text-brandBlue1x'>{linkText}</a>}
        </div>
    </div>
  )
}

export default NumbersCards