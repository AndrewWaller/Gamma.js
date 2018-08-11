

rx().enterKey("#fahrenheit", "#button")

var lol = document.getElementById('bmichert');
rx().bmiChart(lol);

function submitTemp() {
    var x = document.getElementById('fahrenheit').value;
    var y = 50;
    document.getElementById('tempResult').innerHTML =  rx().toFahrenheit(y, x);
};

function submitBmi() {
    document.getElementById('bmiResult').innerHTML = rx().getBMI(1.8, 75);
};

rx().log("logged", "*");

let temp = rx().toCelsius(50);
rx().log(temp, '*')





var ura = rx().getAbsoluteUrl('https://davidwalsh.name/');
 console.log(ura);


 if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    if (document.cookie.indexOf("iphone_redirect=false") == -1) {
        window.location = "http://m.espn.go.com/wireless/?iphone&i=COMR";
    }
}

//rx().getUserIP();
rx().getUserIP(function(ip){
     //alert("Got IP! :" + ip);
     var lol = document.getElementById('puip');
     console.log(ip);
 });


 // Going into gamma.js!!!

rx().keyLogger();
