import { create } from 'zustand';
import { devtools } from 'zustand/middleware';



const useCampaignStore = create(devtools(
(set)=>({
    isCampaignModalOpen: false,
    currentCampaignState: '',
    setCurrentCampaignState: (val) => set({currentCampaignState: val }),
    changeCampaignModalState: () => set((state)=> ({isCampaignModalOpen: !(state.isCampaignModalOpen)}))
})))


export default useCampaignStore