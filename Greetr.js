(function (global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);    
    }

    var supportedLangs = ['en', 'fr'];

    var greetings = {
        en: 'Hello',
        fr: 'Salut'
    };

    var formalGreetings = {
        en: 'Greetings',
        fr: 'Bonjour'
    };

    var logMessages = {
        en:'Logged in',
        fr: 'connecté'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] +  ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;

            formal ? msg = this.formalGreeting() : msg = this.greeting();
            console ? console.log(msg) : null;

            return this;    // make this method chainable
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

    Greetr.init = function(firstName, lastName, language) {

        this.firstName = firstName || "";
        this.lastName = lastName || "";
        this.language = language || "en";

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;


}(window, jQuery));