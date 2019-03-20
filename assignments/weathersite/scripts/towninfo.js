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
            var bold1 = document.createElement('strong');
            var bPara1 = document.createTextNode('Year Founded: ');
            var tPara1 = document.createTextNode(townName[i].yearFounded);
            var bold2 = document.createElement('strong');
            var bPara2 = document.createTextNode('Population: ');
            var tPara2 = document.createTextNode(townName[i].currentPopulation);
            var bold3 = document.createElement('strong');
            var bPara3 = document.createTextNode('Annual Rain Fall: ');
            var tPara3 = document.createTextNode(townName[i].averageRainfall+ '"');
            bold3.appendChild(bPara3);
            myPara3.appendChild(bold3);   
            myPara3.appendChild(tPara3);
            bold2.appendChild(bPara2);
            myPara2.appendChild(bold2);   
            myPara2.appendChild(tPara2);
            bold1.appendChild(bPara1);
            myPara1.appendChild(bold1);   
            myPara1.appendChild(tPara1);

            myH2.textContent=townName[i].name;
            myH3.textContent=townName[i].motto;

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
                    myImg.setAttribute("alt", "Soda Springs Town Picture")
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