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
                        name: 'Modal Dialogs',
                        hash: '#/modal/default',
                        moduleId: 'samples/modal/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'Modal Dialog',
                        hash: '#/modal/dFiddle',
                        moduleId: 'samples/modal/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var that = this;
                return global.activateIndex(args, that);
            }
        };
    });