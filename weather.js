"use strict";

const url = "http://api.openweathermap.org/data/2.5/weather?q=Auckland&APPID=63c786113132b6c99fe81815f2f6f71e"
fetch(url)
    .then(
        (response) => {
            if (response.status !== 200)
                console.log(`Looks like there was a problem. Status Code :${response.status} `);
            response.json().then((data) => {
                let windSpeed = Math.round(data.wind.speed / .44704);
                document.getElementById('windspeed').innerHTML = windSpeed;
                document.getElementById('location').innerHTML = data.name;
                document.getElementById('description').innerHTML = data.weather[0].description;
                let weather = Math.round((data.main.temp * (9 / 5) - 459.67));
                document.getElementById('temperature').innerHTML = weather;

            });
        }
    )
    .catch((err) => {
        console.log(`Fetch Error ${err}`);
    })