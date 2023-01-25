import {useMemo, useState} from 'react'

const useSearchTables = (query, search) => {
  const [searchQuery, setSearchQuery] = useState(query)


  

  const handleBlur = () =>{
    if(searchQuery === ''){
      setRows(8)
    }
  }

  useMemo(() => {
    return $('.'+search).filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
    })
}, [searchQuery])

  return searchQuery
}

export {useSearchTables}