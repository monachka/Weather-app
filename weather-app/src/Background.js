import React from "react";
import "./App.css";
import day_light from "./img/day_light.jpeg"
import day_clouds2 from "./img/day_clouds2.jpeg"
import day_raining from "./img/day_raining.jpeg"
import night_light from "./img/night_light.jpeg"
import night_rain from "./img/night_rain.jpeg"
import night_clouds from "./img/night_clouds.jpeg"


function Background ({data})
{
    const isDay = data.time >= data.sunrise && data.time <= data.sunset;

    let backgroundStyle = "";
    if (isDay) {
      if (data.sky === "Clouds") {
        backgroundStyle = `url(${day_clouds2})`;
      } else if (data.sky === "Rain") {
        backgroundStyle = `url(${day_raining})`;
      } else {
        backgroundStyle = `url(${day_light})`;
      }
    } else {
      if (data.sky === "Clouds") {
        backgroundStyle = `url(${night_clouds})`;
      } else if (data.sky === "Rain") {
        backgroundStyle = `url(${night_rain})`;
      } else {
        backgroundStyle = `url(${night_light})`;
      }
    }
  
    const style = {
      backgroundImage: backgroundStyle,
    };

    return (
        <div className="weather-card" style={style}>
            <h2>{data.city}</h2>
            <div className="weather-info">
                <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="Weather Icon" />
                <div className="temperature">
                <p>{data.temp}°C</p>
                <p>{data.desc}</p>
                </div>
            </div>
            <div className="details">
                <strong>
                <p>Vitesse du Vent: {data.wind} km/h</p>
                <p>Pression: {data.pressure} hPa</p>
                <p>Humidité: {data.humidity}%</p>
                <p>Heure actuelle: {data.time}</p>
                <p>Levée: {data.sunrise}</p>
                <p>Couchée: {data.sunset}</p>
                </strong>
            </div>
        </div>
    );

}

export default Background;