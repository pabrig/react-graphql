import React, { useState, useEffect } from "react";
import CountryInfo from '../components/CountryInfo'

function Home() {
    const [countries, setCountries] = useState([]);


    //GetCountries
    const getCountries = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        await setCountries(data)
        console.log(data)

    }

    //SearchCountry
    const searchCountry = async (term) => {
        if (term === '' || term > 3) return
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
        const data = await response.json()
        await setCountries(data)

    }
    //SearchAlpha
    const searchAlphaCode = async (code) => {
        if (code === '') return
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        const data = await response.json()
        await setCountries(data)

    }
    //Filter by Region
    const filterRegion = async (region) => {
        if (region === '') return
        const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const data = await response.json()
        await setCountries(data)
    }
    //Filter by Languages
    const filterLanguages = async (et) => {

        const response = await fetch(`https://restcountries.eu/rest/v2/lang/${et}`)
        console.log(response)
        const data = await response.json()
        await setCountries(data)


    }
    //Filter by Currencies
    const filterCurrencies = async (currency) => {
        if (currency === '') return
        const response = await fetch(`https://restcountries.eu/rest/v2/currency/${currency}`)
        const data = await response.json()
        await setCountries(data)
        console.log(data)
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div className="bg-purple-700 ">
            <div className="w-screen shadow-md py-6 px-3 bg-purple-800 text-white">
                <div className="flex container mx-auto">
                    <h1 className="font-bold "><span>CHALLENGE CREHANA</span> by Pablo Rigalli</h1>
                </div>
            </div>
            <div className="flex container mx-auto mb-16 p-8">
                {/* Search country */}
                <input
                    className="pl-8 p-2 bg-purple-200 text-purple-800 rounded-md shadow-md w-1/4"
                    type="text"
                    placeholder="Search your country..."
                    onChange={(term) => { searchCountry(term.target.value) }} />
                {/* Search alpha2Code */}
                <input
                    className="pl-8 p-2 ml-4 bg-purple-200 text-purple-800 rounded-md shadow-md w-1/4"
                    type="text"
                    placeholder="Search your code..."
                    onChange={(code) => { searchAlphaCode(code.target.value) }} />
                {/* Filter by Region */}
                <select className="ml-5 pl-8 p-2 bg-purple-200 text-gray-400 rounded-md shadow-md w-1/5"
                    onChange={val => { filterRegion(val.target.value) }}>
                    <option>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                {/* Filter by Lenguages */}
                <select className="ml-5 pl-8 p-2 bg-purple-200 text-gray-400 rounded-md shadow-md w-1/5"
                    onChange={(val) => { filterLanguages(val.target.value) }}>
                    <option>Filter by Languages</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">French</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                </select>
                {/* Filter by Currencies */}
                <select className="ml-5 pl-8 p-2 bg-purple-200 text-gray-400 rounded-md shadow-md w-1/5"
                    onChange={(val) => { filterCurrencies(val.target.value) }}>
                    <option>Filter by Currencies</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>

                </select>

            </div>
            <div className="container grid grid-cols-3 gap-16 mx-auto">
                {countries.map((country, index) =>
                    <div className="container rounded-lg bg-purple-900 text-gray-300" key={index}>
                        <img className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" src={country.flag} alt={country.title} />
                        <div className="p-5">
                            <h2 className="font-bold mb-4">{country.name}</h2>
                            <h3>Capital: <span className="text-gray-400 ">{country.capital}</span></h3>
                            <h3>Region: <span className="text-gray-400 ">{country.region}</span></h3>
                            <h3>Alphacode: <span className="text-gray-400 ">{country.alpha2Code}</span></h3>
                            <h3>Languages: <span className="text-gray-400 ">{country.languages[0].name}</span></h3>
                            <h3>Currencies: <span className="text-gray-400 ">{country.currencies[0].code}</span></h3>

                        </div>
                    </div>

                )}
            </div>
        </div>
    )
};


export default Home;