define(['plugins/router', 'knockout', './navItem'], function( router, ko, NavItem ) {

    var ctor = function(){
        this.childRouter = router;
        this.param = ko.observable('');

        this.navigation = ko.observableArray([
           new NavItem({title: 'Title 1', param: 'param1'}),
           new NavItem({title: 'Title 2', param: 'param2'}),
           new NavItem({title: 'Title 3', param: 'param3'}),
           new NavItem({title: 'Title 4', param: 'param4'})
        ]);
    };

    ctor.prototype.activate = function(param){
        this.param('Param: ' + (param || 'nothing selected!'));
    };

    return ctor;

});