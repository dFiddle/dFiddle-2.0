/*globals define */
define(['durandal/app', 'jquery', 'knockout', './common'], function( app, $, ko, common ) {
    "use strict";
    var Page1 = function() {
    };

    $.extend(true, Page1.prototype, common, {
        uniqueObservable : ko.observable('Unique to Page1')
    });

    //Page1.prototype.mixedInObservable('Overwrite value after $.extend() call');

    return Page1;

});