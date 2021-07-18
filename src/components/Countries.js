

export const Countries = ({ name, emoji, code, currency, continent }) => {
    return (
        <div className="h-48 min-h-0 container rounded-lg bg-purple-900 text-gray-300 p-5">
            <h1 className="font-bold mb-4 text-center">{name}&nbsp;&nbsp;{emoji}</h1>
            <h3>Code: <span className="text-gray-400 ">{code}</span></h3>
            <h3>Currencies: <span className="text-gray-400 ">{currency}</span></h3>
            <h3>Continent: <span className="text-gray-400 ">{continent}</span></h3>
        </div>

    )

}

