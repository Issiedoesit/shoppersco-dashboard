import {useMemo, useState} from 'react'


const useSearchTables = (query, search) => {
  const [searchQuery, setSearchQuery] = useState(query)
  const [noResultsFound, setNoResultsFound] = useState(false)
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setNoResultsFound(false)
  }

  const handleBlur = () => {
    // if (query === "") {
    //   setRows(8)
    // }
  }

  useMemo(() => {
    const tableRows = document.querySelectorAll('.' + search);
    let noResults = true
    tableRows.forEach(tableRow => {
      const tableRowText = tableRow.textContent.toLowerCase();
      const searchQueryLowerCase = searchQuery.toLowerCase();
      if (tableRowText.includes(searchQueryLowerCase)) {
        tableRow.style.display = '';
        noResults = false
      } else {
        tableRow.style.display = 'none';
      }
    });
    setNoResultsFound(noResults);
  }, [searchQuery])

  return [handleSearch, handleBlur, noResultsFound, searchQuery]
}

export {useSearchTables}