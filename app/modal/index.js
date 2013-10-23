define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
           moduleId: 'modal',
           route: 'modal'
       }).map([
          {
              type: 'intro',
              title: 'Modal Dialog',
              route: ['', 'default'],
              moduleId: 'default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Modal Dialog',
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