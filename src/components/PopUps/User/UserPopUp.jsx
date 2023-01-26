import React, { useMemo } from 'react'
import useModalStore from '../../../customHooks/Stores/modalStore';
import useStoreInsightStore from '../../../customHooks/Stores/storeInsightStore';
import StoreInsightData from '../../../data/StoreManager/StoreInsightData';
import UserPopUpInner from './UserPopUpInner';



const UserPopUp = () => {
    const modalDetailState = useStoreInsightStore(state => state.modalDetails)
    const storeId = useStoreInsightStore(state => state.storeId)
    const setModalDetailState = useStoreInsightStore(state => state.setModalDetails)
    const modalStoreState = useModalStore(state => state.isModalOpen)
    const setModalStoreState = useModalStore(state => state.changeIsModalOpen)

    const handleModal = () =>{
        // console.log(modalDetailState);
        setModalStoreState()
    }


    
    useMemo(() =>         
        setModalDetailState(StoreInsightData, storeId)
    , [storeId])

    

  return (
    <div id='userPopUp' className={`z-50 ${modalStoreState ? 'flex' : 'hidden'} fixed top-0 col-span-12 left-0 w-full h-screen py-20 overflow-y-auto`}>
        <div onClick={handleModal} className='overlay cursor-pointer pop-up-closer bg-black/30 w-full h-full z-20 backdrop-blur-sm fixed top-0 left-0 '></div>
        {modalDetailState.map((data)=>{
            return <UserPopUpInner user={data.name} location={data.location}/>
        })}
    </div>
  )
}

export default UserPopUp