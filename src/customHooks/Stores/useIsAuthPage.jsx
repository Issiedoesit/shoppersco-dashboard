import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useIsAuthPage = create(devtools((set)=>({
    isAuthPage: false,
    // options for authLevel == {user, superAdmin, partner}
    authLevel: 'superAdmin' ,
    setIsAuthPage: () => set({isAuthPage: true})
})))

export default useIsAuthPage