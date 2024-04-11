import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({  ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
             }); 
    }

    if (weatherData.ready) {
        return (
            <div className="Weather"> 
            
           <form>
               <div className="row">
                   <div className="col-9">    
             <input type="search" placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"/>
             </div>
             <div className="col-3">
             <input type="submit" value="Search" className="btn btn-primary w-100"/>
               </div>
               </div>
           </form>
         <div className="container"></div>
            <h1>{weatherData.city}</h1>
            <ul>
               <li>Wednesday 7:00</li>
               <li className="text-capitalize">{weatherData.description}</li>
            </ul>
              <div className="row mt-3">
               <div className="col-6">
                   <div className="clearfix">
                   <img 
                   src= "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/121/875/original/cloud.jpg?1712271492 "
                 alt="Sunny" className="float-left"/>
                  <div className="float-left">
                  <span className="temperature"> {Math.round
                  (weatherData.temperature)}</span> 
                  <span className="unit">°C</span>
                  </div>
                </div>
               </div>
               <div className="col-6">
                   <ul>
                       <li>
                           Precipitation: 15%
                       </li>
                       <li>
                           Humidity: {weatherData.humidity}%
                       </li>
                       <li>
                           Wind: {weatherData.wind}
                       </li>
                   </ul>
               </div>
              </div>
       
            </div>
           );

    } else {    
    let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }



    
}