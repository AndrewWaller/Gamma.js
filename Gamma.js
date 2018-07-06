(function(global, $) {

    var Gamma = function(firstName, lastName, language) {
        return new Gamma.init(firstName, lastName, language);
    }

    // Every Unicode Supported Language
    let supportedLangs = ['ab', 'aa', 'af', 'ak', 'sq', 'am', 'ar', 'an', 'hy', 'as', 'av', 'ae', 'ay', 'az', 'bm', 'ba', 'eu', 'be', 'bn', 'bh', 'bi', 'bs', 'br', 'bg', 'my', 'ca', 'ch', 'ce', 'ny', 'zh', 'zh-Hans', 'zh-Hant', 'cv', 'kw', 'co', 'cr', 'hr', 'cs', 'da', 'dv', 'nl', 'dz', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'fr', 'ff', 'gl', 'gd', 'gv', 'ka', 'de', 'el', 'kl', 'gn', 'gu', 'ht', 'ha', 'he', 'hz', 'hi', 'ho', 'hu', 'is', 'io', 'ig', 'id', 'in', 'ia', 'ie', 'iu', 'ik', 'ga', 'it', 'ja', 'jv', 'kl', 'kn', 'kr', 'ks', 'kk', 'km', 'ki', 'rw', 'rn', 'ky', 'kv', 'kg', 'ko', 'ku', 'kj', 'lo', 'la', 'lv', 'li', 'ln', 'lt', 'lu', 'lg', 'lb', 'gv', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mh', 'mo', 'mn', 'na', 'nv', 'ng', 'nd', 'ne', 'no', 'nb', 'nn', 'ii', 'oc', 'oj', 'cu', 'or', 'om', 'os', 'pi', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'rm', 'ro', 'ru', 'se', 'sm', 'sg', 'sa', 'sr', 'sh', 'st', 'tn', 'sn', 'ii', 'sd', 'si', 'ss', 'sk', 'sl', 'so', 'nr', 'es', 'su', 'sw', 'ss', 'sv', 'tl', 'ty', 'tg', 'ta', 'tt', 'te', 'th', 'bo', 'ti', 'to', 'ts', 'tr', 'tk', 'tw', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'cy', 'wo', 'fy', 'xh', 'ji', 'yo', 'za', 'zu'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Gamma.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg= this.greeting();
            };
            if (console) {
                console.log(msg);
            }
            //makes this method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
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
        },

        sheet: function() {
            // Create the <style> tag
            var style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            return style.sheet;
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

        // Allows enter button on keyboard to submit new task
        enterKey(){
            // To make this work you need to add the input class to your input
            // And add the button class to your button 
            document.querySelector(".input").addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode == 13) {
                    document.querySelector(".button").click();
                }
            });
        }
    };

    Gamma.init = function(firstName, lastName, language, age, gender, weight) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
        self.age = age || "";
        self.gender = gender || "";
        self.weight = weight || "";
    }

    Gamma.init.prototype = Gamma.prototype;

    global.Gamma = global.Rx = global.rx = Gamma;

}(window, $));