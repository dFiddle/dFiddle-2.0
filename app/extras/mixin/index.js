/*globals define */
define(['durandal/app', 'jquery', 'knockout', './common'], function( app, $, ko, common ) {
    "use strict";
    var Page = function() {
       this.uniqueObservable = ko.observable('uniqueObservable: Page property. Click me... ');
    };

    // Everything that 'lives' on prototype is shared between all instances
    $.extend(true, Page.prototype, common, {
        sharedObservable : ko.observable('sharedObservable: mixed in after common. Click me...')
    });

    return Page;
});