import React, { useRef } from 'react'
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







function App() {

  const navRef = useRef('')

  return (
    <div className="App relative flex gap-10 2xl:gap-14 bg-brandGray28x min-h-screen text-brandBlack1x font-avenirRegular">
    <div ref={navRef} className='fixed top-0 h-screen left-0 z-30 -translate-x-oneFiftyPercent xl:-translate-x-0 transition-transform duration-500 ease-in-out xl:static lg:col-span-3 2xl:col-span-2 w-64'>
      <NavBar />
    </div>

    <div className='w-full'>
      <Routes>
        <Route index path='/' element={<Overview />}></Route>
        <Route path='/insight' element={<Insight />}></Route>
        <Route path='/store-manager' element={<StoreManager />}></Route>
        <Route path='/brand-manager' element={<BrandManager />}></Route>
        <Route path='/campaign-manager' element={<CampaignManager />}></Route>
        <Route path='/eco-bag-producer' element={<EcoBagProducer />}></Route>
        <Route path='/impact' element={<Impact />}></Route>
        <Route path='/template' element={<TemplatePage />}></Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
