
import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import SearchBar from "./SearchBar"

const Homepage = () => {

    const { weather, permission } = useContext(WeatherContext)
    return (
        <div className="container">
            <div className="container-img"></div>
            <SearchBar />
            
            {permission && (
                <div className="results">
                    <div className="head-results">{weather.name}, {weather.sys.country}</div>
                    <div className="head-results">{Math.round(weather.main.temp)}°C</div>
                    <div className="head-results">{weather.weather[0].main}</div>
                    <div className="">{weather.weather[0].description}</div>
                    <div className="sub-results">
                        <div>
                            <div>Max Temp</div>
                            <div>{Math.round(weather.main.temp_max)}°C</div>
                        </div>
                        <div>
                            <div>Min Temp</div>
                            <div>{Math.round(weather.main.temp_min)}°C</div>
                        </div>
                        <div>
                            <div>Feels Like</div>
                            <div>{Math.round(weather.main.feels_like)}°C</div>
                        </div>
                        <div>
                            <div>Humidity</div>
                            <div>{weather.main.humidity} %</div>
                        </div>
                        <div>
                            <div>Wind</div>
                            <div>{weather.wind.speed} km/h</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Homepage