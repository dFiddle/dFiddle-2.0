/*globals define */
define(['durandal/system', 'jquery', 'knockout'], function( system, $, ko ) {
    "use strict";

    function Control ( value ) {
        var self = this;
        self.param = value;
        self.param1 = ko.observable(value.text);
        self.param2 = ko.computed(function() {
            //translate self.param.StringID with data from another
            //an observableArray containing data retrieved from the server
            // return getString(self.param.StringID()).StringValue();
        });
        self.param3 = ko.computed(function() {
            return self.param2() + 'something_else';
        });
        self.param1.subscribe(function( newValue ) {
            if ( newValue ) {
                self.param3(newValue + 'text');
            }
        });

    }

    var controls = ko.observableArray([
        new Control({id: 1, text: 'value1'}),
        new Control({id: 2, text: 'value2'}),
        new Control({id: 2, text: 'value3'})
    ]);

    var stringsArray = ko.observableArray([]); // data retrieved from the database

    var deactivate = function() {
        controls.removeAll();
        stringsArray.removeAll();
    };

    var vm = {
        deactivate: deactivate,
        controls: controls,
        stringsArray: stringsArray
    };
    return vm;

    function getString ( stringID ) {
        for ( var i = 0; i < stringsArray().length; i++ ) {
            if ( stringsArray()[i].StringID === stringID ) {
                return stringsArray()[i];
            }
        }
        return undefined;
    }

});