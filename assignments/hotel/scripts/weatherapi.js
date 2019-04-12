let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function(){
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    let icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
    let altText = weatherData.weather[0].description;
    document.getElementById('current-img').setAttribute('src',icon);
    document.getElementById('current-img').setAttribute('alt',altText);
}