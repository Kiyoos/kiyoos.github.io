/*calculates windchill from html inputs */

var tempF= parseFloat(document.getElementById("temp").innerHTML);
var speed= parseFloat(document.getElementById("windspeed").innerHTML);
var wc = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed,0.16) + 0.4275*tempF*Math.pow(speed,0.16);
document.getElementById("windchill").innerHTML= wc.toFixed(1) + "&deg; F";