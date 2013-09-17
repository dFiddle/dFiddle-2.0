define(['durandal/activator', './step', 'knockout'], function( activator, Step, ko ) {

    var ctor = function( options ) {
        this._options = options || {};

        this.id = ko.observable('');
        this.mode = ko.observable('');
        this.steps = ko.observableArray([]);
        this.step = ko.observable(0);
        this.activeStep = activator.create();

        this.init(this._options);

        this.stepsLength = ko.computed(function() {
            return this.steps().length;
        }, this);

        this.hasPrevious = ko.computed(function() {
            return this.step() > 0;
        }, this);

        this.hasNext = ko.computed(function() {
            return (this.step() < this.stepsLength() - 1);
        }, this);

    };

    ctor.prototype.next = function() {
        if ( this.step() < this.stepsLength() ) {
            this.step(this.step() + 1);
            this.activateStep();
        }
    };

    ctor.prototype.activateStep = function(){
        this.activeStep(this.steps()[this.step()]);
    };

    ctor.prototype.previous = function() {
        if ( this.step() > 0 ) {
            this.step(this.step() - 1);
            this.activateStep();
        }
    };

    ctor.prototype.init = function( options ) {
        var json = options;

        this.id(json.id);
        this.mode(json.mode);

        this.steps(createSteps(options.steps));

        function createSteps ( steps ) {
            var result = [];
            $.each(steps, function( idx, obj ) {
                result.push(new Step(obj));
            });
            return result;
        }

        this.activateStep();

    };

    return ctor;
});