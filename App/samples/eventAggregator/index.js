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
                        name: 'PubSub',
                        hash: '#/event-aggregator/default',
                        moduleId: 'samples/eventAggregator/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'PubSub',
                        hash: '#/event-aggregator/dFiddle',
                        moduleId: 'samples/eventAggregator/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var self = this;
                return global.activateIndex(args, self);
            }
        };
    });