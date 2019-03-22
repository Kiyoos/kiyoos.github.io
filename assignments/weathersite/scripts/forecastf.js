let forecastRequest = new XMLHttpRequest();
let forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0369&lon=-111.3964&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
forecastRequest.open('GET', forecastapiURL, true);
forecastRequest.send();
forecastRequest.onload = function(){
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    var table = document.querySelector('table');
    var trhead = document.createElement('tr');
    var trday = document.createElement('tr');
    var trimg = document.createElement('tr');
    var trtemp = document.createElement('tr');
    var thead = document.createElement('th');
    thead.textContent = "Five Day Forecast";
    thead.setAttribute("colspan", 5);
    trday.setAttribute("class", "days");
    
    var now = new Date();
    var today = now.getDay();
    var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu"];
    for (var j = 1; j < 6; j++) {
        var nextday = today+j; 
        var tdday = document.createElement('td');
        tdday.textContent = day[nextday];
        trday.appendChild(tdday);
    } 

    for (var i = 0; i < forecastData.list.length; i++) {
        var x = forecastData.list[i].dt_txt;
        var y = x.includes('18:00:00');
        if (y == true) {

            var tdimg = document.createElement('td');
            var tempimg = document.createElement('img');
            var tdtemp = document.createElement('td');

            let icon = "https://openweathermap.org/img/w/"+ forecastData.list[i].weather[0].icon +".png";
            let altText = forecastData.list[i].weather[0].description;
            tempimg.setAttribute('src',icon);
            tempimg.setAttribute('alt',altText);
            tdtemp.textContent = forecastData.list[i].main.temp +" F";
            
            tdimg.appendChild(tempimg); 
            trimg.appendChild(tdimg);
            trtemp.appendChild(tdtemp);
                    
        }
        continue;
    }

    trhead.appendChild(thead);
    table.appendChild(trhead);
    table.appendChild(trday); 
    table.appendChild(trtemp);
    table.appendChild(trimg);
}




