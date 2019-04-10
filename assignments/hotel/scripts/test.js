var templeDiv=document.getElementById('temples');
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
            var myContainer = document.createElement('div');
            var myH2 = document.createElement('h2');
            var myImg = document.createElement('img');
            var myP1 = document.createElement('p');
            var myP2 = document.createElement('p');
            var myP3 = document.createElement('p');
            var myH3a = document.createElement('h3');
            var myP4 = document.createElement('p');
            var myH3b = document.createElement('h3');
            var my5 = document.createElement('p');
            var myH3c = document.createElement('h3');
            var myP6 = document.createElement('p');
            var myH3d = document.createElement('h3');
            var myP7 = document.createElement('p');
            //var mytempleInfo = document.createElement('div');

            myH2.textContent=templeName[i].name;
            myH3a.textContent=templeName[i].address;
            myP1.textContent='Year Founded: ' + templeName[i].telephone;
            myP2.textContent='Population: ' +templeName[i].email;
            myP3.textContent='Annual Rain Fall: ' +templeName[i].services[0]+ '"';

            myContainer.setAttribute("class", "templeContainer");
            //mytempleInfo.setAttribute("class", "templeInfo");    
            myImg.setAttribute("src", "images/town-preston400.jpg");
            myImg.setAttribute("alt", "Preston Town Picture")
            myImg.setAttribute("src", "images/town-fishhaven400.jpg");
            myImg.setAttribute("alt", "Fish Haven Town Picture");
            myImg.setAttribute("src", "images/town-sodasprings400.jpg");
            myImg.setAttribute("alt", "Soda Springs Town Picture")
            
            //myContainer.appendChild(mytempleInfo)
            myContainer.appendChild(myH3b);
            myContainer.appendChild(myH3c);
            myContainer.appendChild(myH3d);
            myContainer.appendChild(myP4);
            myContainer.appendChild(myH3a);
            myContainer.appendChild(myP3);
            myContainer.appendChild(myP2);
            myContainer.appendChild(myP1);
            myContainer.appendChild(myImg);
            myContainer.appendChild(myH2);
            templeDiv.appendChild(myContainer);
        }
        //continue;
    }