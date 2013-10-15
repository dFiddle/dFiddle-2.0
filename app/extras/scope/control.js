/*globals define */
define(['knockout'], function(  ko ) {
    "use strict";

    function Control ( value ) {
        this.param = value;
        this.param1 = ko.observable(value.text);
        this.param2 = ko.computed(function() {
            //translate self.param.StringID with data from another
            //an observableArray containing data retrieved from the server
            //return getString(this.param.StringID()).StringValue();
            return 'Computed' + this.param.id;
        // ko.computed takes a context parameter
        }, this);
        this.param3 = ko.computed(function() {
            return this.param2() + 'something_else';
        }, this);
        this.param1.subscribe(function( newValue ) {
            if ( newValue ) {
                this.param3(newValue + 'text');
            }
        });
    }

    var stringsArray = ko.observableArray([]); // data retrieved from the database

    return Control;

    function getString ( stringID ) {
        for ( var i = 0; i < stringsArray().length; i++ ) {
            if ( stringsArray()[i].StringID === stringID ) {
                return stringsArray()[i];
            }
        }
        return undefined;
    }

});