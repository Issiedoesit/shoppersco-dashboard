import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import Overview from './components/Overview/Overview'
import Insight from './components/Insight/Insight'
import StoreManager from './components/StoreManager/StoreManager'
import BrandManager from './components/BrandManager/BrandManager'
import CampaignManager from './components/CampaignManager/CampaignManager'
import EcoBagProducer from './components/EcoBagProducer/EcoBagProducer'
import Impact from './components/Impact/Impact'
import TemplatePage from './components/Template'
import WrapCampaigns from './components/CampaignManager/WrapCampaigns'
import useCampaignStore from './customHooks/Stores/campaignStateStore'
import StateCampaign from './components/CampaignManager/CampaignMain/StateCampaign/StateCampaign'
import Login from './components/Auth/Login'
import useIsAuthPage from './customHooks/Stores/useIsAuthPage'
import SignUp from './components/Auth/SignUp'









function App() {
  const campaignState = useCampaignStore(state => state.currentCampaignState)
  const isAuthPage = useIsAuthPage(state => state.isAuthPage)

  return (
    <div className="App relative flex gap-10 2xl:gap-14 bg-brandGray28x min-h-screen text-brandBlack1x font-avenirRegular">
        <NavBar isAuthPage={isAuthPage}/>

    <div className='w-full'>
      <Routes>
        <Route index path='/' element={<Overview />}></Route>
        <Route path='/insight' element={<Insight />}></Route>
        <Route path='/store-manager' element={<StoreManager />}></Route>
        <Route path='/brand-manager' element={<BrandManager />}></Route>
        <Route path='/campaign-manager' element={<WrapCampaigns />}>
          <Route index element={<CampaignManager />}/>
          <Route path='' element={<CampaignManager />}/>
          <Route path={`state/${campaignState}`} element={<StateCampaign />} />
        </Route>
        <Route path='/eco-bag-producer' element={<EcoBagProducer />}></Route>
        <Route path='/impact' element={<Impact />}></Route>
        <Route path='/template' element={<TemplatePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
