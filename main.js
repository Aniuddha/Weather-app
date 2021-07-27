const api={
key: "4c1b54bc3dd8546d1f6489c6439efe4b",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox= document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) 
{
    if (evt.keyCode == 13)
    {
      getResults(searchbox.value);
    }
}

function getResults(query)
{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(displayResults);
}
function displayResults(weather)
{
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText=dateBuilder(now);

    let temp= document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°C`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText= weather.weather[0].main;
    
    let hilow =document.querySelector('.current .hi-low');
    hilow.innerText=`${weather.main.temp_min}°C / ${weather.main.temp_max}°C`





    let city1 = document.querySelector('.face.back .location .city');
    city1.innerText = `${weather.name}, ${weather.sys.country}`;

    let coordi = document.querySelector('.face.back .location .coordi');
    coordi.innerHTML = `Latitude: ${weather.coord.lat}°<br>Longitude: ${weather.coord.lon} `;

    let temp1= document.querySelector('.face.back .current .temp');
    temp1.innerText = `${Math.round(weather.main.temp)}°C`;

    let humi= document.querySelector('.face.back .current .humi');
    humi.innerText = `Humidity: ${weather.main.humidity}%`;

    let weather_el1= document.querySelector('.face.back .current .weather');
    weather_el1.innerText= weather.weather[0].main;

    let weatherdes = document.querySelector('.face.back .current .description');
    weatherdes.innerText= `(${weather.weather[0].description})`;

    let wind = document.querySelector('.face.back .current .wind');
    wind.innerHTML = `Wind- Deg:${weather.wind.deg}° Speed:${weather.wind.speed}km/h`;
}
function dateBuilder(d)
{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"Octobar", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thrusday", "Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return  `${day} ${date} ${month} ${year}`;
}


