import React, { useEffect, useState } from 'react'
import CountryInsightData from '../../data/Overview/CountryInsightData';
import map from './../../assets/images/map/map.svg';
import axios from 'axios'
import useSWR from 'swr'
import { BeatLoader, FadeLoader } from 'react-spinners';
import UseAuth from '../../utils/UseAuth';

const CountryInsight = ({countries}) => {

 

  const [currentCountry, setCurrentCountry] = useState('nigeria')
  // const [countryData, setCountryData] = useState(`${import.meta.env.VITE_BASE_URL}admin/overview/insights/country/${currentCountry}`)
  // const [url, setUrl] = useState('')

  const {token} = UseAuth()


  const fetchCountryStat = (e) => {
    const countrySelected = e.target.value.toLowerCase()
    setCurrentCountry(countrySelected)
  }

  let url = `${import.meta.env.VITE_BASE_URL}admin/overview/insights/country/${currentCountry}`

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${token}`}})
  const fetchedCountryStat = useSWR(url, fetcher)

  if(!fetchedCountryStat.data) return <div className='col-span-2 bg-white rounded-ten px-7 py-24'><FadeLoader color="#009933" className='mx-auto' /></div>
  if(fetchedCountryStat.error) return <div className='col-span-2 bg-white rounded-ten px-7 py-24 text-brandGreen1x'>Failed to load ...</div>
  const countryData = fetchedCountryStat.data.data.data
  // console.log(`fetchedCountryStat for ${currentCountry}  =>`, fetchedCountryStat);
  
  

  return (
    <div className='col-span-2 bg-white rounded-ten p-7'>
        <div className="flex xs:flex-col items-center justify-between gap-5">
        <h4 className='font-avenirHeavy'>ShoppersBag Country Insight</h4>
          <label htmlFor="countryInsight" className='xs:w-full'>
            <select onChange={fetchCountryStat} name="country-insight" id="countryInsight" className='rounded-fifty pr-2 xs:w-full sm:pr-5 lg:pr-10 focus:ring-inset focus:ring-2 focus:ring-offset-2 focus:ring-brandGreen4x focus:outline-none bg-brandWhite1x text-sm text-brandGray34x py-2 md:py-2.5 h-38px sm:h-11 border-0.5 pl-2 border-brandGray34x'>
              <option key={0} value="Select country" disabled>Select country</option>
              {countries && countries.map((country, idx)=>{
                return <option key={idx+1} selected={country.name.toLowerCase() == currentCountry} value={country.name}>{country.name}</option>
              })}
            </select>
          </label>
        </div>

        {/* <div className='text-xxs uppercase flex xs:flex-col flex-row items-center py-6 gap-4'>
          <div className='flex flex-row items-center gap-2'><div className='w-2 h-2 bg-brandBlue1x rounded-fiftyPercent'></div> Shoppersbag Inactive States  </div>
          <div className='flex flex-row items-center gap-2'><div className='w-2 h-2 bg-brandGreen1x rounded-fiftyPercent'></div> Shoppersbag Active States </div>
        </div> */}

        <section className='sm:flex gap-5 lg:block'>

          {/* <div>
            <img src={map} alt="map" className='w-full'/>
          </div> */}
          
          <div className='text-xs pt-8 w-full'>
              {CountryInsightData.map((data, index)=>{
                return <div key={`countryInsight${index}`} id={`countryInsight${index}`} className='border-b-0.5 border-b-brandGray28x  w-full last:border-b-0 py-2 flex xs:gap-2 justify-between items-end gap-5'>
                    <p>{data.insight}</p>
                    <p className='text-brandBlue1x font-avenirBlack w-twentyPercent text-right'>{countryData ? countryData[data.id] : '---'}</p>
                </div>
              })}
          </div>
        </section>
    </div>
  )
}

export default CountryInsight