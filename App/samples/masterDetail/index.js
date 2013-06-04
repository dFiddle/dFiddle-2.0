define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();
    childRouter.map([
          {
              type: 'intro',
              title: 'Master Detail',
              route: 'master-detail',
              moduleId: 'samples/masterDetail/default/index'
          },
          {
              type: 'intro',
              title: 'Master Detail',
              route: 'master-detail/default',
              moduleId: 'samples/masterDetail/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Master Detail',
              route: 'master-detail/dFiddle',
              moduleId: 'samples/masterDetail/dFiddle/index',
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