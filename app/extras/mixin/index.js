/*globals define */
define(['durandal/app', 'jquery', 'knockout', './common'], function( app, $, ko, common ) {
    "use strict";
    var Page1 = function() {
    };

    $.extend(true, Page1.prototype, common, {
        uniqueObservable : ko.observable('Unique to Page1')
    });


    return Page1;

});