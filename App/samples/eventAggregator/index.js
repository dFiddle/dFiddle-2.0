define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();
    childRouter.map([
          {
              type: 'intro',
              title: 'PubSub',
              route: 'event-aggregator',
              moduleId: 'samples/eventAggregator/default/index'
          },
          {
              type: 'intro',
              title: 'PubSub',
              route: 'event-aggregator/default',
              moduleId: 'samples/eventAggregator/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'PubSub',
              route: 'event-aggregator/dFiddle',
              moduleId: 'samples/eventAggregator/dFiddle/index',
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