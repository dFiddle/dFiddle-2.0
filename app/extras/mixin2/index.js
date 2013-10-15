/*globals define */
define(['module', 'durandal/system', 'jquery', 'knockout', './detail'], function( module, system, $, ko, Detail ) {
    "use strict";

    var details = ko.observableArray();

    function activate ( id ) {
        var path;
        var result = [];

        id = id || 1;
        path = module.uri.split('/');
        path.splice(-1, 1);
        path = path.join('/') + '/fixtures/' + id + '.json';

        system.log('moduleId', module, path);

        $.getJSON(path).then(function( resp ) {
            $.each(resp, function( idx, obj ) {
                result.push(new Detail(obj));
            });
        });

        details(result);
    }

    //Page1.prototype.mixedInObservable('Overwrite value after $.extend() call');

    return {
        details: details,
        activate: activate
    };

});