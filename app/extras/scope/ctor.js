/*globals define */
define(['durandal/system', 'jquery', 'knockout', './control'], function( system, $, ko, Control ) {
    "use strict";

    var vm = function() {
        this.controls = ko.observableArray([
            new Control('value1'),
            new Control('value2'),
            new Control('value2')
        ]);
    };

    vm.prototype.deactivate = function() {
        this.controls.removeAll();
    };

    return vm;


});