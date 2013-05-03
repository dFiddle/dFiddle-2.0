define(['durandal/app'], function (app) {

    var title = ko.observable();

    var computed = ko.computed(function () {
        return title + "!!!"
    });

    function activate() {
        title("That\'s get boring.... Your turn ");
    };

    return {
        title: title,
        computed: title,
        activate: activate
    }
});