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
                        name: 'Master Detail',
                        hash: '#/master-detail/default',
                        moduleId: 'samples/masterDetail/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'Master Detail',
                        hash: '#/master-detail/dFiddle',
                        moduleId: 'samples/masterDetail/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var that = this;
                return global.activateIndex(args, that);
            }
        };
    });