/* gives current date in "Monday, 6 April 2020" format */

var today = new Date();
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = today.getDate();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("currentdate").innerHTML= 
day[today.getDay()] + ", " + today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear();