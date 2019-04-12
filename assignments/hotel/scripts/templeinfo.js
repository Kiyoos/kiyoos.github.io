var templeDiv = document.getElementById('temples');
var requestURL ='https://raw.githubusercontent.com/Kiyoos/ninasaunders.github.io/master/assignments/hotel/json/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType ='json';
request.send();
request.onload = function() {
var templeInfo = request.response;
  showTempleInfo(templeInfo);
}

function showTempleInfo(jsonObj){
    var templeName = jsonObj['temple'];
    for (var i = 0; i < templeName.length; i++) {
        var myDiv1 = document.createElement('div');
        var myDiv2 = document.createElement('div');
        var myDiv3 = document.createElement('div');
        var myDiv4 = document.createElement('div');
        var myDiv5 = document.createElement('div');
        var myDiv6 = document.createElement('div');
        var myDiv7 = document.createElement('div');
        var myDiv8 = document.createElement('div');
        var myH3 = document.createElement('h3');
        var myImgW = document.createElement('img');
        var myPw1 = document.createElement('p');
        var myPw2 = document.createElement('p');
        var myImgT = document.createElement('img');
        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        var myP3 = document.createElement('p');
        var myH4a = document.createElement('h4');
        var myH4b = document.createElement('h4');
        var myH4c = document.createElement('h4');
        var myP4 = document.createElement('p');
        var myH4d = document.createElement('h4');

        myDiv1.setAttribute("class", "border templeinfo");
        myDiv2.setAttribute("class","nametemp");
        myDiv6.setAttribute("class", "col2");
        myH3.textContent = templeName[i].name;

//ADDRESSS CODE
        var addressUL = document.createElement('ul');
        var addressList = templeName[i].address;
        for (var j = 0; j < addressList.length; j++){
            newLI = document.createElement('li');
            newLI.textContent = templeName[i].address[j];
            addressUL.appendChild(newLI);
        }    
        addressUL.setAttribute("class","tempaddress");

//CURRENT WEATHER CODE
        var correctName = templeName[i].name;
        var apiURLstring = "";
        if (correctName == "Spokane Washington Temple") {
            myImgT.setAttribute("src", "images/spokanetempleday500.jpg");
            myImgT.setAttribute("alt", "Spokane Temple")
            myPw1.setAttribute("id","spo-temp");
            myImgW.setAttribute("id","spo-img");
            apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=99206&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
        } else if(correctName == "Columbia River Washington Temple") {
            myImgT.setAttribute("src", "images/columbiarivertemple500.jpg");
            myImgT.setAttribute("alt", "Columbia River Temple");
            myPw1.setAttribute("id","colriv-temp");
            myImgW.setAttribute("id","colriv-img");
            apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=99352&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
        } else if(correctName == "Seattle Washington Temple") {
            myImgT.setAttribute("src", "images/seattletemple500.jpg");
            myImgT.setAttribute("alt", "Seattle Temple");
            myPw1.setAttribute("id","sea-temp");
            myImgW.setAttribute("id","sea-img");
            apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=98007&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
        } else {
            myImgT.setAttribute("src", "images/idahofallstemple500.jpg");
            myImgT.setAttribute("alt", "Idaho Falls Temple")
            myPw1.setAttribute("id","if-temp");
            myImgW.setAttribute("id","if-img");
            apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=83402&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
        } 
                
        myPw2.textContent = "Current Temp";

        var weatherRequest = new XMLHttpRequest();
        weatherRequest.open('GET', apiURLstring, true);
        weatherRequest.send();
        weatherRequest.onload = function(){
            var weatherData = JSON.parse(weatherRequest.responseText);
            console.log(weatherData);
           
            var icon = "";
            var altText = "";
            if (correctName == "Spokane Washington Temple") {
                icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
                altText = weatherData.weather[0].description;
            } else if(correctName == "Columbia River Washington Temple") {
                icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
                altText = weatherData.weather[0].description;
            } else if(correctName == "Seattle Washington Temple") {
                icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
                altText = weatherData.weather[0].description;
            } else {
                icon = "https://openweathermap.org/img/w/"+ weatherData.weather[0].icon +".png";
                altText = weatherData.weather[0].description;
            } 

            document.getElementById("spo-temp").innerHTML = weatherData.main.temp;
            document.getElementById('spo-img').setAttribute('src',icon);
            document.getElementById('spo-img').setAttribute('alt',altText);
            document.getElementById("colriv-temp").innerHTML = weatherData.main.temp;
            document.getElementById('colriv-img').setAttribute('src',icon);
            document.getElementById('colriv-img').setAttribute('alt',altText);
            document.getElementById("sea-temp").innerHTML = weatherData.main.temp;
            document.getElementById('sea-img').setAttribute('src',icon);
            document.getElementById('sea-img').setAttribute('alt',altText);
            document.getElementById("if-temp").innerHTML = weatherData.main.temp;
            document.getElementById('if-img').setAttribute('src',icon);
            document.getElementById('if-img').setAttribute('alt',altText);
        }

        myP2.textContent = templeName[i].telephone;
        myP3.textContent = templeName[i].email;

//FINISHED SERVICES CODE        
        myH4a.textContent = "Services";
        var serviceUL = document.createElement('ul');
        var servicesList = templeName[i].services;
        for (var j = 0; j < servicesList.length; j++){
            newLI = document.createElement('li');
            newLI.textContent = templeName[i].services[j];
            serviceUL.appendChild(newLI);
        }    

//FINISHED HISTORY CODE          
        myH4b.textContent = "History";
        var historyUL = document.createElement('ul');
        var historyList = templeName[i].history;
        for (var j = 0; j < historyList.length; j++){
            newLI = document.createElement('li');
            newLI.textContent = templeName[i].history[j];
            historyUL.appendChild(newLI);
        }   

//FINISHED SCHEDULE CODE
        myH4c.textContent = "Schedule";
        myP4.textContent = templeName[i].ordinanceSchedule;

        var sessionUL = document.createElement('ul');
        var sessionList = templeName[i].sessionSchedule;
        for (var j = 0; j < sessionList.length; j++){
            newLI = document.createElement('li');
            newLI.textContent = templeName[i].sessionSchedule[j];
            sessionUL.appendChild(newLI);
        }   

//FINISHED CLOSURE CODE        
        myH4d.textContent = "Closures";
        var closureUL = document.createElement('ul');
        var closureList = templeName[i].templeClosure;
        for (var j = 0; j < closureList.length; j++){
            newLI = document.createElement('li');
            newLI.textContent = templeName[i].templeClosure[j];
            closureUL.appendChild(newLI);
        }   

        myDiv1.appendChild(myDiv2);
        myDiv2.appendChild(myH3);
        myDiv2.appendChild(myDiv3);
        myDiv3.appendChild(myImgW);
        myDiv3.appendChild(myPw1);
        myDiv3.appendChild(myPw2);
        myDiv1.appendChild(myImgT);
        myDiv1.appendChild(addressUL);
        myDiv1.appendChild(myP2);
        myDiv1.appendChild(myP3);
        myDiv6.appendChild(myDiv7);
        myDiv6.appendChild(myDiv8);
        myDiv1.appendChild(myDiv6);
        myDiv7.appendChild(myH4a);
        myDiv7.appendChild(serviceUL);
        myDiv8.appendChild(myH4b);
        myDiv8.appendChild(historyUL);
        myDiv1.appendChild(myH4c);
        myDiv1.appendChild(myP4);
        myDiv1.appendChild(sessionUL);
        myDiv1.appendChild(myH4d);
        myDiv1.appendChild(closureUL);
        templeDiv.appendChild(myDiv1);
    }
}