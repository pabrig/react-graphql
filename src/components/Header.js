
function Header({ search, sort }) {

    return (
        <div className="w-screen shadow-md py-6 px-3 bg-purple-800 text-white">
            <div className="flex container mx-auto justify-center">
                <h1 className="font-bold text-2xl mx-4"><span>CHALLENGE CREHANA</span><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/pablo-rigalli-376a04189/"> by Pablo Rigalli</a> </h1>
            </div>
            <div className="flex container mx-auto  p-4">

                {/* Search country */}
                <input
                    className="pl-8 p-2 bg-purple-200 text-purple-800 rounded-md shadow-md w-1/2"
                    type="text"
                    placeholder="Search your country..."
                    onChange={search} />

                {/* Filter by Region */}
                <select className="ml-5 pl-8 p-2 bg-purple-200 text-gray-400 rounded-md shadow-md w-1/2"
                    onChange={sort}>
                    <option value="">Filter your country</option>
                    <option value="code">Code</option>
                    <option value="currency">Currency</option>
                    <option value="continent">Continet</option>
                </select>
            </div>
        </div>
    )



}
export default Header;