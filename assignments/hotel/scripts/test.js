var testUL=document.getElementById('temples');
var requestURL='https://raw.githubusercontent.com/Kiyoos/ninasaunders.github.io/master/assignments/hotel/json/temples.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload = function() {
var templeInfo = request.response;
  showTempleInfo(templeInfo);
}

function showTempleInfo(jsonObj){
    var templeName=jsonObj['temple'];
    for (var i = 0; i < templeName.length; i++) {
            var containerUL = document.createElement('ul');
            var servicesList = templeName[i].services;
            for (var j = 0; j < servicesList.length; j++){
                newLI = document.createElement('li');
                newLI.textContent = templeName[i].services[j];
                containerUL.appendChild(newLI);
            }    
            testUL.appendChild(containerUL);
        }
    }
