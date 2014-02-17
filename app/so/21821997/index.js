/*globals define*/
define(function(require){
    "use strict";

    var app = require('durandal/app'),
        CustomDialog = require('./customModal'),
        Existing = require('./existingView'),
        ctor;

    ctor = function(){
        this.dialog = null;
    };

    ctor.prototype.showCustomModal = function(){
        this.dialog = new CustomDialog('My title', new Existing());

        this.dialog.show().then(function(response){
            app.showMessage('Model title "' + response.title + '".');
        });
    };

    return ctor;

});