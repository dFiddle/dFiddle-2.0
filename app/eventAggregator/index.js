define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
           moduleId: 'eventAggregator',
           route: 'event-aggregator'
       }).map([
          {
              type: 'intro',
              title: 'PubSub',
              route: ['', 'default'],
              moduleId: 'default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'PubSub',
              route: 'dFiddle',
              moduleId: 'dFiddle/index',
              nav: true
          }
      ])
      .buildNavigationModel();

      childRouter.on('router:navigation:complete').then(global.createSampleLink);


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