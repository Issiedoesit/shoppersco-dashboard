import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


const useStoreInsightStore = create(devtools(
  (set) => ({
    storeId: '',
    modalDetails: [],
    setStoreId : (id) => set({storeId: id}),
    setModalDetails : (dataSet, id) => set({modalDetails: 
       dataSet.filter(data => {
        return data.id.indexOf(id) > -1
    })
    }),
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })
))


export default useStoreInsightStore