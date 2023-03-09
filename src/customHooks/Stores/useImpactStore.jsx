import { create } from 'zustand';
import { devtools } from 'zustand/middleware';



const useImpactStore = create(devtools(
(set)=>({
    isImpactModalOpen: false,
    currentImpactState: '',
    setCurrentImpactState: (val) => set({currentImpactState: val }),
    changeImpactModalState: () => set((state)=> ({isImpactModalOpen: !(state.isImpactModalOpen)}))
})))


export default useImpactStore