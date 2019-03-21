let weatherRequest = new XMLHttpRequest();
let apiURLfishhaven = "https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.3964&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
weatherRequest.open('GET', apiURLfishhaven, true);
weatherRequest.send();
weatherRequest.onload = function(){
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("cur-temp").innerHTML = weatherData.main.temp;
    let icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
    let altText = weatherData.weather[0].description;
    document.getElementById('cur-img').setAttribute('src',icon);
    document.getElementById('cur-img').setAttribute('alt',altText);

    document.getElementById("condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;

    var tempF= weatherData.main.temp;
    var speed= weatherData.wind.speed;
    var wc = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed,0.16) + 0.4275*tempF*Math.pow(speed,0.16);
    document.getElementById("windchill").innerHTML= wc.toFixed(1);    
}