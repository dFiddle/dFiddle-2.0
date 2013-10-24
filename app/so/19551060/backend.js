/*globals define*/
define(['./someothermodule', 'durandal/app', 'jquery'], function( someothermodule, app, $ ) {
    "use strict";
    var backend = function( username, password ) {
        this.username = username;
        this.password = password;
        this.whatever = someothermodule.whatever();
        app.trigger('whatever', this.whatever);
    };

    backend.prototype.getCustomers = function() {
        //do some ajax and return a promise
        return $.getJSON('app/so/19551060/fixtures/customer.json');
    };
    return backend;
});