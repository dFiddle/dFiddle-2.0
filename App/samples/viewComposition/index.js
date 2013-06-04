define(['durandal/plugins/router', 'samples/global'], function( router, global ) {
    var childRouter = router.createChildRouter();
    childRouter.map([
          {
              type: 'intro',
              title: 'View composition',
              route: 'view-composition',
              moduleId: 'samples/viewComposition/default/index'
          },
          {
              type: 'intro',
              title: 'View composition',
              route: 'view-composition/default',
              moduleId: 'samples/viewComposition/default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'ViewUrl',
              route: 'view-composition/SO16483013',
              moduleId: 'samples/viewComposition/SO16483013/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'GetView()',
              route: 'view-composition/getView',
              moduleId: 'samples/viewComposition/getView/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Wizard',
              route: 'view-composition/wizard',
              moduleId: 'samples/viewComposition/wizard/index',
              nav: true
          },
          {

              type: 'fiddle',
              title: 'View composition',
              route: 'view-composition/dFiddle',
              moduleId: 'samples/viewComposition/dFiddle/index',
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
