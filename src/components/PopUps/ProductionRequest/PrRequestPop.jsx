import React, {useEffect} from 'react'
import usePrRequestStore from '../../../customHooks/Stores/PRequestModalStore'
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore'
import StoreInsightData from '../../../data/StoreManager/StoreInsightData'
import InnerPopPrRequest from './InnerPopPrRequest'


const PrRequestPop = () => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const storeId = useStoreInsightStore(state => state.storeId)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    const PrRequestModalStoreState = usePrRequestStore(state => state.isPrRequestModalOpen)
    const setIsPrRequestModalOpen = usePrRequestStore(state => state.changeIsPrRequestModalOpen)

    const handlePrRequestModal = () =>{
        setIsPrRequestModalOpen()
        console.warn(modalDetailState);
    }
  
    useEffect(() =>         
        setModalDetailState(StoreInsightData, 'storeInsight1')
    , [])

    

  return (
    // <div id='PrRequestPopUp' className={`z-50 flex flex-col fixed top-0 col-span-12 left-0 w-full h-screen py-20 overflow-y-auto items-center`}>
    <div id='PrRequestPopUp' className={`z-50  ${PrRequestModalStoreState ? 'flex' : 'hidden'} flex-col fixed top-0 bg-black/30 backdrop-blur-sm col-span-12 left-0 w-full h-screen py-20 overflow-y-auto items-center `}>
        <div onClick={handlePrRequestModal} className='overlay cursor-pointer pop-up-closer  w-full h-full z-20  fixed top-0 left-0 '></div>
        {modalDetailState.map((data, index)=>{
            return <InnerPopPrRequest keyprop={'modalDetail'+index} user={data.name} location={data.location}/>
        })}
    </div>
  )
}

export default PrRequestPop