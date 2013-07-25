define(['durandal/composition', 'jquery'], function(composition, $) {

    var ctor = function() { };

    ctor.prototype.activate = function(settings) {
        this.settings = settings;
    };

    ctor.prototype.detached = function() {
        console.log('bootstrap/widget/viewmodel: detached', arguments, this);
    };

    ctor.prototype.toggle = function(model, event){
        this.deactivateAll();
        model.isActive(true);

    };

    ctor.prototype.deactivateAll = function(){

        $.each(this.settings.items(), function(idx, tab){
            tab.isActive(false);
        });
    };



    return ctor;
});