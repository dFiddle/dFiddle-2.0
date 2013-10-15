/*globals define */
define(['durandal/app', 'jquery', 'knockout', './common'], function( app, $, ko, common ) {
    "use strict";
    var Detail = function( options ) {
        options = options || {};
        this.init(options);
    };

    Detail.prototype.init = function( options ) {
        var self = this;
        // Step one extend common properties
        $.extend(true, Detail.prototype, common, {
            uniqueObservable: ko.observable('Unique to Page1')
        });

        // Step two: add properties
        $.each(options, function( prop, val ) {
            if ( self[prop] ) {
                if ( ko.isObservable(self[prop]) ) {
                    self[prop](val);
                    return;
                }
                self[prop] = val;
                return;
            }
            self[prop] = ko.observable(val);
        });
    };

    return Detail;

});