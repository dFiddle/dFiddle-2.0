define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();

    childRouter.map([
          {
              type: 'intro',
              route: 'hello',
              moduleId: 'samples/hello/default/index',
              title: 'Hello World'
          },
          {
              type: 'intro',
              title: 'Hello World',
              route: 'hello/default',
              moduleId: 'samples/hello/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Hello World',
              route: 'hello/dFiddle',
              moduleId: 'samples/hello/dFiddle/index',
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