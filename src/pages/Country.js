import { useHistory, useLocation } from 'react-router'

function Country() {
    const { state } = useLocation()
    const history = useHistory()
    const goHome = () => { history.push('/') }

    return (
        <div className="py-14 sm:w-80 md:w-1/2 country-info align-middle flex justify-center">
            <div className="container rounded-xl  bg-purple-900 text-gray-300 p-5 shadow-inner ">
                <h1 className="font-bold mb-4 text-center text-3xl ">{state.name}&nbsp;&nbsp;{state.emoji}</h1>
                <h2 className="text-xl">Capital: <span className="text-gray-400 text-xl">{state.capital}</span></h2>
                <h2 className="text-xl">Continent: <span className="text-gray-400 text-xl">{state.continent.name}</span></h2>
                <h2 className="text-xl">Language: <span className="text-gray-400 text-xl">{state.languages[0]?.name}</span></h2>
                <h2 className="text-xl">Code: <span className="text-gray-400 text-xl">{state.code}</span></h2>
                <h2 className="text-xl">Currencies: <span className="text-gray-400 text-xl">{state.currency}</span></h2>
                <div className="container mx-auto m-16 flex justify-center">
                    <button className="  sm:1  lg:w-1/2 bg-purple-700 hover:bg-purple-400 text-white hover:text-gray-200 font-bold py-2 px-4 rounded"
                        onClick={() => { goHome() }}>
                        Home
                    </button>
                </div>
            </div>
        </div>
    )

}
export default Country;