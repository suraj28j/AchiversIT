async function getData() {
    let cityName = document.getElementById("input").value;
    let key = "433277b3a45785d10cf4a7e6ec1cf169"

    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    let data = await fetch(api_url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
    console.log(data);
    display(data)

}


function display(data) {

    let temp = document.getElementById('temp');
    let city = document.getElementById('city');
    let humidity = document.getElementById("humidity");
    let windspeed = document.getElementById("windspeed");
    let img = document.getElementById("img");

    img.src = checkWeather(data.weather[0].main);

    let tempInCel = (data.main.temp - 273.15).toFixed(2) + " °C";
    temp.innerText = tempInCel;
    city.innerText = data.name;
    humidity.innerText = data.main.humidity + " %";
    windspeed.innerText = data.wind.speed + " km/h"

    // if (data.weather[0].main == "Clear") {
    //     img.src = "./images/sunny.png"
    // } else {
    //     if (data.weather[0].main == "Clouds") {
    //         img.src = "./images/clouds.png"
    //     } else {
    //         if (data.weather[0].main == "Rain") {
    //             img.src = "./images/raining.png";
    //         }
    //     }
    // }

}

function checkWeather(weatherType) {
    console.log("weatherType ",weatherType);
    
    switch (weatherType) {
        case "Clear":
            return "./images/sunny.png";
        case "Clouds":
            return "./images/clouds.png";
        case "Rain":
            return "./images/raining.png";
        case "Haze":
            return "./images/cloudy-day.png";
    }
}
