
var sectionte=document.querySelector('section.townevents');
var requestURL='https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload = function() {
var townEvents = request.response;
  showTownEvents(townEvents);
}

function showTownEvents(jsonObj){
    /*var towns = new Array['Preston','Soda Springs','Fish Haven'];
    for (var n = 0; n < townName.length; n++){
        var sectionte=document.querySelector('section.townevents#[n]');
    }*/

    
    var myContainer = document.createElement('div');
    myContainer.setAttribute('class', 'mycontainer');
    var mytownevents = document.createElement('div');
    var myH3 = document.createElement('h3');
    myH3.textContent = "Local Events";
    mytownevents.appendChild(myH3);
                    
    var townName=jsonObj['towns'];
    for (var i = 0; i < townName.length; i++) {
        var correctName = townName[i].name;
        if (correctName == "Preston"){ 
            for (var j = 0; j < townName[i].events.length; j++){
                var myPara = document.createElement('p');
                myPara.textContent = townName[i].events[j];
                mytownevents.appendChild(myPara);
            } continue;  
        }
        continue;
    }
    
    myContainer.appendChild(mytownevents);
    sectionte.appendChild(myContainer);
}