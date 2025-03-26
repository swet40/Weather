import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2a429b426a6576945b3d8ba40a594e28";

    let weatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let responseJson = await response.json();

        let result = {
            city: city,
            temp: responseJson.main.temp,
            tempMax: responseJson.main.temp_max,
            tempMin: responseJson.main.temp_min,
            humidity: responseJson.main.humidity,
            feelsLike: responseJson.main.feels_like,
            description: responseJson.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
    }
    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await weatherInfo();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> 
            <br /><br />
            &nbsp;&nbsp;
            <Button variant="outlined" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place in our data</p>}
            </form>
        </div>
    )
}