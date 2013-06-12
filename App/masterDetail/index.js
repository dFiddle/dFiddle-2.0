define(['plugins/router', 'global'], function( router, global ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
           moduleId: 'masterdetail',
           route: 'master-detail'
       }).map([
          {
              type: 'intro',
              title: 'Master Detail',
              route: '',
              moduleId: 'default/index'
          },
          {
              type: 'intro',
              title: 'Master Detail',
              route: 'default',
              moduleId: 'default/index',
              nav: true
          },
          {
              type: 'fiddle',
              title: 'Master Detail',
              route: 'dFiddle',
              moduleId: 'dFiddle/index',
              nav: true
          },
          {
               type: 'fiddle',
               title: 'Wizard',
               route: 'wizard',
               moduleId: 'wizard/index',
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