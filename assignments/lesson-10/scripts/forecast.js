let forecastRequest = new XMLHttpRequest();
let forecastapiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
forecastRequest.open('GET', forecastapiURL, true);
forecastRequest.send();
forecastRequest.onload = function(){
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    var table = document.querySelector('table');
    var trhead = document.createElement('tr');
    var trday = document.createElement('tr');
    trday.setAttribute("class", "days");
    var trtemp = document.createElement('tr');
    var trimg = document.createElement('tr');
    var thead = document.createElement('th');
    thead.textContent = "Fiveday Forecast";
    thead.setAttribute("colspan", 5);

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

            var tdtemp = document.createElement('td');
            var tdimg = document.createElement('td');
            var tempimg = document.createElement('img');

            tdtemp.textContent = forecastData.list[i].main.temp +" F";
            /*document.getElementById("testtemp").innerHTML = forecastData.list[i].main.temp;*/
            let icon = "http://openweathermap.org/img/w/"+ forecastData.list[i].weather[0].icon +".png";
            let altText = forecastData.list[i].weather[0].description;
            tempimg.setAttribute('src',icon);
            tempimg.setAttribute('alt',altText);

            trtemp.appendChild(tdtemp);
            trimg.appendChild(tdimg);
            tdimg.appendChild(tempimg);         
        }
        continue;
    }

    trhead.appendChild(thead);
    table.appendChild(trhead);
    table.appendChild(trday); 
    table.appendChild(trtemp);
    table.appendChild(trimg)
}




