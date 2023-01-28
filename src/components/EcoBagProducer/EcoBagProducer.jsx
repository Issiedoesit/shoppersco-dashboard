import React from 'react'
import { useDocTitle } from '../../customHooks/DocumentTitle'
import Header from '../Header/Header'
import KYCPopUp from '../PopUps/KYC/KYCPop'
import EcoBagProducerInsight from './InsightEcoBagProducers/InsightEcoBagProducer'


const EcoBagProducer = () => {
  useDocTitle('ShoppersBag | Eco-bag Producer')


  return (
    <div className='pb-7 h-screen overflow-hidden bg-brandGray28x'>
      <div className='overflow-y-auto bg-brandGray28x h-full px-5 sm:px-10 xl:pl-0 xl:pr-10'>
      <Header page="Eco-bag Producers"/>

        <div className='pb-10 overflow-y-auto'>

        <EcoBagProducerInsight />

        </div>
        
      </div>
      <KYCPopUp />
    </div>
  )
}

export default EcoBagProducer