import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useKYCModalStore = create(devtools((set)=>({
    isKYCModalOpen: false,
    changeIsKYCModalOpen: () => set((state) => ({ isKYCModalOpen: !state.isKYCModalOpen})),
})))

export default useKYCModalStore;