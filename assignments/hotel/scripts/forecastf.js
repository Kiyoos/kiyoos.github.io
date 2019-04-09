var forecastRequest = new XMLHttpRequest,
    forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0369&lon=-111.3964&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";
forecastRequest.open("GET", forecastapiURL, !0);
forecastRequest.send();
forecastRequest.onload = function() {
    var c = JSON.parse(forecastRequest.responseText);
    console.log(c);
    var d = document.querySelector("table"),
        l = document.createElement("tr"),
        h = document.createElement("tr"),
        m = document.createElement("tr"),
        n = document.createElement("tr"),
        k = document.createElement("th");
    k.textContent = "Five Day Forecast";
    k.setAttribute("colspan", 5);
    h.setAttribute("class", "days");
    for (var a = (new Date).getDay(), e = "Sun Mon Tue Wed Thu Fri Sat Sun Mon Tue Wed Thu".split(" "), b = 1; 6 > b; b++) {
        var f = a + b,
            g = document.createElement("td");
        g.textContent = e[f];
        h.appendChild(g)
    }
    for (a = 0; a < c.list.length; a++) 1 == c.list[a].dt_txt.includes("18:00:00") && (e = document.createElement("td"), b = document.createElement("img"), f = document.createElement("td"), g = c.list[a].weather[0].description, b.setAttribute("src", "https://openweathermap.org/img/w/" + c.list[a].weather[0].icon + ".png"), b.setAttribute("alt", g), f.textContent = c.list[a].main.temp + " F", e.appendChild(b), m.appendChild(e), n.appendChild(f));
    l.appendChild(k);
    d.appendChild(l);
    d.appendChild(h);
    d.appendChild(n);
    d.appendChild(m)
};