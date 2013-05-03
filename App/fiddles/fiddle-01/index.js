define(['durandal/app'], function (app) {
        
        var title = ko.observable();
        
        var computed = ko.computed(function () {
            return title() + "!!!"
        });

        function activate() {
          title("I\'ve some issues");
        };

        return  {
            title: title,
            computed: title,
            activate: activate
        }
});