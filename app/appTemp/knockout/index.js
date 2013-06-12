define(['plugins/router', 'global'], function( router, global ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
          moduleId: 'knockout',
          route: 'knockout-samples'
      }).map([
          {
              type: 'intro',
              route: '',
              moduleId: 'helloWorld/index',
              title: 'Hello World'
          },
          {
              type: 'intro',
              route: 'helloWorld',
              moduleId: 'helloWorld/index',
              title: 'Hello World',
              nav: true
          },
          {
              type: 'intro',
              route: 'clickCounter',
              moduleId: 'clickCounter/index',
              title: 'Click Counter',
              nav: true
          },
          {
              type: 'intro',
              route: 'simpleList',
              moduleId: 'simpleList/index',
              title: 'Simple List',
              nav: true
          },
          {
              type: 'intro',
              route: 'betterList',
              moduleId: 'betterList/index',
              title: 'Better List',
              nav: true
          },
          {
              type: 'intro',
              route: 'controlTypes',
              moduleId: 'controlTypes/index',
              title: 'Control Types',
              nav: true
          },
          {
              type: 'intro',
              route: 'collections',
              moduleId: 'collections/index',
              title: 'Collection',
              nav: true
          },
          {
              type: 'intro',
              route: 'pagedGrid',
              moduleId: 'pagedGrid/index',
              title: 'Paged Grid',
              nav: true
          },
          {
              type: 'intro',
              route: 'animatedTrans',
              moduleId: 'animatedTrans/index',
              title: 'Animated Transition',
              nav: true
          },
          {
              type: 'detailed',
              route: 'contactsEditor',
              moduleId: 'contactsEditor/index',
              title: 'Contacts Editor',
              nav: true
          },
          {
              type: 'detailed',
              route: 'gridEditor',
              moduleId: 'gridEditor/index',
              title: 'Grid Editor',
              nav: true
          },
          {
              type: 'detailed',
              route: 'shoppingCart',
              moduleId: 'shoppingCart/index',
              title: 'Shopping Cart',
              nav: true
          },
          {
              type: 'detailed',
              route: 'twitterClient',
              moduleId: 'twitterClient/index',
              title: 'Twitter Client',
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