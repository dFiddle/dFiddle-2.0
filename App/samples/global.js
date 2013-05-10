define(['durandal/system'],
    function (system) {

        return {
            dFiddleRepoUrl: 'https://github.com/SpiritAG/dFiddle-1.2-Q-and-A/blob/gh-pages/App/',
            activateIndex: activateIndex,
            notAvailable: 'Coming soon'
        };

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