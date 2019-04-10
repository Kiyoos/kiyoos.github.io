var sectionte = document.querySelector("section.townevents"),
    requestURL = "https://byui-cit230.github.io/weather/data/towndata.json",
    request = new XMLHttpRequest;
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    showTownEvents(request.response)
};

function showTownEvents(b) {
    var c = document.createElement("div");
    c.setAttribute("class", "mycontainer");
    var d = document.createElement("div"),
        a = document.createElement("h3");
    a.textContent = "Local Events";
    d.appendChild(a);
    b = b.towns;
    for (a = 0; a < b.length; a++)
        if ("Preston" == b[a].name)
            for (var e = 0; e < b[a].events.length; e++) {
                var f = document.createElement("p");
                f.textContent = b[a].events[e];
                d.appendChild(f)
            }
    c.appendChild(d);
    sectionte.appendChild(c)
};