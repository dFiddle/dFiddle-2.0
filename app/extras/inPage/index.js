define(['plugins/router', 'knockout'], function( router, ko ) {

    var ctor = function() {
        this.pageNo = ko.observable();
        this.pageData = ko.observable();
    };

    ctor.prototype.activate = function( page ) {
        this.init(page);
    };

    ctor.prototype.init = function( page ) {
        this.pageNo(page || 1);
        this.pageData('Data for ' + this.pageNo());
    };

    ctor.prototype.gotoPage = function( page ) {
        var url = "extras/welcome/" + page;
        this.init(page);
        router.navigate(url, { replace: false, trigger: false });
    };

    return ctor;
});