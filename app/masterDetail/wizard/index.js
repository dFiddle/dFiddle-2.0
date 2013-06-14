define(['durandal/activator', './step1', './step2', './step3', 'knockout'], function( activator, Step1, Step2, Step3, ko ) {

    var steps = [new Step1(), new Step2(), new Step3()];
    var step = ko.observable(0);
    var activeStep = activator.create();
    var stepsLength = steps.length;

    var hasPrevious = ko.computed(function() {
        return step() > 0;
    });

    var hasNext = ko.computed(function() {
        return (step() < stepsLength - 1);
    });

    // Start with first step
    activeStep(steps[step()]);

    return {
        showCodeUrl: true,
        steps: steps,
        step: step,
        activeStep: activeStep,
        next: next,
        previous: previous,
        hasPrevious: hasPrevious,
        hasNext: hasNext
    };

    function next () {
        if ( step() < stepsLength ) {
            step(step() + 1);
            activeStep(steps[step()]);
        }
    }

    function previous () {
        if ( step() > 0 ) {
            step(step() - 1);
            activeStep(steps[step()]);
        }
    }

});