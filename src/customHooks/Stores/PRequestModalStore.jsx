import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const usePrRequestStore = create(devtools((set)=>({
    isPrRequestModalOpen: false,
    changeIsPrRequestModalOpen: () => set((state) => ({ isPrRequestModalOpen: !state.isPrRequestModalOpen})),
})))

export default usePrRequestStore;