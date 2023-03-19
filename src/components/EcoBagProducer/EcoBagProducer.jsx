import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import Header from '../Header/Header'
import KYCPopUp from '../PopUps/KYC/KYCPop'
import TemplatePage from '../Template'
import EcoBagProducerInsight from './InsightEcoBagProducers/InsightEcoBagProducer'


const EcoBagProducer = () => {
  useDocTitle('ShoppersBag | Eco-bag Producer')


  return (
    <TemplatePage headerTitle={'Eco-bag Producers'}>

        <EcoBagProducerInsight />

        <KYCPopUp />
    </TemplatePage>
  )
}

export default EcoBagProducer