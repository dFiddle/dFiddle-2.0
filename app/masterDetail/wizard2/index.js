define(['durandal/activator', 'knockout', './wizard'], function( activator, ko, Wizard ) {

    var ctor = function() {
        this.activeScreen = ko.observable();
    };

    ctor.prototype.activate = function( wizId ) {

        // Get wizard data based on wizId from the backend
        var json =
            {"id": "wizard001", "mode": "create", "steps": [
                {"id": "s001", "name": "step one", "props": {"prop1": "a", "prop2": "b"}},
                {"id": "s002", "name": "step twoe", "props": {"prop3": "a", "prop4": "b"}},
                {"id": "s003", "name": "step three", "props": {"prop5": "a", "prop6": "b"}},
                {"id": "s004", "name": "step four", "props": {"prop7": "a", "prop8": "b"}},
                {"id": "s005", "name": "step five", "props": {"prop9": "a", "prop10": "b"}}
            ]};

        this.activeScreen(new Wizard(json));
    };

    return ctor;

});