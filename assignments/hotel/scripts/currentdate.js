var today=new Date;
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("currentdate").innerHTML=month[today.getMonth()]+" "+today.getFullYear();