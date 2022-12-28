import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function() {
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