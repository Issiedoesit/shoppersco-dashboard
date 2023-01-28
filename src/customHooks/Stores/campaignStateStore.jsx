import { create } from 'zustand';
import { devtools } from 'zustand/middleware';



const useCampaignStore = create(devtools(
(set)=>({
    currentCampaignState: '',
    setCurrentCampaignState: (val) => set({currentCampaignState: val })
})))


export default useCampaignStore