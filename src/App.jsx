import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import Overview from './components/Overview/Overview'
import Insight from './components/Insight/Insight'
import StoreManager from './components/StoreManager/StoreManager'
import BrandManager from './components/BrandManager/BrandManager'
import CampaignManager from './components/CampaignManager/CampaignManager'
import EcoBagProducer from './components/EcoBagProducer/EcoBagProducer'
import Impact from './components/Impact/Impact'
import useCampaignStore from './customHooks/Stores/campaignStateStore'
import StateCampaign from './components/CampaignManager/CampaignMain/StateCampaign/StateCampaign'
import Login from './components/Auth/Login'
import useIsAuthPage from './customHooks/Stores/useIsAuthPage'
import SignUp from './components/Auth/SignUp'
import StateImpact from './components/Impact/StateImpact/StateImpact'
import NoMatchPage from './components/NoMatchPage'
import CampaignActivity from './components/CampaignManager/CampaignMain/Activity/CampaignActivity'
import Profile from './components/Profile/Profile'
import PrivateRoute from './utils/PrivateRoute'
import ListEcoBagProducers from './components/EcoBagProducer/ListEcoBagProducers/ListEcoBagProducers'
import CampaignMain from './components/CampaignManager/CampaignMain/InsightCampaign/InsightCampaign'
import MainCampaign from './components/CampaignManager/CampaignMain/MainCampaign/MainCampaign'

function App() {
  const campaignState = useCampaignStore(state => state.currentCampaignState)
  const isAuthPage = useIsAuthPage(state => state.isAuthPage)
  const authLevel = useIsAuthPage(state => state.authLevel)


    useEffect(() => {
        const currentLocation = window.location.pathname
        console.log(currentLocation);
        if(isAuthPage && (currentLocation == '/sign-up' || currentLocation == '/login' || currentLocation == '/signup')) {
          document.body.style.overflow = 'auto'
        }else{
          document.body.style.overflow = 'hidden'
        }
    }, [isAuthPage])

  return (
    <div className="App relative flex gap-10 2xl:gap-14 bg-brandGray28x min-h-screen text-brandBlack1x font-avenirRegular">
        
        <NavBar isAuthPage={isAuthPage} userType={authLevel} />

        <div className='w-full'>

          {/* to access dashboard currently, go to <PrivateRoute /> and set user to true */}
        <Routes>

            <Route path='/' element={<Navigate to={'/dashboard'} replace />} />

            {authLevel === 'superAdmin' && 
                <Route path='/dashboard' element={<PrivateRoute />}>
                  <Route index path='' element={<Overview />} />
                  <Route path='insight' element={<Insight />} />
                  <Route path='store-manager' element={<StoreManager />} />
                  <Route path='brand-manager' element={<BrandManager />} />

                  <Route path='campaign-manager'>
                    <Route index element={<MainCampaign />}/>
                    <Route path='' element={<MainCampaign />}/>
                    <Route path='campaign-activity' element={<CampaignActivity />}/>
                    {/* <Route path={`state/abuja`} element={<StateCampaign />} /> */}
                    {/* <Route path={`state/${campaignState}`} element={<StateCampaign />} /> */}
                  </Route>

                  <Route path='eco-bag-producer'  >
                    <Route path='' element={<EcoBagProducer />} />
                    <Route path='production-orders' element={<ListEcoBagProducers />} />
                  </Route>

                  <Route path='impact'>
                    <Route index element={<Impact />}/>
                    <Route path='' element={<Impact />} />
                    <Route path={`state/delta`} element={<StateImpact />} />
                    {/* <Route path={`state/${campaignState}`} element={<StateCampaign />} /> */}
                  </Route>
                  <Route path="profile" element={<Profile />} />
                </Route>
            }

            {/* {authLevel === 'user' && 
                  <>
                    <Route index path='/' element={<Home />} />
                    <Route index path='/community' element={<Community />} />
                    <Route index path='/activities' element={<Activities />} />
                    <Route index path='/store' element={<Store />} />
                    <Route index path='/inventory' element={<Inventory />} />
                  </>
            } */}

            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='*' element={<NoMatchPage />} />

          </Routes>
        </div>

    </div>
  )
}

export default App
