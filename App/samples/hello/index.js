define(['durandal/viewModel', 'samples/global'],
    function (viewModel, global) {

        return {
            activeSample: viewModel.activator(),
            isDFiddle: ko.observable(false),
            dFiddleRepoUrl: ko.observable(''),
            notAvailable: global.notAvailable,
            sampleGroups: [
                {
                    name: 'Basic examples',
                    samples: [{
                        name: 'Hello World',
                        hash: '#/hello/default',
                        moduleId: 'samples/hello/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'Hello World',
                        hash: '#/hello/dFiddle',
                        moduleId: 'samples/hello/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var self = this;
                var testThis = global.activateIndex(args, self);
                return testThis;
            }
        };
    });