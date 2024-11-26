async function checkWeather() {
    let cityName = document.getElementById("input").value;
    let temp = document.getElementById('temp');
    let city = document.getElementById('city');
    let humidity = document.getElementById("humidity");
    let windspeed = document.getElementById("windspeed");
    let img = document.getElementById("img");

    let key = ""
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    let data = await fetch(api_url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
    console.log(data);

    let tempInCel = (data.main.temp-273.15).toFixed(2)+ " °C";
    temp.innerText = tempInCel;
    city.innerText = data.name;
    humidity.innerText = data.main.humidity+" %";
    windspeed.innerText = data.wind.speed+" km/h"

    if(data.weather[0].main == "Clear"){
        img.src = "./images/sunny.png"
    }else{
        if(data.weather[0].main == "Clouds"){
            img.src = "./images/clouds.png"
        }else{
            if(data.weather[0].main == "Rain"){
                img.src = "./images/raining.png";
            }
        }  
    }
}
