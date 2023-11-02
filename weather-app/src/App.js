import React, { useState, useEffect } from "react";
import "./App.css";
import { format } from "date-fns";
import Background from "./Background";
import logo from "./img/logo.jpeg"
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from "@mui/material/Button";


function App() {

  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [sky, setSky] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [wind, setWind] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [time, setTime] = useState("");

  const [isReady, setReady] = useState(false);
  const [search, setSearch] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
 // const icons = "`http://openweathermap.org/img/wn/${icon}@2x.png`";

 
  useEffect(() => {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ziguinchor&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
    )
    .then(result => result.json())
    .then(jsonresult => {
      setCountry(jsonresult.sys.country);
      setCity(jsonresult.name);
      setSky(jsonresult.weather[0].main);
      setDesc(jsonresult.weather[0].description);
      setIcon(jsonresult.weather[0].icon);
      setWind(jsonresult.wind.speed);
      setTemp(jsonresult.main.temp);
      setPressure(jsonresult.main.pressure);
      setHumidity(jsonresult.main.humidity);

      const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
        setSunrise(format(sunriseTime, "HH:mm"));
      const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
        setSunset(format(sunsetTime, "HH:mm")); 

      const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
        setTime(format(currentTime, "HH:mm"));

      setReady(true);
    })
    .catch(err => console.error(err));
  }, []);

  const handleChange = () => {
    const lat = document.getElementById("s1").value;
    const lon = document.getElementById("s2").value;
    const search = document.getElementById("s").value;
    setLat(lat);
    setLon(lon);
    setSearch(search);
    
    if((search==="")&&(lat==="")&&(lon===""))
    {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=ziguinchor&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
        )
        .then(result => result.json())
        .then(jsonresult => {
          setCountry(jsonresult.sys.country);
          setCity(jsonresult.name);
          setSky(jsonresult.weather[0].main);
          setDesc(jsonresult.weather[0].description);
          setIcon(jsonresult.weather[0].icon);
          setWind(jsonresult.wind.speed);
          setTemp(jsonresult.main.temp);
          setPressure(jsonresult.main.pressure);
          setHumidity(jsonresult.main.humidity);
    
          const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
            setSunrise(format(sunriseTime, "HH:mm"));
          const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
            setSunset(format(sunsetTime, "HH:mm")); 
    
          const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
            setTime(format(currentTime, "HH:mm"));
    
          setReady(true);
        })
        .catch(err => console.error(err));
    }
    else
    {
      if(search!==""){
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
          )
          .then(result => result.json())
          .then(jsonresult => {
            setCountry(jsonresult.sys.country);
            setCity(jsonresult.name);
            setSky(jsonresult.weather[0].main);
            setDesc(jsonresult.weather[0].description);
            setIcon(jsonresult.weather[0].icon);
            setWind(jsonresult.wind.speed);
            setTemp(jsonresult.main.temp);
            setPressure(jsonresult.main.pressure);
            setHumidity(jsonresult.main.humidity);
      
            const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
              setSunrise(format(sunriseTime, "HH:mm"));
            const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
              setSunset(format(sunsetTime, "HH:mm")); 
      
            const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
              setTime(format(currentTime, "HH:mm"));
      
            setReady(true);
          })
          .catch(err => console.error(err));
      }
      else{
        if((lat!=="")&&(lon===""))
        {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon=-17.4441&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
            )
            .then(result => result.json())
            .then(jsonresult => {
              setCountry(jsonresult.sys.country);
              setCity(jsonresult.name);
              setSky(jsonresult.weather[0].main);
              setDesc(jsonresult.weather[0].description);
              setIcon(jsonresult.weather[0].icon);
              setWind(jsonresult.wind.speed);
              setTemp(jsonresult.main.temp);
              setPressure(jsonresult.main.pressure);
              setHumidity(jsonresult.main.humidity);
        
              const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
                setSunrise(format(sunriseTime, "HH:mm"));
              const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
                setSunset(format(sunsetTime, "HH:mm")); 
        
              const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
                setTime(format(currentTime, "HH:mm"));
        
              setReady(true);
            })
            .catch(err => console.error(err));
        }
        else if((lat==="")&&(lon!==""))
        {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=14.6937&lon="+lon+"&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
            )
            .then(result => result.json())
            .then(jsonresult => {
              setCountry(jsonresult.sys.country);
              setCity(jsonresult.name);
              setSky(jsonresult.weather[0].main);
              setDesc(jsonresult.weather[0].description);
              setIcon(jsonresult.weather[0].icon);
              setWind(jsonresult.wind.speed);
              setTemp(jsonresult.main.temp);
              setPressure(jsonresult.main.pressure);
              setHumidity(jsonresult.main.humidity);
        
              const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
                setSunrise(format(sunriseTime, "HH:mm"));
              const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
                setSunset(format(sunsetTime, "HH:mm")); 
        
              const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
                setTime(format(currentTime, "HH:mm"));
        
              setReady(true);
            })
            .catch(err => console.error(err));
        }
        else if((lat!=="")&&(lon!==""))
        {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=fb9038f1c48d0999349a1882426634d9&units=metric"
            )
            .then(result => result.json())
            .then(jsonresult => {
              setCountry(jsonresult.sys.country);
              setCity(jsonresult.name);
              setSky(jsonresult.weather[0].main);
              setDesc(jsonresult.weather[0].description);
              setIcon(jsonresult.weather[0].icon);
              setWind(jsonresult.wind.speed);
              setTemp(jsonresult.main.temp);
              setPressure(jsonresult.main.pressure);
              setHumidity(jsonresult.main.humidity);
        
              const sunriseTime = new Date((jsonresult.sys.sunrise + jsonresult.timezone) * 1000);
                setSunrise(format(sunriseTime, "HH:mm"));
              const sunsetTime = new Date((jsonresult.sys.sunset + jsonresult.timezone) * 1000);
                setSunset(format(sunsetTime, "HH:mm")); 
        
              const currentTime = new Date(Date.now() + jsonresult.timezone * 1000);
                setTime(format(currentTime, "HH:mm"));
        
              setReady(true);
            })
            .catch(err => console.error(err));
        } 
      }  
    }
  };


  if (isReady) {
    return (
      <div className="App">
        
        <header>
          <img src={logo} alt="LOGO" width={100} height={100}/>
          <h1><strong>WEATHER-APP</strong></h1>
          </header>
        
        <br/><br/>

        <h3><strong>SEARCH BY CITY</strong></h3>
        <input
          id="s"
          className="s"
          placeholder="Rechercher par ville"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <div className="side-by-side">
          <div className="box">
            <Background data={{country, city, sky, desc, wind, temp, pressure, humidity, time, sunrise, sunset, icon}}/>
          </div>
          <div >
            <div className="coord">
              <h3><strong>SEARCH BY COORDONATES</strong></h3>
              <input
                id="s1"
                className="s1"
                placeholder="Entrez latitude"
                type="text"
                value={lat}
                onChange={handleChange}
              />
            </div>
            <div className="coord"><br/>
              <input
                id="s2"
                className="s2"
                placeholder="Entrez longitude"
                type="text"
                value={lon}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <br/><br/><br/><br/><br/>
        <h1><strong>Mouhamad Nassour Cherif KANE ==>> #MONACHKA</strong></h1>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  };

}
export default App;