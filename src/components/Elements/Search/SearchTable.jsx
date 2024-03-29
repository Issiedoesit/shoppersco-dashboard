import React from 'react'
import { useSearchTables } from '../../../customHooks/SearchTables'

const SearchTable = ({searchId, searchName, searchPlaceHolder, classToSearch}) => {


    const [handleSearch, handleBlur, noResultsFound, searchQuery] = useSearchTables('', classToSearch)

  return (
    <>
        <label htmlFor={searchId} className={ `w-full rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 ${searchQuery ? noResultsFound ? 'border-brandRed1x' : 'border-brandGreen1x' : 'border-brandGray4x'} transition-all ease-in-out duration-500`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`${searchQuery ? noResultsFound ? 'stroke-brandRed1x' : 'stroke-brandGreen1x' : ''} transition-all ease-in-out duration-500`} d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path className={`${searchQuery ? noResultsFound ? 'stroke-brandRed1x' : 'stroke-brandGreen1x' : ''} transition-all ease-in-out duration-500`} opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="search" onChange={handleSearch} onBlur={handleBlur} name={searchName} id={searchId} placeholder={searchPlaceHolder || 'Search by name, date, location or status'} className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
        </label>
        {(searchQuery && noResultsFound) && <p className='pt-2 text-xs text-right text-brandRed1x'>No Results found</p>}
    </>
    )
}

export default SearchTable