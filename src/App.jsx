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
import useCampaignStore from './customHooks/Stores/campaignStateStore'
import StateCampaign from './components/CampaignManager/CampaignMain/StateCampaign/StateCampaign'
import Login from './components/Auth/Login'
import useIsAuthPage from './customHooks/Stores/useIsAuthPage'
import SignUp from './components/Auth/SignUp'
import StateImpact from './components/Impact/StateImpact/StateImpact'
import NoMatchPage from './components/NoMatchPage'
import CampaignActivity from './components/CampaignManager/CampaignMain/Activity/CampaignActivity'
import Home from './components/User/Home/Home'
import Community from './components/User/Community/Community'
import Activities from './components/User/Activities/Activities'
import Store from './components/User/Store/Store'
import Inventory from './components/User/Inventory/Inventory'
import Campaign from './components/Partner/Campaign/Campaign'
import PartnerInventory from './components/Partner/PartnerInventory/PartnerInventory'
import PartnerHome from './components/Partner/PartnerHome/PartnerHome'

function App() {
  const campaignState = useCampaignStore(state => state.currentCampaignState)
  const isAuthPage = useIsAuthPage(state => state.isAuthPage)
  const authLevel = useIsAuthPage(state => state.authLevel)

  return (
    <div className="App relative flex gap-10 2xl:gap-14 bg-brandGray28x min-h-screen text-brandBlack1x font-avenirRegular">
        
        <NavBar isAuthPage={isAuthPage} userType={authLevel} />

        <div className='w-full'>
        <Routes>

            {authLevel === 'superAdmin' && 
                <>
                  <Route index path='/' element={<Overview />} />
                  <Route path='/insight' element={<Insight />} />
                  <Route path='/store-manager' element={<StoreManager />} />
                  <Route path='/brand-manager' element={<BrandManager />} />

                  <Route path='/campaign-manager'>
                    <Route index element={<CampaignManager />}/>
                    <Route path='' element={<CampaignManager />}/>
                    <Route path='campaign-activity' element={<CampaignActivity />}/>
                    <Route path={`state/abuja`} element={<StateCampaign />} />
                    {/* <Route path={`state/${campaignState}`} element={<StateCampaign />} /> */}
                  </Route>

                  <Route path='/eco-bag-producer' element={<EcoBagProducer />} />

                  <Route path='/impact'>
                    <Route index element={<Impact />}/>
                    <Route path='' element={<Impact />} />
                    <Route path={`state/delta`} element={<StateImpact />} />
                    {/* <Route path={`state/${campaignState}`} element={<StateCampaign />} /> */}
                  </Route>
                </>
            }

            {authLevel === 'user' && 
                  <>
                    <Route index path='/' element={<Home />} />
                    <Route index path='/community' element={<Community />} />
                    <Route index path='/activities' element={<Activities />} />
                    <Route index path='/store' element={<Store />} />
                    <Route index path='/inventory' element={<Inventory />} />
                  </>
            }

            {authLevel === 'partner' && 
                <>
                  <Route index path='/' element={<PartnerHome />} />
                  <Route index path='/discussion' element={<Community />} />
                  <Route index path='/campaigns' element={<Campaign />} />
                  <Route index path='/inventory' element={<PartnerInventory />} />
                  <Route index path='/impact' element={<Inventory />} />
                </>
            }

            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='*' element={<NoMatchPage />} />

          </Routes>
        </div>

    </div>
  )
}

export default App
