import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import KYCPopUp from '../PopUps/KYC/KYCPop'
import TemplatePage from '../Template'
import EcoBagProducerInsight from './InsightEcoBagProducers/InsightEcoBagProducer'
import axios from 'axios'
import useSWR from 'swr'
import Loading from '../Elements/Loaders/Loading'
import FetchErrorPage from '../Elements/Sections/FetchError/FetchErrorPage'
import UseAuth from '../../utils/UseAuth'
import LinkIcon from '../Links/LinkIcon'


const EcoBagProducer = () => {
  useDocTitle('ShoppersBag | Eco-bag Producer')

  const {token} = UseAuth()

  const fetcher = async(url) => axios.get(url, {headers : {"Authorization":`Bearer ${token}`}})
  const fetchedProducersInsights = useSWR(`${import.meta.env.VITE_BASE_URL}admin/producers/insights`, fetcher)

  if (fetchedProducersInsights.error) return <FetchErrorPage />
  if (!fetchedProducersInsights.data) return <Loading />
  console.log("fetchedProducersInsights  => ", fetchedProducersInsights.data);

  const producersInsightsData = fetchedProducersInsights.data.data.data
  console.log(producersInsightsData);


  return (
    <TemplatePage headerTitle={'Eco-bag Producers'}>
        <div className='flex justify-end py-5'>
          
            <LinkIcon link={'./production-orders'} text={'All Production Orders'} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
        </div>

        <EcoBagProducerInsight data={producersInsightsData} />

        <KYCPopUp />
    </TemplatePage>
  )
}

export default EcoBagProducer