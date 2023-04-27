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

        <EcoBagProducerInsight data={producersInsightsData} />

        <KYCPopUp />
    </TemplatePage>
  )
}

export default EcoBagProducer