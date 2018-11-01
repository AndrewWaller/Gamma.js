import '../css/gamma.css'
import {logoCircle, logoRoundedSquare, logoSquare} from './styles'
import {bmiChart} from './bmiChart'
//import {getUserIP} from './getUserIP'
(function(global, $) {
    var Gamma = function() {
        return new Gamma.init();
    }
    Gamma.prototype = {

        validate() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // getUserIP() {
        //     return getUserIP();
        // },

        setLang(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        getAbsoluteUrl: function() {
            var a;
            return function(url) {
                if(!a) a = document.createElement('a');
                a.href = url;
                return a.href;
            };
        }(),

        sheet: function() {
            // Create the <style> tag
            var style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            return style.sheet;
        },

        getBMI: function(height, weight, heightunits, weightunits) {
            //Convert all units to metric
            if (heightunits == "inches") height /= 39.3700787;
            if (weightunits == "lb") weight /= 2.20462;
            //Perform calculation
            var BMI = weight/Math.pow(height,2);
            var BMI = Math.round(BMI * 100) / 100
            //Display result of calculation
            if (BMI < 18.5)
                return BMI +"<br>"+ "Underweight";
            else if (BMI >= 18.5 && BMI <= 25)
                return BMI +"<br>"+ "Normal";
            else if (BMI >= 25 && BMI <= 30)
                return BMI +"<br>"+  "Obese";
            else if (BMI > 30)
                return BMI +"<br>"+ "Overweight";
        },

        bmiChart: function(div) {
            return div.innerHTML = bmiChart;
        },

        logoCircle() {
            return logoCircle();
        },

        logoRoundedSquare() {
            return logoRoundedSquare();
        },

        logoSquare() {
            return logoSquare();
        },

        // On the fly Temperature change
        toCelsius: function(f, k) {
            return  [(f-32) * (5/9), (k - 273.15)];
        },

        toFahrenheit: function(c, k) {
            return [(c*9/5+32), ((k - 273.15) * 9/5 + 32)];
        },

        toKelvin: function(c, f) {
            return [(c + 273.15), ((f-32) * (5/9) + 273.15)];
        },

        log: function(separator, message) {
            console.log(separator);
            console.log(message);
            console.log(separator);
        },

        keyLogger: function() {
            document.addEventListener('keydown', function(event) {
                const key = event.key;
                console.log(key);
            });
        },

        // Allows enter button on keyboard to submit new task
        enterKey: function(inputIdentifier, buttonIdentifier){
            // To make this work you need to add the input class to your input
            // And add the button class to your button 
            document.querySelector(inputIdentifier).addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode == 13) {
                    document.querySelector(buttonIdentifier).click();
                }
            });
        }
        
    };

    Gamma.init = function() {}

    Gamma.init.prototype = Gamma.prototype;

    global.Gamma = global.Rx = global.rx = Gamma;

}(window, $));