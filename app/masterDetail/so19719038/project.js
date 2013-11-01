define(['durandal/system', 'durandal/app'], function(system, app) {
    
    var ctor = function(name, description) {
        this.runInit = true;
        this.name = name;
        this.description = description;
    };
    
    ctor.prototype.canActivate = function () {
        return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    ctor.prototype.activate = function() {
        if (this.runInit){
            this.runInit = false;
            system.log('Model Activating', this);
        }
    };

    ctor.prototype.canDeactivate = function () {
        return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    ctor.prototype.deactivate = function () {
        system.log('Model Deactivating', this);
    };

    return ctor;
});