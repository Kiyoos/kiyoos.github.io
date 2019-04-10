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
            //var myUl = document.createElement('ul');
            //var myLi = document.createElement('li');
            var myP4 = document.createElement('p');
            var myH3b = document.createElement('h3');
            var myP5 = document.createElement('p');
            var myH3c = document.createElement('h3');
            var myP6a = document.createElement('p');
            var myP6b = document.createElement('p');
            var myP6c = document.createElement('p');
            var myH3d = document.createElement('h3');
            var myP7 = document.createElement('p');
            //var mytempleInfo = document.createElement('div');

            myH2.textContent = templeName[i].name;

            var street = templeName[i].address;
            var fullStreet = "";
            for (var j = 0; j < street.length; j++){
                fullStreet += templeName[i].address[j]+", ";
            }
            myP1.textContent = fullStreet;

            myP2.textContent = templeName[i].telephone;
            myP3.textContent = templeName[i].email;
            
            myH3a.textContent = "Services";
            var servList = templeName[i].services;
            var fullServices = "";
            //var liServices = document.createElement('li');
            for (var j = 0; j < servList.length; j++){
                //var liServices = document.createElement('li');
                //liServices += templeName[i].services[j];
                fullServices += templeName[i].services[j]+ ", ";
            }
            //myLi.textContent = liServices;
            //myLi.textContent = fullServices;
            myP4.textContent = fullServices;

            myH3b.textContent = "History";
            var histList = templeName[i].history;
            var fullHistory = "";
            for (var j = 0; j < histList.length; j++){
                fullHistory += templeName[i].history[j]+", ";
            }
            myP5.textContent = fullHistory;

            myH3c.textContent = "Schedule";
//NEED TO FIGURE OUT THE DAYS IN THIS ONE

            var schedList = templeName[i].sessionSchedule;
            var fullSchedule = "";
            for (var j = 0; j < schedList.length; j++){
                fullSchedule += templeName[i].sessionSchedule[j];
            }
            myP6b.textContent = fullSchedule;

            myP6a.textContent = templeName[i].ordinanceSchedule;
           // myP6b.textContent = "Sundays & Mondays: "+templeName[i].sessionSchedule[0].sunday;
            //myP6c.textContent = templeName[i].sessionSchedule[2].tuesday[0];
            
            myH3d.textContent = "Closures";

//NEET TO FIGURE OUT THE CLOSURE LIST ON THIS ONE
/*
            var closeList = templeName[i].templeClosure;
            var fullClosure = "";
            for (var j = 0; j < closeList.length; j++){
                fullClosure += templeName[i].templeClosure[j].year2019[j];
            }
            myP7.textContent = fullClosure;
*/
            myContainer.setAttribute("class", "templeContainer");
            //mytempleInfo.setAttribute("class", "templeInfo");    
            myImg.setAttribute("src", "images/phone.jpg");
            myImg.setAttribute("alt", "Test Picture")
            
            //myContainer.appendChild(mytempleInfo)
            myContainer.appendChild(myH2);
            myContainer.appendChild(myImg);
            myContainer.appendChild(myP1);
            myContainer.appendChild(myP2);
            myContainer.appendChild(myP3);
            myContainer.appendChild(myH3a);
            //myContainer.appendChild(myUl);
            //myUl.appendChild(myLi);
            myContainer.appendChild(myP4);
            myContainer.appendChild(myH3b);
            myContainer.appendChild(myP5);
            myContainer.appendChild(myH3c);
            myContainer.appendChild(myP6a);
            myContainer.appendChild(myP6b);
            myContainer.appendChild(myP6c);
            myContainer.appendChild(myH3d);
            myContainer.appendChild(myP7);
            templeDiv.appendChild(myContainer);
        }
        //continue;
    }