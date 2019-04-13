var templeDiv = document.getElementById("temples"),
    requestURL = "https://raw.githubusercontent.com/Kiyoos/ninasaunders.github.io/master/assignments/hotel/json/temples.json",
    request = new XMLHttpRequest;
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    showTempleInfo(request.response)
};

function showTempleInfo(b) {
    b = b.temple;
    for (var c = 0; c < b.length; c++) {
        var d = document.createElement("div"),
            k = document.createElement("div"),
            l = document.createElement("div"),
            m = document.createElement("div"),
            n = document.createElement("div"),
            p = document.createElement("div"),
            z = document.createElement("div"),
            A = document.createElement("div"),
            C = document.createElement("h3"),
            g = document.createElement("img"),
            h = document.createElement("p"),
            D = document.createElement("p"),
            e = document.createElement("img"),
            E = document.createElement("p"),
            F = document.createElement("p"),
            G = document.createElement("h4"),
            H = document.createElement("h4"),
            I = document.createElement("h4"),
            J = document.createElement("p"),
            K = document.createElement("h4");
        d.setAttribute("class", "border templeinfo");
        k.setAttribute("class", "nametemp");
        m.setAttribute("class", "picinfo");
        p.setAttribute("class", "center");
        C.textContent = b[c].name;
        for (var B = document.createElement("ul"), q = b[c].address, a = 0; a < q.length; a++) newLI = document.createElement("li"), newLI.textContent = b[c].address[a], B.appendChild(newLI);
        B.setAttribute("class", "tempaddress");
        a = b[c].name;
        "Spokane Washington Temple" == a ? (e.setAttribute("src", "images/spokanetempleday500.jpg"), e.setAttribute("alt", "Spokane Temple"), h.setAttribute("id", "spo-temp"), g.setAttribute("id", "spo-img")) : "Columbia River Washington Temple" == a ? (e.setAttribute("src", "images/columbiarivertemple500.jpg"), e.setAttribute("alt", "Columbia River Temple"), h.setAttribute("id", "colriv-temp"), g.setAttribute("id", "colriv-img")) : "Seattle Washington Temple" == a ? (e.setAttribute("src",
            "images/seattletemple500.jpg"), e.setAttribute("alt", "Seattle Temple"), h.setAttribute("id", "sea-temp"), g.setAttribute("id", "sea-img")) : (e.setAttribute("src", "images/idahofallstemple500.jpg"), e.setAttribute("alt", "Idaho Falls Temple"), h.setAttribute("id", "if-temp"), g.setAttribute("id", "if-img"));
        D.textContent = "Current Temp";
        if ("Spokane Washington Temple" == a) {
            var r = new XMLHttpRequest;
            r.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=99206&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725",
                !0);
            r.send();
            r.onload = function() {
                var f = JSON.parse(r.responseText);
                console.log(f);
                document.getElementById("spo-temp").innerHTML = f.main.temp + "&deg F";
                var a = "https://openweathermap.org/img/w/" + f.weather[0].icon + ".png";
                f = f.weather[0].description;
                document.getElementById("spo-img").setAttribute("src", a);
                document.getElementById("spo-img").setAttribute("alt", f)
            }
        } else if ("Columbia River Washington Temple" == a) {
            var t = new XMLHttpRequest;
            t.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=99352&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725",
                !0);
            t.send();
            t.onload = function() {
                var a = JSON.parse(t.responseText);
                console.log(a);
                document.getElementById("colriv-temp").innerHTML = a.main.temp + "&deg F";
                var b = "https://openweathermap.org/img/w/" + a.weather[0].icon + ".png";
                a = a.weather[0].description;
                document.getElementById("colriv-img").setAttribute("src", b);
                document.getElementById("colriv-img").setAttribute("alt", a)
            }
        } else if ("Seattle Washington Temple" == a) {
            var u = new XMLHttpRequest;
            u.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=98007&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725",
                !0);
            u.send();
            u.onload = function() {
                var a = JSON.parse(u.responseText);
                console.log(a);
                document.getElementById("sea-temp").innerHTML = a.main.temp + "&deg F";
                var b = "https://openweathermap.org/img/w/" + a.weather[0].icon + ".png";
                a = a.weather[0].description;
                document.getElementById("sea-img").setAttribute("src", b);
                document.getElementById("sea-img").setAttribute("alt", a)
            }
        } else {
            var v = new XMLHttpRequest;
            v.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=83402&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725",
                !0);
            v.send();
            v.onload = function() {
                var a = JSON.parse(v.responseText);
                console.log(a);
                document.getElementById("if-temp").innerHTML = a.main.temp + "&deg F";
                var b = "https://openweathermap.org/img/w/" + a.weather[0].icon + ".png";
                a = a.weather[0].description;
                document.getElementById("if-img").setAttribute("src", b);
                document.getElementById("if-img").setAttribute("alt", a)
            }
        }
        E.textContent = b[c].telephone;
        F.textContent = b[c].email;
        G.textContent = "Services";
        q = document.createElement("ul");
        var w = b[c].services;
        for (a = 0; a < w.length; a++) newLI =
            document.createElement("li"), newLI.textContent = b[c].services[a], q.appendChild(newLI);
        H.textContent = "History";
        w = document.createElement("ul");
        var x = b[c].history;
        for (a = 0; a < x.length; a++) newLI = document.createElement("li"), newLI.textContent = b[c].history[a], w.appendChild(newLI);
        I.textContent = "Schedule";
        J.textContent = b[c].ordinanceSchedule;
        x = document.createElement("ul");
        var y = b[c].sessionSchedule;
        for (a = 0; a < y.length; a++) newLI = document.createElement("li"), newLI.textContent = b[c].sessionSchedule[a], x.appendChild(newLI);
        K.textContent = "Closures";
        y = document.createElement("ul");
        var L = b[c].templeClosure;
        for (a = 0; a < L.length; a++) newLI = document.createElement("li"), newLI.textContent = b[c].templeClosure[a], y.appendChild(newLI);
        d.appendChild(k);
        k.appendChild(C);
        k.appendChild(l);
        l.appendChild(g);
        l.appendChild(h);
        l.appendChild(D);
        d.appendChild(m);
        m.appendChild(e);
        m.appendChild(n);
        n.appendChild(B);
        n.appendChild(E);
        n.appendChild(F);
        p.appendChild(z);
        p.appendChild(A);
        d.appendChild(p);
        z.appendChild(G);
        z.appendChild(q);
        A.appendChild(H);
        A.appendChild(w);
        d.appendChild(I);
        d.appendChild(J);
        d.appendChild(x);
        d.appendChild(K);
        d.appendChild(y);
        templeDiv.appendChild(d)
    }
};