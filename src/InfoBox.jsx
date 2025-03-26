import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    let init_url = 'https://static.vecteezy.com/system/resources/previews/029/772/287/large_2x/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg';

    let hot_url = 'https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?rs=1&pid=ImgDetMain';
    let cold_url = 'https://www.washingtonpost.com/resizer/MxAG9YON9630IRyak54_zxy-xq0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WUEGN5KLGBCJHJVVAZYCC2RMNQ.jpg';
    let rainy_url = 'https://static.vecteezy.com/system/resources/previews/029/772/287/large_2x/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg';
    // let info = {
    //     city: "switzerland",
    //     description: "clear sky",
    //     feelsLike:-2.04,
    //     humidity: 87,
    //     temp: -2.04,
    //     tempMax: -1.36,
    //     tempMin:-2.27
    // }
    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80 ? rainy_url : info.temp > 15 ? hot_url : cold_url}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>
                Temperature = {info.temp}&deg;C
            </p>
            <p>
                Humidity = {info.humidity}
            </p>
            <p>
                Max Temperature = {info.tempMax}
            </p>
            <p>
                Min Temperature = {info.tempMin}
            </p>
            <p>
                Weather can be described as <i><b>{info.description}</b></i> Feels Like = {info.feelsLike}&deg;C
            </p>

            </Typography>
        </CardContent>
        
    </Card>
            </div>
        </div>
    )
}