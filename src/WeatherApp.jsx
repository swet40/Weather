import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "switzerland",
        description: "clear sky",
        feelsLike:-2.04,
        humidity: 87,
        temp: -2.04,
        tempMax: -1.36,
        tempMin:-2.27
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}