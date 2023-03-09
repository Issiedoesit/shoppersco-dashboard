import React from 'react'
import CountryInsightData from '../../data/Overview/CountryInsightData';
import map from './../../assets/images/map/map.svg';

const CountryInsight = () => {





  return (
    <div className='col-span-2 bg-white rounded-ten p-7'>
        <div className="flex xs:flex-col items-center justify-between gap-5">
        <h4 className='font-avenirHeavy'>ShoppersBag Country Insight</h4>
          <label htmlFor="countryInsight" className='xs:w-full'>
            <select name="country-insight" id="countryInsight" className='rounded-fifty pr-2 xs:w-full sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-xs sm:text-sm text-brandGray34x py-2 md:py-2.5 border-0.5 pl-2 border-brandGray34x'>
              <option value="Select country" selected disabled>Select country</option>
            </select>
          </label>
        </div>

        <div className='text-xxs uppercase flex xs:flex-col flex-row items-center py-6 gap-4'>
          <div className='flex flex-row items-center gap-2'><div className='w-2 h-2 bg-brandBlue1x rounded-fiftyPercent'></div> Shoppersbag Inactive States  </div>
          <div className='flex flex-row items-center gap-2'><div className='w-2 h-2 bg-brandGreen1x rounded-fiftyPercent'></div> Shoppersbag Active States </div>
        </div>

        <section className='sm:flex gap-5 lg:block'>

          <div>
            <img src={map} alt="map" className='w-full'/>
          </div>
          <div className='text-xxs pt-8'>
              {CountryInsightData.map((data, index)=>{
                return <div key={`countryInsight${index}`} id={`countryInsight${index}`} className='border-b-0.5 border-b-brandGray28x last:border-b-0 py-2 flex xs:gap-2 justify-between items-end gap-5'>
                    <p>{data.insight}</p>
                    <p className='text-brandBlue1x font-avenirBlack w-twentyPercent'>{data.num}</p>
                </div>
              })}
          </div>
        </section>
    </div>
  )
}

export default CountryInsight