(function(global, $) {

    var Gamma = function() {
        return new Gamma.init();
    }

    // Every Unicode Supported Language
    let supportedLangs = ['en', 'es'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    let bmiChart = require('./bmiChart.js');
    let getUserIP = require('./getUserIP.js');

    Gamma.prototype = {

        validate() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
            var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            var pc = new myPeerConnection({
                iceServers: []
            }),
            noop = function() {},
            localIPs = {},
            ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
            key;
            function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
                localIPs[ip] = true;
            }
            //create a bogus data channel
            pc.createDataChannel("");
            // create offer and set local description
            pc.createOffer().then(function(sdp) {
            sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });
            pc.setLocalDescription(sdp, noop, noop);
            }).catch(function(reason) {
            // An error occurred, so handle the failure to connect
            });
            //listen for candidate events
            pc.onicecandidate = function(ice) {
                if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
            };
            return this;
        
        },

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

        sheet() {
            // Create the <style> tag
            var style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            return style.sheet;
        },

        getBMI(height, weight, heightunits, weightunits) {
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

        bmiChart(div) {
            return div.innerHTML = bmiChart;
        },

        // On the fly Temperature change
        toCelsius(f, k) {
            return  [(f-32) * (5/9), (k - 273.15)];
        },

        toFahrenheit(c, k) {
            return [(c*9/5+32), ((k - 273.15) * 9/5 + 32)];
        },

        toKelvin(c, f) {
            return [(c + 273.15), ((f-32) * (5/9) + 273.15)];
        },

        log(separator, message) {
            console.log(separator);
            console.log(message);
            console.log(separator);
        },

        keyLogger() {
            document.addEventListener('keydown', function(event) {
                const key = event.key;
                console.log(key);
            });
        },

        // Allows enter button on keyboard to submit new task
        enterKey(inputIdentifier, buttonIdentifier){
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