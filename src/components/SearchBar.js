
import { useContext, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"

const SearchBar = () => {

    const { searchCity } = useContext(WeatherContext)
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city !== "") {
            searchCity(city)
            setCity("")
        }
    }
    return (
        <div className="container-searchBar">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setCity(e.target.value)} value={city} className="searchBar" type="text" placeholder="Enter Location" />
                <button className="btn-search" type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBar