import { useState, useEffect } from "react";
import { sortByParameters, filterArrayByQuery } from '../utils/index';

function useSearchAndFilterCountry(data) {

    const [searchInput, setSearchInput] = useState('');
    const [filteredCountries, setfilteredCountries] = useState([]);

    const handleSearch = (term) => {
        setSearchInput(term.target.value)
        if (data && term.target.value === '') setfilteredCountries(data)
        if (filteredCountries) setfilteredCountries(filterArrayByQuery(filteredCountries, 'name', term.target.value))
    }

    useEffect(() => {
        if (data && searchInput === '') setfilteredCountries(data)
    }, [searchInput, data])


    const handleSort = (e) => {
        const cont = [...filteredCountries]
        switch (e.target.value) {
            case 'currency':
                sortByParameters(cont, 'currency')
                break
            case 'code':
                sortByParameters(cont, 'code')
                break
            case 'continent':
                sortByParameters(cont, 'continet')
                break
            default:
                sortByParameters(cont, 'name')
        }
        setfilteredCountries(cont)
    }
    return { handleSort, handleSearch, filteredCountries, searchInput }
}
export default useSearchAndFilterCountry