
import Homepage from "./components/Homepage"
import WeatherContextProvider from "./context/WeatherContext"

const App = () => {
  return (
    <WeatherContextProvider>
      <Homepage />
    </WeatherContextProvider>
  )
}
export default App