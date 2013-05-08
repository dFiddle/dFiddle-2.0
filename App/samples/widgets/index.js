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
                        name: 'View composition',
                        hash: '#/widgets/default',
                        moduleId: 'samples/widgets/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'View composition',
                        hash: '#/widgets/dFiddle',
                        moduleId: 'samples/widgets/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var that = this;
                return global.activateIndex(args, that);
            }
        };
    });