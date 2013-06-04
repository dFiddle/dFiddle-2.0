define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();
    childRouter.map([
          {
              type: 'intro',
              title: 'Modal',
              route: 'modal',
              moduleId: 'samples/modal/default/index'
          },
          {
              type: 'intro',
              title: 'Modal Dialog',
              route: 'modal/default',
              moduleId: 'samples/modal/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Modal Dialog',
              route: 'modal/dFiddle',
              moduleId: 'samples/modal/dFiddle/index',
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