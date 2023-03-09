import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useModalStore = create(devtools((set)=>({
    isModalOpen: false,
    changeIsModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen})),
})))

export default useModalStore;