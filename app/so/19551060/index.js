/*globals define*/
define(['./backend', 'knockout'], function(backend, ko){
    "use strict";
    return {
        customers:ko.observableArray([]),
        activate:function(){
            var that = this;
            var service = new backend('username', 'password');

            return service.getCustomers().then(function(results){
                that.customers(results);
            });
        }
    };
});