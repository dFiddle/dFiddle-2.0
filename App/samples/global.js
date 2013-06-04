define(['durandal/system'],
    function (system) {
        var dFiddleRepoSource =  'https://github.com/dFiddle/dFiddle-2.0/tree/gh-pages/App/';
        var categories = ko.observableArray([
            {id: 'intro', text: 'Basic Examples'},
            {id: 'detail', text: 'Detailed Examples'},
            {id: 'fiddle', text: 'Fiddles'}
        ]);

        var isDFiddle = ko.observable(false);
        var dFiddleRepoUrl = ko.observable('');

        return {
            isDFiddle: isDFiddle,
            dFiddleRepoUrl: dFiddleRepoUrl,
            createSampleLink: createSampleLink,
            notAvailable: 'Coming soon',
            categories: categories
        };

        function createSampleLink( instance, instruction, router ) {
                if ( instruction && instruction.config && instruction.config.type ) {
                    isDFiddle(instruction.config.type === 'fiddle');
                }
                dFiddleRepoUrl(dFiddleRepoSource + instance.__moduleId__ + '.js');

            }

        function activateIndex(args, ctx) {
            var self = this;
            var moduleID = system.getModuleId(ctx);
            var partialModuleID = moduleID.substring(0, moduleID.lastIndexOf('/') + 1);

            if (!args.name) {
                // By convention
                args.name = 'default';
            }

            ctx.isDFiddle(args.name === 'dFiddle');

            return system.acquire(partialModuleID + args.name + '/index').then(function (sample) {
                if ( !ctx.isDFiddle()) {
                  ctx.isDFiddle(sample.showCodeUrl);
                }
                ctx.dFiddleRepoUrl(self.dFiddleRepoUrl + sample.__moduleId__ + '.js');
                ctx.activeSample(sample);
            });
        }
    });
