define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();
    childRouter.map([
          {
              type: 'intro',
              title: 'Widget Sample',
              route: 'widgets',
              moduleId: 'samples/widgets/default/index'
          },
          {
              type: 'intro',
              title: 'Widget Sample',
              route: 'widgets/default',
              moduleId: 'samples/widgets/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Widget Sample',
              route: 'widgets/dFiddle',
              moduleId: 'samples/widgets/dFiddle/index',
              nav: true
          }
      ])
      .buildNavigationModel()
      .on('router:navigation:complete').then(global.createSampleLink);


    return {
        global: global,
        router: childRouter,
        getItemsByCategoryId: function( categoryId ) {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function( route ) {
                return route.type === categoryId;
            });
        }
    };
});

define(['durandal/activator', 'samples/global'],
    function (activator, global) {

        return {
            activeSample: activator.create(),
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