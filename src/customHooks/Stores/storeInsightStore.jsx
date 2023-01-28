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
    // moveModalDetails : (dataSet, id) => set({modalDetails: 
    //   dataSet.map(function(x){return x.id;}).indexOf(id)
    // }),
  })
))


export default useStoreInsightStore