
import axios from "axios"
import { createContext, useState } from "react"

export const WeatherContext = createContext()

const WeatherContextProvider = ({ children }) => {

    const [weather, setWeather] = useState({})
    const [permission, setPermission] = useState(false)

    const url = process.env.REACT_APP_WEATHER_API_URL
    const key = process.env.REACT_APP_WEATHER_API_KEY
    const units = "metric"
    const lang = "en"       // default

    const searchCity = async (city) => {
        const response = await axios(`${url}/data/2.5/weather?q=${city}&units=${units}&appid=${key}&lang=${lang}`)
        setWeather(response.data)
        setPermission(true)
    }
    return (
        <WeatherContext.Provider value={{ searchCity, weather, permission }}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider