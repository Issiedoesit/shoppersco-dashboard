import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useIsAuthPage = create(devtools((set)=>({
    isAuthPage: false,
    setIsAuthPage: () => set({isAuthPage: true})
})))

export default useIsAuthPage