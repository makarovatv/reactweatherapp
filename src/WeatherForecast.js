import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
  console.log(response.data);
}

let apiKey = "2a54f8728b182fcfe9a83e02a050c48e";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

 return (
   <div className="WeatherForecast">
     <div className="row">
       <div className="col">
        <div className="WeatherForecast-day">Thu</div>
         <WeatherIcon code="01d" size={36} />
         <div className="Weatherforecast-temperatures">
           <span className="Weatherforecast-temperature-max">25°</span>
           <span className="Weatherforecast-temperature-min">19°</span>
         </div>
       </div>
     </div>
   </div>
 );
}