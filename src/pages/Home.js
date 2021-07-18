import React, { useState, useEffect } from 'react';
import { Countries } from '../components/Countries';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Header from '../components/Header';
import useSearchAndFilterCountry from '../hooks/useSearchAndFilterCountry';
import { Link } from 'react-router-dom'
import { client, QueryCountryList } from '../utils/index';
import { useQuery } from '@apollo/client';


function Home() {

    //States
    const { data, loading, error } = useQuery(QueryCountryList, { client });
    const [countries, setCountries] = useState([])
    //CustomHook
    const { handleSearch, handleSort, filteredCountries } = useSearchAndFilterCountry(countries)

    useEffect(() => {
        if (data) setCountries(data?.countries)
    }, [data])

    if (loading) { return <Loading /> }
    if (error) { return <Error text='Something seriously bad happened.' /> }

    return (

        <div>
            <Header
                search={handleSearch}
                sort={handleSort}
            />
            <div className="container grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-16 mx-auto mt-10">
                {filteredCountries &&
                    filteredCountries.map((country, index) => <Link to={{ pathname: '/country', state: country }} key={index}>
                        <Countries
                            name={country.name}
                            emoji={country.emoji}
                            code={country.code}
                            currency={country.currency}
                            continent={country.continent.name}

                        />
                    </Link>
                    )
                }
            </div>


        </div>

    )
}
export default Home;