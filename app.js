var g = rx("john", "daniel", "lewis");
let ababa = rx("dafuq");
console.log(g, ababa);

g.greet().setLang('es').greet(false);

g.greet().setLang('en').greet(true);

g.sheet().insertRule("header { float: left; opacity: 0.8; }");



function submitTemp() {
    console.log('lol');

    var x = document.getElementById('fahrenheit').value;
    
    document.getElementById('tempResult').innerHTML =  g.toCelsius(x);
    console.log(x);
};

function FigureBMI(form,meters,kilograms) {
    Square=meters*meters 
    form.calcval.value=kilograms/Square
};
if(window!=window.top)top.location.href=location.href;