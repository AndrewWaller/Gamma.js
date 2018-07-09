var g = rx("john", "daniel", "lewis");

g.greet().setLang('es').greet(false);

g.greet().setLang('en').greet(true);

g.sheet().insertRule("header { float: left; opacity: 0.8; }");

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

rx().log();

rx().simpleCalculator();

var ura = rx().getAbsoluteUrl('https://davidwalsh.name/');
 console.log(ura);



// Going into gamma.js!!!



