import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {

    const handleOnSearchChange = (searchData)=>{
        console.log(searchData);
        const [lat, lon] = searchData.value.split(" ");
    }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
