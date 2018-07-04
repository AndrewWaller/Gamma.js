(function(global, $) {

    var Gamma = function(firstName, lastName, language) {
        return new Gamma.init(firstName, lastName, language);
    }

    let supportedLangs = ['en', 'es'];

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
        }

    };

    Gamma.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    }

    Gamma.init.prototype = Gamma.prototype;

    global.Gamma = global.Rx = global.rx = global.shiz = Gamma;

}(window, $));