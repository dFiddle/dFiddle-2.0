define(['durandal/activator', 'knockout', './wizard'], function( activator, ko, Wizard ) {

    var ctor = function() {
        this.activeScreen = ko.observable();
    };

    ctor.prototype.activate = function( wizId ) {

        // Get wizard data based on wizId from the backend
        var json =
            {"id": "wizard001", "mode": "create", "steps": [
                {"id": "s001", "name": "step one", "props": {"prop1": "one", "prop2": "Donald"}},
                {"id": "s002", "name": "step twoe", "props": {"prop3": "two", "prop4": "Daisy"}},
                {"id": "s003", "name": "step three", "props": {"prop5": "three", "prop6": "Daphne"}},
                {"id": "s004", "name": "step four", "props": {"prop7": "four", "prop8": "Dagobert"}},
                {"id": "s005", "name": "step five", "props": {"prop9": "five", "prop10": "Della"}}
            ]};

        this.activeScreen(new Wizard(json));
    };

    return ctor;

});