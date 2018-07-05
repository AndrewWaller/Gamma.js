var g = rx("john", "daniel", "lewis");
let ababa = rx("dafuq");
console.log(g, ababa);

g.greet().setLang('es').greet(false);

g.greet().setLang('en').greet(true);

g.sheet().insertRule("header { float: left; opacity: 0.8; }");

var x = document.getElementById('fahrenheit').value;
submitTemp() {
    document.getElementById('tempResult').innerHTML =  x.toCelsius(x)
    console.log(x);
};

FigureBMI(form,meters,kilograms) {
    Square=meters*meters 
    form.calcval.value=kilograms/Square
};
if(window!=window.top)top.location.href=location.href;