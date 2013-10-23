define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
           moduleId: 'viewComposition',
           route: 'view-composition'
       }).map([
          {
              type: 'intro',
              title: 'View composition',
              route: ['', 'default'],
              moduleId: 'default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'ViewUrl',
              route: 'SO16483013',
              moduleId: 'SO16483013/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'GetView()',
              route: 'getView',
              moduleId: 'getView/index',
              nav: true
          },
          {

              type: 'fiddle',
              title: 'View composition',
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
