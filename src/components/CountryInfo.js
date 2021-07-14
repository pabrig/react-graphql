function CountryInfo(image, name, capital, region, alpha2Code, languages) {
    return (
        <div >
            <img className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" src={image} alt={name} />
            <div className="p-5">
                <h2 className="font-bold mb-4">{name}</h2>
                <h3>Capital: <span className="text-gray-400 ">{capital}</span></h3>
                <h3>Region: <span className="text-gray-400 ">{region}</span></h3>
                <h3>Alphacode: <span className="text-gray-400 ">{alpha2Code}</span></h3>
                <h3>Languages: <span className="text-gray-400 ">{languages}</span></h3>
            </div>
        </div>
    )

};

export default CountryInfo;