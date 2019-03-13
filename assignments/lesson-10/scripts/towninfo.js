var section=document.querySelector('section');
var requestURL='https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload = function() {
var townInfo = request.response;
  showTownInfo(townInfo);
}

function showTownInfo(jsonObj){
    var townName=jsonObj['towns'];
    for (var i = 0; i < townName.length; i++) {
        var correctName = townName[i].name;
        if (correctName == "Preston" || correctName == "Fish Haven" || correctName == "Soda Springs"){
            var myArticle = document.createElement('article');
            var myContainer = document.createElement('div');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myTownInfo = document.createElement('div');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myImg = document.createElement('img');

            myH2.textContent=townName[i].name;
            myH3.textContent=townName[i].motto;
            myPara1.textContent= 'Year Founded: ' +townName[i].yearFounded;
            myPara2.textContent='Population: ' +townName[i].currentPopulation;
            myPara3.textContent='Annual Rain Fall: ' +townName[i].averageRainfall+ '"';

            myContainer.setAttribute("class", "townContainer");
            myTownInfo.setAttribute("class", "townInfo");     
            if (correctName == "Preston") {
                myImg.setAttribute("src", "images/town-preston400.jpg");
                myImg.setAttribute("alt", "Preston Town Picture")
            } else if(correctName == "Fish Haven") {
                    myImg.setAttribute("src", "images/town-fishhaven400.jpg");
                    myImg.setAttribute("alt", "Fish Haven Town Picture");
            } else {
                    myImg.setAttribute("src", "images/town-sodasprings400.jpg");
                    myImg.setAttribute("alt", "Soday Springs Town Picture")
            } 
              
            
            myContainer.appendChild(myH2);
            myContainer.appendChild(myH3);
            myContainer.appendChild(myTownInfo)
            myTownInfo.appendChild(myPara1);
            myTownInfo.appendChild(myPara2);
            myTownInfo.appendChild(myPara3);
            myContainer.appendChild(myImg);
            myArticle.appendChild(myContainer);
            section.appendChild(myArticle);
        }
        continue;
    }
}
/*
var myTownImg = ["town-fishhaven400", "town-preston400", "town-sodasprings400"];
var myImgAlt = ["Fish Haven Town Picture", "Preston Town Picture","Soda Springs Town Picture"];
function(){
    for (var j = 0; j < myTownImg.length; j++){
        myImg.setAttribute("src", "images/" + myTownImg[j] + ".jpg");
        myImg.setAttribute("alt", ""+myImgAlt[j]+"");
    }*/